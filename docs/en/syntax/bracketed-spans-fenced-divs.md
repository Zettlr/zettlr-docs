# Bracketed Spans and Fenced Divs

Another feature that is unique to Pandoc and Zettlr is the ability to surround ranges of text and entire blocks with custom containers. These syntax extensions allow you to customize your documents to an incredible degree.

> [!important]
> Like citations and cross-references, this feature is not supported with many other tools, at least not without external plugins or some additional configuration effort.

## Problem Statement

To understand what bracketed spans and fenced divs are, it is crucial to understand the problem these syntactical elements attempt to solve.

Markdown as a language has been devised to separate writing from the typesetting process. The basic idea is that you should write your texts first, and take care of any layout considerations only after your texts are done. Therefore, it purposefully does not allow you to micromanage how elements are styled; their colors, borders, and other design elements.

However, sometimes you do wish to include elements with a specific style, or you need to apply a style for which there is no corresponding element. You may, for example, have noticed that Markdown does not include a native element to <span style="text-decoration: underline;">underline text</span>.

You could, of course, fall back to using raw HTML elements to achieve the look you desire. But this has the drawback that it prevents you from exporting the same document to, say, Word or PDF, without losing all HTML elements.

This is the case for which Pandoc has introduced bracketed spans and fenced divs. These are inline and block elements that allow you to assign styles, identifiers, and other information to ranges of text or entire blocks.

> [!tip]
> Bracketed spans and fenced divs only make sense in conjunction with the [attribute syntax](./attribute-syntax.md), which you should consult as well.

## Bracketed Spans

Bracketed spans allow you to assign attributes to specific ranges of text. You create a bracketed span by surrounding the wanted text with square brackets, immediately followed by a set of attributes in curly brackets.

A good example is the underlining feature:

```markdown
[This text will be underlined]{.underline}
```

You only need to use bracketed spans if there is no specific element you wish to target (such as an image, or a link).

## Fenced Divs

Sometimes, you want to assign a set of attributes to a paragraph (which does not support attributes itself), or even to multiple blocks at once. For this you can use a fenced div. A fenced div is demarcated with a series of colons (like fenced code blocks), and optionally a set of attributes.

For example, to center a paragraph of text, you can use the following:

```markdown
::: {align=center}
This text will be centered.
:::
```

A special example is the reference block that is automatically created by citeproc when you export your document. By default, the reference list is attached to the end of the document. However, sometimes you may want to include information *after* the list of references. To do so, you can tell citeproc to use a specific container to place its references in.

If there is a container with the identifier `#refs` in your document, citeproc will place the bibliography inside this container, rather than adding it at the end. This allows you to, say, add an appendix after your list of references:

```markdown
# References

::: {#refs}
:::

# Appendix A

…
```
You can also nest fenced divs just like any other block element. This way, you can, for example, create a two-column layout for a beamer presentation:

```markdown
::: {.columns .onlytextwidth align=center}
:::: {.column width=45%}

Left Column

::::
:::: {.column width=45%}

Right Column

::::
:::
```