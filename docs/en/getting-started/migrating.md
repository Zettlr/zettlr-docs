# Migrating to a New Computer

If you're taking full advantage of Zettlr's functionality, you'll eventually create an extensive library of workspaces, interconnected notes, and likely a few custom settings, too. When the time comes to replace your computer, or perhaps migrate to a new operating system, you'll obviously want to take this data with you.

You'll be pleased to know that this is a straightforward process, which typically involves four steps:

1. On your old machine, back up your application settings and the workspaces containing your notes.
2. Migrate your application settings to the new machine.
3. Migrate the workspaces containing your notes to the new machine.
4. Reconnect your reference manager (if you use one).

## Back Up the Data on Your Old Machine

### Application Settings

If you've customized Zettlr at all and/or you want to retain the various stats about your notes, there are a few configuration files that you may want to back up and copy over to your new machine. This data is located in the _application data path_ — a configuration directory whose location depends on your Operating System:

* **Windows:** `C:\Users\<your username>\AppData\Roaming\Zettlr` (note that AppData is a hidden folder, so you might want to change the Explorer settings so it shows up)
* **macOS:** `/Users/<your username>/Library/Application Support/Zettlr` (open a Finder window, hold down "Alt" while opening the "Go"-menu, and click on the appearing "Library" entry)
* **Linux:** `/home/<your username>/.config/Zettlr` (note that `.config` is a hidden folder, so you might want to use a command line to open it)

Once you've located this folder, save a copy of the following files and subfolders within it to move to your new machine:

* `stats.json` (your writing statistics)
* `config.json` (the app settings — see the _"Note of Reassurance"_ below)
* `custom.css` (your custom CSS, if any)
* `tags.json` (your colour-coded tags)
* `targets.json` (your writing targets)
* `user.dic` (your own custom dictionary)
* `defaults` (default settings for document import and export)
* `snippets` (any snippets you've set up for auto-filling note content)

### Workspaces Containing Your Notes

Make a backup of the workspace folders containing your notes on your old computer. If you've forgotten where these live, right-click a workspace in Zettlr's file manager and select `Reveal in Finder/Explorer/File Browser` (wording differs depending on operating system) from the context menu that pops up. This will open the corresponding folder in your computer's file browser. If you need to locate/back up an individual note file — one that's not part of a workspace, for example — you can likewise right-click it in the Zettlr file manager and choose `Reveal in Finder/Explorer/File Browser` (wording differs depending on operating system) from the context menu.

## Migrate Your Application Settings to the New Machine

On your new machine, install Zettlr and launch it. This will create the configuration directory into which you will be able to put the application-settings backups you made. Once the app has launched, quit it again. Avoid adding or opening any notes or workspaces in Zettlr until after you've copied over your old application settings — if you do, you'll have to add them all over again afterward (see the "Note of Reassurance" below).

Once you've quit the app, copy all the application settings backups you wish to keep from your old install into the new configuration directory (see the guidance above on determining the correct application data path for your operating system). If you're prompted as to whether it's okay to replace existing files, you can say "okay." You've now copied over the application settings from your old computer.

**A Note of Reassurance on `config.json`:** The backup you made of `config.json` contains the location of the various workspaces and notes on your _old_ computer. When you re-launch the new Zettlr install after adding the backup of your old `config.json` file, it will automatically remove the paths to the workspaces of your old setup, since they are not valid anymore. At the same time, if you add any workspaces or notes to the new Zettlr install before restoring the backup `config.json` file, Zettlr will forget the location of those folders and files. In short, don't worry when you're greeted with an empty window. Your notes and workspaces will be restored as soon as you re-open them in the next step.

## Migrate the Workspaces Containing your Notes to the New Machine

If Zettlr is still closed on your new machine, launch it now. Because Zettlr workspaces are simply folders on your computer and your notes are simply text files, moving this data to a new computer is as simple as copying the backups of these folders and files from your old computer to the new one. All of the metadata about your notes and the connections between them — note IDs, tags, etc. — is saved to the individual note files themselves, meaning this information travels right along with the files.

Once you've placed the backups on your new machine, you can add each of the workspaces — and the files within them — to your new Zettlr install simply by going to the `File > Open Workspace …` menu option and selecting that workspace folder (or `File > Open` if you need to import an individual note that's not part of a workspace). Note that this is the same process you would use you if were adding any other folder to Zettlr. The workspace folder, including the notes it contains, will be populated into your new Zettlr install. The connections between notes will also be retained, though if you have links to notes that live in different workspaces, you'll have to make sure you've likewise opened those workspace folders and their contents within your new Zettlr install.

> Especially when your workspaces have grown large, opening up for the first time may take some time, as Zettlr will look at each file and extract some information first. This information is then cached, so that the workspaces should open much quicker the next time you start Zettlr. If a workspace takes some time before it appears, don't panic!

## Reconnect Your Reference Manager

Finally, if you're using Zettlr with a reference manager like Zotero, you'll need to go through that software's migration process. Once your reference manager is up and running again on the new machine, you can reconnect it to Zettlr by once again following the steps in the "[Enabling Citations in Zettlr](https://docs.zettlr.com/en/academic/citations/#enabling-citations-in-zettlr)" portion of this documentation.
