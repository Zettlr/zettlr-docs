# Selecting the PDF Engine

While Zettlr can export to almost any format using the embedded Pandoc binary, exports to PDF are much more complex, and as such require an additional program to succeed.

Across this entire documentation and the app, we always suggest LaTeX, because it is still the most powerful and easy accessible solution around, albeit competitors like Typst are quickly becoming strong contenders.

Zettlr ships with an export profile by default that uses LaTeX — more specifically, the XeLaTeX binary — to export to PDF. However, depending on your needs, you can change the PDF engine that is used.

## The Default PDF Profile

First, let us walk through the relevant positions in the default PDF export profile, the “XeLaTeX PDF” one. The relevant settings here are the following:

```yaml
# Other properties omitted for brevity
reader: markdown
writer: pdf
pdf-engine: xelatex
```

This instructs Pandoc, when you use this profile, to convert a Markdown document into a PDF file using the XeLaTeX compiler as the PDF engine. Depending on the value of `pdf-engine`, Pandoc will use different programs to create the PDF file. Therefore, you can simply change this property to instruct Pandoc to use a different PDF engine.

## Changing the PDF Engine

As of the time of writing (January 2026), Pandoc supports the following PDF engines: `pdflatex`, `lualatex`, `xelatex`, `latexmk`, `tectonic`, `wkhtmltopdf`, `weasyprint`, `pagedjs-cli`, `prince`, `context`, `groff`, `pdfroff`, and `typst`.

!!! warning

	Since all of these engines are external programs, you need to make sure you have the engine of your choice installed on your computer. Refer to their corresponding documentation to see how to install them. If you select an engine that is not installed, Zettlr will show you an error message.

You can change the PDF engine directly in the XeLaTeX PDF profile. However, we recommend against doing so, since this will lead to confusion if the profile called “XeLaTeX PDF” suddenly requires, say, Typst to be installed.

Instead, we recommend you create a copy of this profile. You can do so quickly, by renaming the profile accordingly. For example, if you wish to use Typst instead, perform the following steps:

1. In the [assets manager](./assets-manager.md), navigate to the “Export” tab, and select the “XeLaTeX PDF” profile.
2. Click into the name text field, and enter a new name for the profile based on the PDF engine you want to use, e.g. “Typst PDF.yaml.”
3. Click “Rename file.”
4. Since the XeLaTeX PDF profile is protected, this will not rename the file, and instead create a duplicate.
5. In this duplicate, change the value of `pdf-engine` to `typst` (or whichever engine you want to use).
6. Adjust other settings as desired.

From now on, you can export using the selected PDF engine by exporting using this new profile.