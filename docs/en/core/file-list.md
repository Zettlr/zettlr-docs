# The File List

Next on is the file list. The file list is something very special because it bears powerful features that ease your work with a lot of files and directories. So let's have a look!

## General

In the extended sidebar mode, both the tree view and the file list are visible. Using the thin sidebar mode, you can always show or hide the list by pressing `Cmd/Ctrl+!`.

> **Note**: Please consult the [settings manual](../reference/settings.md) for more information on the sidebar modes.

The file list shows you all directories and files inside the directory that is currently selected in the tree view, but not like a normal file browser: **the file list treats all subdirectories as equals, and shows you all of them one after another!** Therefore you don't need to traverse further into the directory tree to reach buried directories.

If you turned off the meta information, both directories and files will be shown as one-liners. If you display the *file information*, you will see additional information: directories will show you the amount of children they have. The files, on the other hand, show their last modification date. If they contain an ID or tags, this information will be displayed after the modification date. Hovering over the tag counter, you can see a small tooltip that shows you all tags that are in the file.

> You can toggle the file information via the "View" menu, by pressing `Cmd/Ctrl+Alt+S`, or the relevant setting in the preferences dialog under the General tab

### Meta Information on Files

The additional information shown by your files in the file list can be beneficial for a number of reasons. First, you can check whether or not the ID of the file looks right. Sometimes, Zettlr may detect a wrong ID, and this is the first way to check if Zettlr actually uses your ID, or just grabbed some part of a URL that contains a lot of numbers. Additionally, you can hover over the amount of tags to display them in a tooltip.

![The possible meta information of files](../img/file_meta.png)

### Writing Targets

Since version `1.2`, Zettlr supports writing targets. To set a target, right-click a file and choose "Set writing target …". Enter the amount of words or characters and click "Set". Zettlr will count towards your goal and show you the progress showing a small indicator if you have "file information" activated. Hover over it to see the absolute number of words or characters that you've written.

![Writing Targets Counter](../img/writing_targets.png)

> To remove the writing target from a file, simply set the writing counter to zero.

![Setting the Writing Target](../img/writing_targets_settings.png)

### Sorting

If you want to sort directories, you can do this from within the file list. Simply move the mouse over any directory and two indicators will appear showing you the current state of sorting. Click on the first (with an arrow from A to Z) to toggle the sorting by name. The second toggles the sorting by the last modification time. Subdirectories will not be sorted this way — only files.

![sorting_indicators.png](../img/sorting_indicators.png)


Also you can traverse the directory tree by clicking on the directories. A simple click will select the directory, while an `ALT` click will select its parent directory. This is useful if you have to switch directories often, but prefer the thin mode of the sidebar and don't want to switch to the tree view repeatedly.

## Structural implications

Each time you select a directory in the tree view, the file list will display _all_ files and directories in this directory. Simply put, it flattens all your different subdirectories and files from the tree-like structure that is being resembled by the directory list into a one-dimensional list. The list will always change its contents whenever you select a different directory in the tree view.

> The list only displays _all_ directories and files _within_ the currently selected directory. Therefore it works a little bit like a very fast search function. You only see the files in a specific directory and, when you move down level by level, less and less files are visible until only one directory and its files are visible. Given a good structure inside your root, this is a powerful way to only have those files in the list that you actually need.

As the file list flattens your complex directory tree, it has to make some assumptions on how to adequately _display_ the files. Therefore the following rules help you distinguish where the files are actually present on your disk:

1. The currently selected directory will be on top of the list of files. Always.
2. All files that are inside this directory are placed directly beneath this directory name.
3. All subdirectories that are _inside_ this directory will always be at the bottom of the file list, i.e., _after_ the files in the selected directory.
4. If directories are empty, they will be placed immediately after each other with no files in between.

So what is important to remember is: All directories will be displayed as if they reside on the very same level; as if they weren't nested. To identify which directories contain which, please refer to the tree view.

> If you do not like the "natural" sorting of Zettlr (so that 10 comes after 2), you can switch to "ASCII" sorting in the General tab of the settings dialog (so that 2 comes after 10).

## Actions in the file list

There are many actions that refer to the list. First, just select a tile to open any file and display its contents in the editor. Click a directory to select it.

You can move your files into different locations. Just drag them from the file list onto a directory in the directory tree. The directory you are hovering over will receive a slight shimmer to indicate where your file is going to be moved. Just drop the file there, to move it or drop the file everywhere else to abort the moving and revert the file to its original position.

If you drag a file outside of the app, you are able to share the file with other programs. To cancel this dragging-out, simply release the mouse over your app again.

> To drag out a file into other applications, make sure to **hold the `Ctrl` key or the `Alt` key before dragging your file!** This will tell Zettlr that you don't want to move the file within Zettlr, but outside of the app.

## Search Heatmap

Another useful feature of the file list is to help you distinguish what search results are the most relevant. Once you've executed a search, the list will change its colour like a chameleon. It will paint all files in 50 shades of green (yep, we've just made _that_ joke). The greener a file is, the more relevant the file is to your current search.

This is a feature one might call a "heatmap" for fulltext searches.

Please remember that the list is highly adaptable and will morph a lot while you use the app. For instance, it will not only display all files and directories in the currently selected directory, but also hides files with no results from the preview list, when the list is in search-mode.
