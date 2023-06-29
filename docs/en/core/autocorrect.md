# AutoCorrect and Magic Quotes

Apart from checking your documents for style and grammar issues, Zettlr also features two tools that will already correct or replace your text as you write it. These tools are AutoCorrect and MagicQuotes.

* **AutoCorrect** constantly scans your text as you write it. If it detects that you have written something that it can replace, it will do so.
* **MagicQuotes** is a service that inserts typographically correct quotation marks instead of the generic ones.

## AutoCorrect

AutoCorrect is a service that can replace certain strings of characters with others. For example, if you frequently have to type out a very long and/or complex word, but there exists a handy abbreviation for it, you could tell AutoCorrect to watch out for the abbreviation and replace it with the entire word. Similarly, if you wish to insert special symbols (for example arrows such as &larr; and &rarr;) without having to manually click through some symbol table, AutoCorrect can help you.

To function, AutoCorrect requires a **replacement table**. Zettlr comes with a predefined set of replacements for AutoCorrect that covers the most common replacements. You can add, modify, and remove replacements in the preferences. The left column contains characters the application will search for, whereas the right column contains the respective replacements.

AutoCorrect constantly checks what you type and, as soon as it encounters a sequence of characters from the replacement table, it will replace that with the replacement you have specified. Note, however, that it will only replace when you press either Enter or Space. To prevent AutoCorrect from replacing a sequence of characters, hold down the Shift-key while pressing Enter or Space.

> AutoCorrect only works in Markdown text. It does not apply in code or comments.

## MagicQuotes

MagicQuotes is an extension that helps you write typographically correct quotation marks, instead of the default (`"` and `'`). In the settings you can select both primary and secondary quotation marks. The primary quotation marks are common, whereas the secondary quotation marks can be used within primary quotes, or depending on your style. Selecting the first option in either dropdown list restores the default quotation marks.

To use the default quotation marks in your text, first insert one and then immediately press Backspace. Instead of deleting the quotation marks, Zettlr will convert them to the default quotation marks. Pressing Backspace a second time removes the quotation mark altogether.

> MagicQuotes are only active in Markdown text. It does not apply in code or comments.

If you have the status bar active, you can use it to quickly change the MagicQuotes Zettlr uses, without having to go into the settings.
