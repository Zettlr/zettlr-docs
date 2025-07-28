# Writing Markdown

After setting up your workspaces and getting familiar with how to create and manage files, it is time to fill these files with content.

On this page, you will learn about writing Markdown, available commands, and some special features of Zettlr's Markdown editor.

## What is Markdown?

Markdown is a very simple markup language that uses formatting symbols to format text instead of having you click around a formatting toolbar. You already know many of the conventions of Markdown. For example, to emphasize text, you simply need to surround it with `*` or `_` symbols. In fact, many applications that you may already know use Markdown, such as Slack, Discord, Microsoft Teams, and more.

!!! note

    Despite its simplicity, Markdown contains all formatting conventions you need to write full-fledged research articles. And, should you ever miss something, you can always drop in a few LaTeX commands or HTML tags.

The two main benefits of Markdown are that you can format your entire document without using your mouse or trackpad and that it separates content from layout.

You can direct Zettlr to format everything by pressing a few keys. Additionally, because Markdown purposefully has no direct layouting capabilities, you will find it much easier to focus on what you write instead of tinkering with its looks. The layouting only happens during export.

!!! note

    To learn how to customize how your documents look once you export them, head over to the [defaults files](../advanced/defaults-files.md) documentation.

## Formatting with Markdown

To format Markdown documents, there are a few formatting rules that you should know and which we list here:

| Formatting         | Syntax                        | Output                                |
|--------------------|-------------------------------|---------------------------------------|
| Emphasis           | `_italics_` or `*italics*`    | _italics_                             |
| Bold               | `__bold__` or `**bold**`      | **bold**                              |
| Strikethrough      | `~~text~~` | <span style="text-decoration: line-through;">text</span> |
| Link               | `[Text](www.example.com)`     | [Text](#)                             |
| Image              | `![Description](image.jpg)`   | ![Description](../img/logo_small.png) |
| Heading            | `# Heading`                   | **Heading**                           |
| Heading 2          | `## Heading 2`                | **Heading 2**                         |
| Heading 3          | `### Heading 3`               | **Heading 3**                         |
| Heading 4          | `#### Heading 4`              | **Heading 4**                         |
| Heading 5          | `##### Heading 5`             | **Heading 5**                         |
| Heading 6          | `###### Heading 6`            | **Heading 6**                         |
| Bullet list        | `* List item` (or `+` or `-`) | &bullet; List item                    |
| Item list          | `1. List item` (or `1)`)      | 1. List item                          |
| Footnotes          | `Some text[^1].`              | Some text&sup1;.                      |
| Footnote reference | `[^1]: Footnote text.`        | &sup1; Footnote text.                 |
| Comment            | `<!-- Commented out -->`      | (Not visible)                         |
| Inline math        | `$E = mc^2$`                  | ![E = mc^2](../img/Emc2.png)          |
| Block math         | `$$\nE = mc^2\n$`             | ![E = mc^2](../img/Emc2.png)          |
| Horizontal line    | `***` or `---`                | <hr>                                  |
| Block quote        | `> Some quote`                | &nbsp;&nbsp;&nbsp;&nbsp;*Some quote*  |

!!! note

    This list is not exhaustive. There are some more formatting symbols which can be enabled either with extensions or which will be introduced at a later stage of this documentation, for example citations.

If you want to learn even more about Markdown, there are many good resources out there. A good starter is the Markdown guide on [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/). If you want to get used to writing clean and unambiguous Markdown, [view the specifications by CommonMark](https://spec.commonmark.org/current/). Also, there's a "book" on the GitHub flavoured Markdown syntax. [View it here](https://gitbookio.gitbooks.io/markdown/content/).  For those engaged in scholarly writing, the [Pandoc manual's section on its extended Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) is worth reading.

## Keyboard Shortcuts

Despite never having to leave your keyboard when it comes to writing documents in Markdown, sometimes it is easier to press just two keys instead of four or more. Therefore, there are some keyboard shortcuts that you can use. In addition to those that you may already know, Zettlr offers many convenience shortcuts that make duplicating text, etc., a breeze.

!!! note

    Across this documentation, you will often see the "key" <kbd>Cmd/Ctrl</kbd>. By that we mean that you'll need to press the Command-key on macOS, and the Control-key otherwise.

* <kbd>Cmd/Ctrl</kbd>+<kbd>B</kbd>: Make text **bold**
* <kbd>Cmd/Ctrl</kbd>+<kbd>I</kbd>: _Emphasize_ text
* <kbd>Cmd/Ctrl</kbd>+<kbd>K</kbd>: Create a new link. Selected text (if any) will become the link text. If there is a URL in the clipboard, Zettlr automatically uses it as the link target.
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>: Insert an image. Selected text (if any) will become the image title. If there is a URL in the clipboard, Zettlr automatically uses it as the image source.
* <kbd>Tab</kbd>: Indent any given list one level. If there is no list, insert a tab character. (If you are using a screen reader and need to use the keyboard to move around the app, press <kbd>Esc</kbd> before pressing <kbd>Tab</kbd> to un-focus the editor.)
* <kbd>Shift</kbd>+<kbd>Tab</kbd>: Un-indent a list one level.
* <kbd>Cmd/Ctrl</kbd>+<kbd>C</kbd>: Copy text as plain
* <kbd>Cmd/Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd>: Copy text with formatting (e.g., to paste formatted text into Microsoft Word)
* <kbd>Cmd/Ctrl</kbd>+<kbd>X</kbd>: Cut text. If there is no selection, this command cuts the entire line.
* <kbd>Cmd/Ctrl</kbd>+<kbd>V</kbd>: Paste text (if you copied formatted text, this will convert it to Markdown before insertion)
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>: Paste text as plain
* <kbd>Cmd/Ctrl</kbd>+<kbd>Z</kbd>: Undo
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>: Redo
* <kbd>Alt</kbd>+<kbd>ArrowUp</kbd>: Swap current line with the previous
* <kbd>Alt</kbd>+<kbd>ArrowDown</kbd>: Swap current line with the next
* <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>ArrowUp</kbd>: Copy the current line above
* <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>ArrowDown</kbd>: Copy the current line above
* <kbd>Alt</kbd>+<kbd>L</kbd> (<kbd>Ctrl</kbd>+<kbd>L</kbd> on macOS): Select the current line
* <kbd>Cmd/Ctrl</kbd>+<kbd>F</kbd>: Open the search panel
* <kbd>Cmd/Ctrl</kbd>+<kbd>G</kbd>: Next occurrence
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>: Previous occurrence
* <kbd>Cmd/Ctrl</kbd>+<kbd>D</kbd>: Select next occurrence

!!! note

    Zettlr also offers two advanced writing modes: Emacs and Vim. Whenever you activate one of these modes, they will change many keybindings and offer new ones. Those settings are recommended for advanced users only.

## Multi-Cursor Editing

To save time during the editing process, you can use multi-cursor editing to make concurrent changes across your document. Then, your keystrokes apply simultaneously to all active cursors or selected areas.

To add cursors, hold down the following keys while clicking the desired positions:

- <kbd>Cmd</kbd> (Mac)
- <kbd>Ctrl</kbd> (Windows/Linux)

To create multiple selections from the cursors, press the key you used to set the cursors, <kbd>Shift</kbd>, and any of the arrow keys.

## Working with footnotes

Footnotes are a notoriously difficult thing in Markdown, because they require some special characters to realise them, and also need you to work at two positions in the document at once: Where you want to put your footnote and at the bottom, where the reference text resides. Zettlr tries its best to ease your pain with these in the following ways:

1. You can use a shortcut to place footnotes: <kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>R</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> (macOS/Windows/Linux).
2. The reference text (that is, the content of the footnote) will be displayed at the bottom end of the editor window when you hover over a footnote.
3. If you hover with your mouse over a footnote anchor somewhere in your text, a popup will show up that lets you edit the footnote in place. After you are finished editing your footnote, click the save button to close the popup and replace the text of the footnote.
