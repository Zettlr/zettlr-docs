# Exporting in Zettlr

Exporting files is an important interface between your notes and other people. With the export option, you can:

1. Preview a file, for instance as HTML, and also print it. (Printing a note using `Cmd/Ctrl+P` will internally export the note to HTML.)
2. Export it to a format with which other people can work, such as Word or OpenDocument files.
3. Export it to PDF to submit it (such as seminar papers) or, also, print it.

> Zettlr depends on Pandoc to export to anything other than HTML, and additionaly on LaTeX to export to PDF. Please refer to the setup guides to install [Pandoc](../installing-pandoc.md) and [LaTeX](../installing-latex.md) on your computer.

## Exporting files

There are two ways you can export files with Zettlr: Single file exports, and project exports. The single page export is located in the toolbar and can be opened with `Cmd/Ctrl+E`. It allows you to export in a variety of formats (the full name is shown on mouse over). The shutter-icon reveals the different themes available for the built-in revealJS-export.

![The export](../img/export.png)

The second method to export files is to export whole [projects](../academic/projects.md). You can export a project by right-clicking the project directory, and choosing the export option.

> Note that exporting to PDF may yield errors in the form of `file <name>.sty not found`. These can be resolved by installing the missing LaTeX packages. Please refer to, e.g., [this guide](https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages) on how to install additional LaTeX packages.

## Choosing the Destination

Zettlr needs to know where to store your exported files. There are two options that you have: exporting them to your **temporary directory**, or to the **file's directory**. Both have their advantages and disadvantages.

> You can set the corresponding [setting](../reference/settings.md) in the Export-tab.

Exporting to the temporary directory allows you to export a file multiple times without you having to worry to remove the file again afterwards, because your temporary directory is regularly emptied by your computer. As Zettlr opens the file immediately with the default application (e.g. Word for `.docx`-files), you can use the "Save as …"-option to save the file to another location as soon as you are happy with the result.

If you don't worry about having exported files in between your Markdown files, you can also tell Zettlr to save the file in your current directory. Please note that Zettlr will always overwrite exported files without asking for a confirmation.

## Customizing Exports

The default templates Zettlr ships with are made to provide a good first impression while being compatible, but as you get more adept in working with Zettlr, you may wish to customize the way the files are layouted. There is a [comprehensive guide on templating](../academic/custom-templates.md) with Zettlr in the documentation.
