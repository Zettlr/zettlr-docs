# AutoCorrect and Magic Quotes

AutoCorrect is a well-known feature that is also supported in Zettlr. You have a plethora of settings at hand to customize the way AutoCorrect works. You can enable and disable it in the [preferences](../reference/settings.md).

## AutoCorrect

AutoCorrect works by constantly checking what you type and, as soon as it encounters a sequence of characters from the replacement table, it will replace that sequence of characters with the replacement you have specified.

Zettlr comes with a predefined set of replacements for AutoCorrect that covers the most common replacements, such as replacing two dashes (--) with an en-dash (–). You can add, modify, and remove replacements in the preferences. The left column contains characters the application will search for, whereas the right column contains the respective replacements.

AutoCorrect comes in two flavors: You can either choose the "Word" mode, or the "LibreOffice" mode – depending on whether you are more accustomed to Microsoft Word or LibreOffice. The two modes differ in how they are triggered. The Word-mode is generally more aggressive and will immediately attempt to replace every sequence of characters it encounters. The LibreOffice mode requires you to press either Space or Enter before it attempts to replace something. You can always undo a replacement by pressing the Backspace key.

> We recommend the LibreOffice mode, as it allows you to selectively prevent a replacement by pressing `Shift+Space` instead of just `Space` and `Shift+Enter` instead of just `Enter`.

## MagicQuotes

MagicQuotes is an extension that helps you write typographically correct quotation marks, instead of the default (" and '). You can either choose them from a dropdown list, or select a pre-defined set for a few languages by pressing the corresponding button in the preferences. Selecting the first option (or the "None"-option button) restores the default quotation marks.

> MagicQuotes is automatically active as long as AutoCorrect is active. If you choose to deactivate AutoCorrect, this also deactivates MagicQuotes. To selectively disable MagicQuotes while keeping the AutoCorrect functionality, set the MagicQuotes to the default quotation marks.
