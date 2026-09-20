# Cross-References

With regular citations, you can reference other works in your text. However, it is common to also reference figures and tables inside your texts. Typically, figures visually demonstrate results, and tables allow readers to gain insight into your data analysis and verify that your results are sound. More technical works frequently contain important equations. But to contextualize these elements, it is necessary to reference them in your text, often by simple numbers. Take for example this excerpt:

> […] I then manually inspected top speeches for these topics to verify that the topic indeed contains economic policy talk. See table 2 for a list of the economic topics from the main model […].

As you can see, this excerpt references a table with number 2. While static references that you quite literally type out can be fine, this becomes unwieldy as the length of your text increases, and with it the amount of figures and tables in your document. As you work on your document, you may insert new figures and tables, or remove outdated ones. Whenever this happens, you will have to update all references to use the new numbering. Depending on how often you are referencing your tables, figures, or equations in your text, this increases the chances of forgetting to update a reference somewhere, and suddenly you are referencing a table 4 which no longer exists, when you actually wanted to reference table 2.

## Introducing CrossRef

This is the problem that CrossRef solves. [CrossRef](https://lierdakil.github.io/pandoc-crossref/) is a syntax extension for Zettlr Markdown that allows you to reference tables, figures, or equations, with a unique ID number that remains static while you write, and which will be automatically replaced by an ascending number from 1 to the amount of tables, figures, or equations as soon as you export your document.

> [!tip]
> To learn how to write cross-references in Zettlr, [read the syntax documentation](../syntax/citations-and-crossref.md#introduction-to-crossref-syntax).

The system consists of a special syntax which Zettlr supports, and a Pandoc filter that needs to be installed separately. In the following sections, we will focus on how you can enable the CrossRef Pandoc filter to ensure that the syntax is appropriately replaced upon export. For an introduction to the syntax, see its [documentation page](../syntax/citations-and-crossref.md#introduction-to-crossref-syntax).

::: warning Disclaimer
The CrossRef syntax is not maintained by the Zettlr team. While Zettlr strives for full coverage of the syntax, there is always the chance that Zettlr does not recognize parts of the syntax. In those cases, please let us know in an issue. What is important is that you should **always follow the [official CrossRef syntax](https://lierdakil.github.io/pandoc-crossref/)**, and not what Zettlr displays, because only the official syntax will be properly transformed when you export your papers to their target format.
:::

## Zettlr Pre-Rendering of CrossRef Elements

Zettlr aids you in cross referencing elements in two ways. First, it natively supports the [Pandoc span syntax](../syntax/bracketed-spans-fenced-divs.md), which allows you to verify that the Pandoc attribute span you need to use to create an element ID is correct by checking that it is rendered as such. Second, it can detect CrossRef syntax and prerenders CrossRef appropriately to help you understand what you are referencing.

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

