# Shortcuts

This page contains a list of all shortcuts available throughout the app.

For remembering them easier, here are some thoughts we've put into assigning the shortcuts. In general, we try to follow these rules, but not all shortcuts follow them.

1. **Common shortcuts**: Some shortcuts are so common that they don't fit into our shortcut system, but everybody will recognise them. One example is the preferences shortcut (`Cmd/Ctrl+,`), another the shortcut to finish editing a footnote (`Shift+Enter`). We try to use as many of these shortcuts as possible to reduce friction.
2. **High-priority shortcuts**: You will be using these shortcuts _a lot_ while using the app. These are generally `Cmd/Ctrl` and one single letter. While naming the shortcuts we try to stick to the English names of the command that it triggers (**N**ew, **R**emove, **F**ind, etc). Sometimes this is not possible (for instance the Distraction Free mode is triggered via `Cmd/Ctrl+J`, because `Cmd/Ctrl+D` is already taken by the editor).
3. **Alternative actions**: We take the semantic meaning of the `Alt`-key serious. Therefore, take a high-priority shortcut, add an `Alt` to it and you normally tend to trigger an alternative action on the same target. Notable exceptions to this are the developer panel (opens with `Cmd/Ctrl+Alt+I`, while `Cmd/Ctrl+I` makes text Italic). **This is true for _all_ actions that you can trigger using mouse clicks. All alternative mouse actions are triggered with an `Alt+Click`. In case `Alt-Click`s don't yield the expected results, `Ctrl+Click`s also work**.
4. **Alternative targets**: In case you want to perform the same _action_, but on a different target, try using a `Shift`-key. Throughout most of the app, `Shift`-commands will change the target from the currently selected file to the currently selected directory. The search also utilises this (`Cmd/Ctrl+F` searches the file, while `Cmd/Ctrl+Shift+F` searches the whole directory).

## App-wide shortcuts

* `Cmd/Ctrl+,`: Open Preferences
* `Cmd/Ctrl+Alt+,`: Open PDF export Preferences
* `Cmd/Ctrl+Q`: Exit the app
* `Cmd/Ctrl+N`: Create a new file inside the currently selected directory. If none is selected, the command is disabled.
* `Cmd/Ctrl+Shift+N`: Create a new directory inside the currently selected directory. If none is selected, the command is disabled.
* `Cmd/Ctrl+O`: Display the dialog to open another directory.
* `Cmd/Ctrl+S`: Save the file. Zettlr automatically saves your files, but some people tend to feel better having the option to manually save.
* `Cmd/Ctrl+E`: Open the export popup for exporting the current file. If none is selected, the command is disabled.
* `Cmd/Ctrl+R`: Rename the opened file. If none is selected, the command is disabled.
* `Cmd/Ctrl+Shift+R`: Rename the current directory. If none is selected, the command is disabled.
* `Cmd/Ctrl+Delete`: Delete the current file. If none is selected, the command is disabled.
* `Cmd/Ctrl+Shift+Delete`: Delete the current directory. If none is selected, the command is disabled.
* `Cmd/Ctrl+Shift+F`: Gives focus to the global search field.
* `Cmd/Ctrl+Alt+L`: Switches the theme between light and dark mode.
* `Cmd/Ctrl+Alt+S`: Toggles display of the text snippets.
* `Cmd/Ctrl+Shift+1`: Toggles the sidebar mode to either view the file list or the tree view. Disabled in extended sidebar mode.
* `Cmd/Ctrl+?`: Toggles display of the attachment sidebar.
* `Cmd/Ctrl+[0-9]`: Open recent document at position 0 to 9 in the recent documents list (File->Recent Documents).
* `Cmd+Ctrl+F` (macOS) `F11` (windows/Linux): Toggle fullscreen
* `Cmd/Ctrl+W`: Close the application window. On Windows and Linux this will also exit the app.
* `Cmd/Ctrl+M`: Minimize the application window.
* `F1`: Open this documentation. This will open the link in your default browser.

**If the debug mode is enabled**

* `F5`: Reload the graphical user interface.
* `Cmd+Alt+I` (macOs) `Ctrl+Shift+I` (Windows/Linux): Open the Chrome developer tools.

## Textfield-related app-wide shortcuts

* `Cmd/Ctrl+Z`: Undo
* `Cmd/Ctrl+Shift+Z`: Redo
* `Cmd/Ctrl+X`: Cut
* `Cmd/Ctrl+C`: Copy
* `Cmd/Ctrl+V`: Paste
* `Cmd/Ctrl+A`: Select all text

## Editor-related shortcuts

* `Cmd/Ctrl+Alt+C`: Copy as HTML. If there is a selection, it will be converted to HTML and not copied as plain text. This allows you to paste it, e.g., into word processors.
* `Cmd/Ctrl+Shift+C`: (Un-)Comment the given text selection (or add a new HTML comment at cursor position).
* `Cmd/Ctrl+X`: Cut. If the editor has focus, it will cut the selection. If nothing is selected, this will cut **the whole line**, in which the cursor is.
* `Cmd/Ctrl+V`: Paste. If the editor has focus, and you have just cut a whole line, it will paste this whole line above the line, in which the cursor currently is. Formatting will be preserved if the clipboard contains formatted text.
* `Cmd/Ctrl+Shift+V`: The same as the above, except it will not try to preserve the formatting of the pasted text.
* `Cmd/Ctrl+B`: Make the selection bold or insert new bold formatting characters.
* `Cmd/Ctrl+I`: Make the selection italic or insert new italics formatting characters.
* `Cmd/Ctrl+K`: Insert a new link template or convert the selected text into the caption of a new link. If the clipboard contains a recognisable link, also fill in the braces for the target.
* `Cmd/Ctrl+T`: Make the current line into an un-checked tasklist item.
* `Cmd/Ctrl+F`: Opens the search popup inside the editor that has currently focus (either the main editor or a Quicklook window).
* `Ctrl+Alt+F` (Windows/Linux) `Cmd+Alt+R` (macOS): Insert a new footnote at the current cursor position.
* `Cmd/Ctrl+L`: Generate a new ID using the generator pattern from the settings dialog and insert it at the current cursor position.
* `Cmd/Ctrl+0`: Re-set the font-size of the editor to standard.
* `Cmd+Plus` (macOS) `Ctrl+Shift+Plus` (Windows/Linux): Increase the editor font size.
* `Cmd/Ctrl+Minus`: Decrease the editor font size.
* `Tab`: Indent a list.
* `Shift-Tab`: Outdent a list.
* `Shift-Enter`: When editing a footnote, saves the reference text. Otherwise it will prevent auto-insertion of a new list item.
* `Ctrl-Enter`: Insert a line below the one your cursor is currently in, and place the cursor at the beginning of it.
* `Ctrl-Shift-Enter`: Insert a line above the one where your cursor is currently, and place the cursor at the beginning of it.

## Table editor shortcuts

These shortcuts work in each table editor once you enter the edit mode by clicking into the table.

* `Tab`: Move to the next cell. If the last column is active, move to the first cell in the next row. If your cursor was in the last column of the last row, a new row will be added automatically.
* `Shift-Tab`: Move to the previous cell. If your cursor was in the first column, move to the last cell in the previous column.
* `Return`: Move to the same column in the next row. If your cursor was in the last row, a new row will be added automatically.
* `Arrow Up/Arrow Down`: Move to the same column in the previous/next row. No new rows will be added if you are in the first or last row.
* `Arrow Left/Arrow Right`: Move the cursor left/right. If the cursor is at the beginning/end of the cell's contents, move to the previous/next cell.

## Preview-related shortcuts

* `Arrow Up`: Open the previous file.
* `Arrow Down`: Open the next file.
* `Cmd/Ctrl+Arrow Up`: Jump to the top of the list.
* `Cmd/Ctrl+Arrow Down`: Jump to the bottom of the list.

## Popup-related shortcuts

* `ESC`: If any text field inside the popup has focus, pressing Escape will close the popup.

**In the search popup of the main editor**

* `Return`: While the _search_ textfield is focused, it will select the next occurrence of your search term. While the _replace_ textfield is focused, it will replace the next occurrence of your search term with the replacement text and automatically search for the next occurrence.
* `Alt+Return`: While the _replace_ textfield is focused, this will replace all occurrences of your search term with the replacement text.