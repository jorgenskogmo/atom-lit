import { css } from "../lib/Atom";

export const hljsstyles = css`

pre code.hljs {
	display: block;
	overflow-x: auto;
	padding: 1em
}
code.hljs {
	padding: 3px 5px
}
/*

Atom One Dark With support for ReasonML by Gidi Morris, based off work by Daniel Gamage

Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

*/
.hljs {
	color: var(--atom-hljs-color);
	background: var(--atom-hljs-bg);
}

.hljs-subst {
	color: var(--atom-hljs-color);
}

.hljs-comment {
	color: var(--atom-hljs-comment);
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-section {
	color: var(--atom-hljs-keyword);
}

.hljs-attr {
	color: var(--atom-hljs-attribute);
}

.hljs-attribute {
	color: var(--atom-hljs-symbol);
}

.hljs-name,
.hljs-type,
.hljs-number,
.hljs-selector-id,
.hljs-quote,
.hljs-template-tag {
	color: var(--atom-hljs-namespace);
}

.hljs-selector-class {
	color: var(--atom-hljs-keyword);
}

.hljs-string,
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr {
	color: var(--atom-hljs-string);
}

.hljs-meta,
.hljs-selector-pseudo {
	color: var(--atom-hljs-keyword);
}

.hljs-built_in,
.hljs-title,
.hljs-literal {
	color: var(--atom-hljs-literal);
}

.hljs-bullet,
.hljs-code {
	color: var(--atom-hljs-punctuation);
}

.hljs-meta .hljs-string {
	color: var(--atom-hljs-variable);
}

.hljs-deletion {
	color: var(--atom-hljs-deletion);
}

.hljs-addition {
	color: var(--atom-hljs-addition);
}

.hljs-emphasis {
	font-style: italic;
}

.hljs-strong {
	font-weight: bold;
}

`;
