---
title: 语法高亮
desc: "支持 [prism](https://prismjs.com/) 和 [highlightjs](https://highlightjs.org/) 两种高亮方案。需要在`_Host.cshtml`或`index.html`引入其中一种方案的 js 和 css 文件。"
tag: JS代理
related:
  - /blazor/components/markdown-parsers
---

- 通过 CDN 使用 prism:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css">
<!-- use other theme, such as dracula -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-material-dark.min.css">

<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<!-- and it's easy to individually load additional languages -->
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-csharp.min.js"></script>
```

- 或者通过 CDN 使用 highlightjs:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/styles/default.min.css">
<!-- use other theme, such as github -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/styles/github.min.css">

<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
<!-- and it's easy to individually load additional languages -->
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/languages/go.min.js"></script>
```

## 使用

<masa-example file="Examples.components.syntax_highlights.Usage"></masa-example>
