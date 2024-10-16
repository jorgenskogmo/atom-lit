import { css } from "../lib/Atom";

export const styles = css`
    .container {
        border-radius: 4px;
        overflow: hidden;
    }
    pre {
        border-top: 1px solid var(--atom-bg);
        margin: 0;
    }
    
    .header {
        background: #282c34;
        padding: 0px;
        padding-left: 8px;
        font-size: normal;
        display: flex;
    }
    .header button {
        /* background: #f00; */
        background: none;
        height: 100%;
        display: inline-block;
        appearance: none;
        border: none;
        color: #666;
        font-size: 14px;
        padding: 8px;
        margin: 0;
        border-right: 1px solid var(--atom-bg);

    }
    .header button.hasmany {
        cursor: pointer;
    }
    .header button:hover, .header button.selected {
        color: var(--atom-fg);
    }

    /* span {
        background-color: var(--atom-control-bg);
        color: var(--atom-fg);
        padding: 4px;
        padding-top: 3px;
        padding-bottom: 4px;
        border-radius: 4px;
        font-size: 80%;
    } */
`;
