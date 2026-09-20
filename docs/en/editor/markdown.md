---
prev: ./index.md
---

# Introduction to Markdown

This section is a continuation from the [first-time-user’s guide](../first-time-users/writing-markdown.md). It contains a more comprehensive introduction to the Markdown Syntax and introduces special elements that Zettlr supports.

> [!tip]
> Even this section only contains the most important syntax elements to get you started. You can find the full and unabridged documentation of all elements you can use in our [dedicated section](../syntax/index.md).

## Basic Elements

To format Markdown documents, there are a few basic formatting rules that you should know and which we list here:

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
| Inline math        | `$E = mc^2$`                  | $E = mc^2$                            |
| Block math         | `$$\nE = mc^2\n$`             | $E = mc^2$                            |
| Horizontal line    | `***` or `---`                | <hr>                                  |
| Block quote        | `> Some quote`                | &nbsp;&nbsp;&nbsp;&nbsp;*Some quote*  |


This list is not exhaustive. Zettlr supports many more elements, which are introduced [in their own section](../syntax/index.md).

## Keyboard Shortcuts

Zettlr offers a plethora of keyboard shortcuts that make writing Markdown even more efficient, as it will spare you from having to write formatting characters altogether.

You can think of Zettlr’s keyboard shortcuts as being divided into two logical groups. The first group contains **common shortcuts** that most other apps also incorporate — it follows conventions such as using <kbd>Cmd/Ctrl</kbd>+<kbd>B</kbd> to make text bold. The second group however comes from **writing code** — it allows you to both move around your text, and move your text around much more efficiently than most word processors.

> [!note]
> Across this documentation, you will often see the "key" <kbd>Cmd/Ctrl</kbd>. By that we mean that you'll need to press the Command-key on macOS, and the Control-key otherwise.

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

::: note
Zettlr also offers two advanced writing modes: Emacs and Vim. Whenever you activate one of these modes, they will change many keybindings and offer new ones. Those settings are recommended for advanced users only.
:::

## Multi-Cursor Editing

To save time during the editing process, you can use multi-cursor editing to make concurrent changes across your document. Then, your keystrokes apply simultaneously to all active cursors or selected areas.

To add cursors, hold down either the <kbd>Cmd</kbd> (macOS) or <kbd>Ctrl</kbd> (Windows/Linux) keys while clicking inside your text.

To create multiple selections from the cursors, additionally hold down <kbd>Shift</kbd>, and any of the arrow keys.

## Zettlr’s Markdown Dialect

Unfortunately, there is not “one” Markdown specification that would define every element you may ever need. Historically, different companies and software products have adopted Markdown at various time points throughout history, and implemented custom elements wherever necessary.

This has led to the formation of various so-called “dialects” of Markdown. For example, there is [GitHub Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), there is [CommonMark](https://spec.commonmark.org/current/) (an attempt at standardizing the syntax), and there is [Pandoc Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown).

Zettlr supports almost all elements in the most comprehensive and all-encompassing dialect: Zettlr Markdown. In comparison to other dialects, the Zettlr dialect includes out-of-the-box support for many elements that academics need, including, but not limited to:

* Complex tables
* Figures
* Footnotes
* Citations and cross-references
* … and more

> [!warning]
> While Markdown dialects are, for the most part, compatible with each other, this is not always the case. Some dialects may, for example, not support citation syntax, or use a slightly different way to create tables. If you want to write Markdown for a specific system, always make sure to check which elements that system supports.

## Special Elements in Zettlr Markdown

Zettlr supports many special elements, some of which no other tool supports. All of these are introduced in the [section on Zettlr Markdown](../syntax/index.md). Here is a short primer:

* Text highlighting
* Text underlining
* Math blocks and equations
* Mermaid diagrams
* Footnotes
* Tables
* Citations
* Cross-references
* Admonitions (also known as callouts or alerts)
* Attribute syntax
* Bracketed Spans and Fenced Divs
* Hashtags
* Wiki links
* … and more.
