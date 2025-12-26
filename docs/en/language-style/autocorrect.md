# Autocorrect and Magic Quotes

Autocorrect is a tool that allows you to correct common mistakes and expand text as you type. It can be used to, e.g., insert typographically correct characters, or expand abbreviations.

Magic Quotes is a tool that inserts typographically correct (“smart”) quotation marks as you type, adequate for the language.

Both tools together offer a low-level interface to ensure the text you write is accurate and typographically correct.

Since both tools effectively replace characters with other characters, both tools can be configured in the same place in the preferences → “Autocorrect.”

![preferences_autocorrect.png](../img/preferences_autocorrect.png)

## Autocorrect

Autocorrect is a service that can replace certain strings of characters with others. You will recognize this from the way Microsoft products can replace, e.g., the characters `-->` with a typographically correct arrow symbol, `→`.

Autocorrect is essentially a replacement table. Zettlr will constantly scan your text as you write, and, if it detects a sequence from the replacement table, automatically replace the sequence with the replacement you have defined.

Zettlr comes with a variety of useful replacements predefined. This includes arrows, mathematical operators, and common fractions.

!!! tip

	Being able to replace simple ASCII-characters like three dots (`...`) with the correct ellipsis symbol (`…`) is useful especially on Windows, where inserting special typographical symbols usually requires a number block and ALT-codes.

Autocorrect can be finetuned to your needs. First, Autocorrect will *always* replace a sequence of characters *only* if you type a space or insert a newline. This is meant to prevent aggressive autocorrect in instances where this would not be appropriate.

To prevent autocorrect even when inserting a space, hold down <kbd>Shift</kbd> while inserting a space.

Lastly, by default, Autocorrect will also replace parts of words. While this can be helpful, the “Match whole words” setting in the preferences ensures that only whole words (=separated with spaces) are replaced.

!!! note

    AutoCorrect only works in Markdown text. It does not apply in code or comments.

## Magic Quotes

Magic Quotes is an extension that helps you write typographically correct quotation marks, instead of the default (`"` and `'`). Zettlr includes typographically correct quotation marks for many languages.

!!! note

    Magic Quotes are only active in Markdown text. The feature does not apply in code or comments, because there regular quotes are important.

To understand quotation marks, it helps to define three terms:

* **Primary** quotation marks (often “double” quotes) are the regular quotation marks used in texts to quote phrases. They are called primary because they are the default.
* **Secondary** quotation marks (often “single” quotes) are used mostly to denote quotes in quotes. For example, if you quote a work that itself quotes something else, you would want to use secondary quotes to denote the inner quotes. Example: `In another case, Author writes "that the 'common misperceptions' (Another Author) are too common to ignore."`
* **Alternative** quotation marks are just that: alternatives for the common quotation marks used. In some languages, there is not one definitive standard for quotation marks, and others are also possible. For example, German usually requires „bottom and top“ quotation marks. However, some German authors prefer the French »guillemots«. These are therefore called the “alternative” quotation marks.

In the preferences → “Autocorrect” you can select which primary and secondary quotation marks you wish to use separately.

### Switching Quotes as a Bilingual Writer

Many authors write in at least two different languages. For these users, it is cumbersome to use the preferences to switch the quotation marks whenever the language changes. Thus, Zettlr offers a control to quickly switch back and forth.

To use it, you need to enable the status bar. The status bar includes a control for Magic Quotes which shows you the currently active quotation marks. To switch them quickly, click the control and select your language from the list.

!!! note

	The status bar is intended to switch quotation marks quickly. This means that you cannot change primary and secondary quotation marks independently.

### Turning Magic Quotes into Regular Quotes

Sometimes, it is necessary to use regular (non-typographic) quotation marks instead. To turn a smart quotation mark into a regular quotation mark, place your cursor next to the mark, and press <kbd>Backspace</kbd>. Instead of deleting the quotation mark, Zettlr will convert it into its non-typographical pendant. Only when you press <kbd>Backspace</kbd> a second time will Zettlr delete the quotation mark.