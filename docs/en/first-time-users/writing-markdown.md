# Writing Markdown

Now that you have your workspaces set up and created a file, the next step is to simply start writing.

Zettlr uses Markdown. More specifically, it uses a superset of various standards called “Pandoc Markdown.”

Even if you have never consciously worked with Markdown, you have surely used it already, because it is omnipresent. Look at the following text:

```markdown
# What is Markdown?

Markdown is a **markup language** that can be used to *format* (but not
style!) text documents. It supports every common and some useful syntactic
elements including [links](https://www.zettlr.com), `monospaced text`,
or even more complex elements like blockquotes and lists:

> This is a quotation.

1. List item One
2. A second item
3. Third time's a charm
```

As you will notice, this text is both easy to read — even in its “raw” form — and easy to write. That’s why a lot of the software you use everyday supports it. For example, you can use Markdown in…

* … Discord messages
* … WhatsApp
* … many forums
* … GitHub
* … Slack
* … and more.

To get a quick start to Markdown syntax, we highly recommend the guide from [Learn X in Y Minutes](https://learnxinyminutes.com/markdown/). The guide is available in many languages, and everything you see there is supported in Zettlr. But there is more.

## Common Shortcuts for Formatting Text

Most of the time, you don’t have to type out all the formatting characters to make text, say, bold. Zettlr incorporates many common keyboard shortcuts for elements, and some make the process even simpler!

Here is a list of some common shortcuts and how they work in Zettlr:

| Shortcut                                                       | Description                  |
|----------------------------------------------------------------|------------------------------|
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>B</kbd>                    | Bold                         |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>I</kbd>                    | Italic                       |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>K</kbd>                    | Insert link.                  |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>   | Insert image                 |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>T</kbd>                    | Create task-list             |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>   | Toggle comment               |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd>     | Copy with formatting         |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>V</kbd>                    | Paste with formatting        |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>   | Paste as plain               |

There are many more available shortcuts. You can find all in the [corresponding reference page](../reference/keyboard-shortcuts.md).

## Zettlr’s Markdown Dialect

Unfortunately, there is not “one” Markdown specification that would define every element you may ever need. Historically, different companies and software products have adopted Markdown at various time points throughout history, and implemented custom elements wherever necessary.

This has led to the formation of various so-called “dialects” of Markdown.

Zettlr supports one of the most comprehensive and all-encompassing dialects, provided by the tool Zettlr uses to export and import files: Pandoc.

In comparison to other dialects, the Pandoc dialect includes out-of-the-box support for many elements that academics need, including, but not limited to:

* Complex tables
* Figures
* Footnotes
* Citations and cross-references
* … and more

!!! note

	While Markdown dialects are, for the most part, intercompatible, this is not always the case. Some dialects may, for example, not support citation syntax, or use a slightly different way to create tables. If you want to write Markdown for a specific system, always make sure to check which elements that system supports.

## Special Elements in Zettlr Markdown

In this section we introduce you to special syntax that works in Zettlr (and, by extension, Pandoc), but not necessarily in other dialects.

### Footnotes

The most important addition to the common Markdown syntax are footnotes. Footnotes heavily borrow from the syntax for defining links.

To define a regular footnote, you would do the following:

```markdown
This is some text.[^1]

[^1]: And this is the footnote text.
```

Instead of numbers, you can also use letters and words, e.g., `[^a custom label]`. However, Zettlr assumes that, most of the time, you want simple numerical footnote labels. Therefore, when you stick to a simple footnote numbering scheme, Zettlr will automatically ensure that all your footnotes remain correctly numbered.

!!! tip

	Regardless of what labelling system you choose for your footnotes, the only important part is that each label must be unique. Whenever you export your files, the footnotes will be correctly numbered ascending, regardless of what your labels look like.

You can also define footnotes inline, if you don’t want to create two elements. To do so, you would place the circumflex symbol (`^`) in front of the square bracket:

```markdown
This is some text.^[I am an inline footnote.]
```

As you can see, the primary difference to regular links is the usage of circumflex symbols.

### Citations

The second-most significant custom element that is not necessarily supported by other Markdown dialects are citations. Zettlr is an academic Markdown editor and as such treats citations as first-class citizens.

Inserting citations is straight forward:

```markdown
This is some text [see @Citekey, p. 123].
```

As you can see, adding citations involves merely writing out what you wish to cite, with one crucial difference: Instead of literally typing “Author, Year” you need to provide a citation ID, or Citekey. For more information on what Citekeys are, and how to connect your reference manager with Zettlr, please [see the documentation page on citations](../core/citations.md).

### Element Attributes

A third custom element supported by Zettlr is element attributes. Zettlr allows you to specify a bunch of additional properties for any element. Some of those will be directly parsed and applied by Zettlr (such as image heights and widths), while others are merely used to apply custom styles during export.

To add attributes, you’ll need to add them surrounded by curly brackets *after* the element. Often, the attributes need to follow immediately to the element, sometimes a space between the element and its attributes is required. For more information on which elements support attributes, please see [the Pandoc documentation](https://pandoc.org/MANUAL.html#extension-attributes).

For example, take the following example that restricts the size of an image:

```markdown
This is some text.

![This is an image](image.png){width=50% height=700px}
```

Various elements support various attributes. In all cases, you can add arbitrary attributes that will be passed to the exported file. But some attributes have special meanings.

Here is a non-complete list of such special attributes:

```markdown
# Heading {-}

A heading with the attribute "-" will not be numbered, even if
the exporter is configured as such.

![This is an image](image.png){width=50% height=700px}

Any image supports "width" and "height" properties.
These properties are supported by Zettlr directly.

The following is only valid for Beamer slides to create
a two-column layout. It uses Pandoc Divs (see below).

:::::::::::::: {.columns}
::: {.column width="40%"}
Slide contents on the left side
:::
::: {.column width="60%"}
Slide contents on the right side
:::
::::::::::::::

```

### Native Spans and Containers

Zettlr also allows the specification of arbitrary spans and containers so that you can supply custom elements with unusual styles. Any content in brackets that is neither a valid footnote nor a valid link will be treated as a span of text if you provide attributes.

For example, you can underline text by using the following syntax: `[underlined text]{.underline}`. Likewise, you can use small caps: `[SMALL CAPS]{.smallcaps}`.

To style entire blocks of text, you can use what Pandoc calls “Native Divs.” Native divs are simply containers that can be used to provide styling to your blocks in output. Above, we have shown you how use them in order to provide a two-column layout for Beamer slides.