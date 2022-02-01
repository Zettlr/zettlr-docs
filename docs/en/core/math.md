# Math

Zettlr supports writing math and formulae using the KaTeX library. In order to use math, enclose your formulae with dollar signs (`$`). You can also use math blocks by using two dollar signs instead of a single dollar sign to enclose your formulae. On export, the double dollar signs are replaced with the LaTeX environment commands `\begin{equation}` and `\end{equation}`. Anything detected as inline or math block will receive proper MathTeX syntax highlighting.

```
Everybody should know Euler's formula: $e^{ \pm i\theta } = \cos \theta \pm i\sin \theta$ 

These are Euler's most famous equations:
$$
\begin{aligned}
e^{ \pm i\theta } & = \cos \theta \pm i\sin \theta    \\
e^{i \pi} & = -1
\end{aligned}
$$
```

> Please note, that no spaces must be inserted between the inline formula and the dollar signs!

If you activate the corresponding option, Zettlr will immediately render formulae in place, making it easy for you to proofread what you typed and fix errors. If a formula contains an error, this will be shown by Zettlr. The above example is rendered like this:

![Rendered LaTeX equations](../img/math_example.png)

For an overview of which functions and symbols you can use with the KaTex library, you can have a look on their documentation: [https://katex.org/docs/supported.html](https://katex.org/docs/supported.html)
