# Assets Manager

Zettlr 2.0 introduced the new assets manager which allows you to manage all static assets that are stored as files in your user data directory. Among these are the new defaults files, your custom CSS, and snippets. While it is possible to edit these files externally, the assets manager gives you a comprehensive means to do so from within the app itself.

![The assets manager](../img/assets_manager.png)

You can access the assets manager via 'Zettlr' &rarr; 'Assets Manager' (macOS) or 'File' &rarr; 'Preferences' &rarr; 'Assets Manager' (Windows/Linux).

The assets manager allows you to edit your files using correct syntax highlighting and makes it easier than external editors. To see what you can edit and how to do so productively, see the corresponding parts of the documentation:

* [Defaults files](defaults-files.md)
* [Custom CSS](custom-css.md)
* [Snippets](snippets.md)

## How to Adapt the PDF Preferences

Since 2.0, there is no dedicated PDF Preferences dialog anymore. Rather, you can now fine tune those settings which were present in that dialog along side a magnitude of more settings. To simply restore the old PDF preferences and then adapt them, you can easily copy the following snippet into the `variables`-section of the exporting defaults file for PDF documents:

```yaml
# Omitted content of the defaults file ...
variables:
  # mainfont and sansfont work for the default pdf-engine "xelatex"
  # Should you choose to use pdflatex, you can set the font using the property
  # "fontfamily". For more information, see https://pandoc.org/MANUAL.html#fonts
  mainfont: "Times New Roman"
  sansfont: "Arial"
  linestretch: 1.3 # 1.3 means 130% linespacing
  papersize: a4 # Can also be a5, letter, legal, etc.
  margin-left: 2cm
  margin-right: 2cm
  margin-top: 2cm
  margin-bottom: 2cm
# Further omitted content ...
```

All variables that you can set here are [documented in the Pandoc manual](https://pandoc.org/MANUAL.html#variables).

> Tip: You can define every variable also within the YAML frontmatter of any file. The only difference is that there you simply use the properties *without* nesting them under `variables`.
