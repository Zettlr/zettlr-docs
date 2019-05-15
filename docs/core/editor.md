# The Editor

At the heart of Zettlr sits a powerful Markdown editor. It uses a highly sophisticated software called **[CodeMirror](https://codemirror.net/)** and therefore offers a lot of features out of the box.

In this document, you will learn about writing Markdown, available commands, some special features of CodeMirror and how spellchecking works.

## Writing Markdown

The idea behind Zettlr is to remove unnecessary markup and styling from your writing process. During the writing process, what matters is the _content_ you produce, not the form in which it is presented. A little bit of formatting is provided, of course. But if it comes to colours and text align, nobody really needs plenty of options to get writing. The formatting is what happens _afterwards_.

Therefore Zettlr lets you write `Markdown`-files. Markdown is a very simple markup language that only contains a small amount of formatting symbols that you may already know! In recent years, more and more apps have discovered the power of Markdown, and even WhatsApp uses it to enable simple formatting of messages.

A Markdown-Document only consists of pure text and comes with a lot of benefits:

* Markdown is **platform independent**. Any Markdown file written on macOS can—without any conversion—be edited on Windows and Linux alike. All you need is a text editor. And with "Notepad" (Windows), "TextEdit" (macOS) or "GEdit" (Ubuntu) every operating system already has one built-in.
* Markdown's syntax is designed in such a way that **even without any syntax highlighting, you get the idea of a Markdown document**. Even without styling, it is easy to spot all headings, because they have leading hash signs (#), lists are indicated with bullets or numbers and emphasised text is encapsulated in underscores or asterisks.
* Markdown is an **open source standard**, meaning everybody can implement it into software (just as we did!) and begin building upon it. This also means that you can **expect most apps to understand it**.
* As Markdown is so simple and does not add any formatting by itself, any app can introduce a different way of previewing. **There are tons of Markdown apps that use different approaches to writing**. If Zettlr doesn't fit you, you can always choose from a plethora of different free, open source apps.
* Markdown documents only contain the bare necessity of formatting to help apps understand it. Therefore **Markdown documents are approximately ten times smaller than conventional word processor formats**!
* And many more …

> If you want to know exactly what Markdown can do and what it can't, refer to the [**Markdown** section](../reference/markdown-basics.md).

## Editing text

Editing text with Zettlr is simple. Just create a new file or select an existing one, click inside the editor and begin writing. Use Markdown formatting as you need it and make use of some shortcuts that make it even simpler to add formatting:

* `Cmd/Ctrl+B`: Make text **bold**
* `Cmd/Ctrl+I`: _Emphasize_ text
* `Cmd/Ctrl+K`: Create a new `[link](https://www.zettlr.com)`. Selected text will become the description—you only need to add the URL. And if there is a valid URL in the clipboard, Zettlr even takes it as a URL, meaning you don't have to do anything on your own!
* `Cmd/Ctrl+Shift+I`: Insert an image. If you selected text, it will become the description of the image. Just add a path to your image, or copy a path to an image before. Then, Zettlr will automatically add the clipped path!
* `Tab`: Indent any given list one level.
* `Shift-Tab`: Un-indent a list one level.

Of course, all other default shortcuts that work on any text editor will also work by default: Copy text with `Cmd/Ctrl+C`, insert it with `Cmd/Ctrl+V` or cut it by pressing `Cmd/Ctrl+X`. Undo and redo is also supported just as removing whole words or lines. Just write as you are used to writing.

## Preserving Formats During Copy & Paste

Of course it's mandatory that you can also work with formatted text. For instance, you might want to paste formatted text from a Word document or a webpage. To do so, simply copy such text and paste it. Zettlr will automatically detect that it's formatted text and convert it before inserting it. If you don't want to paste the text with formattings but as plain text, hold down `Shift` when pasting. This will tell Zettlr not to convert the text to Markdown.

Next, at some point you want to copy some text from Zettlr but in a way that other apps can understand its format. To copy the text not as Markdown, but with a common format, you need to select `Copy as HTML`. The shortcut is `Cmd/Ctrl+Alt+C`.

> Refer to the section on [Shortcuts](../reference/shortcuts.md), to get a list of all available shortcuts.

## Special features of CodeMirror

Because CodeMirror is so powerful, there are also other great options that you can make use of (if you need them).

* Press `Cmd` (macOS) or `Alt` (Windows/Linux) and click somewhere in the text. Now you will have **two cursors** at your disposal! This is mostly useful if you are about to write some text several times to save time. To leave that multi-cursor-mode, just click anywhere in the text without the modifier keys pressed.
* Press `Cmd` (macOS) or `Alt` (Windows/Linux) and select some text. Now you can **select several portions of text** at once. This is useful if you want to create two or more links at once: Just select the portions of text that should serve as the description of these links and press `Cmd/Ctrl+K` to transform all the selections into links — at once! This works with all other commands like making text bold or italic, or creating quotes.
* If you have nothing selected, pressing `Cmd/Ctrl+X` will **cut the full line**. Pressing `Cmd/Ctrl+V` afterwards will **insert this whole line above the line, in which your cursor is**.
* CodeMirror **auto-closes quotes and brackets** to save you time! Whenever you type a "- or a (-character, it will present you with the closing character automatically. And when you are done with your quote, just type " or ), it will _not add the character a second time_ but just "jump" over it! This also works with selected text. If you have something selected and press one of these characters, it will encapsulate your selection with it.

## Spellchecking

Zettlr also features spellchecking. In your Preferences, you can select all languages, that your text should be checked for. The dictionaries are loaded on app start and your editor content is checked against it. Zettlr will move through all dictionaries to check a word, and only if none of the loaded dictionaries can find it, it will be marked as wrong with a small dashed line.

To correct a word, simply right-click it and select a suggestion from the context menu, if there are any. You can also add a word to your user dictionary.

Are you writing bilingual? No problem! Simply load all dictionaries that you potentially write text in to check against all languages at once. Just remember that dictionaries can use up a lot of memory, so if you load too many, it may slow down the application.

> **Tip**: To disable the spellchecker completely, simply uncheck all dictionaries in the preferences.

## Working with footnotes

Footnotes are a notoriously difficult thing in Markdown, because they require some special characters to realise them, and also need you to work at two positions in the document at once: Where you want to put your footnote and at the bottom, where the reference text resides. Zettlr tries its best to ease your pain with these in the following ways:

1. You can use a shortcut to place footnotes: `Cmd+Alt+R` (macOS only) or `Ctrl+Alt+F` (macOS/Windows/Linux).
2. The reference text (that is, the content of the footnote) will be displayed at the bottom end of the editor window when you hover over a footnote.
3. If you `Alt`- or `Ctrl`-Click a footnote anchor somewhere in your text, a popup will show up that lets you edit the footnote in place. After you are finished editing your footnote, simply press `Shift+Enter` to close the popup and replace the text of the footnote.
