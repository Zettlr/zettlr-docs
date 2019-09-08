# Exporting in Zettlr

Exporting files is an important interface between your notes and other people. With the export option, you can:

1. Preview a file, for instance as HTML, and also print it. (Printing a note using `Cmd/Ctrl+P` will internally export the note to HTML.)
2. Export it to a format with which other people can work, such as Word or OpenDocument files.
3. Export it to PDF to submit it (such as seminar papers) or, also, print it.

## Preparing exports

All exports in Zettlr, are done using the free software packages Pandoc and LaTeX. Pandoc is necessary for all exports, because everything will first be converted by it. LaTeX is only necessary for PDF export.

> If Pandoc is not installed on your system, you will still be able to export to HTML. In that case, Zettlr will internally parse the file using `Showdown.js`, but this library does not support as many features as Pandoc. Please refer to the [setup guide](../install.md)  to install Pandoc and LaTeX on your computer.

Zettlr will make reasonable efforts to locate both packages. If the app could not locate the binaries, it will throw an error.

**In case you have installed both packages, but Zettlr still won't export**, take a look at your Preferences. In the "Advanced"-tab, there are two text fields that allow you to enter the paths to the Pandoc-executable and the "XeLaTeX"-executable. Simply put them in there, restart, and then it should work. If not, please let us know!

![The advanced settings tab](../img/settings_advanced.png)

## Options for exporting

Starting from version `0.17`, Zettlr provides you with a plethora of options to export documents according to your needs. They are split in two different dialogs. The general options for exporting are located within the preferences window. Open it, and navigate to the "Export"-tab. There you have two sections letting you customise the exports. First, you can select in which directory the resulting files should be stored.

- Selecting the temporary directory will make Zettlr save your export documents to the temporary directory. The temporary directory is a special folder on every operating system that is used for temporary files and is expunged as soon as a file is not needed anymore. This is good if you don't want to store exported files anywhere on your system. If you export your files to the temporary directory, you will have to save them explicitly somewhere else to make it persistent.
- Choosing the current working directory (cwd) makes Zettlr save your exported documents to the currently selected directory. This way, you don't have to explicitly save your documents out of the temporary directory to make them persistently accessible. **Please note that the exporting engine will not ask for your confirmation if it is about to overwrite a file!**

The second section features options to tell Zettlr what to do with the Zettelkasten-elements it supports. If you want to know what these elements are for, please consult the [respective section of the docs](../academic/zkn-method.md). This section enables you to retain or remove those elements on export, because under most circumstances they are only useful and needed within the app itself, and should not appear in exported documents.

A second section that contains preferences for exports is located in the `PDF Preferences` dialog. You can open it using the menu (it is located directly under the regular preferences menu item) or using the shortcut `Cmd/Ctrl+Alt+,`. This dialog features options for PDF exports. You can choose a bunch of formatting options, such as the paper type, page margins, the font or font size, and whether or not you want page numbers, and if so, which ones. Most exporting options will be self-explanatory and resemble those given in standard word processors.
