# Cross-References

With regular citations, you can reference other works in your text. However, it is common to also reference figures and tables inside your texts. Typically, figures visually demonstrate results, and tables allow readers to gain insight into your data analysis and verify that your results are sound. More technical works frequently contain important equations. But to contextualize these elements, it is necessary to reference them in your text, often by simple numbers. Take for example this excerpt:

> […] I then manually inspected top speeches for these topics to verify that the topic indeed contains economic policy talk. See table 2 for a list of the economic topics from the main model […].

As you can see, this excerpt references a table with number 2. While static references that you quite literally type out can be fine, this becomes unwieldy as the length of your text increases, and with it the amount of figures and tables in your document. As you work on your document, you may insert new figures and tables, or remove outdated ones. Whenever this happens, you will have to update all references to use the new numbering. Depending on how often you are referencing your tables, figures, or equations in your text, this increases the chances of forgetting to update a reference somewhere, and suddenly you are referencing a table 4 which no longer exists, when you actually wanted to reference table 2.

This is the problem that CrossRef solves. [CrossRef](https://lierdakil.github.io/pandoc-crossref/) is a syntax extension for Zettlr Markdown that allows you to reference tables, figures, or equations, with a unique ID number that remains static while you write, and which will be automatically replaced by an ascending number from 1 to the amount of tables, figures, or equations as soon as you export your document.

The system consists of a special syntax which Zettlr supports, and a Pandoc filter that needs to be installed separately. In the following sections, we will first introduce you to the syntax you can use to auto-reference tables, figures, and equations. Afterward, we will focus on how you can enable the CrossRef Pandoc filter to ensure that the syntax is appropriately replaced upon export.

::: warning Disclaimer
The CrossRef syntax is not maintained by the Zettlr team. While Zettlr strives for full coverage of the syntax, there is always the chance that Zettlr does not recognize parts of the syntax. In those cases, please let us know in an issue. What is important is that you should **always follow the [official CrossRef syntax](https://lierdakil.github.io/pandoc-crossref/)**, and not what Zettlr actually displays, because only the official syntax will be properly transformed when you export your papers to their target format.
:::

## Introduction to CrossRef Syntax

The CrossRef syntax is easy to learn once you understand the [citation syntax](./citations.md), since CrossRef is essentially an extension to it. Each cross reference consists of two elements:

1. A figure/table/equation ID that you specify using [Pandoc attributes](./markdown-compendium.md)
2. A reference that looks almost like a regular citation

Whenever you add a new table, figure, equation, or anything you would like to reference in other places in your text, you assign it a special ID that allows you to cross reference it going forward. This ID consists of a required first part, and a free-form second part, separated by a colon:

```markdown
First, an image:

![Image ALT](my-plot.png){#fig:plotA}

Next, a table (where the ID is defined in the caption):

| Column | Column |
|--------|--------|
|   One  |   Two  |

: Table A {#tbl:tableA}

Lastly, an equation:

[$$\hat{y} = \beta_0 + \beta_1 x + \epsilon$$]{#eq:equation1}
```

The equation in this example is wrapped inside a Pandoc span, which specifies the range of text that this ID should be assigned. The image and table are referenced implicitly.

To reference these elements in your text, you can use these IDs as if they were citekeys:

```markdown
As shown in [table @tbl:table2.2], we can see […]

See [figure @fig:plotA] for a plot of the regression analysis.
```

> [!CAUTION]
> Crossref-syntax requires square brackets around the citation, but these will *not* be turned into round brackets upon export, which is different from how citations are parsed. If you wish to reference something in brackets, write those out manually:
> 
> ```markdown
> As the plot below shows ([@fig:plotA]), […]
> ```
 
Any text front of the reference ID (before the `@` character) will be used as its label, while the ID will be replaced by the correct number of the provided figure/equation/table. In other words, if the table with ID `#tbl:table2.2` ends up being the eigth table in the output text, the string `[table @tbl:table2.2]` will be replaced with `table 8`, and appropriately linked to the correct table.

If you leave out the label (`table` in this example), CrossRef will use default labels such as `Fig.`  or `Tbl.` instead.

You can also reference multiple figures, tables, or equations at the same time by separating them just like regular citations with semicolons. CrossRef will, upon exporting your file, try to compress all referenced items in number ranges (where, say, `[@fig:fig1; @fig:fig2; @fig:fig3]` would become `Figs. 1-3`).

> [!TIP]
> While Zettlr pre-renders a few CrossRef syntax parts, you can always find an up-to-date and complete documentation of the available syntax [in the official CrossRef documentation](https://lierdakil.github.io/pandoc-crossref/).

## Zettlr Pre-Rendering of CrossRef Elements

Zettlr aids you in cross referencing elements in two ways. First, it natively supports the Pandoc span syntax, which allows you to verify that the Pandoc attribute span you need to use to create an element ID is correct by checking that it is rendered as such. Second, it can detect CrossRef syntax and prerenders CrossRef appropriately to help you understand what you are referencing.

The CrossRef pre-rendering is tied to the citation pre-rendering (since both features use almost the same syntax), so whenever the citation pre-renderer is on, cross references will also be displayed. The citation parser will correctly identify cross references thanks to the identical syntax, so even when the citation pre-renderer is disabled, you can verify that your cross-references have been detected by checking that they are displayed accordingly.

> [!TIP]
> Since Zettlr cannot link to elements defined in other files (e.g., when you back-reference a table from the background section in your conclusion and use split up the chapters into multiple files), we recommend that you use human-readable IDs for your tables and figures. For example, instead of using the ID `#tbl:table_1.2`, we recommend you name it, say, `#tbl:descriptives_main_model`. Regardless of whether you are using Zettlr or any other program, this is a good practice.

## Enabling CrossRef During Exports

As with regular citations and other pieces of specialized syntax, Zettlr is capable of pre-rendering, but during export, Pandoc itself needs to support the syntax as well, lest it will be taken as-is during export and not turned into whichever elements you actually desire. While much of the syntax extensions of Zettlr build on simple extensions you can enable or disable in your export profiles, Pandoc CrossRef is a different beast.

To enable CrossRef syntax, you will need to download and install the corresponding filter and enable it during exports. At the time of writing this documentation (September 2026), Zettlr does not ship with the filter.

To install the CrossRef filter, please follow the [setup instructions on its repository](https://github.com/lierdakil/pandoc-crossref#installation). Take care of the fact that the versions of CrossRef and Pandoc need to align, otherwise it can come to issues, especially if Pandoc has changed its internal document layout.

> [!TIP]
> Due to the sensitive relationship between CrossRef and Pandoc versions, we recommend not using the internal Pandoc and instead installing the most recent version separately on your computer, and installing CrossRef using the same method. This is a much more predictable way to ensure Pandoc and CrossRef are the same version number as they will typically be updated at around the same time in the repositories.

Once you have successfully installed CrossRef, you need to enable it during exports by adding it to the list of active filters, and also ensure that it runs *before* citeproc. This way, CrossRef can recognize its syntax and transform its own "citation" elements before citeproc gets the chance to complain about missing citekeys:

```yaml
filters:
- pandoc-crossref
- type: citeproc
```

> [!WARNING]
> Zettlr automatically enables citeproc during exports when it is not explicitly specified in the filters list already. However, Zettlr will always prepend the citeproc filter to the filter list. Therefore, do not simply add `pandoc-crossref` to the filters list, as this would mean that citeproc runs before CrossRef, converting cross references and rendering the filter nil. Always specify citeproc explicitly in the filters list.

