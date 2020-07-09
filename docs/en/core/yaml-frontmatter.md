# YAML Frontmatter

Like Pandoc, Zettlr supports YAML frontmatters for your Markdown files. A YAML frontmatter, in Pandoc's terms ["metadata block"](https://pandoc.org/MANUAL.html#metadata-blocks) is a series of meta variables that can be defined to describe information of the file that normally is not part of the text contents themselves, such as authors, keywords, and the title.

YAML frontmatters can be defined at the beginning of a file, by starting on the first line with three dashes (`---`) and ending the frontmatter either with three dashes or three dots (the latter variant is more common).

> Tip: If you have AutoCorrect enabled, Zettlr will attempt to replace the three ending dots with an ellipsis character, breaking the syntax highlighting. To prevent this, press `Shift+Enter` when creating a new line (if you use the LibreOffice AutoCorrect mode).

They contain valid YAML and can be used to define arbitrary variables. They come in handy for a variety of use cases.

## Defining a YAML frontmatter

YAML frontmatters can be defined anywhere in the document as it is common for Pandoc use-cases to concatenate multiple input files into one output file (Zettlr does this during project exports). Zettlr supports syntax highlighting for YAML frontmatter blocks that occur at the beginning of the file.

Such a frontmatter must begin with three dashes (`---`) on the very first line of the document, and end with three dashes or three dots on a single line. In between, Zettlr will apply YAML syntax highlighting. For a full guide on how to write YAML, [view the specification](https://yaml.org/spec/1.2/spec.html).

A valid YAML frontmatter for a Pandoc export could look like this:

```yaml
title: "Your document's title"
keywords:
  - A keyword
  - Another keyword
authors:
  - The Zettlr Team
```

## Frontmatter variables

The frontmatter serves to hold a lot of useful information for both Pandoc and Pandoc citeproc. With such a frontmatter, you can control many aspects of how your document will be rendered, such as the language of the list of references. Zettlr currently supports a subset of these variables. The support for certain variables such as `nocite` or `lang` will increase in the future.

For a full list of available variables and more instructions on how to use these variables, refer to the [section on metadata blocks](https://pandoc.org/MANUAL.html#metadata-blocks) in the Pandoc manual as well as the [manual for Pandoc citeproc](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md).

> Tip: On this page we only list certain important variables for use with Pandoc, but YAML frontmatters are also supported by other engines, such as the [Jekyll static site generator](https://jekyllrb.com/docs/front-matter/). Therefore, if you plan to use a different tool to convert your Markdown files, you should consult their documentation for a list of available variables.

### Variable `title`

Contains the final title of the document. This is useful as headings of level 1 are, strictly speaking, not meant to denote the _title_ of a document, but rather the topmost order of sections in the document.

This variable will override the filename in various places where Zettlr displays the filename (such as the file list and the document tab bar).

### Variable `author`

Use this field to specify the authors of a file. This is a list of either simple names, or author names with affiliations. This variable will be used, for instance, to generate a title page on PDF exports.

Both of the following variants would be correct:

```yaml
author:
  - Author one
  - Author two
author:
  - name: Author one
    affiliation: University X
  - name: Author two
    affiliation: University Y
```

> Note the indentation of the property `affiliation`: It aligns with the `name`-property. Indentation of YAML values is important and thus you should take care.

### Variable `keywords`

The `keywords`-variable contains keywords, or tags, that can be used by Pandoc to fill in, e.g., the PDF keywords field (note: if you use the default template for PDF exports, the PDF keywords field is controlled in the [PDF settings](../reference/settings.md#pdf-preferences)).

These keywords can be used to circumvent one restriction of the common in-text tags Zettlr supports: You can define arbitrary keywords that can also include spaces. These keywords are recognized by Zettlr and added to the list of tags of the file.

### Variable `lang`

This variable controls the language output for Pandoc citeproc. This is most useful for controlling in which language the references of your file will show up.

If you do not set this variable, the language of references will be taken from the default language field in the CSL style used, which might be undesirable in case your text is in a different language.

Valid values for this field are [BCP-47](https://tools.ietf.org/html/bcp47) compatible language identifiers (e.g. `en-US`, `de-AT`, or `it`).

### Variable `nocite`

This variable can be used to include works in your list of reference that have not been actually cited in your document. Place their respective citation keys in this variable.

### Variable `reference-section-title`

Use this variable to define a heading for your list of references. This has the same effect as when you end your document with a heading (e.g. `## References`).

### Variable `notes-after-punctuation`

This can be used to direct citeproc to move footnotes with your citations after punctuation (e.g. if you cite `something [@citekey].`, it will become `something.[^1]` in the output).
