# Projects

Projects are a way to facilitate the process of writing entire research papers or books. They allow you to concatenate multiple individual Markdown files from one folder into a single exported file. Therefore, you can split up your work into, say, an introduction file, a background file, data and methods, results, and discussion. Additionally, projects can be exported into several formats at the same time.

![project_directory.png](../img/project_directory.png)

## Creating a project

Zettlr Projects are basically just a bunch of additional features for directories. Therefore you can "convert" any directory into a project. Simply right-click the directory you want to make a project of and choose "Properties". In the popover you can then activate the project switch. Afterwards the directory will be coloured red and a special icon will appear to the left of its name, indicating that this directory has project features enabled. If you now right-click a directory, you have an additional context menu option at your disposal to build/export the project.

## Working with Projects

After you have activated the project switch in the directory's properties, click the newly added button to adjust the project properties from the popup. This opens a new dislog. The first tab allows you to select the formats into which the project will be exported. Select as many as you like. The options are the same as for single page exports. You need to select at least one option to be able to export your project.

On the second tab, you can modify various files. The first list allows you to select and sort the files from the project folder which will form the final export. Use the corresponding buttons to add or remove files, or move individual files up and down in the list.

!!! note

    Note that this list is static, which means that, if you remove or rename files, this list will not automatically update. However, the app will check the existence on files during export and warn you that some files haven't been found and won't be included in the exported file. This allows you to go back into the properties panel, find the missing files, and adjust the selected files.

## Building Projects

Building, or exporting, projects in general works similar to single page exports, with two crucial differences: Projects can generate multiple files with one click, and they bundle multiple Markdown documents into a single output document. Zettlr will follow the following steps in collecting the information necessary to build a project:

First, Zettlr will look at the file list in the project directory and check for the existence of the files. If files are specified in this list but are missing on disk, the app will ignore the files but issue a warning since this probably means that you renamed a file and forgot to update the settings.

Second, Zettlr will read the settings you have given the project itself and basically follow the same process as generating single-document-PDFs: Start up the exporter, provide it with your settings, and let Pandoc and LaTeX do their work.

Once your project has been exported, it is saved into the project directory.

!!! note

    Please note that especially the generation of a table of contents from bigger projects may take an extraordinary amount of time. If you wish to generate a table of contents, LaTeX has to actually build the PDF twice — first to detect on which pages your headings end up after the conversion to PDF, and then a second time to actually include the table of contents. In a test I did, on a new Windows 10 computer the generation of a whole directory of excerpts that rendered to about 150 pages took approximately five minutes in which it seemed as if it didn't work. So please be patient — as long as Pandoc or LaTeX don't complain about anything, they are still working.

!!! tip

    **Pro-Tip**: As you may know from the FAQ section, Zettlr and Pandoc will not attempt to filter out TeX commands you have written into your markdown documents. Remember this while working on your projects: You can add additional pages or do other funky stuff with your files that will actually be present in the final document! You can also create `.tex` documents by providing the extension when creating new files. These `.tex` documents support LaTeX syntax highlighting and can be included in the export of your project!

## Removing Projects

To remove a project, simply uncheck the project switch in the directory properties. Note that this will immeriately remove the project settings and is an irreversible action. So be prepared to redo your work on these settings if you decide otherwise later.
