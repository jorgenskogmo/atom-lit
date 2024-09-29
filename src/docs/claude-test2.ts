import * as ts from "typescript";

interface PropertyInfo {
	name: string;
	type: string;
	defaultValue?: string | number | boolean | object | any[];
	options?: Array<string | number | boolean>;
}

function listProperties(sourceCode: string): PropertyInfo[] {
	const properties: PropertyInfo[] = [];

	// Create a virtual source file
	const sourceFile = ts.createSourceFile(
		"temp.ts",
		sourceCode,
		ts.ScriptTarget.Latest,
		true,
	);

	// Helper function to get the type of a node
	function getType(node: ts.PropertyDeclaration): string {
		if (node.type) {
			return node.type.getText(sourceFile);
		}
		if (node.initializer) {
			// Infer type from initializer if type is not explicitly specified
			switch (node.initializer.kind) {
				case ts.SyntaxKind.StringLiteral:
					return "String";
				case ts.SyntaxKind.NumericLiteral:
					return "Number";
				case ts.SyntaxKind.TrueKeyword:
				case ts.SyntaxKind.FalseKeyword:
					return "Boolean";
				case ts.SyntaxKind.ArrayLiteralExpression:
					return "Array";
				case ts.SyntaxKind.ObjectLiteralExpression:
					return "Object";
			}
		}
		return "unknown";
	}

	// Helper function to get the default value of a node
	function getDefaultValue(
		node: ts.PropertyDeclaration,
	): PropertyInfo["defaultValue"] {
		if (node.initializer) {
			const initializer = node.initializer.getText(sourceFile);
			try {
				return eval(initializer);
			} catch {
				return initializer; // Return as string if can't evaluate
			}
		}
		return undefined;
	}

	// Helper function to get options for union types
	function getOptions(node: ts.PropertyDeclaration): PropertyInfo["options"] {
		if (node.type && ts.isUnionTypeNode(node.type)) {
			return node.type.types
				.map((t) => {
					if (ts.isLiteralTypeNode(t) && t.literal) {
						const literalText = t.literal.getText(sourceFile);
						try {
							return eval(literalText);
						} catch {
							return literalText; // Return as string if can't evaluate
						}
					}
					return undefined;
				})
				.filter((v): v is NonNullable<typeof v> => v !== undefined);
		}
		return undefined;
	}

	// Visit each node in the source file
	function visit(node: ts.Node) {
		if (ts.isClassDeclaration(node)) {
			const extendsLitElement = node.heritageClauses?.some(
				(clause) =>
					clause.token === ts.SyntaxKind.ExtendsKeyword &&
					clause.types.some(
						(t) => t.expression.getText(sourceFile) === "LitElement",
					),
			);

			if (extendsLitElement) {
				for (const member of node.members) {
					if (ts.isPropertyDeclaration(member)) {
						const decorators = ts.getDecorators(member);
						const hasPropertyDecorator = decorators?.some(
							(d) =>
								ts.isCallExpression(d.expression) &&
								d.expression.expression.getText(sourceFile) === "property",
						);

						if (hasPropertyDecorator) {
							const name = member.name.getText(sourceFile);
							const type = getType(member);
							const defaultValue = getDefaultValue(member);
							const options = getOptions(member);

							properties.push({ name, type, defaultValue, options });
						}
					}
				}

				// Handle static properties getter
				const staticProperties = node.members.find(
					(m) =>
						ts.isGetAccessorDeclaration(m) &&
						m.name.getText(sourceFile) === "properties",
				);

				if (
					staticProperties &&
					ts.isGetAccessorDeclaration(staticProperties) &&
					staticProperties.body
				) {
					const returnStatement = staticProperties.body.statements.find(
						ts.isReturnStatement,
					);
					if (
						returnStatement &&
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
const sourceCode = `
class MyElement extends LitElement {
  static variantOptions = ["normal", "destructive", "subtle"] as const;
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

const properties = listProperties(sourceCode);
console.log(JSON.stringify(properties, null, 2));
