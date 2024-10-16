# atom-binding

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
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
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
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
| `bind`    | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `label`   | `label`   | `string`                                         | "Button"    |
| `value`   | `value`   | `number`                                         | 0           |
| `variant` | `variant` | `"normal" \| "primary" \| "destructive" \| "constructive" \| "outline" \| "subtle"` | "normal"    |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(event: Event): void`                           |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |


# atom-icon

## Properties

| Property | Attribute | Type                                             | Default   |
|----------|-----------|--------------------------------------------------|-----------|
| `name`   | `name`    | `"activity" \| "airplay" \| "alert-circle" \| "alert-octagon" \| "alert-triangle" \| "align-center" \| "align-justify" \| "align-left" \| "align-right" \| "anchor" \| "aperture" \| "archive" \| ... 275 more ... \| "default"` | "airplay" |

## Methods

| Method             | Type       |
|--------------------|------------|
| `createRenderRoot` | `(): this` |


# atom-range

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
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
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `default`  | `default`  | `"dark" \| "light" \| "system"`                  | "light"     |
| `disabled` | `disabled` | `boolean`                                        | false       |
| `value`    | `value`    | `number`                                         | 0           |

## Methods

| Method         | Type                                             |
|----------------|--------------------------------------------------|
| `action`       | `(event: Event): void`                           |
| `announce`     | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |
| `handleChange` | `(): void`                                       |


# atom-switch

## Properties

| Property   | Attribute  | Type                                             | Default     |
|------------|------------|--------------------------------------------------|-------------|
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
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
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `value`  | `value`   | `string \| number`                               | 0           |

## Methods

| Method     | Type                                             |
|------------|--------------------------------------------------|
| `action`   | `(_event: Event): void`                          |
| `announce` | `(eventKey: AtomEventKey, value: string \| number, originalEvent?: Event \| undefined): void` |
