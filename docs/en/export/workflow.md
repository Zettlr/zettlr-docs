# Exporting Workflow

To customize your exporting experience, it is necessary to understand what happens during an export, and how the various components interact to enable exports. On this page, we guide you through the various steps of the exporter, and reference other documentation pages as necessary for more details.

!!! note

	This workflow applies only if you run a standard export. If you use a custom export command, Zettlr will just invoke your command, and provide it with the path(s) to your input files. Your command is responsible to handle the export in that case. Please read the section on custom commands for more information.

## What Happens During Single-File Exports?

As soon as you press “Export” in the exporting popover, this will invoke the exporter, providing your settings:

1. The file to export.
2. Which profile to use.
3. The target directory.

The exporter uses this information alongside your preferences to determine how to export your file, prepares all necessary data, and then invokes Pandoc to convert your document into the correct target format.

## What Happens During Project Exports?

Project exports differ from this process in a few central ways:

1. Projects will always be exported into the project directory.
2. They comprise multiple input files, instead of just one. You can configure which files will be included, and in what order, in the project properties.
3. Project exports start a matrix export in which Pandoc is invoked once for each selected profile.

## The Exporting Workflow

As soon as the exporter is invoked, three steps happen in sequence: Collection of information including input and output files, generating a correct defaults file from that, and invoking Pandoc.

!!! note

	If you select a custom exporter command, these steps will be skipped. Instead, Zettlr will invoke your command and simply pass the absolute path to the file(s).

### 1. Determine the Input and Output Files and Working Directory

First, the exporter will compute and verify the absolute paths to your input file(s) and to the target file.

The working directory of the exporter will be set to the correct folder – either the file’s containing directory on a single-file export, or the project directory. This means that any relative paths in your source files will be interpreted from that directory.

Lastly, the defaults file which is generated in the next step will be placed in the temporary directory, so you should refrain from specifying relative paths in there. This affects especially template files.

### 2. Generate the Final Defaults File

Next, the exporter will read in the defaults file for the selected profile. Then, it will proceed to adjust the file according to your settings.

!!! note

	Please read this section carefully. While you can customize your profiles in the assets manager, Zettlr will forcefully change some of these options. If you see unexpected results during exports, this might be the reason.

It will forcefully enable either the extension `wikilinks_title_after_pipe` or `wikilinks_title_before_pipe` depending on the setting for how your wiki links are set up. Next, it will enforce the `mark` extension which directs Pandoc to correctly interpret highlight-spans (`==mark==`). This will change your Markdown reader setting from the profile. If you have already specified both extensions correctly in your reader (e.g., `reader: gfm+mark+wikilinks_title_before_pipe`), this will not change anything.

Next, the exporter will add your global citation library to the `bibliography` key of the profile. If you specify a library in the bibliography key of your profile, this will not be removed. Rather, Zettlr appends your global library to the key.

Additionally, Zettlr will now determine if it needs to override the `csl` key of your profile. In case you are exporting a project, and if you have specified a CSL style for your project, it will set the `csl` key to that one. If you did not specify a custom CSL style for your project, but have specified a custom CSL style in your preferences, Zettlr will set the `csl` key to that one. If you neither specified a project-specific style nor a global style, Zettlr will not touch the CSL key.

At this point, Zettlr will create the profile keys `metadata` and `zettlr`. It will set the keys `strip_tags` and `strip_links` to whichever setting you have selected in the preferences.

For projects, Zettlr will also override both the `metadata.title` key and the `template` key. This is why we recommend not to specify a custom template in the project properties, if you have specific PDF exporters with custom templates.

Finally, Zettlr will ensure that the `filters` key exists, and add all filters from your Lua filter directory to this key, ensuring that all of them will run during export. Note that a specific order is not guaranteed.

It now adds whatever special properties the corresponding plugin demands to the defaults file, and write the amended defaults file to disk. These properties include the `input-files` and `output-file` keys that tell Pandoc both which files to read, and where to export to. Both will always be provided as absolute paths.

!!! tip

	The various ways of specifying configuration for Pandoc can be difficult to grasp. To understand which configuration you can specify where, and how, please read the [documentation page on defaults files](./defaults-files.md).

### 3. Run Pandoc

The final step the exporter performs is to actually invoke Pandoc. It will call Pandoc, set its working directory to either the file’s folder (in case of a single export) or the project directory (in case of a project export), and provide it with the defaults file (which resides in your temporary folder).

In essence, Zettlr calls `pandoc --defaults /path/to/defaults.yml` and awaits that Pandoc performs the export.