import { LitElement, PropertyDeclaration } from "lit";
import { property } from "lit/decorators.js";

type PropertyDeclarationMap = Map<PropertyKey, PropertyDeclaration>;

interface LitElementConstructor {
	new (...args: any[]): LitElement;
	elementProperties?: PropertyDeclarationMap;
	properties?: { [key: string]: PropertyDeclaration };
}

type PropertyInfo = {
	name: string;
	type: string;
	literalType?: {
		default: string;
		options?: string[];
	};
};

function getPropertyType(type: unknown): string {
	if (type === String) return "string";
	if (type === Number) return "number";
	if (type === Boolean) return "boolean";
	if (type === Array) return "array";
	if (type === Object) return "object";
	return "unknown";
}

function getLiteralTypeInfo(
	ElementClass: LitElementConstructor,
	propName: string,
): PropertyInfo["literalType"] | undefined {
	const instance = new ElementClass();
	const defaultValue = (instance as any)[propName];

	if (typeof defaultValue !== "string") {
		return undefined;
	}

	const descriptor = Object.getOwnPropertyDescriptor(
		ElementClass.prototype,
		propName,
	);
	if (!descriptor || typeof descriptor.get !== "function") {
		return { default: defaultValue };
	}

	const getterString = descriptor.get.toString();
	const match = getterString.match(/return ["'](.+?)["'];/);
	if (match && match[1]) {
		const options = match[1]
			.split("|")
			.map((opt) => opt.trim().replace(/['"]/g, ""));
		return { default: defaultValue, options };
	}

	return { default: defaultValue };
}

function listProperties(ElementClass: LitElementConstructor): PropertyInfo[] {
	const propertyInfo: PropertyInfo[] = [];

	if (ElementClass.elementProperties) {
		for (const [key, value] of ElementClass.elementProperties) {
			const propName = key.toString();
			const info: PropertyInfo = {
				name: propName,
				type: getPropertyType(value.type),
			};
			const literalTypeInfo = getLiteralTypeInfo(ElementClass, propName);
			if (literalTypeInfo) {
				info.literalType = literalTypeInfo;
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
			const literalTypeInfo = getLiteralTypeInfo(ElementClass, key);
			if (literalTypeInfo) {
				info.literalType = literalTypeInfo;
			}
			propertyInfo.push(info);
		}
	}

	return propertyInfo;
}

// Example usage
class MyElement extends LitElement {
	@property({ type: String })
	variant: "normal" | "destructive" | "subtle" = "normal";

	@property({ type: String })
	foo = "Hello";

	@property({ type: Number })
	bar = 42;

	@property({ type: Boolean })
	baz = true;

	@property({ type: Array })
	list = [1, 2, 3];

	@property({ type: Object })
	obj = { key: "value" };

	static get properties() {
		return {
			qux: { type: Number },
		};
	}
}

// Usage
const elementProperties = listProperties(MyElement);
console.log(JSON.stringify(elementProperties, null, 2));
