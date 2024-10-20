import { css } from "../lib/Atom";

export const styles = css`
:host {
    display: inline-block;
    position: relative;
    width: auto;
    /* font: var(--atom-font-p); */
}

.button {
    cursor: pointer;
    display: inline;
    align-items: stretch;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;

    border-width: 1px;
    border-color: var(--atom-fg);
    border-style: solid;
    border-radius: var(--atom-button-border-radius);
    padding-block: var(--atom-button-padding-block);
    padding-inline: var(--atom-button-padding-inline);
    margin-block-end: 4px;

    font: var(--atom-font-control);
}

/* normal */
.button {
    background-color: var(--atom-btn-normal-bg);
    border-color: var(--atom-btn-normal-bg);
    color: var(--atom-btn-normal-fg);
}

.button:hover {
    background-color: var(--atom-button-normal-hover);
    border-color: var(--atom-button-normal-hover);
}

/* primary */
.button.primary {
    background-color: var(--atom-btn-primary-bg);
    border-color: var(--atom-btn-primary-bg);
    color: var(--atom-btn-primary-fg);
}

.button.primary:hover {
    background-color: var(--atom-button-primary-hover);
    border-color: var(--atom-button-primary-hover);
}

/* destructive */
.button.destructive {
    background-color: var(--atom-color-destructive);
    border-color: var(--atom-color-destructive);
    color: var(--atom-btn-destructive-fg);
}
.button.destructive:hover {
    background-color: var(--atom-button-destructive-hover);
    border-color: var(--atom-button-destructive-hover);
}

/* constructive */
.button.constructive {
    background-color: var(--atom-color-constructive);
    border-color: var(--atom-color-constructive);
    color: var(--atom-btn-constructive-fg);
}
.button.constructive:hover {
    background-color: var(--atom-button-constructive-hover);
    border-color: var(--atom-button-constructive-hover);
}

/* outline */
.button.outline {
    background-color: var(--atom-bg);
    border-color: var(--atom-button-subtle-hover);
    color: var(--atom-fg);
}
.button.outline:hover {
    background-color: var(--atom-color-subtle);
}

/* subtle */
.button.subtle {
    background-color: var(--atom-color-subtle);
    border-color: var(--atom-color-subtle); 
    color: var(--atom-fg);
}
.button.subtle:hover {
    background-color: var(--atom-button-subtle-hover);
    border-color: var(--atom-button-subtle-hover);
}

/* content */

.label {
    margin-top: -1px;
}

.inner {
    height: var(--atom-icon-size);
    line-height: var(--atom-icon-size);
    display: grid;
    grid-template-columns: auto auto auto;
}

.inner > slot {
    display: block;
    height: var(--atom-icon-size);
}

slot[name=left]::slotted(atom-icon){
    padding-right: var(--atom-button-icon-padding);
    margin-left: var(--atom-button-icon-offset);
}
slot[name=right]::slotted(atom-icon){
    padding-left: var(--atom-button-icon-padding);
    margin-right: var(--atom-button-icon-offset);
}

`;
