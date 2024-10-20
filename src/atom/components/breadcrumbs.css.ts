import { css } from "../lib/Atom";

export const styles = css`
:host {
    display: flex;
    align-items: center;
}
a {
    color: #0077cc;
    text-decoration: none;
    margin: 0;
    padding: 0;
}
a:hover {
    text-decoration: underline;
}
span {
    /* margin: 0 5px; */
    color: #666;
}
span.slash {
    margin: 0 0.5rem
}
`;
