# atom-binding

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `value`  | `value`   | `string \| number`                               | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(_event: Event): void`                          |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-breadcrumbs


# atom-button-group

## Properties

| Property   | Attribute  | Type                                             | Default     |
|------------|------------|--------------------------------------------------|-------------|
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `options`  | `options`  | `string`                                         | ""          |
| `selected` | `selected` | `string`                                         | ""          |
| `value`    | `value`    | `string \| number`                               | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(_event: Event): void`                          |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-button

## Properties

| Property  | Attribute | Type                                             | Default     |
|-----------|-----------|--------------------------------------------------|-------------|
| `bind`    | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `label`   | `label`   | `string`                                         | "Button"    |
| `value`   | `value`   | `number`                                         | 0           |
| `variant` | `variant` | `"normal" \| "primary" \| "destructive" \| "constructive" \| "outline" \| "subtle"` | "normal"    |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(event: Event): void`                           |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-code

## Properties

| Property        | Attribute  | Type                                             | Default     |
|-----------------|------------|--------------------------------------------------|-------------|
| `bind`          | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `fragmentIndex` |            | `number`                                         | -1          |
| `selected`      | `selected` | `string`                                         | ""          |
| `value`         | `value`    | `string \| number`                               | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(_event: Event): void`                          |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-icon

## Properties

| Property | Attribute | Type                                             | Default        |
|----------|-----------|--------------------------------------------------|----------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined"    |
| `name`   | `name`    | `"icon_activity" \| "icon_airplay" \| "icon_alert_circle" \| "icon_alert_octagon" \| "icon_alert_triangle" \| "icon_align_center" \| "icon_align_justify" \| "icon_align_left" \| ... 278 more ... \| "icon_zoom_out"` | "icon_airplay" |
| `value`  | `value`   | `string \| number`                               | 0              |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(_event: Event): void`                          |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-range-color

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `color`  | `color`   | `string`                                         | "#00ff00"   |
| `max`    |           | `number`                                         | 360         |
| `min`    |           | `number`                                         | 1           |
| `step`   |           | `number`                                         | 1           |
| `value`  | `value`   | `string \| number`                               | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(event: Event): void`                           |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |
| `hexToHsv` | `(hex: string): { h: number; s: number; l: number; }` |
| `hsvToHex` | `(h: number, s: number, v: number): string`      |


# atom-range

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `max`    | `max`     | `number`                                         | 30          |
| `min`    | `min`     | `number`                                         | 1           |
| `step`   | `step`    | `number`                                         | 1           |
| `value`  | `value`   | `number`                                         | 6           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(event: Event): void`                           |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-switch-darkmode

## Properties

| Property   | Attribute  | Type                                             | Default     |
|------------|------------|--------------------------------------------------|-------------|
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `default`  | `default`  | `"dark" \| "light" \| "system"`                  | "light"     |
| `disabled` | `disabled` | `boolean`                                        | false       |
| `value`    | `value`    | `number`                                         | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(): void`                                       |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-switch

## Properties

| Property   | Attribute  | Type                                             | Default     |
|------------|------------|--------------------------------------------------|-------------|
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `disabled` | `disabled` | `boolean`                                        | false       |
| `value`    | `value`    | `number`                                         | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(event: Event): void`                           |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-toast

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| "color" \| undefined` | "undefined" |
| `value`  | `value`   | `string \| number`                               | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(_event: Event): void`                          |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |
