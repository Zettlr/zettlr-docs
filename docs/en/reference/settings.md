# Settings

Zettlr offers you a plethora of options to customise your experience with the app. It comes with three major settings dialogs, one of which is the [assets manager explained elsewhere](../core/assets-manager.md), a general preferences dialog, and a tag manager.

## General Preferences

You can display the general preference dialog using either the shortcut `Cmd/Ctrl+,`, the toolbar button (the cog) or the respective menu item. The dialog will then show up and present to you all configuration options you may customise. They are ordered in eight tabs that you can see at the top of the dialog.

* [General](#general): These options affect Zettlr as a whole.
* [Editor](#editor): These settings concern only the editor itself.
* [Export](#export): Control how your files are exported in this tab.
* [Zettelkasten](#zettelkasten): Adapt Zettlr to match your Zettelkasten system.
* [Display](#display): Control how the editor displays certain elements, such as images or links and select the visual theme for the app here.
* [Spellchecking](#spellchecking): Find both the installed dictionaries and your user dictionary here.
* [AutoCorrect](#autocorrect): Choose text to be replaced and also determine the quotes you’d like to use.
* [Advanced](#advanced): Options for experienced users.

### General

![settings_general.png](../img/settings_general.png)

In the general tab you find options that you might want to adjust if you begin using Zettlr to fit it to your needs. The application language is pretty self-explanatory.

Next follows a set of checkboxes:

* **Dark mode**: Controls whether or not the app displays using its dark mode. You can also toggle this using `Cmd/Ctrl+Alt+L` and schedule the dark mode
* **Show file information**: Controls whether the file list displays additional metadata
* **Always load remote changes to the current file**: Controls whether Zettlr will ask you to reload a file if it has been modified externally
* **Avoid opening files in new tabs if possible**: By default, Zettlr opens every new file in a new tab. If checked, Zettlr tries to replace the currently active tab instead of opening a new tab. You can always force-open files in new tabs by using the middle mouse button or the corresponding context menu option

Next follows settings to schedule automatic dark mode:

* **Off**: switch between the modes manually
* **Schedule**: Zettlr will enter and leave dark mode between the given time span (24 hours format)
* **Follow Operating System**: On macOS and Windows, Zettlr can listen to operating system events to synchronize its dark mode with the operating system's

The sidebar mode controls how the file manager is displayed to you. You have two options:

* **Thin**: In thin mode, the file manager only displays _either_ the list of files _or_ the tree view. You can switch between both using the shortcut `Cmd/Ctrl+Shift+1`.
* **Expanded**: The expanded mode displays both the tree view and the file list side by side. In this mode, you have both lists always present.
* **Combined**: This makes the file manager look more like a traditional file browser, because it does not divide folders and files.

Finally, the sorting order determines how Zettlr will sort your files internally. The natural order is recommended; ASCII ignores certain natural language implications. The two last options give you the choice to either display the file creation time or the last modification time in your file list (if you select "Show file information"), and which time to use when you are sorting by time.

### Editor

![settings_editor.png](../img/settings_editor.png)

The editor tab controls most functionality of the editor. As Markdown allows both asterisks and underscores to make text bold and italic, you can choose your favourite flavour here.

Next, you can choose how Zettlr will **autocomplete your citations**. The first option will automatically encapsulate citekeys in square brackets so that you can add a prefix and a suffix. The second option will do nothing to the citekeys so that by default your citations will display as "Author (Year)". The third option defines a composite style, where the author name is rendered outside the brackets, while the publication year and a potential suffix is rendered in brackets.

> Note that this only controls how autocomplete will finish your citations. You can still edit everything later. Here, you should select the form of citation you use most often to save you some typing effort.

The **Autosave**-option allows you to determine if, and when, Zettlr will automatically save your files:

* **Off**: No autosave. You need to manually save using `Cmd/Ctrl+S`
* **Immediately**: Save every modification immediately. This is done after a very short delay of 250ms so that the stress on your hard drive is reduced
* **After a short delay**: This will automatically save your files five seconds after you stopped typing

The **default image path** is a path you can use to tell Zettlr where it should put your images when you paste them from clipboard. It can be absolute or relative. If you provide the name `assets`, Zettlr would put images by default into the `assets` subdirectory of the directory where your file is. You can even tell it to use a directory relative to the parent directory, e.g., `../assets`. Remember that you can always select the directory for an image on a case-by-case basis.

The **indentation** refers to the amount of spaces inserted when you, e.g., increase the level of lists.

The **editor font size** determines how big the font is displayed in the editor. Adjust this to your liking.

> The font Crimson, which is shipped for the Frankfurt theme, is a little bit smaller than the other fonts, so you might want to increase the font size if you use the Frankfurt theme.

The algorithm for the readability mode that Zettlr should use when you toggle the readability mode. For a short explanation of the different algorithms available, please head over to [our documentation on the readability mode](https://www.zettlr.com/readability).

The last dropdown allows you to choose the input mode: For most users, Normal will suffice, but if you're a power user, you may find the Emacs mode useful.

Lastly, a few checkboxes that control various settings:

* **Mute non-focused lines in distraction-free mode**: This dims all lines except the one you are currently editing, if you activate the distraction free mode
* **Automatically close matching character pairs**: This allows you to type brackets and quotes, and the editor will automatically add the matching one afterwards
* **Accept spaces during autocompletion**: To minimize the impact autocomplete has on your writing flow, spaces end autocomplete by default. If you need to have spaces to search for things inside autocompletes, activate this setting
* **Use the CodeMirror default actions for `Home` and `End`**: By default, CodeMirror will jump to the very beginning or end of a whole paragraph if you press these keys. By disabling this option, `Home` and `End` jump to the beginning or end of the visible line.
* **Count characters instead of words**: Rather self-explanatory: If you need to type languages where words are represented by single glyphs, such as Japanese or Chinese, it makes sense to activate this option
* **Use visual order for arrow key movement while in RTL-mode**: If active, the arrow keys on your keyboard move the cursor visually whenever you are typing a right-to-left script (Arabic or Hebrew)

The final setting allows you to choose whether you want to type from right to left (RTL) or from left to right (LTR).

### Export

![settings_export.png](../img/settings_export.png)


The export tab allows you to tweak all preferences concerning how your files are exported.

* **Use the internal Pandoc for exports**: Zettlr ships with Pandoc bundled, so you don't need to install anything else for imports and exports. Should you ever need to use a system-wide Pandoc (must be in PATH), disable this setting and restart the app
* **Remove tags from files**: If checked, Zettlr will run a special Lua-filter that removes tags which are defined within your files (not the ones in the YAML frontmatter)
* **Internal Link Handling**: With the radio buttons you can choose what happens during export with internal links in double-square-brackets: Should they be completely removed, just unlinked (= remove the square brackets), or left alone?
The **target directory** controls where Zettlr will put files after the exporter ran. If you choose the temporary directory, your files will not clutter your computer. This makes it easy to export a file several times and tweak, e.g., the layout of the file. Once you are happy with the results, you can simply save the file to another place (because your operating system will clean out the temporary directory without warning!). If you choose the current working directory, Zettlr will place the exported file next to your source Markdown file. Careful not to overwrite files!


The CSL JSON database field can be used to open a literature database. Zettlr will read in the file and enable citation rendering in your files. You can select either a CSL JSON file (ends in `.json`) or a BibTeX file (`.bib`). BibLaTeX is unfortunately not yet supported.

> On macOS, the option to select BibTeX is unfortunately somewhat hidden. When the Open-dialog shows, click "Options" and then select BibTeX from the format chooser.

The CSL Style lets you overwrite the default citation style (APA). You can use any file present in the [Zotero style repository](https://www.zotero.org/styles).

> The citation options can be overwritten on a per-project basis in the corresponding project's settings.

### Zettelkasten

![settings_zettelkasten.png](../img/settings_zettelkasten.png)

In this tab you can customise the way Zettlr works with your existing Zettelkasten system. In most cases you won't need to touch these options, except you want to use a custom system.

You have four options that are important for Zettelkasten: The ID regular expression, the link start and ending, and the generator pattern.

#### ID Regular Expression (RegEx)

Zettlr uses regular expressions internally to filter out the ID of a file. It looks for that pattern, and if it finds a string that matches this pattern, it assumes that as the ID of the file. **Please note that the first match in a file will be assumed the ID, never the last!** This means: If you choose to use only four digits as your ID, the regular expression would also match years inside your file. As Zettlr simply takes the first ID, make sure that the very first thing in your file is the ID of that file.

The default regular expression (which you can restore by pressing the reset button next to the text field) is `(\d{14})`. This means Zettlr will look for 14 consecutive digits — exactly the number of digits that you get when you concatenate a year, a month, a day, an hour, a minute and a second; like this: 20181012143724. It is extremely unlikely that a file contains a second string that includes fourteen (!) digits, therefore it's a great method to use as an ID. Another great thing is that the ID is unique to the second. So each second you can create a new, fully unique ID.

The braces around the `\d{14}` create a so-called "capturing group". A capturing group's purpose is that the regular expression not only matches a certain string, but also extracts a part of it — in this case the full match. This way you can use almost any structure of IDs you want.

> Note that you can omit the capturing group's braces. Zettlr will encapsulate your RegEx internally, if there is no capturing group.

#### The Internal Links

There is a quick explanation for the internal links: Simply choose how you'd like to write internal links. The default are Wiki style links: `[[your-link]]`. You could also use curly brackets: `{{your-link}}`. Or you could use exclamation marks: `!your-link!`. Whatever suits you!

The internal links are used for two things: First, if they either contain an existing file name or an existing ID, clicking them will directly open the respective file (identified either by its name without the extension, or by its ID). Second, if they don't contain any of that, they won't open any file, but they will work as a search function, so `Cmd/Ctrl` clicking them will start a search — this is great for saving searches you do often!

> Note that files will not assume any link as an ID. If a file finds an ID that is surrounded by the internal link formatting, it will not use this ID.

#### The ID Generator

The last field in the Zettelkasten tab in the preferences window concerns the way the IDs are generated. It is a simple string that may contain variables that are replaced when an ID is generated. Currently, you have the current year, month, day, hour, minute, and second available. The default ID generator pattern is: `%Y%M%D%h%m%s`, which means it will replace `%Y` with the current year (4 digits), `%M` with the current month (with leading zeroes), and so forth. You could also include some static part in your IDs, if you wish. So with the ID pattern set to `%Y-%M-%D_%h:%m:%s` Zettlr would generate an ID like this: `2018-10-12_12:03:56`. You can also reuse the variables in your pattern, e.g., to use only seconds as your ID. You could use something like this: `%s%s%s` and would get `565656`.

Always remember to adapt your regular expression so that it matches what the ID generator spits out. To successfully identify the ID with the pattern, `%Y-%M-%D_%h:%m:%s`, Zettlr would need the following regular expression: `(\d{4}-\d{2}-\d{2}_\d{2}:\d{2}:\d{2})`. If you use `%uuid4`, you can use the following RegEx: `[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[89aAbB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}`.


#### Other Options


Lastly, you have the ability to choose when the filename of a file will be added after the actual link when you autocomplete such a link:

* **always** will always add the filename after the link, even if the file does not have an ID and thus will be linked using the filename (i.e. `[[filename]] filename`)
* **only when linking using the ID** will only add the filename if the file will be linked using its ID (i.e. `[[1234567890]] filename`)
* **never** will always just link the file without any extras

Selecting **Automatically create non-existing files** will make Zettlr always create files, if you follow a link and the file with the corresponding filename or ID does not yet exist, Zettlr will create it automatically. You can lastly choose whether or not a full-text search will be started whenever you follow an internal link.

> The last setting enables you to create a form of "saved search": You can actually wrap a search in such a link. When you click such a "search-link", Zettlr will automatically start a full-text search using the contents of the link. However, in that case you should make sure that Zettlr doesn't attempt to create a corresponding file, since that might lead to problems.

### Display

![settings_display.png](../img/settings_display.png)

This tab controls how the editor displays certain elements. Zettlr uses a semi-preview approach to Markdown and only renders some elements. On this tab you can control which elements will be rendered.

> The iFrame setting controls whether or not to render iFrames (for instance, YouTube videos are embedded iFrames).

#### Theme

Next you can choose which theme to use. Currently, you have five to choose from. Each theme comes with a little explainer to tell you how it looks. But don't hesitate: Click yourself through until you find one that you like!

Click on any of the previews to switch your application to that theme.

Furthermore you can constrain the size of images, which is especially beneficial if you use a lot of portrait oriented images. The first slider controls the maximum amount of width images are allowed to occupy. Setting this to 50%, for instance, will keep images at half the width of the text body. 100% disables this (images will never be wider than 100% of the text body width). The second slider controls the maximum height of the images relative to the window size. 50 percent would mean that images will never be higher than half of the window's total size. 100 percent disables this behaviour. Unlike the width, images may very well exceed 100 percent of the viewport if they are large and thin.


### Spellchecking

![settings_spellchecking.png](../img/settings_spellchecking.png)

With the introduction of the user dictionary, the spellchecking functionality has moved to its dedicated tab. The first list contains all available dictionaries that can be used for spell checking. Simply select the ones you want to use. You can use multiple dictionaries to check bilingual texts. Filter the list using the search box on top of the list.

> **Tip**: To disable spell checking, uncheck all dictionaries. To install additional dictionaries, refer to the [localisation manual](../core/localisation.md).

Finally, the second list displays all the words you've added to your custom dictionary. You can remove an item from your custom dictionary.

### AutoCorrect

![settings_autocorrect.png](../img/settings_autocorrect.png)

This tab controls the AutoCorrect features you can use from version 1.5 onward that you might already know from LibreOffice or Word. You can choose to turn it off completely and choose the flavour you’d like. The main difference between the two styles is that Word is much quicker in replacing; it will replace when you type the last character, whereas LibreOffice only replaces when you hit Space or Return. LibreOffice is less harassing, but if you’re perfectly used to Word, you might find this mode easier.

The “Magic Quotes” refer to exactly that: the primary and secondary quotes that you would like to use instead of the generic ASCII-quotes (`"` and `'`). We’ve included a lot of pairs used all around the world. If you would like to deactivate this feature, choose the **first** option (the ASCII-quotes) in both dropdowns.

The last thing you can tweak is the replacement table : These are simply characters you would like to replace with different ones. We’ve included a comprehensive list with most commonly needed tokens, so feel free to have a look around and also add or remove some!

### Advanced

![settings_advanced.png](../img/settings_advanced.png)

The advanced tab contains options that are helpful for advanced tasks.


The “pattern for new filenames” is what the textfield will look like when you create a new file. It will be prepopulated by whatever you type here. You can make use of the variables below (the ID following the pattern you have selected in the Zettelkasten tab, year, month, day, hour, minute and second). If you tick the checkbox, Zettlr will not even ask you for a filename when you create a new file, which might speed up your workflow.


The **debug option** is used to control whether or not you are able to "reload" the graphical user interface (GUI) by pressing `F5` and display the Chrome developer tools to inspect what the app is doing. Naturally, you would want to do this as a developer.

You can also help Zettlr by **subscribing to beta releases**. When you tick this option, Zettlr will notify you about new beta releases in addition to normal releases. You can then decide whether to use the beta version, or not. Activate **RMarkdown file support** to enable the detection of `.rmd` files used for R-Markdown. It is inactive by default, as some other programs (for instance, by Adobe) also use this extension to store binary data, which would cause problems.

The text area to the right controls what files will be displayed in the **attachment** sidebar. It is simply a comma-separated list of all file extensions you would like to have at your disposal. The initial list should contain most extensions you might be using.

Next you have, again, a few checkboxes:

* **Enable debug mode**: This does only one single thing: It will enable an additional "develop" menu from which you have access to a few developer sources. **We might ask you for some logs, if you report a bug. You can find those logs in the develop menu**
* **Notify me about beta releases**: If ticked, you will be informed by the app not only for stable releases, but also for preview releases
* **Use native window appearance** (Linux only): If checked, Zettlr will render the windows using the regular window chrome of whichever window manager you are using. By default (if unchecked), Zettlr displays a custom menubar and window buttons. This option is not available on macOS and Windows
* **Delete items irreversibly, if moving them to trash fails**: Some computers may have problems moving files into the trash. If you realize that Zettlr doesn't delete files even if you confirmed that, this could mitigate this; but at the expense that your files will be immediately deleted
* **Show app in the notification area**: This setting makes sure that Zettlr keeps running in the background even if you close the main window. Especially handy to have it open quickly whenever you need it

The token list below that allows you to define those file extensions, which Zettlr will display as "other files" in the sidebar. We've already added a handy list, but you can modify it if you need to.

Next, you can see the iFrame rendering whitelist. This list will be populated whenever you choose to show an iFrame. Since iFrames can be a security risks, you will have to explicitly allow any website, which will then show up here. You can remove those which accidentally slipped in there.

The last setting allows you to activate watchdog polling on Windows. Sometimes, especially on older computers, Zettlr may detect too many file modifications. If this happens to you, you can activate that setting and adjust the time. A timeout of 1,000ms (the default) will only scan the file system every second.

## Tag Manager

![The Tags settings dialog](../img/tags_settings.png)

The tags dialog does not have a shortcut associated, so you'll need to call it using the respective menu item. Here you can assign colours and descriptions to tags.

To add a new tag-colour-relationship, simply press the `+` button at the bottom of the dialog. In the first field, enter your tag without the preceding hashtag symbol (e.g., if you wanted to assign a colour to the hashtag `#todo`, simply enter `todo`). Next, choose a colour to be assigned to that tag. If you click the second bar after the tag name field, a color picker should appear that lets you choose a colour. In the third field, you can enter a short description for that tag. This description will be shown if you hover over the tag symbols in the file list.

If you want to remove a tag-colour-association, simply click the `-` button at the end of such a tagline (pun intended).
