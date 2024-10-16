import { css } from "../lib/Atom";

export const styles = css`
    /* This is a theme distributed by "starry-night"
 * It’s based on what GitHub uses on their site.
 * See <https://github.com/wooorm/starry-night> for more info. */
:root {
  --color-prettylights-syntax-comment: #59636e;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-prettylights-syntax-entity: #6639ba;
  --color-prettylights-syntax-storage-modifier-import: #1f2328;
  --color-prettylights-syntax-entity-tag: #0550ae;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-brackethighlighter-angle: #59636e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #1f2328;
  --color-prettylights-syntax-markup-bold: #1f2328;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #d1d9e0;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #818b98;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-prettylights-syntax-comment: #9198a1;
    --color-prettylights-syntax-constant: #79c0ff;
    --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
    --color-prettylights-syntax-entity: #d2a8ff;
    --color-prettylights-syntax-storage-modifier-import: #f0f6fc;
    --color-prettylights-syntax-entity-tag: #7ee787;
    --color-prettylights-syntax-keyword: #ff7b72;
    --color-prettylights-syntax-string: #a5d6ff;
    --color-prettylights-syntax-variable: #ffa657;
    --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
    --color-prettylights-syntax-brackethighlighter-angle: #9198a1;
    --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
    --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
    --color-prettylights-syntax-carriage-return-text: #f0f6fc;
    --color-prettylights-syntax-carriage-return-bg: #b62324;
    --color-prettylights-syntax-string-regexp: #7ee787;
    --color-prettylights-syntax-markup-list: #f2cc60;
    --color-prettylights-syntax-markup-heading: #1f6feb;
    --color-prettylights-syntax-markup-italic: #f0f6fc;
    --color-prettylights-syntax-markup-bold: #f0f6fc;
    --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
    --color-prettylights-syntax-markup-deleted-bg: #67060c;
    --color-prettylights-syntax-markup-inserted-text: #aff5b4;
    --color-prettylights-syntax-markup-inserted-bg: #033a16;
    --color-prettylights-syntax-markup-changed-text: #ffdfb6;
    --color-prettylights-syntax-markup-changed-bg: #5a1e02;
    --color-prettylights-syntax-markup-ignored-text: #f0f6fc;
    --color-prettylights-syntax-markup-ignored-bg: #1158c7;
    --color-prettylights-syntax-meta-diff-range: #d2a8ff;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #3d444d;
  }
}

.pl-c {
  color: var(--color-prettylights-syntax-comment);
}

.pl-c1,
.pl-s .pl-v {
  color: var(--color-prettylights-syntax-constant);
}

.pl-e,
.pl-en {
  color: var(--color-prettylights-syntax-entity);
}

.pl-smi,
.pl-s .pl-s1 {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}

.pl-ent {
  color: var(--color-prettylights-syntax-entity-tag);
}

.pl-k {
  color: var(--color-prettylights-syntax-keyword);
}

.pl-s,
.pl-pds,
.pl-s .pl-pse .pl-s1,
.pl-sr,
.pl-sr .pl-cce,
.pl-sr .pl-sre,
.pl-sr .pl-sra {
  color: var(--color-prettylights-syntax-string);
}

.pl-v,
.pl-smw {
  color: var(--color-prettylights-syntax-variable);
}

.pl-bu {
  color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
}

.pl-ii {
  color: var(--color-prettylights-syntax-invalid-illegal-text);
  background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
}

.pl-c2 {
  color: var(--color-prettylights-syntax-carriage-return-text);
  background-color: var(--color-prettylights-syntax-carriage-return-bg);
}

.pl-sr .pl-cce {
  font-weight: bold;
  color: var(--color-prettylights-syntax-string-regexp);
}

.pl-ml {
  color: var(--color-prettylights-syntax-markup-list);
}

.pl-mh,
.pl-mh .pl-en,
.pl-ms {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-heading);
}

.pl-mi {
  font-style: italic;
  color: var(--color-prettylights-syntax-markup-italic);
}

.pl-mb {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-bold);
}

.pl-md {
  color: var(--color-prettylights-syntax-markup-deleted-text);
  background-color: var(--color-prettylights-syntax-markup-deleted-bg);
}

.pl-mi1 {
  color: var(--color-prettylights-syntax-markup-inserted-text);
  background-color: var(--color-prettylights-syntax-markup-inserted-bg);
}

.pl-mc {
  color: var(--color-prettylights-syntax-markup-changed-text);
  background-color: var(--color-prettylights-syntax-markup-changed-bg);
}

.pl-mi2 {
  color: var(--color-prettylights-syntax-markup-ignored-text);
  background-color: var(--color-prettylights-syntax-markup-ignored-bg);
}

.pl-mdr {
  font-weight: bold;
  color: var(--color-prettylights-syntax-meta-diff-range);
}

.pl-ba {
  color: var(--color-prettylights-syntax-brackethighlighter-angle);
}

.pl-sg {
  color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
}

.pl-corl {
  text-decoration: underline;
  color: var(--color-prettylights-syntax-constant-other-reference-link);
}

`;
