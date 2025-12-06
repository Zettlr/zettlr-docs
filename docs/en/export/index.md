# Export

Zettlr ships with a powerful exporting ecosystem, primarily powered by Pandoc. This section introduces the system, and how to customize it to your needs.

## Using the Exporter

You can start an exporting process in two ways. You can either export your current document quickly using the single-file exporter. Open the export popover either using the shortcut <kbd>Cmd/Ctrl</kbd>+<kbd>E</kbd>, or by clicking its toolbar icon. From there, customize the export by selecting a profile and a target directory, and click “Export.”

The second way of invoking the exporter is by exporting a project. You can do so by right-clicking a project folder in the file manager and choosing “Export project.” This entry will be disabled if you have not yet selected at least one profile to export the project to.

!!! tip

	Read more on how to invoke the exporter in our guides on [exporting individual files](../first-time-users/exporting-files.md) and for [projects](../file-manager/projects.md).

## Customizing Export Profiles

Each export format is powered by so-called “profiles,” or “defaults files.” These profiles configure how Zettlr will export your files and projects. They can apply specific templates, define certain transformations of the Markdown, and so on.

Profiles are written using YAML syntax, which you can also use in front matters. Since customizing profiles is rather complex, we have collected the [documentation on a separate page](./defaults-files.md).

## Adding New Profiles

You can also add new profiles. For example, you can add multiple exports to PDF, each of which use a separate template. This is very useful if you need to submit papers to various conferences which each have their own template. By adding those templates into their own respective profiles, you have various conferences available, into whose templates you can export each file.

To see how to add custom templates to profiles, head over to [our page on custom templates](./custom-templates.md).

## Special Formats: Textbundle, Textpack, and Simple PDF

There are three special formats that work a bit different: Textbundle, Textpack, and Simple PDF.

Textbundle and Textpack are two formats that you can use to share a Markdown file alongside any images or other assets with other people. It is a standardized format that is recognized by various apps. [See the official Textbundle website for a list of all apps that support Textbundle](https://textbundle.org/). Since Textbundle and Textpack do not require any conversion of the Markdown syntax, they do not need a profile.

The **Simple PDF** export option is meant for situations in which you cannot install a LaTeX distribution on your computer, for example if you are using a managed company computer. Simple PDF allows you to export a PDF file without the need for LaTeX.

When Zettlr exports to Simple PDF, what it will do is export your file to HTML and then print it using the same process your browser uses to print websites.

!!! note

    Because Simple PDF converts your files to HTML first, if you want to customize that export, you will have to adapt the HTML template, not the PDF one.