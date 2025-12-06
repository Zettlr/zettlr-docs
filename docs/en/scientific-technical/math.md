# Math

Zettlr supports writing math and formulae using the KaTeX library.

To insert math code, enclose your formulae with dollar signs (`$...$`). To add a math block, use (`$$...$$`) instead.

Some examples:

```markdown
Everybody should know Euler's formula: $e^{ \pm i\theta } = \cos \theta \pm i\sin \theta$ 

These are Euler's most famous equations:

$$
\begin{aligned}
e^{ \pm i\theta } & = \cos \theta \pm i\sin \theta    \\
e^{i \pi} & = -1
\end{aligned}
$$
```

!!! note

    To prevent confusion with amounts of money, spaces between inline math and the dollar signs are not allowed.

By default, math is rendered using syntax highlighting. However, Zettlr can also pre-render math content. To do so, ensure to activate the corresponding renderer in the settings, and make sure your rendering mode is set to “Preview,” not “raw.”

The above example is rendered like this:

![Rendered LaTeX equations](../img/math_example.png)

!!! tip

	KaTeX is almost fully compatible with MathTeX. However, some discrepancies remain. If you export a document containing math to LaTeX, ensure that the code blocks render appropriately. For HTML exports, you can specify the KaTeX library (the default is MathJax).

A complete documentation for all supported functions and symbols can be found on the KaTeX homepage: [katex.org/docs/supported.html](https://katex.org/docs/supported.html).

## Chemical Symbols

Zettlr also supports chemical symbols with scientific inferiors and charge indicators using the `mhchem` library.

You can find a documentation on how to utilize its syntax on its homepage: [mhchem.github.io/MathJax-mhchem](https://mhchem.github.io/MathJax-mhchem/).

## Math During Export

While Zettlr uses KaTeX for preview purposes, exported math may differ. Exporting to PDF will cause the standard LaTeX math engine to take care of rendering the code, while exporting to HTML will by default make use of MathTeX.

You can customize how math is being treated on export by adapting your [YAML frontmatter](../advanced/yaml-frontmatter.md) or [profiles](../advanced/defaults-files.md).
