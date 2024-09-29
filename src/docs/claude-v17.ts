import * as ts from "typescript";

interface PropertyInfo {
	name: string;
	type: string;
	defaultValue?: string;
	options?: Array<string | number | boolean>;
}

function listProperties(source: string): PropertyInfo[] {
	const properties: PropertyInfo[] = [];

	// Create a virtual source file
	const sourceFile = ts.createSourceFile(
		"temp.ts",
		source,
		ts.ScriptTarget.Latest,
		true,
	);

	// Helper function to get the type of a node
	function getType(typeNode: ts.TypeNode | undefined): string {
		if (!typeNode) return "unknown";
		if (ts.isUnionTypeNode(typeNode)) {
			return typeNode.types.map((t) => getType(t)).join(" | ");
		}
		if (ts.isLiteralTypeNode(typeNode)) {
			return typeNode.literal.getText(sourceFile);
		}
		return typeNode.getText(sourceFile);
	}

	// Helper function to get the default value of a node
	function getDefaultValue(
		initializer: ts.Expression | undefined,
	): string | undefined {
		return initializer?.getText(sourceFile);
	}

	// Helper function to get options for union types
	function getOptions(
		typeNode: ts.TypeNode | undefined,
	): Array<string | number | boolean> | undefined {
		if (!typeNode || !ts.isUnionTypeNode(typeNode)) return undefined;
		return typeNode.types
			.map((t) => {
				if (ts.isLiteralTypeNode(t) && t.literal) {
					const literal = t.literal;
					if (ts.isStringLiteral(literal)) return literal.text;
					if (ts.isNumericLiteral(literal)) return Number(literal.text);
					if (literal.kind === ts.SyntaxKind.TrueKeyword) return true;
					if (literal.kind === ts.SyntaxKind.FalseKeyword) return false;
				}
				return undefined;
			})
			.filter((v): v is string | number | boolean => v !== undefined);
	}

	// Helper function to extract type from property decorator
	function getTypeFromDecorator(decorator: ts.Decorator): string {
		if (ts.isCallExpression(decorator.expression)) {
			const arg = decorator.expression.arguments[0];
			if (arg && ts.isObjectLiteralExpression(arg)) {
				const typeProperty = arg.properties.find(
					(p) =>
						ts.isPropertyAssignment(p) && p.name.getText(sourceFile) === "type",
				) as ts.PropertyAssignment | undefined;

				if (typeProperty && ts.isIdentifier(typeProperty.initializer)) {
					return typeProperty.initializer.getText(sourceFile);
				}
			}
		}
		return "unknown";
	}

	// Visit each node in the source file
	function visit(node: ts.Node) {
		if (
			ts.isClassDeclaration(node) &&
			node.name?.getText(sourceFile) === "MyElement"
		) {
			for (const member of node.members) {
				if (ts.isPropertyDeclaration(member)) {
					const decorators = ts.getDecorators(member);
					const propertyDecorator = decorators?.find(
						(d) =>
							ts.isCallExpression(d.expression) &&
							d.expression.expression.getText(sourceFile) === "property",
					);

					if (propertyDecorator) {
						const name = member.name.getText(sourceFile);
						let type = getTypeFromDecorator(propertyDecorator);
						if (type === "unknown" && member.type) {
							type = getType(member.type);
						}
						const defaultValue = getDefaultValue(member.initializer);
						const options = getOptions(member.type);

						properties.push({ name, type, defaultValue, options });
					}
				} else if (
					ts.isGetAccessorDeclaration(member) &&
					member.name.getText(sourceFile) === "properties"
				) {
					const returnStatement = member.body?.statements.find(
						ts.isReturnStatement,
					);
					if (
						returnStatement?.expression &&
						ts.isObjectLiteralExpression(returnStatement.expression)
					) {
						for (const prop of returnStatement.expression.properties) {
							if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name)) {
								const name = prop.name.getText(sourceFile);
								let type = "unknown";
								if (ts.isObjectLiteralExpression(prop.initializer)) {
									const typeProperty = prop.initializer.properties.find(
										(p) =>
											ts.isPropertyAssignment(p) &&
											p.name.getText(sourceFile) === "type",
									) as ts.PropertyAssignment | undefined;
									if (
										typeProperty &&
										ts.isIdentifier(typeProperty.initializer)
									) {
										type = typeProperty.initializer.getText(sourceFile);
									}
								}
								properties.push({ name, type });
							}
						}
					}
				}
			}
		}

		ts.forEachChild(node, visit);
	}

	visit(sourceFile);

	return properties;
}

// Example usage
const source = `
import { LitElement, property } from 'lit-element';

class MyElement extends LitElement {
  @property({ type: String })
  variant: "normal" | "destructive" | "subtle" = "normal";
  @property({ type: Number })
  value: 100 | 200 | 300 = 200;
  @property({ type: String })
  foo = 'Hello';
  @property({ type: Number })
  bar = 42;
  @property({ type: Boolean })
  baz = true;
  @property({ type: Array })
  list = [1, 2, 3];
  @property({ type: Object })
  obj = { key: 'value' };
  static get properties() {
    return {
      qux: { type: Number }
    };
  }
}
`;

const properties = listProperties(source);
console.log(JSON.stringify(properties, null, 2));
