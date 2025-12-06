# Workspaces and Root Files

The file manager first and foremost displays both workspaces and root files to you. For the most part, these work like files and folders within your workspaces. However, since workspaces and root files form the roots in the file manager, they expose some special behavior.

## Root Files

Root files are files that you open in Zettlr that are not part of any of your workspaces. This applies, e.g., when you download a Markdown file from the internet and immediately open it using a double click in your computer’s file browser.

Zettlr remembers these files, as sometimes you may need to open individual Markdown files in, say, code projects. While most work in Zettlr should be done within workspaces, we recognize that this is not always possible.

This means that, if you no longer wish to see a file in your file manager, you need to explicitly close it, which you can do from the context menu. This will remove the file from Zettlr’s file manager without deleting them from your computer.

## Workspaces

Unlike root files, workspaces are folders where Zettlr intends you to primarily work in. While they mostly work like other folders, you can also “close” them. This will remove them from Zettlr’s file manager without deleting them from your computer.

## “Closing” versus “Deleting”

The distinction between “closing” a root file or workspace, and “deleting” it is important. When you “close” a file or workspace, this tells Zettlr that you no longer wish to see the file in your file manager. This will remove them from Zettlr, but keep them on your computer.

This is helpful because, if you change your mind, you can at any time re-open them in Zettlr.

However, you can also directly “delete” workspaces and files. If you do so, the same caveats apply as with regular files: This will “close” them, like before, but in addition *also* move them into your trash, or, if that fails, and you have configured Zettlr to do so, immediately remove them from your computer irreversibly.

While deleting individual files and folders somewhere from your workspaces is a pretty common action, we advise you that, when it comes to workspaces or root files, you may not want this.