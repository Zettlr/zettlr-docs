# Matemática

Zettlr oferece suporte à escrita de matemática e fórmulas usando a biblioteca KaTeX.

Para inserir código matemático, coloque suas fórmulas entre cifras (`$...$`). Para adicionar um bloco matemático, use (`$$...$$`).

Alguns exemplos:

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

**Observação:**

    Para evitar confusão com quantias de dinheiro, não são permitidos espaços entre a matemática embutida e os cifrões.

Por padrão, a matemática é renderizada usando realce de sintaxe. No entanto, o Zettlr também pode pré-renderizar conteúdo matemático. Para fazer isso, certifique-se de ativar o renderizador correspondente nas configurações e certifique-se de que seu modo de renderização esteja definido como “Visualização” e não “bruto”.

O exemplo acima é renderizado assim:

![Equações LaTeX renderizadas](../img/math_example.png)

**Dica:**

    KaTeX é quase totalmente compatível com MathTeX. No entanto, permanecem algumas discrepâncias. Se você exportar um documento contendo matemática para LaTeX, certifique-se de que os blocos de código sejam renderizados especificamente. Para exportações HTML, você pode especificar a biblioteca KaTeX (o padrão é MathJax).

Uma documentação completa para todas as funções e símbolos suportados pode ser encontrada na página inicial do KaTeX: [katex.org/docs/supported.html](https://katex.org/docs/supported.html).

## Símbolos Químicos

Zettlr também oferece suporte a símbolos químicos com valores científicos inferiores e indicadores de carga usando a biblioteca `mhchem`.

Você pode encontrar uma documentação sobre como usar sua sintaxe em sua página inicial: [mhchem.github.io/MathJax-mhchem](https://mhchem.github.io/MathJax-mhchem/).

## Matemática durante a exportação

Embora o Zettlr use KaTeX para fins de visualização, a matemática exportada pode ser diferente. A exportação para PDF fará com que o mecanismo matemático padrão do LaTeX cuide da renderização do código, enquanto a exportação para HTML fará uso, por padrão, do MathTeX.

Você pode personalizar como a matemática é tratada na exportação adaptando seu [frontmatter YAML](../editor/yaml-frontmatter.md) ou [perfis](../export/defaults-files.md).