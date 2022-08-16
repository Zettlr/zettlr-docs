# Migrating to a New Computer

If you're taking full advantage of Zettlr's functionality, you'll eventually create an extensive library of workspaces, interconnected notes, and likely a few custom settings, too. When the time comes to replace your computer, or perhaps migrate to a new operating system, you'll obviously want to take this data with you.

You'll be pleased to know that this is a straightforward process, which typically involves three steps:

1. Copying the workspaces containing your notes to the new machine.
2. Copying your application settings to the new machine.
3. Reconnecting your reference manager (if you use one).

## Copying the Workspaces Containing Your Notes to the New Machine

Because Zettlr workspaces are simply folders on your computer and your notes are simply text files, moving this data to a new computer is as simple as copying these folders from one computer to the next. All of the metadata about your notes and the connections between them — note IDs, tags, etc. — is saved to the individual note files themselves, meaning this information travels right along with the files.

Once you've copied the workspace folders containing your notes from your old computer and placed them on the new machine, you can add each workspace and its files to your new Zettlr install simply by going to the `File > Open Workspace …` menu option and selecting that workspace folder. Note that this is the same process you would use you if were adding any other folder to Zettlr. The workspace folder, including the notes it contains, will immediately be populated into your new Zettlr install. The connections between notes will also be retained, though if you have links to notes that live in different workspaces, you'll have to make sure you've likewise opened those workspace folders and their contents within your new Zettler install.

Any files or notes that aren't part of a workspace folder can also be opened in your new Zettlr install once you've moved them to your new machine, just as you would use Zettlr to open any other file.

##  Copying Your Application Settings to the New Machine

## Backing Up Application Settings From Your Old Machine

If you've customized Zettlr at all and/or you want to retain the various stats about your notes, there are a few configuration files that you may want to back up and copy over to your new machine. This data is located in the _application data path_ — a configuration directory whose location depends on your Operating System:

* **Windows:** `C:\Users\<your username>\AppData\Roaming\Zettlr` (note that AppData is a hidden folder, so you might want to change the Explorer settings so it shows up)
* **macOS:** `/Users/<your username>/Library/Application Support/Zettlr` (open a Finder window, hold down "Alt" while opening the "Go"-menu, and click on the appearing "Library" entry)
* **Linux:** `/home/<your username>/.config/Zettlr` (note that `.config` is a hidden folder, so you might want to use a command line to open it)

Once you've located this folder, save a copy of the following files and subfolders within it to move to your new machine:

* `stats.json` (your writing statistics)
* `custom.css` (your custom CSS, if any)
* `tags.json` (your colour-coded tags)
* `targets.json` (your writing targets)
* `user.dic` (your own custom dictionary)
* `defaults` (default settings for document import and export)
* `snippets` (any snippets you've set up for auto-filling note content)

## Copying the Backup of Your Application Settings to Your New Machine

On your new machine, install Zettlr and launch it. This will create the configuration directory into which you will be able to put the backups you made. Then, quit the app again, and copy all the application settings backups you wish to keep from your old install into the new configuration directory (see the guidance above on determining the correct application data path for your operating system).

If you're prompted as to whether it's okay to replace existing files, you can say "okay." You've now copied over the application settings from your old computer.

## Reconnecting Your Reference Manager

Finally, if you're using Zettlr with a reference manager like Zotero, you'll need to go through that software's migration process. Once your reference manager is up and running again on the new machine, you can reconnect it to Zettlr by once again following the steps in the "[Enabling Citations in Zettlr](https://docs.zettlr.com/en/academic/citations/#enabling-citations-in-zettlr)" portion of this documentation.
