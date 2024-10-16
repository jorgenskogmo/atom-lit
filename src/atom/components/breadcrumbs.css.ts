import { css } from "../lib/Atom";

export const styles = css`
:host {
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
}
a {
    color: #0077cc;
    text-decoration: none;
    margin: 0 5px;
}
a:hover {
    text-decoration: underline;
}
span {
    margin: 0 5px;
    color: #666;
}
`;
