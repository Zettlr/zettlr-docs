# Importing files

If you are en route to migrating from a Word processor such as Microsoft Word or LibreOffice, you will have a set of `docx` or `odt`-files that contain valuable content. However, Zettlr cannot open and read those files, because it is a Markdown-based editor.

In order to make these files accessible for Zettlr, you'll need to import them.

The process is straightforward: First, select the folder into which you would like to import the files. Then, select "File" &rarr; "Import" and choose all the files you would like to import. Zettlr will then convert them one by one from whichever format they are in.

> The app will look at the file's extension to determine the source format. It is possible to add more importers for other more exotic file formats.

You can finetune how the importer works by modifying its profile. For example, by default Zettlr will direct Pandoc to extract images and other media files from Word documents into an asset directory so that you get to keep those media files.

To see how to modify an import profile, have a look [at the defaults files documentation](defaults-files.md).
