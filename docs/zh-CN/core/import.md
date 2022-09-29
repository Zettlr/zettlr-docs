# Importing files

Zettlr can import a large variety of files into Markdown so that you can work with these using the app. The process works straightforward: Simply select "File" -> "Import" and choose all the files you would like to import. Zettlr will then convert them one by one from whichever format they are in.

The app will look at the file extensions of the file to determine the source format. This is important because each file format has different quirks and features, and Zettlr tries to treat each format well. In case Zettlr complains about a file, it might help to rename it to a common extension.

Every file will be imported into the **currently active directory**, so make sure to select the appropriate directory prior to importing them. This is meant as a convenience so you can save a few clicks.

> Note that you can finetune the importer by modifying its defaults files. For example, by default Zettlr will direct Pandoc to extract images and other media files from Word documents into an asset directory so that you get to keep those media files. To see how you can control the importing process, have a look [at the defaults files documentation](defaults-files.md)
