import { css } from "../lib/Atom";

export const styles = css`
    .container {
        position: relative;
        
    }
    
    .container, code {
        border-radius: 8px;
        background: #282c34;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    pre {
        border-top: 1px solid var(--atom-bg);
        margin: 0;
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
        color: #666;
        font-size: 14px;
        padding: 8px 16px;
        margin: 0;
        border-right: 1px solid var(--atom-bg);

    }
    .header button.hasmany {
        cursor: pointer;
    }
    .header button:hover, .header button.selected {
        color: var(--atom-fg);
    }

    .copyBtn {
        position: absolute;
        right: 1rem;
        top: 3rem;
    }
`;
