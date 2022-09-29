# Workspaces and files

Zettlr contains a full file manager based on our custom file system abstraction layer (FSAL). This is no coincidence, as Zettlr was built with immersion as a guiding principle. What this translates to in practice is that Zettlr expects you to choose a folder somewhere on your computer, in which you'll be performing most of your work with Zettlr.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2YX5n8-XVbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> Throughout the documentation, we will be using the terms "folder" and "directory" interchangeably as they refer to the same thing. The only difference is that "folder" is the term most users will know, whereas "directory" is the technical term for folders on your computer.

## Workspaces

A workspace forms the foundation for a single file tree. As you may know, files are saved hierarchically in folders on your computer. Each directory on your computer that you open with Zettlr is called a workspace.

You can load several workspaces at the same time, for instance if you want to separate different chunks of work (e.g. one workspace named "Zettelkasten" and another named "Projects"). If you would like to implement the so-called "PARA" principle for document archiving, it makes sense to create four folders on your computer, "Projects," "Archive," "Resources," and "Areas" and load each one as their own workspace into the application.

![A screenshot of a setup with multiple workspaces and files](../img/file_tree_roots.png)

Zettlr will watch all files within your workspaces for changes that you make remotely. For instance, if you use a cloud service to backup your files, e.g., Google Drive, Dropbox, or a Nextcloud instance, it may be that your cloud application synchronizes changes to a file only after you have started Zettlr. Then, Zettlr will recognize this and reflect these changes appropriately within the application.

> It is highly recommended to have at least one workspace open within the application. It is also possible to only open files from your computer and work on them, but this is discouraged, as you will both lose a lot of functionality that is tied to workspaces, and as Zettlr has been built around this concept, you are likely to be less productive with this approach.

## Standalone Files

Standalone files are those files which you open, e.g., by double-clicking them on your computer, but which are not contained within any of the workspaces you have open. They themselves form an item within Zettlr's file tree, but unlike workspaces, these "trees" only consist of one single file.

You cannot open files directly from within the app. Rather, they are opened when you double-click a file somewhere on your computer. If this file is located within a workspace, Zettlr will simply navigate to that workspace and open the file accordingly. But if this file is nowhere to be found in any of Zettlr's workspaces, Zettlr will open it as a standalone file.

Standalone files are always sorted on top of the workspaces, where you have easy access to them. You can also "close" them, which means they will simply be unloaded from the application, but left untouched, or remove them, which means that Zettlr will unload them from the application and also move them to the trash bin.

> This behavior makes it simple to load one or two additional Markdown files into the application which do not reside within one of the workspaces. This makes sense, e.g., for software developers who only want to edit the Readme file of their project without loading the full directory into Zettlr.
