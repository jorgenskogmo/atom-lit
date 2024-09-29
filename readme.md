# Atom

As a study in sustainable and resilient design systems,
this is an attempt to

- Framework independent custom HTML components
- As few dependencies as possible
- Great DX
- Good UX (but thats not key - its currently more about the dx)

## check

https://github.com/break-stuff/cem-tools?tab=readme-ov-file

bun run custom-elements-manifest analyze

https://github.com/open-wc/api-viewer-element

bun run custom-elements-manifest analyze

wca analyze src --format vscode --outFile vscode-html-custom-data.json

# works!

npx web-component-analyzer analyze src/components --format vscode --outFile vscode-html-custom-data.json

# jakob

https://github.com/bmewburn/vscode-intelephense/issues/2570

## Overview

By extending from the the Atom class instead of from the LitElement class, the ui components gain:

- Optional automatic two-way binding to state
- Optional automatic emit of ready and change events

Toggle this behaviour by including or excluding the `bind=` attribute in containing HTML:

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

The `value` prop can also be set programatically.

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
- [ ] But have a good styling story - so these can be our "whitelabel" components

---

## TODO:

#### Components

- [x] Range slider
- [x] Button with optional left- and right-icons
- [x] Binding monitor
- [ ] Form text-input
- [ ] Form Select/Dropdown
- [ ] Switch
- [ ] Checkbox
- [ ] ColorPicer
- [ ] Radio
- [ ] RadioGroup
- [ ] ButtonGroup
- [ ] Icon-only button
- [ ] Progressbar
- [ ] Loader
- [ ] Detail fold in/out view
