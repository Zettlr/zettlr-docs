# Workspaces: Working with Folders

When you start Zettlr for the first time, you will be greeted with a tutorial that walks you through the first steps with the app and shows you some features hands-on. After you're done with this, however, you likely want to start working on your own files.

If you're used to working with programs such as Microsoft Word or LibreOffice, you'll know that these programs are centered around files. You use your file manager (Windows Explorer, Finder, etc.) to navigate to files and then open them with a double click.

Zettlr – like many other Markdown-based programs – is centered around **folders** instead. This means that the first step you'll need to take is to open one.

## Creating and Opening Workspaces

Even though we call them "workspaces", they are equivalent to folders on your computer.

If you've already worked with text, you likely already have a few folders that contain your work. You can open those folders directly in Zettlr. However, if your folders contain all Word documents and not Markdown documents, you may want to create another folder to load in to Zettlr, and then [import](import.md) those Word documents to Zettlr.

Zettlr can only open existing folders, so if you don't yet have a candidate to load into Zettlr, make sure to create a new folder now.

To open a workspace, either press `Cmd/Ctrl+Shift+O` or click the third icon to the left of the toolbar. This will open a folder selection dialog. Navigate to the correct folder, select it and click "Open".

Zettlr will now begin to load the folder. While doing so, it will scan the folder for files that it recognizes. If there are already Markdown files somewhere in the folder you just opened, it will read those files and collect some metadata from them.

> If you have already worked with Markdown-based programs and have amassed a large number of Markdown files, it can take a while until Zettlr displays the workspace.

If opening the workspace took some time, don't worry: We know that reading in files takes some time, and Zettlr caches that information so that it doesn't have to process the files a second time. The next time you start Zettlr, it should be very quick.

## Managing Workspaces

You can load several workspaces at the same time, for instance if you want to separate different chunks of work (e.g. one workspace named "Zettelkasten" and another named "Projects"). If you would like to implement the so-called "PARA" principle for document archiving, it makes sense to create four folders on your computer, "Projects," "Archive," "Resources," and "Areas" and load each one as their own workspace into the application.

![A screenshot of a setup with multiple workspaces and files](../img/file_tree_roots.png)

Zettlr will watch all files within your workspaces for changes. For instance, if you use a cloud service to backup your files, e.g., Google Drive, Dropbox, or a Nextcloud instance, it may be that your cloud application synchronizes changes to a file only after you have started Zettlr. Then, Zettlr will recognize this and reflect these changes appropriately within the application.

> It is highly recommended to have at least one workspace open within the application. It is also possible to only open files from your computer and work on them, but this is discouraged, as you will lose a lot of functionality that is tied to workspaces.

## Locating Workspaces on Disk

Zettlr shows you those folders that you have opened as workspaces as if they were collocated. This makes it very easy to work with them, but it may make it more difficult to locate the corresponding folders later on.

If you are unsure where a workspace actually sits on your computer, you can locate it. To do so, right-click the workspace and select "Open directory". This will open your file browser (i.e., Windows Explorer, Finder, or your chosen Linux file browser) and highlight the corresponding folder.

> The same works for any folder within your workspaces: Whenever you want to see a folder in your file browser, simply right-click it and select "Open directory". The same holds true for files.

## Closing and Removing Workspaces

Sometimes you may wish to no longer work in certain folders, or you may have folders that you need to work with temporarily, and then want to close them. Zettlr offers you two ways of removing workspaces from the app: Closing and removing them.

When you **close** a workspace, Zettlr will unload the folder, but don't do anything else to it. If you **remove** a workspace, Zettlr will unload the folder and also put it into the trash bin. Choose the action most appropriate for your use case.

To close or remove a workspace, right-click the folder in the file manager, and select "Close Workspace" or "Delete directory". Zettlr will ask you if you really want to do so, and then unload the directory and, if you chose to delete it, move it to the bin.