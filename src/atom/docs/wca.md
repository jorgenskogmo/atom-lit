# atom-binding

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `value`  | `value`   | `number`                                         | 6           |

## Methods

| Method         | Type                    |
|----------------|-------------------------|
| `announce`     | `(value: number): void` |
| `handleChange` | `(): void`              |
| `onChange`     | `(_e: Event): void`     |


# atom-button

## Properties

| Property  | Attribute | Type                                             | Default     |
|-----------|-----------|--------------------------------------------------|-------------|
| `bind`    | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `label`   | `label`   | `string`                                         | "Button"    |
| `value`   | `value`   | `number`                                         | 6           |
| `variant` | `variant` | `"normal" \| "primary" \| "destructive" \| "constructive" \| "outline" \| "subtle"` | "normal"    |

## Methods

| Method         | Type                    |
|----------------|-------------------------|
| `announce`     | `(value: number): void` |
| `handleChange` | `(): void`              |
| `onChange`     | `(_e: Event): void`     |


# atom-icon

## Properties

| Property | Attribute | Type                                             | Default   |
|----------|-----------|--------------------------------------------------|-----------|
| `name`   | `name`    | `"activity" \| "airplay" \| "alert-circle" \| "alert-octagon" \| "alert-triangle" \| "align-center" \| "align-justify" \| "align-left" \| "align-right" \| "anchor" \| "aperture" \| "archive" \| ... 275 more ... \| "default"` | "airplay" |


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

| Method         | Type                    |
|----------------|-------------------------|
| `announce`     | `(value: number): void` |
| `handleChange` | `(): void`              |
| `onChange`     | `(e: Event): void`      |


# atom-switch-darkmode

## Properties

| Property   | Attribute  | Type                                             | Default     |
|------------|------------|--------------------------------------------------|-------------|
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `default`  | `default`  | `"dark" \| "light" \| "system"`                  | "light"     |
| `disabled` | `disabled` | `boolean`                                        | false       |
| `value`    | `value`    | `number`                                         | 6           |

## Methods

| Method         | Type                    |
|----------------|-------------------------|
| `announce`     | `(value: number): void` |
| `handleChange` | `(): void`              |
| `onChange`     | `(_e: Event): void`     |


# atom-switch

## Properties

| Property   | Attribute  | Type                                             | Default     |
|------------|------------|--------------------------------------------------|-------------|
| `bind`     | `bind`     | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `disabled` | `disabled` | `boolean`                                        | false       |
| `value`    | `value`    | `number`                                         | 6           |

## Methods

| Method         | Type                    |
|----------------|-------------------------|
| `announce`     | `(value: number): void` |
| `handleChange` | `(): void`              |
| `onChange`     | `(_e: Event): void`     |


# atom-toast

## Properties

| Property | Attribute | Type                                             | Default     |
|----------|-----------|--------------------------------------------------|-------------|
| `bind`   | `bind`    | `"num" \| "clicks" \| "airplane_mode" \| undefined` | "undefined" |
| `value`  | `value`   | `number`                                         | 6           |

## Methods

| Method         | Type                    |
|----------------|-------------------------|
| `announce`     | `(value: number): void` |
| `handleChange` | `(): void`              |
| `onChange`     | `(_e: Event): void`     |
