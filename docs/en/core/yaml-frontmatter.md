# YAML Frontmatter

Like Pandoc, Zettlr supports YAML frontmatters for your Markdown files. A [YAML frontmatter](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block) is a series of meta variables that can be defined to describe information of the file that normally is not part of the text contents themselves, such as authors, keywords, and the title.

YAML frontmatters can be defined at the beginning of a file, by starting on the first line with three dashes (`---`) and ending the frontmatter either with three dashes or three dots (the former variant is more common). They contain valid YAML and can be used to define arbitrary variables. They come in handy for a variety of use cases.

> For a more concise documentation of what you can do with YAML frontmatters, please refer to the [Pandoc documentation](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).

## Defining a YAML frontmatter

YAML frontmatters can be defined anywhere in the document as it is common for Pandoc use-cases to concatenate multiple input files into one output file (Zettlr does this during project exports). Zettlr supports syntax highlighting for YAML frontmatter blocks that occur at the beginning of the file.

Such a frontmatter must begin with three dashes (`---`) on the very first line of the document, and end with three dashes or three dots on a single line. In between, Zettlr will apply YAML syntax highlighting. For a full guide on how to write YAML, [view the specification](https://yaml.org/spec/1.2/spec.html).

A valid YAML frontmatter for a Pandoc export could look like this:

```yaml
---
title: "Your document's title"
keywords:
  - A keyword
  - Another keyword
author:
  - The Zettlr Team
---
```

> **Attention**: According to the YAML specification, tab (tabulator) characters cannot be used for indentation. For your YAML frontmatter to be valid, use spaces for indentation.

## Frontmatters versus Defaults files

Frontmatters can be used to override defaults set by either Pandoc internally or one of the defaults files which Zettlr uses to export your files. For more information, make sure to read the [documentation on defaults files](defaults-files.md) to avoid confusion!

## Frontmatter variables

The frontmatter serves to hold a lot of useful information for both Pandoc and Pandoc citeproc. With such a frontmatter, you can control many aspects of how your document will be rendered, such as the locale to be used, or a list of references that you do not cite within the main text. Zettlr can understand a subset of these variables to show you additional information across the program. The support for variables such as `nocite` is likely going to increase further in future versions.

For a full list of available variables and more instructions on how to use these variables, refer to the [section on metadata blocks](https://pandoc.org/MANUAL.html#metadata-blocks) in the Pandoc manual as well as the [manual for Pandoc citeproc](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md).

> Tip: On this page we only list certain important variables for use with Pandoc, but YAML frontmatters are also supported by other engines, such as the [Jekyll static site generator](https://jekyllrb.com/docs/front-matter/). Therefore, if you plan to use a different tool to convert your Markdown files, you should consult their documentation for a list of available variables.

### `title`

Contains the final title of the document. This is useful as headings of level 1 are, strictly speaking, not meant to denote the _title_ of a document, but rather the topmost order of sections in the document.

This variable will override the filename in various places where Zettlr displays the filename (such as the file list and the document tab bar).

### `author`

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

> Note the indentation of the property `affiliation`: It aligns with the `name` property. Indentation of YAML values is important and thus you should take care.

### `keywords` / `tags`

The `keywords` variable contains keywords, or tags, that can be used by Pandoc. Many other engines also support the variable `tags`. Zettlr recognises both properties and will treat both as valid descriptions of tags for your file.

These properties can also be used to circumvent one restriction of the common in-text tags Zettlr supports: You can define arbitrary keywords that can also include spaces. These keywords are recognized by Zettlr and added to the list of tags of the file.

### `lang`

This variable controls the locale to use during export (citations, quotation marks and punctuation). By default, Pandoc will use `en-US`. For instance British English punctuation will be converted to US English punctuation standards during the export process unless `lang: en-GB` is set.

It is also useful for controlling in which language the references of your file will show up.  If you do not set this variable, the language of references will be taken from the default language field in the CSL style used, which might be undesirable in case your text is in a different language.

Valid values for this field are [BCP-47](https://tools.ietf.org/html/bcp47) compatible language identifiers (e.g., `en-US`, `de-AT`, or `it`).

### `bibliography`

This variable allows you to specify a bibliography file only for the given file. It can be either a string (single file) or a list of several files.

Zettlr will automatically switch to that bibliography for suggesting cite keys and rendering the bibliography in the sidebar. However, note that if you use multiple libraries, Zettlr will only use the first one, as it cannot merge multiple files.

### `nocite`

This variable can be used to include works in your list of reference that have not been actually cited in your document. Place their respective citation keys in this variable. Remember to enclose the value in quotes if it contains an @ (as most citekeys do) as otherwise it will be interpreted as an instruction to Pandoc and other variables in the frontmatter may not work as expected (e.g. use `nocite: '@citekey'`).

### `reference-section-title`

Use this variable to define a heading for your list of references. This has the same effect as when you end your document with a heading (e.g. `## References`).

> Note: It might make sense to define this variable in one of the export defaults files, since Pandoc will not add such a heading by default. In general, remember that all of the variables that are described here can also be defined in a defaults file so they apply to _every_ such export.

### `notes-after-punctuation`

This can be used to direct citeproc to move footnotes with your citations after punctuation (e.g., if you cite `something [@citekey].`, it will become `something.[^1]` in the output).
