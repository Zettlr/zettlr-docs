# The File Manager

The file manager is basically a built-in Explorer (or Finder, if you are on a Mac) tuned to the needs of Zettlr. It is one of the core components of the app.

## General

In the preferences, you can choose the file manager mode:

* **Extended**: In the extended mode, both the file _tree_ and the file _list_ will be visible. The file tree does not show individual files (except standalone files).
* **Combined**: In the combined mode, you will only see the file tree which then will also include files.
* **Thin**: In the thin mode, you have access to both the file tree and the file list, but only one will be shown at a time.

The thin mode allows several ways to switch between your file tree and the file list. If you currently see the file tree, but want to see the file list, simply click any directory. Zettlr will then switch to the file list, showing you all files within that directory. If you currently see the file list, simply move your mouse over the top area of the file list. An arrow will appear that you can click to move back to the file tree.

If you have a trackpad or a mouse that supports horizontal scrolling, you can also make use of horizontal scrolling to switch back and forth, which in many cases is much faster than clicking somewhere.

> **Note**: Please consult the [settings manual](../reference/settings.md) for more information on the file manager modes.

## The File List

The file list shows you all directories and files inside the directory that is currently selected in the tree view, but not like a normal file browser: **the file list treats all subdirectories as equals, and shows you all of them one after another!** Therefore you don't need to traverse further into the directory tree to reach buried directories.

If you turned off the meta information, both directories and files will be shown as one-liners. If you display the *file information*, you will see additional information: directories will show you the amount of files and folders they contain. The files, on the other hand, show their last modification date, any tags, an ID, and more.

> You can toggle the file information via the "View" menu, by pressing `Cmd/Ctrl+Alt+S`, or the relevant setting in the preferences dialog under the General tab

![The possible meta information of files](../img/file_meta.png)

Additionally, you can traverse the directory tree within the file list by clicking on the directories. A simple click will select the directory and move further down the tree, while `Alt+Click` will select its parent directory. This is useful if you have to switch directories often, but prefer the thin mode of the sidebar and don't want to switch to the tree view repeatedly.

> Within the file manager, you can perform most actions that you can also perform in your Explorer/Finder/file browser as you would expect it, such as opening, duplicating, creating, and removing files, dragging them around, and more.

### File and Folder Properties

Each file and each folder also has properties. You can view them by right-clicking any file or folder, and choosing the corresponding menu item.

![A properties dialog for a directory](../img/directory_properties.png)

Each folder can be turned into a [Project](../advanced/projects.md) by clicking the switch in its property popover. Afterwards you can fine-tune its project settings. Also, you can select a directory icon which makes it easier to identify the directory visually. Lastly, you can sort directories in their property popovers. Files, on the other hand, show you their tags, ID, and other useful information. You can also set writing targets in the properties of a file.

![Writing Targets Counter](../img/writing_targets.png)

> To remove the writing target from a file, simply set the writing counter to zero.

Both file and folder property popovers show you some general information, like the last modification time, their creation time, and their size.

## Structural Implications for the File List

Each time you select a directory, the file list will display _all_ files and folders in this directory. Simply put, it flattens all your different subdirectories and files from the tree-like structure that is being resembled by the file tree into a one-dimensional list. The list will always change its contents whenever you select a different directory in the tree view.

> The list only displays all directories and files _within_ the currently selected directory. Therefore it works a little bit like a very fast search function. You only see the files in a specific directory and, when you move down level by level, less and less files are visible until only one directory and its files are visible. Given a good structure inside your root, this is a powerful way to only have those files in the list that you actually need.

As the file list flattens your complex directory tree, it has to make some assumptions on how to adequately _display_ the files. Therefore the following rules help you distinguish where the files are actually present on your disk:

1. The currently selected directory will be on top of the list of files. Always.
2. All files that are inside this directory are placed directly beneath this directory name.
3. All subdirectories that are _inside_ this directory will always be at the bottom of the file list, i.e., _after_ the files in the selected directory.
4. If directories are empty, they will be placed immediately after each other with no files in between.

So what is important to remember is: All directories will be displayed as if they reside on the very same level; as if they weren't nested. To identify which directories contain which, please refer to the tree view.

> If you do not like the "natural" sorting of Zettlr (so that 10 comes after 2), you can switch to "ASCII" sorting in the General tab of the settings dialog (so that 2 comes after 10).
