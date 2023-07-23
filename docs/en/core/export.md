# Exporting

The final step of any writing process is to export your document. Whether you write for a journal, for university, or for your supervisor, at some point, you'll need to hand off a document to a third party for further processing.

> Please see the section on special formats below for an explanation between the two different PDF formats that you can export to.

## Exporting the Current Document

To export your current document, you can press <kbd>Cmd/Ctrl</kbd>+<kbd>E</kbd> or click the "Share" toolbar icon. This will open a small pop-up that allows you to specify your export. You can choose the export format from a dropdown list, and determine if you wish you export to the temporary directory, the file's folder, or if you want to choose a folder.

Then, click on "Export" to start the process. After the export is finished, Zettlr will automatically open the exported file with the program associated with this format (e.g., it will open your PDF reader after exporting to PDF, or your browser after exporting to HTML).

> By default, Zettlr will export to the temporary directory. This is a special folder that is emptied from time to time. This is great if you export a file often to double-check how it will look like, but if you want to retain an exported file, you should immediately "Save as" once the file is open and save the file to a different folder.

## Exporting Projects

If you make use of the [project feature](../advanced/projects.md), exporting works differently. First, you need to right-click the project folder and select "Properties". Then you need to click on "Project Settings…" to open the preferences for this project. From the list of export formats (which is the same list that you see during single file exports), select all you want.

After you selected all formats you need to export to, close the project settings again, right click on the project folder again, and this time choose "Export project". This option will be grayed out if you have no export formats selected.

When you export a project, Zettlr will always export the files into the project directory and, instead of opening all the various files in the corresponding apps, it will show you the project folder after export.

## Customizing Export Profiles

Each export format is powered by so-called "profiles", or "defaults files". These profiles contain settings that apply to every file you export using the profile, that is: they are valid for every export, regardless of which file or project you export.

They are written using the YAML syntax, which you can also use in frontmatters. Since customizing profiles is rather complex, we have collected the [documentation on a separate page](../advanced/defaults-files.md).

## Adding New Profiles

You can also add new profiles. For example, you can add multiple exports to PDF, each of which use a separate template. This is very useful if you need to submit papers to various conferences which each have their own template. By adding those templates into their own respective profiles, you have various conferences available, into whose templates you can export each file.

To see how to add custom templates to profiles, head over to [our page on custom templates](../advanced/custom-templates.md).

## Special Formats: Textbundle, Textpack, and Simple PDF

There are three special formats that work a little bit different: Textbundle, Textpack, and Simple PDF.

Textbundle and Textpack are two formats that you can use to share a Markdown file alongside any images or other assets with other people. It is a standardized format that is recognized by many different apps. [See the official Textbundle website for a list of all apps that support TextBundle](https://textbundle.org/). Since Textbundle and Textpack do not require any conversion of the Markdown syntax, they do not need a profile.

The **Simple PDF** export option is meant for situations in which you cannot install a LaTeX distribution on your computer, for example if you are using a managed company computer. Simple PDF allows you to export a PDF file without the need for LaTeX.

When Zettlr exports to Simple PDF, what it will do is export your file to HTML and then print it using the same process your browser uses to print websites.

> Because Simple PDF converts your files to HTML first, if you want to customize that export, you will have to adapt the HTML template, not the PDF one.
