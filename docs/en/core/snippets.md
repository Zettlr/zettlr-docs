# Snippets

Zettlr ships with a comprehensive snippets and templating system. This allows you to define certain chunks of text which you tend to write often, and define a short name for them which you can write instead of the entire text. Additionally, you can use variables and tabstops to make the snippets dynamic.

Snippets are a powerful templating system that allows you to define the blueprints for entire files.

The system itself is based on the TextMate syntax and as such to a certain degree interoperable with snippets which you already possess for systems which support this syntax, such as VisualStudio Code.

## Managing Your Snippets

You can manage your snippets using the [assets manager](../advanced/assets-manager.md). You can open the assets manager by selecting 'File' &rarr; 'Preferences' &rarr; 'Assets Manager' or by pressing <kbd>Cmd/Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>,</kbd>.

To the left, you can find a list of all snippets. Initially it will be empty. You can add a new snippet by clicking the "+"-button at the bottom of the list. It will initially be named "snippet-X" (where X is a number). If you select a snippet, the snippets editor will show the contents of the file in the editor and the name in the text field above it.

After you have made changes to the snippet, make sure to click "Save" or press <kbd>Cmd/Ctrl</kbd>+<kbd>S</kbd> to persist your changes. To rename a snippet, simply type the new name into the name text field above the snippet editor and click the button.

> Note that your snippet name can only contain the letters A to Z, numbers, hyphens, and underscores. This is because the snippet name will be used for the autocompletion in the editor. If you type other letters, they will be replaced with a hyphen.

Your snippets are actually files which reside in a directory within your application data. Please refer to [the installation manual](../getting-started/setup.md) for the precise location of this folder. The snippet files always follow the pattern `<name>.tpl.md`, where `<name>` refers to the name you give to the snippets within the GUI. This can be useful for backup or sharing purposes.

## Snippet Syntax

The snippets follow a simple syntax:

* Snippets are in and of itself Markdown files, so Markdown syntax is entirely valid.
* `$[1-9]`: By typing a dollar sign followed by a number, you add a tabstop. After you inserted a snippet, this will allow you to guide your tabs according to the numbers (so repeatedly typing <kbd>Tab</kbd> will move through these by number ascending).
* `$0`: The zero is a special tabstop. It's the last tabstop. If you omit this, the cursor will end up after the inserted snippet, but by placing this somewhere in the text, you can control this behaviour.
* `${[0-9]:[.]}`: By surrounding the tabstop with curly brackets and adding a colon, you can define default text that will be placed at this position. As soon as you get to the specified tabstop, this text will be selected. You can either leave it in place by pressing <kbd>Tab</kbd> again, or overwrite it. An example: `${5:Some text}` would result in the text "Some text" to be placed at tabstop number five, which will be selected when you get there by pressing <kbd>Tab</kbd>.
* `$[A-Z_]`: If you use Latin characters instead of numbers, you define a variable that can be replaced when you insert a snippet. Variables consist only of uppercase characters and underscores. If you make a typo, you can spot this because the variable will be coloured red (instead of yellow).
* `${[A-Z_]:[.]}`: Just like with tabstops, you can define default text for variables, which will be inserted if the variable cannot be inserted (e.g. the `CLIPBOARD` variable can be empty if no text is in the clipboard).

### Snippet Variables

The following variables are supported by Zettlr's snippet system:

* `CURRENT_YEAR`: The current year (4 digits)
* `CURRENT_YEAR_SHORT`: The current year (2 digits)
* `CURRENT_MONTH`: The current month (2 digits)
* `CURRENT_MONTH_NAME`: The full name of the month (localized according to your app settings)
* `CURRENT_MONTH_NAME_SHORT`: The short month name (localized according to your app settings)
* `CURRENT_DATE`: The current day of the month (2 digits)
* `CURRENT_HOUR` The current hour (24 hour format; 2 digits)
* `CURRENT_MINUTE`: The current minute (2 digits)
* `CURRENT_SECOND` The current second (2 digits)
* `CURRENT_SECONDS_UNIX`: The current unix timestamp in seconds
* `UUID`: A UUID version 4
* `CLIPBOARD`: The contents of your clipboard (text only)
* `ZKN_ID`: Generate a Zettelkasten ID (according to your pattern)
* `CURRENT_ID`: Holds the currently assigned Zettelkasten ID to the file
* `FILENAME`: Holds the filename of the current file
* `DIRECTORY`: Holds the directory path for the current file
* `EXTENSION`: Holds the file extension for the current file

## Working With Your Snippets

After you have created your snippets, they are available in the autocomplete system of the editor. You can bring up the autocomplete by typing a colon (<kbd>:</kbd>). Typing will filter the list of snippets. With the arrow keys you can select snippets, and with <kbd>Tab</kbd> you insert the selected snippet.

After you have selected a snippet, Zettlr will first insert the snippet, then replace all variables according to the syntax described above. Afterwards, it will create text markers that denote the position of all tabstops and activate a temporary new keymap that will re-map two keys: <kbd>Tab</kbd> and <kbd>Esc</kbd>. Whenever you hit <kbd>Tab</kbd>, Zettlr will move to the next tabstop. If you would like to prematurely stop tabbing through these tabstops, you can hit <kbd>Esc</kbd>.

The keymap will be removed and your <kbd>Tab</kbd> and <kbd>Esc</kbd>-keys will work normally when either all tabstops have been reached or when you hit <kbd>Esc</kbd>.

## A Snippet To Get Started

In case you're interested in what snippets can do, simply copy and paste the following into a new snippet and try it out.

```markdown
---
title: "${1:Enter a Title}"
date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE
author: ${2:Enter your name}
id: $ZKN_ID
---

# ${1:Enter a Title}

$0
```

Here's what this looks like after you have autocompleted the snippet name. You can clearly see that the remaining tabstopps are colored so they're easily discernible.

![An example snippet in autocomplete mode](../img/snippets_example.png)
