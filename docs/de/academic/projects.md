# Projects

Since version `0.18`, Zettlr supports projects. Projects are a way to simplify the concatenation and export of more than a single file. They allow you to split up one single project into several different files to work on. You can portion your work into several files and only in the end glue them together and export them as one single PDF file. Also, Zettlr projects allow you to better finegrain your PDF exports. With projects you can, for instance, command Zettlr to create a title page or a table of contents as well.

![project_directory.png](../img/project_directory.png)

## Creating a project

Zettlr Projects are basically just a bunch of additional features for directories. Therefore you can "convert" any directory into a project. Simply right-click the directory you want to make a project of and choose "Create project". Then the directory itself will be coloured red and a pencil-icon will appear to the left of its name, indicating that this directory has project features enabled. If you now right-click a directory, you have three additional context menu options at your disposal: "Project Settings", "Build Project" and "Remove Project".

## Working with Projects

Choose "Project Settings" from the context menu of a project directory to open the settings. In general, these are just a copy of the PDF preferences you have globally available for quickly exporting single Markdown files. The two differences are that projects enable you to fine grain the generation of a PDF document, and that these PDF settings only apply for exporting this specific directory. Therefore you can leave your global PDF options intact and use different settings for your project.

![settings_project.png](../img/settings_project.png)

Now let us briefly explore the settings you got for projects. First the metadata tab:

- **Project Title**: This title will be used as the file name, the title (if you decide to create a title page) and the PDF title of your document. Default is the directory name.
- **Project Author**: This will be written into the PDF metadata field for authors.
- **Project Keywords**: These are keywords you may or may not use when exporting PDF documents.
- **Generate Title Page**: If this checkbox is selected, Zettlr will direct the LaTeX-engine to generate a title page. It'll use the project title and the current date as well as your author name and write them to the first page of your document.
- **Generate Table of Contents**: If this checkbox is selected, Zettlr will direct Pandoc to generate a Table of Contents on the second page (if you told Zettlr to generate a title page, else on the first page).
- **Evaluate until Level …**: With this dropdown list you can choose which headings will be part of your Table of Contents. The default "2" directs Pandoc to generate a table of contents using both first and second degree headers (i.e. `##` and `#`-headers). A 4 would include 1st, 2nd, 3d and 4th grade headers (i.e. `#`, `##`,`###`, and`####`). All other headings will still be present in the file, but they will not appear in the Table of Contents.

Currently, both the page and the font tabs are exactly the same for projects and for your general export options, so please refer to the [settings](../reference/settings.md) page to get to know what they do.

## Building Projects

To build a project, Zettlr will follow the steps described below to generate your final PDF, so please read them carefully to know what to expect once you decide to export your project!

First, Zettlr will take the project directory and crunch the whole contents into a one-dimensional array. This means that **all subfolders and all files in it will be flattened down into a simple list.** What does that mean? Simply have a look at the preview pane. Internally, before exporting your files, Zettlr will arrange the files _exactly_ as in the preview pane. Therefore, if you check out your preview list, you will know exactly which file will come after which. This is by design so you don't have a nightmarish discovery once you've handed in a paper and realise a full folder with three chapters has been left out.

> Please note that Zettlr will use _all_ subdirectories! This is meant as a convenience for people writing huge projects that they can use as many subdirectories as they want. Therefore, the preview list will be exactly exported as is (all directories will simply be omitted). So please do not create a second level subdirectory, crunch your notes in it and then wonder how your notes got into the final manuscript. If you want to use additional files that shouldn't be exported, simply create two more folders inside your project directory. In one you can then put all your working files, while you can convert the other into the project that can be exported.

After your files have been read, a small number of modifications to them is being made (all paths are normalised so that Pandoc and LaTeX may find all your images) before they are concatenated together. Then this huge file is written to disk into a temporary file.

Next, Zettlr will read the settings you have given the project itself and basically follow the same process as generating single-document-PDFs: Start up the exporter, provide it with your settings, point it to the temporary file and let Pandoc and LaTeX do their work.

Once your project has been exported, it is automatically opened with your default PDF previewer and it is saved into the project directory.

> Please note that especially the generation of a table of contents from huge projects may take an extraordinary amount of time. If you wish to generate a table of contents, LaTeX has to actually build the PDF twice — first to detect on which pages your headings end up after the conversion to PDF, and then a second time to actually include the table of contents. In a test I did, on a new Windows 10 computer the generation of a whole directory of excerpts that rendered to about 150 pages took approximately five minutes in which it seems as if it didn't work. So please be patient — as long as Pandoc or LaTeX don't complain about anything, they are still working.

> **Pro-Tip**: As you may know from the FAQ-section, Zettlr and Pandoc will not attempt to filter out TeX-commands you have written into your markdown documents. Remember this while working on your projects: You can add additional pages or do other funky stuff with your files that will actually be present in the final document! You can also create `.tex`-documents by providing the extension when creating new files. These `.tex`-documents support LaTeX syntax highlighting and will be included in the export of your project! Make sure they have a file name that places the file exactly where you need it.

## Removing Projects

To remove a project, simply right click it and choose to remove the project. What will be removed is plain and simple the settings file that indicates that your directory should be treated as a project (as in the case of virtual directories, your project settings are stored in a small file called `.ztr-project`). Therefore, if you remove a project, you actually only remove the settings of the project. If you re-create the project, the file will be present once again, but with the default settings. So remember, removing projects will finally delete your settings and you have to set them anew.
