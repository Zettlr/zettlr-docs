---
prev: ./index.md
---

# Basic Syntax

This page describes the basic Markdown syntax that you can use to format and typeset your documents in Zettlr. Zettlr supports many more inline and block elements, but these are described on the following pages.

> [!important]
> This syntax will work in most, if not all, other apps that you may already use or use in the future. This is the “common ground” of all Markdown-enabled apps.

## Overview and Inline Elements

To format Markdown documents, there are a few basic formatting rules that you should know and which we list here:

| Formatting         | Syntax                        | Output                                |
| ------------------ | ----------------------------- | ------------------------------------- |
| Emphasis           | `_italics_` or `*italics*`    | *italics*                             |
| Bold               | `__bold__` or `**bold**`      | **bold**                              |
| Link               | `[Text](www.example.com)`     | [Text](http://www.example.com)        |
| Image              | `![Description](image.jpg)`   | ![Description](../img/logo_small.png) |
| Monospaced text    | Text with \`code\`.           | Text with `code`.                     |
| Heading            | `# Heading`                   | **Heading**                           |
| Heading 2          | `## Heading 2`                | **Heading 2**                         |
| Heading 3          | `### Heading 3`               | **Heading 3**                         |
| Heading 4          | `#### Heading 4`              | **Heading 4**                         |
| Heading 5          | `##### Heading 5`             | **Heading 5**                         |
| Heading 6          | `###### Heading 6`            | **Heading 6**                         |
| Bullet list        | `* List item` (or `+` or `-`) | &bullet; List item                    |
| Item list          | `1. List item` (or `1)`)      | 1. List item                          |
| Comment            | `<!-- Commented out -->`      | (Not visible)                         |
| Horizontal line    | `***` or `---`                | <hr>                                  |
| Block quote        | `> Some quote`                | <blockquote>Some quote</blockquote>   |

As you can see, this table contains (a) mostly inline-elements, and (b) the amount of elements that can be counted as “basic” syntax is quite limited. Originally, this was a feature to keep the syntax clean, but this also demonstrates why there was a need to develop new syntactical elements over time.

> [!tip]
> The basic Markdown elements are defined and described in detail in the [CommonMark Spec](https://spec.commonmark.org/0.31.2/).

## Inlines vs. Block Elements

Markdown syntax can be distinguished into “inline” and “block” elements. Inline elements are always part of block elements, and block elements can typically contain other blocks as well.

Each document is composed of a series of “blocks,” most commonly headings and paragraphs, blockquotes and lists. Each block can include “inline” elements (such as links, images, or text emphasis). Blockquotes and list items can furthermore include other block elements, while paragraphs and headings cannot.

Block elements are divided using two line breaks. This is different from Rich-Text editors, where you typically press <kbd>Enter</kbd> once to finish one paragraph and start the new one. With Markdown, you will often press <kbd>Enter</kbd> **twice**.

> [!warning]
> The Markdown syntax does not strictly prescribe that you *must* separate all blocks with two line breaks, but there are complicated rules where some block elements require an empty line around, while others don’t. Also, if you do not separate blocks with empty lines, this can in some cases lead to ambiguous syntax.
>
> Thus, for simplicity, we **always** recommend that you separate blocks with empty lines by pressing <kbd>Enter</kbd> twice.

## Block Elements

The basic Markdown specification defines four types of block elements that you can use.

### Paragraphs

The simplest form of block elements are paragraphs. Paragraphs are implicitly defined by simply typing text onto a new line. This includes inline elements. For example, if you place an image on its own on an otherwise empty line, this will create a paragraph whose only contents are the image.

Paragraphs cannot contain other block elements.

### Headings

Headings are the second most simple form of a block element. A heading must stand on its own and is created by prepending the line with `#` characters. The number of characters determines the level of the heading. Markdown allows six different heading levels to structure your documents. Oftentimes, headings of level 1 (which are preceded by a single `#`) are used as document titles, while headings of level 2 (`##`) are used as main headings throughout the document. You can subdivide these with headings of level 3 (`###`) and so forth.

> [!warning]
> With word processors such as Word or LibreOffice, defining headings is often cumbersome, and many people simply make text bold to indicate a heading. While this works visually, this does not actually define a heading. In the Markdown world, it is common to use the headings to generate a table of contents automatically. However, for this to work, you must define headings using the correct heading syntax. Bold text will not create a heading.

Headings can contain other inline elements, but they cannot contain other block elements.

> [!tip]
> Especially if you have very long heading texts, you may wish to consider an alternative syntax for headings, called [Setext](https://spec.commonmark.org/0.31.2/#setext-headings). These headings are defined by writing multiple lines of text, followed by a line that only contains minus-sign characters (`-`) or equal-sign characters (`=`). This allows you to spread out long headings across multiple lines, which can make the text easier to read in external text editors.
>
> Note, however, that Setext headings only allow headings of level 1 (with equal signs) and 2 (with minus signs), and they can make the document ambiguous. This is why we always recommend to use regular headings using hash characters (`#`). This makes everything a bit simpler.

### Blockquotes

After paragraphs and headings, the next common block element is a blockquote. A blockquote is semantically defined as a longer quotation from other works. In academic works, blockquotes are often used when an author needs to quote a longer passage of text. Small sentences are typically quoted inline using quotation marks.

Since blockquotes are styled in such a way that they stand out against the surrounding text (typically via a larger text indent), many also use blockquotes for any type of text that they wish to emphasize.

Unlike paragraphs and headings, blockquotes can contain other blocks, such as lists, other blockquotes, or code blocks.

### Lists

Lists are another frequently used block element. Lists come in two varieties: ordered lists and unordered lists. To create an unordered list, simply write a series of lines, each starting with an asterisk (`*`), a minus-sign (`-`), or a plus-sign (`+`). The choice of formatting character here is up to you. Some people prefer asterisks, others prefer minus-signs:

```markdown
* First list item
* Second list item
* Third list item
```

To create an ordered list, you write a number followed by a period:

```markdown
1. First list item
2. Second list item
3. Third list item
```

> [!note]
> While Zettlr will make sure that your list items are numbered correctly, this is actually not required. A list in which you simply repeat the item `1.` several times will still be numbered correctly whenever you export the document.

Lists can also contain other blocks, which includes other lists, blockquotes, or code blocks. The most typical case is to create nested lists:

```markdown
1. First list item
2. Second list item
    - First sub-item
    - Second sub-item
3. Third list item
```

> [!caution]
> Unlike with other block elements such as blockquotes, indentation is important for lists. If you choose the wrong indentation level, an element that you wanted to make part of a list item could end up accidentally splitting your list into two. To learn more about the specifics of creating complex lists, refer to the [CommonMark Spec](https://spec.commonmark.org/0.31.2/#lists).

### Code Blocks

The last “simple” block element for Markdown is code blocks. Code blocks are primarily used for two purposes: Either to literally type out some source code, or to display some block of monotype spaced text.

To create a new code block, you will have to surround it with three or more backticks (\`), or three or more tilde-characters (`~`). You can also create a code block by indenting your text by at least four spaces.

Unless you create a code block with indentation, you can specify the language of the source code to instruct Zettlr to conduct syntax highlighting for the specified language.

Example:

::: preview Code Blocks. Click to see the syntax:
```
This is a simple fenced code block using backtick
characters without Syntax highlighting.
```

~~~markdown
This is a fenced code block using *tilde* characters,
and which highlights its contents using **Markdown**.
~~~

    This is an indented code block.
    It renders like fenced code blocks,
    but you cannot specify a syntax
    highlighting language for it.
:::

### Raw HTML Code

The final block element that most Markdown-enabled apps understand is raw HTML code. Since Markdown was written as a syntax that should compile to HTML anyway, it always implicitly supported raw HTML code. To add any arbitrary HTML into your documents, you would just write the HTML elements you need. When you export a document to HTML, these elements would persist and the parser does not touch them. As a result, they will show up as regular HTML elements in your export. This gives you a lot of freedom to express syntactic elements in Markdown that are not supported by the syntax.

While this works well for basic applications where your Markdown gets turned into HTML, this does not work if you wish to export your documents into another format, such as PDF or Word.

On the other hand, this same principle carries over to how Zettlr treats your documents. While HTML code will not work when you export a Markdown document to PDF, what *will* work is to include raw LaTeX code into your documents. This raw LaTeX code will not work if you export the document to HTML, it will be compiled correctly whenever you export your document to PDF.

You can use this to your advantage: If you know that you will be exporting your document into a PDF file and not an HTML file, you can just add LaTeX commands whenever you need to use a feature of LaTeX that cannot be expressed using Markdown syntax, for example `\pagebreak`s. As soon as you export your work, the compiler will recognize this command and perform the necessary action.

> [!caution]
> While adding custom elements to your documents gives you a lot of freedom, this can also become a security issue. Since HTML code or LaTeX code is not sanitized, this may open your computer to potentially malicious actors. You can learn more in our [Note on Security](../getting-started/a-note-on-security.md).