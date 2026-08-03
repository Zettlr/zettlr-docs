# Migrating to a New Computer

If you're taking full advantage of Zettlr's functionality, you'll eventually create an extensive library of workspaces, interconnected notes, and likely a few custom settings, too. When the time comes to replace your computer, or perhaps migrate to a new operating system, you'll obviously want to take this data with you.

Migrating your data to a new computer involves four steps which we explain in detail on this page:

1. Back up your workspaces and [application settings](#application-settings). Move your workspaces to a suitable location onto your new computer, and keep the application data available (e.g., on a USB key or in a folder on your new computer) to move into place later.
2. Install Zettlr on your new computer normally, and launch it. You should be greeted with the tutorial. Then, quit it again. Delete the tutorial from your documents again, if you wish.
3. Place any of the application data that you wish to migrate into the corresponding folder on your new computer. Then, start the app again and check that everything has been detected correctly.
4. Open your workspaces again, one by one, until all are back up.
5. Finally, [setup your reference manager](../editor/citations.md) again, if applicable.

## 1. Back Up

There are two things you’ll need to backup or move to your new computer. The first one are all your workspaces and files, which contain your work. The second one are your application settings. These include snippets, your export profiles, any custom CSS, or your writing statistics.

### Workspaces

We recommend that you keep your data backed up using some cloud provider of your choice (for example, Nextcloud, Syncthing, Google Drive, OneDrive). In that case, setting up the same cloud provider on your new computer and waiting for it to finish synchronizing the data is sufficient to move all your data to the new computer.

::: warning Synchronizing Hidden files
If you modify folder settings in Zettlr (such as the sorting order, assigning a custom icon or color), Zettlr will remember this by placing a hidden file with the filename `.ztr-directory` in the folder. Cloud providers sometimes do not synchronize these hidden files. Make sure to turn on the appropriate setting so that your provider does synchronize these files.
:::

If you do not use a cloud provider, copy all your workspaces to an external storage or any other suitable medium. Move your workspaces and files to the new computer.

If you have forgotten where you have stored a workspace, you can right-click it in Zettlr's file manager and select "Reveal in Finder/Explorer/File Browser" (wording differs depending on operating system) from the context menu. This will open the corresponding folder in your computer's file browser. If you need to locate/back up an individual note file — one that's not part of a workspace, for example — you can likewise right-click it in the file manager and likewise choose "Reveal in Finder/Explorer/File Browser."

### Application Settings

The second part you may want to back up are your application settings. This data is located in the *application data path* — a configuration directory whose location depends on your Operating System:

* **Windows:** `C:\Users\<your username>\AppData\Roaming\Zettlr` (note that “AppData” is a hidden folder, so you need to either ensure hidden folders are shown, or manually type the location into the Explorer address bar)
* **macOS:** `/Users/<your username>/Library/Application Support/Zettlr` (open a Finder window, hold down “Alt” while opening the “Go”-menu, and click on the appearing “Library” entry)
* **Linux:** `/home/<your username>/.config/Zettlr` (note that `.config` is a hidden folder, so you might want to use a command line to open it)

Once you've located this folder, save a copy of any of the following files and subfolders within it to move to your new machine:

* `stats.json`: Your writing statistics.
* `config.json`: The app settings — see the “*Note of Reassurance*” below.
* `custom.css`: Your custom CSS.
* `tags.json`: Information on your color-coded tags (regular tags are automatically migrated because these are part of your data).
* `targets.json`: Your writing targets.
* `user.dic`: Your own custom dictionary.
* `defaults`: Your import and export profiles.
* `snippets`: Your snippets.
* `lua-filter`: The Lua filters used for exports.

The other files and folders are partially written by Electron (the framework Zettlr uses) or volatile data that needs to be re-created on your new computer, so please disregard them.

## 2. Migrate your Workspaces to the New Machine

Since Zettlr workspaces are simply folders on your computer and your notes are simply text files, moving this data to a new computer is as simple as copying the backups of these folders and files from your old computer to the new one. All of the metadata about your notes and the connections between them — note IDs, tags, etc. — is saved to the individual note files themselves, meaning this information travels right along with the files.

::: tip
If you migrate between the same operating system (e.g., Mac to Mac, Windows to Windows, or Linux to Linux), you can make your life easier by moving the workspaces to the same location on your new computer as they were on your old one. Just make sure that the name of your user account remains the same.
:::

## 2. Install and Launch Zettlr

With the backups at hand, go ahead and install Zettlr on your new computer. Download it or install it from a package manager depending on your preference.

Once it is installed, launch the app. Zettlr will start, create the correct folders that you will later need to migrate your application settings, and walk you through the onboarding dialog, which you can skip, and greet you with the tutorial. Then, quit the app again.

Optionally, if you wish to remove the tutorial that it has created for you, right-click the tutorial workspace before you quit the app and select "Reveal in Finder/Explorer/File Browser" (wording depends on your operating system). Then, quit Zettlr, and remove the tutorial folder.

## 3. Migrate Your Application Settings to the New Machine

Now that Zettlr has been launched for the first time, it has created the configuration directory into which you will be able to put the application-settings backups you made. Once the app has launched, quit it again. Avoid adding or opening any notes or workspaces in Zettlr until after you've copied over your old application settings.

Once you've quit the app, copy all the application settings backups you wish to keep from your old install into the new configuration directory (see the guidance above on determining the correct application data path for your operating system). If you're prompted whether it's okay to replace existing files, you can confirm. You’ve now copied over the application settings from your old computer.

## 4. Re-open your workspaces

Once you've placed the backups on your new machine, you can add each of the workspaces — and the files within them — to your new Zettlr install simply by going to the `File > Open Workspace …` menu option and selecting that workspace folder (or `File > Open` if you need to import an individual note that's not part of a workspace). Note that this is the same process you would use if you were adding any other folder to Zettlr.

The workspace folder, including the notes it contains, will be populated into your new Zettlr install. The connections between notes will also be retained, though if you have links to notes that live in different workspaces, you'll have to make sure you've likewise opened those workspace folders and their contents within your new Zettlr install.

If you have kept the locations of your workspaces exactly the same, Zettlr will detect them again and you don't have to open them again. Just make sure all workspaces that you expect have been detected correctly, and add missing ones if necessary.

::: note Note of Reassurance
The backup you made of `config.json` contains the location of the various workspaces and notes on your *old* computer. When you re-launch the new Zettlr install after adding the backup of your old `config.json` file, it will automatically remove any paths to workspaces in your old setup which it cannot find anymore.

At the same time, if you add any workspaces or notes to the new Zettlr install before restoring the backup `config.json` file, Zettlr will forget the location of those folders and files. In short, don't worry when you're greeted with an empty window. Your notes and workspaces will be restored as soon as you re-open them in the next step.

Finally, especially when your workspaces have grown large, starting Zettlr for the first time may take some time, as the app will look at each file and extract some information. This information is then cached, so that the workspaces should open much quicker the next time you start Zettlr. If a workspace takes some time before it appears, don't panic!
:::

## 5. Reconnect Your Reference Manager

Finally, if you're using Zettlr with a reference manager like Zotero, you'll need to go through that software's migration process. Once your reference manager is up and running again on the new machine, you can reconnect it to Zettlr by once again following the steps in the “[Enabling Citations in Zettlr](/en/editor/citations/#enabling-citations-in-zettlr)” portion of this documentation.
