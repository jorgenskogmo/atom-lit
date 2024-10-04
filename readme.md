# Atom

As a study in sustainable and resilient design systems,
this is an attempt to

- Framework independent custom HTML components
- As few dependencies as possible
- Great DX
- Good UX (but thats not key - its currently more about the dx)


## vscode intellisense

For vscode intellisense to work with Custom HTML Elements, we need to make vscode aware of them.
```js
// .vscode/settings.json:
{ "html.customData": ["./src/atom/vscode-html-custom-data.json"] /*, ... */ }
```
The `./src/atom/vscode-html-custom-data.json` file is generated by `bun run vscode` (or `bunx web-component-analyzer analyze src/atom/components --format vscode --outFile src/atom/vscode-html-custom-data.json` )

More at
- https://github.com/bmewburn/vscode-intelephense/issues/2570
- https://github.com/microsoft/vscode-custom-data/blob/main/samples/webcomponents/README.md
- https://custom-elements-manifest.open-wc.org/analyzer/getting-started/

## documentation

Storybook is a monster, so lets do sth else.




## Overview

By extending from the the Atom class instead of from the LitElement class, the ui components gain:

- Optional automatic two-way binding to state
- Optional automatic emit of ready and change events

Toggle this behavior by including or excluding the `bind=` attribute in containing HTML:

```html
// example: Using automatic two-way binding to state: // in /state.js: export
const initialState = { num: 4, }; // in index.html Range slider:
<atom-range value="20" bind="num"></atom-range>

Monitor: <atom-binding bind="num"></atom-binding>
```

```html
// example: Using events to update the monitor Range slider:
<atom-range id="slider" value="20"></atom-range>

Monitor: <span id="monitor"></span>

var slider = document.querySelector("#slider) var monitor =
document.querySelector("#monitor) slider.addEventListener("ready", (e) => {
monitor.innerText = e.detail.value }) slider.addEventListener("change", (e) => {
monitor.innerText = e.detail.value })
```

The `value` prop can also be set programmatically.

```html
// example: Using events to update the monitor Range slider:
<atom-range id="slider" value="20"></atom-range>

var slider = document.querySelector("#slider) var v = 10; setInterval( () => {
slider.value = ++v }, 1000)
```

---

We should probably make a better name for the base "Atom" class ;-)

Now,

The purpose of all this, is to find a way to build ui's, that are a joy to build with.

- [ ] Setup should be extremely simple
- [ ] As few dependencies as possible
- [x] UI Components should be useful even without styling
- [ ] But have a good styling story - so these can be our "white-label" components

---

## TODO:

Consider separating Button variants,
so that we can have $constructive-$outline?

#### Tokens

Connect to design-tokens

#### Events

Respect onclick attributes from consumer

#### Atoms

- [x] Range slider
- [x] Button with optional left- and right-icons
- [x] Icon-only button
- [x] Binding monitor
- [x] Switch
- [ ] ColorPicker
- [ ] ColorSwatchPicker
- [ ] Checkbox
- [ ] Radio
- [ ] RadioGroup

- [ ] Form text-input
- [ ] Form Select/Dropdown
- [ ] ButtonGroup
- [ ] Progressbar
- [ ] Loader
- [ ] Detail fold in/out view
- [ ] DetailGroup (aka Accordion)


### Molecules

- [ ] LightDarkMode switch
- [ ] 


---

# Other

Favicon from https://favicon.io/favicon-generator/


---

## Notes on integration in a Angular project:

### in atom-lit:

```sh
bun run buildjs
bun link
```

### in angular

package.json: add `"atom-lit": "link:atom-lit"` to dependencies

`bun i`

edit angular.json: architect > build :

"styles": [
    "src/styles.css",
    "node_modules/atom-lit/atom-lib.css"
],
"scripts": [
    "node_modules/atom-lit/atom-lib.js"
]

edit/create /.vscode/settings.json and add:

`"html.customData": ["./node_modules/atom-lit/src/atom/vscode-html-custom-data.json"]`

and then, in the .component.ts angular files where you want to use atom-lit,
add 

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
	...
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})


