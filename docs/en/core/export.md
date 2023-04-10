# Exporting in Zettlr

Zettlr allows you to export into many common file formats so that you can share your work with colleagues, friends, and (hopefully!) your publisher. However, Zettlr's export works slightly different than regular exports so you might want to check what happens whenever you export a file into a different format.

> For advanced PDF exports Zettlr will attempt to use LaTeX. While you can also save files to PDF without it, installing LaTeX can be advantageous in various situations. You can see how to install LaTeX in our [guide on installing such a distribution](../getting-started/installing-latex.md).

## Exporting Files

There are two ways you can export files with Zettlr: Single file exports, and project exports. The single page export is located in the toolbar and can be opened with `Cmd/Ctrl+E`. It allows you to export in a variety of formats. After you choose the appropriate format, you can sometimes finetune some options for the specified exporter. You can also select whether to export to the temporary directory or the current file's directory (this setting can also be modified in the preferences).

The second method to export files is to export whole [projects](../academic/projects.md). You can export a project by right-clicking the project directory, and choosing the export option.

> Note that exporting to a LaTeX PDF may yield errors in the form of `file <name>.sty not found`. These can be resolved by installing the missing LaTeX packages. Please refer to, e.g., [this guide](https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages) on how to install additional LaTeX packages.

## Choosing the Destination

Zettlr needs to know where to store your exported files. There are two options that you have: exporting them to your **temporary directory**, or to the **file's directory**. Both have their advantages and disadvantages.

> You can set the corresponding [setting](../reference/settings.md) in the Export tab.

Exporting to the temporary directory allows you to export a file multiple times without you having to worry about removing the file again afterwards, because your temporary directory is regularly emptied by your computer. As Zettlr opens the file immediately with the default application (e.g., Word for `.docx` files), you can use the "Save as …" option to save the file to another location as soon as you are happy with the result.

If you don't worry about having exported files in between your Markdown files, you can also tell Zettlr to save the file in your current directory.

> Please note that Zettlr will always overwrite exported files without asking for a confirmation. If you add some text to an exported file, **always save it to another location!** It is generally a good idea never to keep files in your temporary directory if you would like to keep them.

## Customizing Exports

There are two general ways of customising your exports, a.k.a. change the appearance of the file. The first is to make use of defaults files. These defaults files specify how Pandoc will export your files and you can modify these to change all your exports. Please see [our documentation on defaults files](defaults-files.md) for a comprehensive guide of using these.

The second option is to use custom templates. The default templates Zettlr ships with are made to provide a good first impression while being compatible, but as you get more apt in working with Zettlr, you may wish to customize the way the files are layouted. There is a [comprehensive guide on templating](../academic/custom-templates.md) with Zettlr in the documentation.
