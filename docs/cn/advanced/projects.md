# Projects

Projects are a way to simplify the concatenation and export of more than a single file. They allow you to split up one single project into several different files to work on. You can portion your work into several files and only in the end glue them together and export them as one single PDF file. Additionally, projects can be exported into several formats at the same time.

![project_directory.png](../img/project_directory.png)

## Creating a project

Zettlr Projects are basically just a bunch of additional features for directories. Therefore you can "convert" any directory into a project. Simply right-click the directory you want to make a project of and choose "Properties". In the popover you can then activate the project switch. Afterwards the directory will be coloured red and a special icon will appear to the left of its name, indicating that this directory has project features enabled. If you now right-click a directory, you have an additional context menu option at your disposal to build the project.

## Working with Projects

After you have activated the project switch in the directory's properties, a few additional options will appear in that dialog. The first tab of the newly appearing panel allows you to select the formats into which the project will be exported. Select as many as you like. The options are the same as for single page exports.

On the second tab, you can define glob patterns to filter which files will be included in the export. A glob pattern is simply a pattern that allows you to match only specific files. For instance, the pattern `**/*.md` will match all Markdown files, the two asterisks at the beginning mean to apply this filter recursively. If you would define `*.md`, then the project will not include files from subdirectories. You can also specify multiple file extensions, e.g. `**/*.{md,tex}`. Lastly, you can also match only files that have a specific name, e.g. `**/{Introduction,Conclusion,Chapter-1}.md`.

!!! tip

    To learn more about glob patterns, a good starting point is the [corresponding Wikipedia article](https://en.wikipedia.org/wiki/Glob_(programming)).

We chose to implement glob patterns instead of an actual list of files since that was not just easier to implement, but it also allows you to specify beforehand what types of files you will create, and thus make it easier for you to add or remove files without having to worry about which ones will be included, and which ones won't.

## Building Projects

Building projects in general works similar to single page exports, with two crucial differences: Projects can generate multiple files with one click, and they bundle multiple Markdown documents into a single output document. Zettlr will follow the following steps in collecting the information necessary to build a project:

First, Zettlr will take the project directory and crunch the whole contents into a one-dimensional array. This means that **all subfolders and all files in it will be flattened down into a simple list.** What does that mean? Simply have a look at the file list. Internally, before exporting your files, Zettlr will arrange the files _exactly_ as in the file list. Therefore, if you check out your file list, you will know exactly which file will come after which. This is by design so you don't have a nightmarish discovery once you've handed in a paper and realise a full folder with three chapters has been left out.

!!! note

    Please note that Zettlr will use _all_ subdirectories. This is meant as a convenience for people writing huge projects that they can use as many subdirectories as they want. Therefore, the file list will be exactly exported as is. If you want to store additional files within a project that shouldn't be exported, exclude them using a glob pattern.

Second, Zettlr will read the settings you have given the project itself and basically follow the same process as generating single-document-PDFs: Start up the exporter, provide it with your settings, and let Pandoc and LaTeX do their work.

Once your project has been exported, it is saved into the project directory.

!!! note

    Please note that especially the generation of a table of contents from bigger projects may take an extraordinary amount of time. If you wish to generate a table of contents, LaTeX has to actually build the PDF twice — first to detect on which pages your headings end up after the conversion to PDF, and then a second time to actually include the table of contents. In a test I did, on a new Windows 10 computer the generation of a whole directory of excerpts that rendered to about 150 pages took approximately five minutes in which it seemed as if it didn't work. So please be patient — as long as Pandoc or LaTeX don't complain about anything, they are still working.

!!! tip

    **Pro-Tip**: As you may know from the FAQ section, Zettlr and Pandoc will not attempt to filter out TeX commands you have written into your markdown documents. Remember this while working on your projects: You can add additional pages or do other funky stuff with your files that will actually be present in the final document! You can also create `.tex` documents by providing the extension when creating new files. These `.tex` documents support LaTeX syntax highlighting and will be included in the export of your project! Make sure they have a file name that places the file exactly where you need it.

## Removing Projects

To remove a project, simply uncheck the project switch in the directory properties.
