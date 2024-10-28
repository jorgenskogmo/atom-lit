import { css } from "../lib/Atom";

export const styles = css`

    :host {
        --atom-hljs-bg: #282c34;
        --atom-hljs-color: #9abbda;
        --atom-hljs-comment: #818896;

        --atom-hljs-keyword: #61aeee;
        --atom-hljs-attribute: #c678dd;
        --atom-hljs-literal: #96d0ff;
        --atom-hljs-string: #50b0ff;

        --atom-hljs-symbol: #c59bc1;
        --atom-hljs-namespace: #fff;
        --atom-hljs-punctuation: #cccccc;
        --atom-hljs-deletion: #de7176;
        --atom-hljs-addition: #76c490;

        /* todo: develop light-theme */
    }

    .container {
        position: relative;
    }

    /* @media(color-scheme: dark){
        .container {
            filter: invert(0);
        }
    } */

    .container, code {
        border-radius: var(--atom-button-border-radius);
        background: var(--atom-hljs-bg);
    }

    pre {
        border-top: 1px solid var(--atom-bg);
        margin: 0;
        cursor: text;
    }
    
    .header {
        padding: 0px;
        font-size: normal;
        display: flex;
    }
    .header button {
        background: none;
        height: 100%;
        display: inline-block;
        appearance: none;
        border: none;
        color: #fff6;
        padding: 8px 16px;
        margin: 0;
        border-right: 1px solid var(--atom-bg);
        font: var(--atom-font-label);

    }
    .header button.hasmany {
        cursor: pointer;
    }
    .header button:hover, .header button.selected {
        color: #fff;
    }

    .copyBtn {
        cursor: pointer;
        position: absolute;
        right: 4px;
        top: calc(2rem + 4px);
        transition: all 0.2s;
        background-color: #0000;
        opacity: 0;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--atom-button-border-radius);

        * {
            pointer-events: none;
        }
    }
    .container:hover .copyBtn.active:hover, .copyBtn.active {
        color: #000;
        background: #fff;
    }
    .container:hover .copyBtn:hover {
        opacity: 1;
        background-color: #000;
        color: #fff;
    }

    .container:hover .copyBtn {
        opacity: 1;
        background-color: #0006;
        color: #fff6;
    }
  `;
