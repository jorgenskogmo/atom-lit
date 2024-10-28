/**
 * LitElement Property Analyzer v1.0.0
 *
 * This module provides functionality to analyze properties of a LitElement class
 * using TypeScript's Compiler API. It extracts information about property names,
 * types, default values, and options for properties with union types.
 *
 * @module LitElementPropertyAnalyzer
 * @version 1.0.0
 * @author Assistant
 * @date 2023-09-28
 */

import * as ts from "typescript";

/**
 * Represents the information extracted for each property of a LitElement class.
 */
interface PropertyInfo {
	/** The name of the property */
	name: string;
	/** The type of the property, as a string representation */
	type: string;
	/** The default value of the property, if any */
	defaultValue?: string;
	/** For properties with union types of literals, the possible values */
	options?: Array<string | number | boolean>;
}

/**
 * Analyzes the properties of a LitElement class from its source code.
 *
 * @param {string} source - The source code of the LitElement class as a string.
 * @returns {PropertyInfo[]} An array of PropertyInfo objects representing the analyzed properties.
 */
export function listProperties(source: string): PropertyInfo[] {
	const properties: PropertyInfo[] = [];

	// Create a virtual source file from the provided source code
	const sourceFile = ts.createSourceFile(
		"temp.ts",
		source,
		ts.ScriptTarget.Latest,
		true,
	);

	/**
	 * Extracts the type of a TypeScript node as a string.
	 *
	 * @param {ts.TypeNode | undefined} typeNode - The TypeScript node to extract the type from.
	 * @returns {string} A string representation of the type.
	 */
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

	/**
	 * Extracts the default value of a property as a string.
	 *
	 * @param {ts.Expression | undefined} initializer - The initializer expression of the property.
	 * @returns {string | undefined} The default value as a string, or undefined if not present.
	 */
	function getDefaultValue(
		initializer: ts.Expression | undefined,
	): string | undefined {
		return initializer?.getText(sourceFile);
	}

	/**
	 * Extracts the possible options for properties with union types of literals.
	 *
	 * @param {ts.TypeNode | undefined} typeNode - The TypeScript node representing the property type.
	 * @returns {Array<string | number | boolean> | undefined} An array of possible values, or undefined if not applicable.
	 */
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

	/**
	 * Extracts the type information from a @property decorator.
	 *
	 * @param {ts.Decorator} decorator - The decorator to extract type information from.
	 * @returns {string} The extracted type as a string, or 'unknown' if not found.
	 */
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

	/**
	 * Recursively visits each node in the AST to find and analyze LitElement properties.
	 *
	 * @param {ts.Node} node - The current node being visited.
	 */
	function visit(node: ts.Node) {
		// Check if the node is a class declaration named 'MyElement'
		if (
			ts.isClassDeclaration(node) &&
			node.name?.getText(sourceFile) === "MyElement"
		) {
			for (const member of node.members) {
				// Handle properties decorated with @property
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
				}
				// Handle static properties getter
				else if (
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

		// Continue visiting child nodes
		ts.forEachChild(node, visit);
	}

	// Start the AST traversal
	visit(sourceFile);

	return properties;
}

// Example usage
// const source = `
// import { LitElement, property } from 'lit-element';

// class MyElement extends LitElement {
//   @property({ type: String })
//   variant: "normal" | "destructive" | "subtle" = "normal";
//   @property({ type: Number })
//   value: 100 | 200 | 300 = 200;
//   @property({ type: String })
//   foo = 'Hello';
//   @property({ type: Number })
//   bar = 42;
//   @property({ type: Boolean })
//   baz = true;
//   @property({ type: Array })
//   list = [1, 2, 3];
//   @property({ type: Object })
//   obj = { key: 'value' };
//   static get properties() {
//     return {
//       qux: { type: Number }
//     };
//   }
// }
// `;

// const properties = listProperties(source);
// console.log(JSON.stringify(properties, null, 2));
