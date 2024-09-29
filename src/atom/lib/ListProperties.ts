import type { LitElement } from "lit";

type LitElementConstructor = {
	new (): LitElement;
	elementProperties?: Map<PropertyKey, PropertyDeclaration>;
	properties?: { [key: string]: PropertyDeclaration };
};

type PropertyDeclaration = {
	type?: unknown;
	[key: string]: unknown;
};

type PropertyInfo = {
	name: string;
	type: string;
	literalType?: string;
};

function getPropertyType(type: unknown): string {
	if (type === String) return "string";
	if (type === Number) return "number";
	if (type === Boolean) return "boolean";
	if (type === Array) return "array";
	if (type === Object) return "object";
	return "unknown";
}

function getLiteralType(
	ElementClass: LitElementConstructor,
	propName: string,
): string | undefined {
	const descriptor = Object.getOwnPropertyDescriptor(
		ElementClass.prototype,
		propName,
	);
	if (descriptor && typeof descriptor.initializer === "function") {
		const initializerStr = descriptor.initializer.toString();
		const match = initializerStr.match(/['"](\w+)['"]/);
		if (match) {
			return match[1];
		}
	}
	return undefined;
}

export function listProperties(
	ElementClass: LitElementConstructor,
): PropertyInfo[] {
	const propertyInfo: PropertyInfo[] = [];

	if (ElementClass.elementProperties) {
		for (const [key, value] of ElementClass.elementProperties) {
			const propName = key.toString();
			const info: PropertyInfo = {
				name: propName,
				type: getPropertyType(value.type),
			};
			const literalType = getLiteralType(ElementClass, propName);
			if (literalType) {
				info.literalType = literalType;
			}
			propertyInfo.push(info);
		}
	}

	const staticProps = ElementClass.properties || {};
	for (const [key, value] of Object.entries(staticProps)) {
		if (!propertyInfo.some((p) => p.name === key)) {
			const info: PropertyInfo = {
				name: key,
				type: getPropertyType(value.type),
			};
			const literalType = getLiteralType(ElementClass, key);
			if (literalType) {
				info.literalType = literalType;
			}
			propertyInfo.push(info);
		}
	}

	return propertyInfo;
}
