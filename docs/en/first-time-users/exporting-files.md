# Exporting Files

Until now, you have seen how to set up your workflows, creating files, and migrating your existing files to Markdown. The final, common step that you may wish to perform while using Zettlr is to export your documents into various export formats.

Zettlr can export all of your files in a variety of ways, many of which are built-in, and all of which are fully customizable.

## Exporting a Single File

The most common use-case is to export a single file. For example, you may write an application cover letter, some reflection paper for class, or meeting minutes that you need to send to your coworkers.

Before exporting a file, make sure the correct file has focus. This is especially important if you utilize the split-view and have multiple documents visible. To do so, click inside the correct document. This will focus it and ensure this is the file you are about to export.

Exporting a single file is straight-forward, and can be done by one of three ways:

1. Press <kbd>Cmd/Ctrl</kbd>+<kbd>E</kbd> to open the export popover
2. Click the export toolbar icon
3. Select “File” → “Export…”

Any of these methods will open the export popover, a small floating window below the export toolbar button that allows you to configure your export.

![export_popover.png](../img/export_popover.png)

The popover shows you the current filename above, which helps you confirm the right file will be exported.

The first setting you can choose is the export profile to use. The “Format” dropdown shows you a list of all profiles currently installed for Zettlr. It shows first the name of the profile, and in braces afterward it shows the target format.

Next, you can select where the exported file will end up. You can choose between three options:

1. “Temporary directory”: This will export the file to the temporary directory. This is great if you don’t want to keep the exported file, and simply want to take a quick look at what it will look like.
2. “Current directory”: This will export the file into the same folder where the Markdown file is in. So if you want to export “my-file.md,” and decide to export to PDF, it will create a new file “my-file.pdf” in the same folder.
3. “Select directory”: This will prompt you to pick a folder after you click “Export”

!!! tip

	Both the last-used export profile and your directory setting are remembered, so you only have to click "Export" the next time you want to export using the same settings.

## Special Export Formats

Besides allowing you to export to a great variety of formats, Zettlr also allows you to export to a set of special formats. Here we explain what these are and what caveats apply.

### PDF

Exporting as a PDF is probably the most common use-case. However, PDF is also the most complex target format. To export regular, fully-featured PDF files, you will need a LaTeX installation on your computer. If you do not yet have LaTeX on your computer, [follow our guide to do so](../getting-started/installing-latex.md).

If you do not want to set up LaTeX, or cannot use it due to any other reason, you can also utilize the **Simple PDF** export. This profile also creates a PDF, but avoids LaTeX entirely. What Zettlr will do in this case is export your file to HTML, and then use Chrome’s “Print Website” dialog to export that HTML file to PDF.

!!! note

	Zettlr can do so, because it is built on Electron, which essentially consists of the Google Chrome browser.

### TextBundle and TextPack

Another special format Zettlr supports is TextBundle and TextPack. [TextBundle](https://textbundle.org/) is a custom format to share Markdown files. It creates a folder that contains both your Markdown file as well as any images that you reference within the Markdown file. You can use this format to create standalone folders that contain everything someone else needs to view your file.

TextPack is the same as TextBundle, but in a ZIP-container, so that it is easier to share it via, e.g., Email.