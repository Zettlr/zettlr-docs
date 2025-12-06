# Defaults Files (Profiles)

Defaults files (which we also call “profiles”) are a way to define default values for many of the variables that Pandoc uses internally to facilitate both your imports and exports. Defaults files resemble [YAML front matters](../editor/yaml-frontmatter.md), but are more powerful and apply to all your files instead of just a single one.

You can view and modify all defaults files in the [assets manager](./assets-manager.md).

!!! tip

    Zettlr's standard profiles work out of the box and should be sufficient for most use-cases. Should you see the need to edit them, expect to export a test file multiple times before you are done.

## What are Defaults Files?

Defaults files, or profiles, are YAML files which contain settings that control how Pandoc will export your files. They reside in your user data folder and can be edited in the [assets manager](./assets-manager.md).

Zettlr requires a certain set of defaults files to allow users to immediately export files without having to set anything up first. When you open the assets manager, you can identify these files by their lock icon that indicates their status as “protected.”

Whenever you rename such a protected profile, Zettlr will immediately recreate it. You can leverage this behavior to effectively make a copy of one of these default files. Likewise, when you delete a protected file, Zettlr will recreate it, which allows you to effectively reset the file to default.

Aside from these protected files, you can add as many additional profiles as you wish. Give them notable names so that you can find them in the export format dropdown list later on.

!!! note

    The full documentation for what you can do with defaults files can be found in the [Pandoc manual](https://pandoc.org/MANUAL.html#default-files). Make sure to refer to that manual when you edit defaults files.

## Requirements for Defaults Files

The defaults files (also called “profiles”) as used by Zettlr have a simple requirement which you must keep in mind when editing them: They must possess both a valid `reader` and `writer` property.

Usually, Pandoc can infer the correct reader and writer from the filename extensions, but Zettlr needs to know what conversion a profile is being used for to offer you the correct options in the correct places. These properties (a) make the conversion verbose and transparent, and (b) help Zettlr determine if the profile can be used to *import* files, or if it is used to *export* files.

If the `writer` property is a Markdown-compatible writer, this means that the profile will be considered an import profile, as the result of the conversion is a Markdown document. Likewise, if the `reader` property is a Markdown-compatible reader, this means that the profile is considered an export profile.

If those properties are missing, Zettlr will indicate that the profile is invalid, and you’ll need to fix it before you can use it.

!!! note

    Zettlr includes a linter that checks the profiles for any errors. When you save a profile and Zettlr does not complain, this usually means that the file can be used. However, Zettlr cannot check whether, e.g., all your paths are correct, so this is merely a necessary, not a sufficient condition for the health of a profile.

Pandoc supports Markdown extensions (i.e., for smart quotes, emojis, etc.). These are specified by adding them after the `reader` or `writer` properties using `+`-signs. If you require extensions to the standard Markdown reader, you can add these to the `reader` or `writer` properties. Similarly, if an extension is enabled by default, you can use a `-`-sign to disable it.

For example, a full reader string that enables some extensions could be `reader: markdown+definition_lists+mmd_title_block+bracketed_spans+fenced_divs`. This will use the Markdown reader and configure it to support definition lists, multi-markdown title blocks, bracketed spans, and fenced divs. The various extensions are described [in the Pandoc documentation](https://pandoc.org/MANUAL.html#extensions).

## Which Variable Overwrites Which?

One problem you may encounter when exporting files is that sometimes variables that you define in your YAML front matter are ignored, while the same variable works in defaults files, and vice versa.

It is paramount to understand how Pandoc determines the final and effective set of parameters which it will use to facilitate your import or export. In below's graphic, you can see how Pandoc resolves the final configuration to run a document format transformation.

![Pandoc's internal Variable Resolution](../img/pandoc_variable_resolution.png)

First, Pandoc will load its own internal defaults which are hard-coded into the binary. Any variable that you do not define yourself will be set to some default that Pandoc defines.

Then, Pandoc will load in the defaults file Zettlr provides. Every variable defined in there will replace the default inside Pandoc's configuration.

Lastly, Pandoc will parse the YAML front matter(s) of the file(s) you are currently trying to import or export. These variables can replace those set by the defaults files, but usually not all. You may notice that defaults files can contain a metadata field, and any value in there can generally be replaced by a YAML front matter property. Please see the documentation on [YAML front matters](../editor/yaml-frontmatter.md) for more information.

**Example**: Let us assume you have defined a `title` for all your Word exports in the defaults file for the `docx` writer. If you do not use any front matter, this variable will be used for each and every export to Word. But if you specify the `title` property inside a YAML front matter, this file – when exported to Word – will have its own title set.

!!! tip

    One common use-case for defining variables inside a defaults file which you could also define on the level of YAML frontmatters would be the `lang`-property. By default, Pandoc sets the language of each import and each export to `en-US`, yielding US-American number delimiters and quotes. If you regularly export into, say, French, it might make sense to set the `lang` property directly in your defaults files to `fr` so that files are being exported using that locale by default. Then you can still overwrite the property to something different within individual files by setting the corresponding YAML frontmatter variable.
