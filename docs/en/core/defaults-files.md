# Defaults Files

Defaults files are a way to define default values for many of the variables that Pandoc uses internally to facilitate both your imports and exports. Defaults files resemble [YAML frontmatters](yaml-frontmatter.md), but are more powerful and apply to all your files instead of just a single one.

Previously, Zettlr would use defaults files internally, but Zettlr 2.0 finally gives you the ability to edit these files yourself.

> Editing these files can be a little bit tricky, so expect to export a test file multiple times before you have got it right. It is a trial & error process. However, Zettlr ships with reasonable default settings, so if you do not have special requirements, you can leave these files as they are.

## What are Defaults Files?

Defaults files are YAML files which contain properties that can be used to control the Pandoc behaviour for a given export or import format. They reside in your user data folder and have the format `<import/export>.<writer/reader>.yaml`, where import/export refers to where the file will be used and writer/reader refers to the format used.

Zettlr requires a certain set of defaults files, since for each export or import it will pass one of these files to Pandoc. As such, when Zettlr is started, it will check for the existence of these required files and create them if necessary.

> The full documentation for what you can do with defaults files can be found in the [Pandoc manual](https://pandoc.org/MANUAL.html#default-files). Make sure to refer to that manual when you edit defaults files.

## Requirements for Defaults Files

The defaults files as used by Zettlr have a certain set of requirements which you must keep in mind when editing them. First, never change the `writer` and `reader` properties. These properties can be set because you could, in theory, use a default file for several conversion strategies. However, since Zettlr allows you to export and import a certain set of files, it is smarter to offer you a range of defaults files where these properties are fixed. If you, for example, exchange a writer and a reader property, Pandoc might complain.

Next, whenever Zettlr imports or exports a file, it will read in the corresponding defaults file and modify it in specific ways. In general, Zettlr will try to only amend the properties you define in a defaults file instead of replacing them. For example, Zettlr will check if you have already defined a bibliography in there, and add your main library to that array so that those citation libraries you have already defined will not be lost. The input and output files, however, will be replaced internally, so defining a few files in there will have no effect.

Other than that, however, you are free to do whatever you need to the defaults files in order to adapt the imports and exports to your liking.

## Which Variable Overwrites Which?

The last question you might be interested to know about is the way all the different variables you can define to control Pandoc interfere with each other. It is paramount to understand how Pandoc determines the final and effective set of parameters which it will then use to facilitate your import or export. In below's graphic, you can see how each import or export is being done.

![Pandoc's internal Variable Resolution](../img/pandoc_variable_resolution.png)

First, Pandoc will load its own internal defaults which are hard-coded into the binary (and which are the reason why you do not have to define _all_ variables every time).

Second, Pandoc will load in the defaults file Zettlr provides it with. Every variable defined in there will replace the default inside Pandoc's configuration.

Third, Pandoc will parse the YAML frontmatter(s) of the file(s) you are currently trying to import or export. These variables can replace those set by the defaults files, but usually not all. You may notice that defaults files can contain a metadata field, and any value in there can generally be replaced by a YAML frontmatter property. Please see the documentation on [YAML frontmatters](yaml-frontmatter.md) for more information.

**Example**: Let us assume you have defined a `title` for all your Word exports in the defaults file for Docx. If you do not use any frontmatter, this variable will be used for each and every export to Docx. But if you specify the `title` property inside a YAML frontmatter, this file – when exported to Docx – will have its own title set.

> One common use-case for defining variables inside a defaults file which you could also define on the level of YAML frontmatters would be the `lang`-property. By default, Pandoc sets the language of each import and each export to `en-US`, yielding US-American number delimiters and quotes. If you regularly export into, say, French, it might make sense to set the `lang` property directly in your defaults files to `fr` so that files are being exported using that locale by default. Then you can still overwrite the property to something different within individual files by setting the corresponding YAML frontmatter variable.
