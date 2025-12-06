# YAML Front Matter

Like Pandoc, Zettlr supports YAML front matters for your Markdown files. A [YAML front matter](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block) is a series of meta-variables describing information of the document that normally is not part of the text contents themselves, such as authors, keywords, and a title.

YAML front matters can be defined at the beginning of a file, by starting on the first line with three dashes (`---`) and ending the front matter either with three dashes or three dots (the former variant is more common). They contain valid YAML and can be used to define arbitrary variables. They come in handy for a variety of use cases.

!!! tip

    For a more concise documentation of what you can do with YAML front matters, please refer to the [Pandoc documentation](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).

## Defining a YAML Front Matter

YAML front matters can be defined anywhere in the document, but it is most common to define a block of metadata at the beginning of a document. Zettlr supports syntax highlighting for YAML front matter blocks that occur at the beginning of the file.

Such a front matter must begin with three dashes (`---`) on the very first line of the document, and end with three dashes or three dots on a single line. In between, Zettlr will apply YAML syntax highlighting. For a full guide on how to write YAML, [view the specification](https://yaml.org/spec/1.2/spec.html).

A valid YAML front matter for a Pandoc export could look like this:

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

!!! warning

    Indentation matters for YAML code. You must use spaces, not tabs, and pay special attention to it.

## Front Matters versus Defaults Files

Front matters can be used to override defaults set by either Pandoc internally or one of the defaults files which Zettlr uses to export your files. For more information, make sure to read the [documentation on defaults files](defaults-files.md) to avoid confusion!

## Important Front Matter Variables

The front matter serves to hold a lot of useful information for Zettlr and Pandoc alike. With such a front matter, you can control many aspects of how your document will be rendered, such as the locale to be used, or a list of references that you do not cite within the main text. Zettlr can understand a subset of these variables to show you additional information across the program.

For a full list of available variables and more instructions on how to use these variables, refer to the [section on metadata blocks](https://pandoc.org/MANUAL.html#metadata-blocks) in the Pandoc manual as well as the [manual for Pandoc citeproc](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md).

!!! tip

    On this page we only list certain important variables for use with Pandoc, but YAML front matters are also supported by other engines, such as the [Jekyll static site generator](https://jekyllrb.com/docs/front-matter/). Therefore, if you plan to use a different tool to convert your Markdown files, you should consult their documentation for a list of available variables.

!!! note

	Often, the format of variables can change, even between templates. For example, the `author` variable may either take a list of strings, or objects with names, affiliations, and email addresses. Always consult the template or engine documentation to learn about the correct syntax.

### `title`

Contains the final title of the document. This is useful as headings of level 1 are, strictly speaking, not meant to denote the *title* of a document, but rather the topmost order of sections in the document.

This variable will override the filename in various places where Zettlr displays the filename (such as the file list and the document tab bar).

### `author`

Use this field to specify the authors of a file. This is a list of either simple names, or author names with affiliations. This variable will be used, for instance, to generate a title page on PDF exports.

Both of the following variants can be correct and both are used in different templates:

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

!!! note

    Note the indentation of the property `affiliation`: It aligns with the `name` property.

### `keywords` / `tags`

The `keywords` variable contains keywords, or tags, that can be used by Pandoc. Many other engines also support the variable `tags`. Zettlr recognizes both properties and will treat both as valid descriptions of tags for your file.

These properties can also be used to circumvent one restriction of the common in-text tags Zettlr supports: You can define arbitrary keywords that can also include spaces. These keywords are recognized by Zettlr and added to the list of tags of the file.

### `lang`

This variable controls the locale to use during export (citations, quotation marks and punctuation). By default, Pandoc will use `en-US`. For instance British English punctuation will be converted to US English punctuation standards during the export process unless `lang: en-GB` is set.

It is also useful for controlling in which language the references of your file will show up.  If you do not set this variable, the language of references will be taken from the default language field in the CSL style used, which might be undesirable in case your text is in a different language.

Valid values for this field are [BCP-47](https://tools.ietf.org/html/bcp47) compatible language identifiers (e.g., `en-US`, `de-AT`, or `it`).

### `bibliography`

This variable allows you to specify a bibliography file only for the given file. It can be either a string (single file) or a list of several files.

Zettlr will automatically switch to that bibliography for suggesting cite keys and rendering the bibliography in the sidebar. However, note that if you use multiple libraries, Zettlr will only use the first one, as it cannot merge multiple files.

### `nocite`

This variable can be used to include works in your list of reference that have not been actually cited in your document. Place their respective citation keys in this variable. Remember to enclose the value in quotes if it contains an `@` (as most citekeys do) as otherwise it will be interpreted as an instruction to Pandoc and other variables in the front matter may not work as expected (e.g. use `nocite: '@citekey'`).

### `reference-section-title`

Use this variable to define a heading for your list of references. This has the same effect as when you end your document with a heading (e.g., `## References`).

!!! note

    It might make sense to define this variable in one of the export defaults files, since Pandoc will not add such a heading by default. In general, remember that all of the variables that are described here can also be defined in a defaults file so they apply to *every* such export.

### `notes-after-punctuation`

This can be used to direct citeproc to move footnotes with your citations after punctuation (e.g., if you cite `something [@citekey].`, it will become `something.[^1]` in the output).

## Adding Variables to a Profile

As indicated earlier, any variable that you can define in a front matter can also be defined in a profile. This way, the variables are used for any document that you export with that profile.

However, due to historical reasons, it is not necessarily straight forward to do so. Specifically, the following caveats apply:

* Some variables, such as `bibliography` are their own proper configuration keys in the profile.
* Most variables must be defined under the `metadata` key
* Some variables may need to be defined under a different, `variables` key.