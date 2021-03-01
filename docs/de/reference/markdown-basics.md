# Markdown basics

Just like many other apps, Zettlr makes use of `Markdown`, originally invented by [John Gruber](https://daringfireball.net/). Of course, over such a long period of time, a huge amount of developments have taken place, that have created the possibilities of modern Markdown applications. In this document the following topics are covered:

1. [A brief history of Markdown](#a-brief-history)
2. [Dialects of Markdown](#markdown-dialects)
3. [How Zettlr implements Markdown](#zettlr-and-markdown)
4. [Markdown 101: Headings, block elements, inline elements, links, images and footnotes](#markdown-101-the-most-important-codes)
5. [Further resources](#resources-on-markdown)

***

## A brief history

Since the personal computer became widely available in the 1990s, there were two groups of formats existing side-by-side: word processor documents, such as `.doc`, or `.odt` and code documents, such as `.js`, `.cpp` or `.py`. Both groups of documents contain human-readable text, but there was one simple, yet huge difference: While JavaScript-files or C++-files contained plain text (i.e. only the text that you would see when you open such a file), word processor documents contained a _lot_ more stuff. Word processor documents always hold information about the page size (e.g., A4 or letter), how different blocks should be formatted (e.g., the font of headings or how much blockquotes are indented). If you open a Word/Office-document on your PC right now, you can see what I mean: You immediately see what is a heading based on the font-size font-weight of its text.

For a long time, both these groups of documents stayed as distinct as would their users. Most office-workers only know how to use Microsoft Word or Excel, maybe also LibreOffice-implementations, while close to nobody coming from a STEM-background would voluntarily use Word or similar software. Those scientists have chosen a different path: they developed a programming language called LaTeX, which allows them to create neatly formatted PDF-files from a bunch of code---they follow the same workflow as researchers from the arts and humanities or regular administrative officers, but use different documents for that.

When Markdown was inaugurated by John Gruber in 2004, it was basically like saying: "Why not both?" Markdown combines both the clear reading experience from word processor documents with the benefits of software code documents, which is both versatile and easy to use---even for people that only know how to operate Word or Writer. One small example: While in word processors you would create a heading by typing "some text" and then selecting the `Heading 1` format from some menu, in Markdown you would simply type `# some text`, where the hashtag-symbol tells you immediately: "This is a first level heading!"

At first, Markdown was basically a small script John Gruber wrote for himself to yield these benefits, and it contained a lot of inconsistencies and didn't support many different elements. But over the years, progress was made. Two dates are notable:

- 2004: [John Gruber](https://daringfireball.net/projects/markdown/) initially launches Markdown
- 2012: A group of developers form [CommonMark](https://spec.commonmark.org/) to standardise Markdown into an internationally accepted norm.

## Markdown Dialects

Today, several implementations of the Markdown syntax coexist. The most noteworthy are:

- **MultiMarkdown**: Extends the initial syntax with footnotes, tables and some metadata.
- **Markdown Extra**: Again some additions to the initial syntax.
- **GitHub Flavoured Markdown**: This is a variety of Markdown invented by the hosting platform GitHub (which Zettlr is also hosted on!) and is today one of the most common dialects.
- **Pandoc Markdown**: Pandoc Markdown is a superset of GitHub flavoured Markdown and adds support for even more elements.
- **CommonMark**: Tries to implement all possible elements, while being unambiguous. Notably, CommonMark not yet includes a specification for footnotes.

## Zettlr and Markdown

Zettlr itself implements a mixture of different dialects. The editor itself highlights only GitHub flavoured Markdown (plus some Markdown extensions for Zettelkasten elements and other conveniences. The Zettelkasten elements are described in the respective [chapter on the Zettelkasten method](../academic/zkn-method.md), the others are described below). If you export your documents to HTML and don't have Pandoc installed, Zettlr will convert your documents using the _GitHub flavoured Markdown syntax_. If available, Zettlr uses Pandoc for exports, which itself reads your Markdown documents using its _Pandoc Markdown syntax_.

But Zettlr doesn't confine you to writing Markdown. If you wish, you can also add `LaTeX`-commands. These commands are correctly interpreted when you convert to PDF. These are omitted when you convert to DOCX or ODT. And they are retained when you convert to HTML. Of course, you can at any position use plain HTML-code as well.

## Markdown 101: The most important codes

Although Markdown can do a lot of things, in this section I want to describe to you the most important elements that you will use the most, and how you can use them in Zettlr.

### Headings

Headings are straightforward. They must be put on their own line and have to be indicated using a hashtag symbol. There are six levels of headings at your disposal:

- `# Heading text` — yields a heading of first order
- `## Heading text` — yields a heading of second order
- `### Heading text` — yields a heading of third order
- `#### Heading text` — yields a heading of fourth order
- `##### Heading text` — yields a heading of fifth order
- `###### Heading text` — yields a heading of sixth order

### Inline-formatting

Of course, just as in word processors you can use inline-formatting, such as **bold** or _italic_ text, or `monospaced` (code) text.

- `**your text**` — yields bold text
- `_your text_` — yields italic text
- \`your text\` — yields monospaced text

### Block elements

Sometimes, you may want to emphasise a whole block of text (such as a longer quote), or create lists. This is also possible and extremely simple using Markdown.

- Create item lists by prepending each line with a `-`, a `*` or a `+` character. If you would like to, you can mix these symbols!
- Sorted lists need numbers in the format `1.` in front of them.

> **Note**: The numbers do _not_ have to be in order. On each export, the converter will automatically correctly number them ascending, so a list containing the list numbers 1, 6, 14, 2 will be rendered as a list using the numbers 1, 2, 3, 4!

### Links and images

Links are inline-elements and images are block elements, so they follow the same semantics as the elements discussed above. Yet they deserve a little bit more attention, because they offer you more options.

Links are set using the following syntax: `[This text will appear in your final document](http://this-is-your-actual-link.tld)` Zettlr will automatically convert this syntax to a clickable link (follow the link target by clicking on it while holding down the `ALT`- or `Ctrl`-key) for the ease of access (and to shorten those rather long links).

Images work exactly like links, except they start with an exclamation mark (!). Images of course also need a path, because you won't store them in a plain text document. Therefore you can use three different approaches to linking images in your document:

1. Use an absolute web-URL, such as https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1000px-Markdown-mark.svg.pngMarkdown.
2. Use an absolute path to a file on your own computer, such as `C:\Users\user-name\Pictures\my-image.jpg`.
3. Use a relative path to a file on your own computer, such as `../img/my-image.png`.

> **Tip**: You can provide a default image path in the "Editor" tab in the preferences, which Zettlr will always use when you paste an image into the editor.

The relative path is always relative to the document in which you place it. The directory `..` tells Zettlr to look for the image in the parent directory (i.e. to traverse up one directory). If you store your documents in a cloud and access them on different devices, you would naturally use relative image paths, because the absolute paths will definitely differ (especially if you work with two different operating systems).

> **Tip**: Try to insert images and links always using their shortcuts, `Cmd/Ctrl+K` for links and `Cmd/Ctrl+Shift+I` for images. If you have a valid path in your clipboard, it will even automatically insert it for you, making your life easy. The best way to insert a link, for instance, would therefore be to first copy the link to your clipboard, then select the text you want to link and third press `Cmd/Ctrl+K`. Then the selected text will become the displayed link text and the link from your clipboard will be used as the link target.

### Footnotes

Footnotes are what most researchers in arts and humanities are of course interested in. So here some general rules for inserting footnotes and how Zettlr interacts with them. According to standard Markdown syntax, footnotes require two elements: First the reference somewhere in the text in the format `[^x]`. The `x` stands for a unique identifier. Basically, you can use anything you want, as long as this identifier is not used by a second footnote as well. But normally, you will want to stick with ascending numbers. (Also: These numbers don't have to be in order—as long as you export your Markdown document, Pandoc will automatically re-number the footnotes correctly. So if you decide to delete a footnote later on, don't worry that the numbers won't neatly match up in your document anymore.)

The second element footnotes require is a block element, the footnote _reference text_. It is always in the following format: `[^x]: Your reference text.` As you can see, the identifier is a replica of your reference that appears in the text, only now it is followed by a colon. It is common sense that you put your references in a list at the very end of your document. Yet, this jumping back and forth between the reference text and your footnote reference is cumbersome, and therefore Zettlr tries to ease your life. Move your mouse over a footnote reference to see the footnote text. Click it while holding down `Alt` or `Ctrl` to edit the footnote. Press `Shift+Return` to save your changes.

### Fenced code blocks

Zettlr also supports so-called "fenced code blocks." These are the block-version of the inline code element. To start a code block, type three backticks "\`" in a row on an empty line. Close the code block again with three back ticks on an empty line. Everything in between those two "fences" will be rendered using monospace font to indicate that this is indeed code.

Zettlr supports syntax highlighting for several script and programming languages. You have to tell Zettlr explicitly which language to use by simply adding its identifier _directly after the introducing code fence_. So to direct Zettlr to highlight a code fence using a JavaScript interpreter, you would need to begin the code block with three backticks, directly followed by the word "javascript" on an empty line.

Currently, the following languages are supported by the engine (the names in braces are the identifiers you'd need to indicate the language):

- C (`c`)
- C# (`c#`; `csharp`; `cs`)
- C++ ( `c++`; `cpp`)
- Clojure ( `clojure` )
- Common Lisp (`clisp`; `commonlisp`)
- CSS (`css`)
- Elm (`elm`)
- F# (`f#`; `fsharp`)
- Go (`go`)
- Haskell (`haskell`; `hs`)
- HTML (`html`)
- Java (`java`)
- JavaScript (`javascript`; `js`; `node`)
- JSON (`json`)
- Julia (`julia`; `jl`)
- Kotlin (`kotlin`; `kt`)
- LESS (`less`)
- Markdown (`markdown`; `md`)
- Objective C (`objective-c`; `objectivec`, `objc`)
- PHP (`php`)
- Python (`python`; `py`)
- R (`r`)
- Ruby (`ruby`; `rb`)
- Rust (`rust`; `rs`)
- Scala (`scala`)
- Scheme (`scheme`)
- Shell (`shell`; `sh`; `bash`)
- SparQL (`sparql`)
- SQL (`sql`)
- Swift (`swift`)
- SystemVerilog (`systemverilog`; `sv`)
- Tcl (`tcl`)
- Turtle (`turtle`; `ttl`)
- TypeScript (`typescript`; `ts`)
- Verilog (`verilog`; `v`)
- VHDL (`vhdl`; `vhd`)
- Visual Basic (`vb.net`; `vb`; `visualbasic`)
- XML (`xml`)
- YAML (`yaml`; `yml`)

More languages can be implemented on your request. If you need a specific language, please [refer to the available ones](https://codemirror.net/mode/) and open up an issue on GitHub, so that we know which one we should add!

## Zettlr Markdown additions

In addition to GitHub flavored markdown extensions (marked with "(extension)" in the [spec](https://github.github.com/gfm/)), Zettlr provides the following:

 - Support for `<iframe src="https://example.com"></iframe>` elements

   > **Warning**: Pages in iframes can get unrestricted access to your local filesystem! 'Frame-busting' techniques can be used by pages to escape the iframe and [interact with the Electron backend directly](https://www.electronjs.org/docs/tutorial/security#isolation-for-untrusted-content) - you should assume any pages in iframes (or an attacker of that page) have access to all of the data on your computer.

 - KaTeX equation rendering via either inline (`$`) or fenced (`$$`) blocks: `$x/y$` or

        $$
        x / y
        $$

 - [mermaid.js](https://mermaid-js.github.io/mermaid/) diagram rendering via fenced code blocks:

        ```mermaid
        graph TD
            A[Client] --> B[Load Balancer]
            B --> C[Server01]
            B --> D[Server02]
        ```

## Resources on Markdown

Do you want to learn _all_ about Markdown? That is great! A good resource that covers all elements is to be found on [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/). If you want to get used to writing clean and unambiguous Markdown, [view the specifications by CommonMark](https://spec.commonmark.org/0.28/). Also, there's a "book" on the GitHub flavoured Markdown syntax. [View it here](https://gitbookio.gitbooks.io/markdown/content/).
