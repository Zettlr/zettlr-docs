# Attribute Syntax

As your documents become more complex, you will find yourself more and more in a situation, where you need to assign identifiers to elements, or apply specific styling. Pandoc’s attribute syntax allows you to assign various custom attributes to any element in your text in order to customize its styling, or make use of special filters that further extend the capabilities of Pandoc in treating your documents upon export.

> [!important]
> This syntax is specific to Pandoc, and typically only supported in tools that use Pandoc to export your documents. Zettlr is the only tool that properly detects and parses the syntax.

## Basic Syntax

The attribute syntax is quickly explained. To define a set of attributes for any element, you just need to create an attribute element for it, and specify the attributes you wish to assign.

> [!warning]
> Most attributes require specific extensions to be active during export. The extensions required for the variations of attributes that we list here are enabled by default in the “Markdown” reader. However, if you use a different reader, these extensions may not be enabled, or not even available. Check the [Pandoc manual](https://pandoc.org/MANUAL.html) for the status of every extension.

There are three types of attributes you can assign to elements:

* An identifier using CSS syntax (with a leading `#`): `#identifier`
* A class using CSS syntax (with a leading `.`): `.my-class`
* An arbitrary attribute with a custom value: `attribute="value"`

To assign sets of attributes, all you need to do is wrap your attributes into curly brackets and place the set *after* the element you want to assign it to.

For example, to assign the class `.large` to an image, you could use the following syntax:

```markdown
![Image description](image.jpg){.large}
```

Zettlr will recognize that the attribute set in curly brackets applies to the preceding image element, and Pandoc will treat the attributes correctly when you export.

In general, attributes always apply to the element that comes directly before it, for example a heading:

```markdown
## My heading {#custom-identifier}
```

To assign attributes to a table, you **must** add a table caption and assign the attributes to the caption:

```markdown
| Cell A | Cell B |
|--------|--------|
| Cell C | Cell D |

: My table caption {.compact-table}
```

## Assigning Attributes to Arbitrary Text

Attributes must always be associated with a specific element. However, sometimes you do not have an element, but still wish to assign an attribute to a range of text. Or, you may want to assign a set of attributes to several elements at once.

For these cases, you can use Pandoc’s [bracketed spans and fenced divs](./bracketed-spans-fenced-divs.md), which we introduce on the next page.

## Special Attributes

Over the years, Pandoc has gained a large variety of attributes that have special meaning when you export a document. Here we document some of them.

> [!tip]
> To always know which attributes have special meaning to customize your texts further, check the [Pandoc manual](https://pandoc.org/MANUAL.html).

### Unnumbered Headings

If you wish Pandoc to number your headings in the table of contents, but exempt one or more headings from this rule, you can direct Pandoc to not number a specific heading. You can do this either with the custom class `unnumbered`, or with the shorthand `-`. The following headings, for example, would not be numbered in a table of contents:

```markdown
#### This is an unnumbered heading {.unnumbered}

#### This heading is also not numbered. {-}
```

### Unlisted Headings

Likewise, if you wish to prevent a specific heading from being included in the table of contents, you can assign it the class `unlisted`. Both unnumbered and unlisted can be present:

```markdown
#### This is unnumbered and unlisted {.unnumbered .unlisted}
```

### Attributes in Fenced Code Blocks

You already know that you can create fenced code blocks and activate syntax highlighting by providing a language name after the opening fence:

~~~markdown
```html
<div>An HTML element</div>
```
~~~

But what if you need to assign, say, an identifier to [cross-reference this code block](./citations-and-crossref.md)? In that case, you would replace the language name with an attribute set, and include the language name as a *class*:

~~~markdown
```{.html #lst:my-code}
<div>An HTML element</div>
```
~~~

### Line Numbers in Code Blocks

To enable line numbers in code blocks, use the special class `.numberLines`. In addition, you can define the start line using `startFrom="100"`.

~~~markdown
```{.html #lst:my-code .numberLines startFrom="100"}
<div>An HTML element</div>
```
~~~

### Underlining Text

One inline element for which Markdown has no element is underlined text. You can make an element underlined by adding the class `.underline`:

```markdown
[This text will be underlined]{.underline}
```

### Specifying Image Sizes

Another set of special attributes is `width` and `height` for images which allow you to modify the size of an image:

```markdown
![My image](image.png){width=75% height=25%}
```

### Beamer Columns

When you create a presentation using Markdown with the intention to export it as a Beamer presentation, you can achieve multi-column layouts using a combination of [fenced divs](./bracketed-spans-fenced-divs.md) and a set of special classes.

* You create a column layout with the class `.columns`
* Each column should be its own div and have the class `.column`
* You can vertically align columns with the attribute `align=center`
* To constrain the total width of all columns, use the attribute `totalwidth=80%`
* To constrain the width of an individual column, use `width="80%"`
* Use the special class `.onlytextwidth` to make a columns container span the entire text width.

> [!tip]
> There are many more special classes, both for beamer and for other elements. For a full and up-to-date list, consult the [Pandoc manual](https://pandoc.org/MANUAL.html).

