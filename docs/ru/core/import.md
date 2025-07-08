# Importing files

If you are en route to migrating from a Word processor such as Microsoft Word or LibreOffice, you will have a set of `docx` or `odt`-files that contain valuable content. However, Zettlr cannot open and read those files, because it is a Markdown-based editor.

In order to make these files accessible for Zettlr, you'll need to import them.

The process is straightforward: First, select the folder into which you would like to import the files from the file manager. Then, select "File" &rarr; "Import files" and choose all the files you would like to import. Zettlr will then convert them one by one from whichever format they are in into Markdown.

Afterwards, they should show up in the chosen folder so that you can immediately begin to work on them.

## Supported File Types

Zettlr utilizes Pandoc to import files, and therefore we can support a wide variety of different files. The main requirement for importing a file is that Pandoc supports the file format, and that it can be converted into a Markdown file.

!!! note

    It may be that your computer does not show some or all of these file extensions. You can adapt the settings of your file browser to view all file extensions.

Zettlr will look at the file extension to determine the type of document and select the appropriate import workflow. Here is the list of file type extensions currently supported:

| File extensions      | Description                            |
|----------------------|----------------------------------------|
| `*.md`, `*.markdown` | Markdown documents                     |
| `*.rmd`              | RMarkdown files                        |
| `*.mdx`              | Markdown files with JSX                |
| `*.docx`, `*.doc`    | Microsoft Word Documents               |
| `*.odt`              | OpenDocument files                     |
| `*.rtf`              | Rich-Text Format documents             |
| `*.html`, `*.htm`    | HTML documents                         |
| `*.tex`, `*.latex`   | LaTeX documents                        |
| `*.epub`, `*.fb2`    | E-book files                           |
| `*.wiki`             | Various Wiki-formats (MediaWiki, etc.) |
| `*.org`              | ORGmode documents                      |
| `*.rst`              | reStructuredText documents             |
| `*.docbook`          | DocBook files                          |
| `*.textile`          | Textile documents                      |
| `*.t2t`              | txt2tags documents                     |
| `*.muse`             | Muse documents                         |
| `*.opml`             | OPML outline documents                 |
| `*.haddock`, `*.hs`  | Haskell source code documentation      |
| `*.roff`, `*.ms`     | Various "man pages" formats            |
| `*.csv`              | Comma-Separated lists                  |
| `*.ipynb`            | Jupyter Notebook documents             |
| `*.jira`             | Jira issues                            |

!!! note

    Zettlr will search for the first import profile that has the appropriate reader to understand some file. Therefore, if you have multiple Pandoc profiles installed that support the same reader, be mindful of the sorting order of the profiles.

## Working with Co-Workers

The same process also works if you work with colleagues who work exclusively with Word: For them, you can export Markdown files to `docx` and have them, e.g., comment on your files. After they send you back your file, you can re-import it again to Zettlr.

You can finetune how the importer works by modifying its profile. For example, by default Zettlr will direct Pandoc to extract images and other media files from Word documents into an asset directory so that you get to keep those media files.

To see how to modify an import profile, have a look [at the defaults files documentation](../advanced/defaults-files.md).
