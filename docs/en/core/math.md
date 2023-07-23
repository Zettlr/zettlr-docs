# Math

Zettlr supports writing math and formulae using the KaTeX library.

To insert math code, enclose your formulae with dollar signs (`$...$`). To add a math block, use (`$$...$$`) instead.

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

> To prevent confusion with amounts of money, spaces between inline math and the dollar signs are not allowed.

If you activate the corresponding option, Zettlr will immediately render math in place, making it easy for you to proofread what you typed and fix errors. If a formula contains an error, this will be shown by Zettlr. The above example is rendered like this:

![Rendered LaTeX equations](../img/math_example.png)

For an overview of which functions and symbols you can use with the KaTex library, you can have a look on their documentation: [https://katex.org/docs/supported.html](https://katex.org/docs/supported.html)

## Math During Export

While Zettlr uses KaTeX for preview purposes, exported math may differ. Exporting to PDF will cause the standard LaTeX math engine to take care of rendering the code, while exporting to HTML will by default make use of MathTeX.

You can customize how math is being treated on export by adapting your [YAML frontmatter](../advanced/yaml-frontmatter.md) or [profiles](../advanced/defaults-files.md).
