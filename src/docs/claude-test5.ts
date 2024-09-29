import { LitElement } from "lit";

interface PropertyInfo {
	name: string;
	type: string;
	defaultValue?: unknown;
	options?: Array<string | number | boolean>;
}

function listProperties(ElementClass: typeof LitElement): PropertyInfo[] {
	const properties: PropertyInfo[] = [];

	// Helper function to get the type of a property
	function getType(value: unknown): string {
		if (value === undefined || value === null) return "unknown";
		if (Array.isArray(value)) return "Array";
		if (typeof value === "object") return "Object";
		return value.constructor.name;
	}

	// Helper function to get options for union types
	function getOptions(
		value: unknown,
	): Array<string | number | boolean> | undefined {
		if (
			Array.isArray(value) &&
			value.every((v) => ["string", "number", "boolean"].includes(typeof v))
		) {
			return value as Array<string | number | boolean>;
		}
		return undefined;
	}

	// Analyze static properties
	const staticProps = ElementClass.properties;
	if (staticProps) {
		for (const [name, config] of Object.entries(staticProps)) {
			const type =
				typeof config === "object" && "type" in config
					? (config.type as Function).name
					: "unknown";
			properties.push({ name, type });
		}
	}

	// Analyze instance properties
	const prototype = ElementClass.prototype;
	const descriptors = Object.getOwnPropertyDescriptors(prototype);
	for (const [name, descriptor] of Object.entries(descriptors)) {
		if (name === "constructor") continue;

		if (descriptor.get && descriptor.set) {
			// This is likely a property defined with a decorator
			const metadata = Reflect.getMetadata("design:type", prototype, name);
			if (metadata) {
				const type = metadata.name;
				properties.push({ name, type });
			}
		} else if (
			"value" in descriptor &&
			typeof descriptor.value !== "function"
		) {
			// This is a regular property
			const value = descriptor.value;
			const type = getType(value);
			const defaultValue = value;
			const options = getOptions(value);
			properties.push({ name, type, defaultValue, options });
		}
	}

	return properties;
}

// Example usage
class MyElement extends LitElement {
	static properties = {
		variant: { type: String },
		value: { type: Number },
		qux: { type: Number },
	};

	variant: "normal" | "destructive" | "subtle" = "normal";
	value: 100 | 200 | 300 = 200;
	foo = "Hello";
	bar = 42;
	baz = true;
	list = [1, 2, 3];
	obj = { key: "value" };
}

const properties = listProperties(MyElement);
console.log(JSON.stringify(properties, null, 2));
