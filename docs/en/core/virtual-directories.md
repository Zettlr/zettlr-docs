# Virtual Directories

Virtual Directories are a powerful feature of Zettlr that let you sort and collect files arbitrarily. They work as some kind of a box in which you can put files manually.

## Creating virtual directories

Virtual directories represent subsets of a certain directory. You can create them by right-clicking any directory and select "New Virtual Directory…". You can then give them a name just as you would do with any other directory. The same rules apply for virtual directory names as do for regular directories; not only to maintain a consistent look throughout the app, but also to be sure that the name is "[JSON](https://en.wikipedia.org/wiki/JSON)-safe".

Virtual directories then appear as subdirectories of the directory, in which you have created them. They will remain above all other subdirectories, making it easier for you to find them. Also, they are indicated by a small box-icon and are coloured differently than normal directories, indicating their special status.

## Adding, removing and working with files

After you have created a virtual directory, it acts mostly as a normal directory. You can drop files on them, rename and remove them. Yet, a noteworthy restriction applies:

> You can only add files that reside _inside_ the directory in which you created the virtual directory. As virtual directories are supposed to represent subsets of a specific directory, that means that you cannot add files that are located _outside_ of the directory.

To remove files, right-click them inside the virtual directory (i.e. right click their purple representation, **not** the file itself!) and then select the option "Delete from virtual directory."

Inside virtual directory, all operations of files are permitted, even moving them to different directories. If you rename a file inside a virtual directory, this change will be reflected both on disk (i.e. in their "actual" directory) and in the virtual directory. If you remove a file completely, it will also be removed from all virtual directories, in which it may have been.

## Other restrictions of virtual directories

Among not being able to hold files outside of their containing directory, a number of additional restrictions apply to working with virtual directories.

1. You cannot move them since they are bound to the directory, in which you create them.
2. Virtual directories are persistent (i.e. stored on disk), but of course not as a kind of directory. They are stored in a so-called [Dot-file](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory), which bears some problems.
  1. First of all: on Windows systems you will always see the `.ztr-virtual-directory`-file, because Windows does not hide such files as all other systems.
  2. Secondly, many cloud services do not synchronise Dot-files out of security reasons (for instance, you have to explicitly tell Nextcloud-clients to sync Dot-files). This means that if you store your files using a cloud service to access them from multiple devices, chances are your virtual directories are not transferred.