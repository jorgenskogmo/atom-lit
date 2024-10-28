import { css } from "../lib/Atom";

export const styles = css`
.range {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.labels {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-inline: 2px;
    margin-bottom: 0.25rem;
}
.label {
    flex-grow: 1;
    font: var(--atom-font-label);
}
.label.value {
    text-align: right;
    font: var(--atom-font-code);
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 8px;
    border-radius: 9999px;
}

input[type="range"]:focus {
    outline: none;
}
        
/* webkit */

input[type=range]::-webkit-slider-runnable-track {
    height: 8px;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none; 
    height: 22px;
    width: 22px;
    margin-top: -7px;
    background-color: var(--atom-bg);
    border-radius: 50%;
    border: 3px solid var(--atom-color-accent);
    transition: border cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
}

input[type=range]::-webkit-slider-thumb:active {
    border-width: 7px;
}

/* moz */

input[type=range]::-moz-range-thumb {
    height: 16px;
    width: 16px;
    background-color: var(--atom-bg);
    border-radius: 50%;
    border: 3px solid var(--atom-color-accent);
}

input[type=range]::-moz-range-thumb:active {
    height: 8px;
    width: 8px;
    border-width: 7px;
}

input[type="range"]:focus {
    outline: none;
}
input[type=range]:focus-visible::-webkit-slider-runnable-track, input[type=range]:focus::-webkit-slider-runnable-track {
    outline: none;
}
input[type=range]:focus-visible::-webkit-slider-thumb {
    outline: 4px solid #f00;
    outline-offset: 4px;
}
input[type=range]:focus-visible::-moz-range-thumb {
    outline: 4px solid #f00;
    outline-offset: 8px;
}
`;
