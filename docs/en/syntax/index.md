---
prev: ../editor/snippets.md
next: ./basic-syntax.md
---

# Zettlr’s Markdown Syntax

Zettlr is a Markdown-based editor. As such, to compose your texts in the app, you don’t need to manage toolbars and keyboard shortcuts for the most part, but can create semantic elements simply by using formatting characters as you type.

For example, to create a heading, you don’t have to first type out the text content, and then click a button to turn the text into an actual heading. Instead, before typing the content of the heading, you simply create one, two, or more hash characters (`#`), followed by a space and then the heading content. In many situations, this will be much quicker, since it allows you to continue typing without lifting your fingers from the keyboard to operate your mouse or trackpad. Of course, Zettlr also supports common keyboard shortcuts, such as creating bold text by pressing <kbd>Cmd/Ctrl</kbd>+<kbd>B</kbd>. This will automatically insert the correct formatting characters to let Zettlr know that this text should be bold.

The combination of writing out formatting characters to instruct Zettlr that certain paragraphs should become headings, blockquotes, or other elements you will need in your text, with intelligent keyboard shortcuts that simplify many typical text formatting actions, can make your writing process faster than in other, Rich-Text based applications. However, it does require a new form of muscle memory.

In this set of pages, we introduce you to writing Markdown with Zettlr. We start with a brief overview over what Markdown is, before introducing several syntactic elements that you have at your disposal to compose research papers or entire books. Some parts of this syntax may already be familiar to you, while others will not.

## A Brief History of Markdown

Markdown is a text-writing language and the brainchild of Aaron Swartz and John Gruber, who devised it in the early 2000s with the initial goal to enable writing better emails. The problem they faced was that HTML emails composed with Rich-Text are very easy to read, but only a few email programs actually supported that. Instead, most simply displayed plain text. Their goal was to create a convention of how to write emails in such a way that an email program which does support HTML can display the email contents using HTML, but that the same email remains readable if the email program only supports plain text.

Today, almost no email program understands Markdown. Instead, the language has been co-opted by many other fields which were searching for better ways to write, and who found Markdown to be the missing puzzle piece. For example, messenger services support a small subset of Markdown — if you can type `**some text**` and it turns into bold text, you know that your messenger supports some Markdown. Zettlr is also a part of this movement to take Markdown, but apply it to other forms of text, since it works much better than other approaches like Rich-Text editors.

There is a drawback, however. Original Markdown supports only a very small, hand-crafted subset of textual elements — such as headings, blockquotes, links, images, or bold and italic text. Many programs which have adopted Markdown, however, needed more. This means that many have added more elements on top of this basic set. Today, there are enormous amounts of extensions to the Markdown syntax, allowing users to insert footnotes, alerts, citations, cross-references, tables, and even diverse containers.

Since this was often being done without coordination, this has led to the proliferation of Markdown *dialects*. All apps support the basic syntactic elements, but after that any additional syntax is fair game. Some apps may support tables, others not. Then, there are different dialects of how to add tables, from grid-tables to pipe-tables, sometimes with slightly different syntax. Zettlr is the only app that fully and natively supports citations. Fortunately, in recent years, many programs have started to coalesce around a shared standard. If an app requires an additional syntactic element, it is likely going to adopt the syntax from an app that already implements it, rather than defining its own syntax.

## On This Section

Against this backdrop, this section is organized as follows:

1. The first page introduces you to the basic syntax that all Markdown-enabled apps understand.
2. The sections after that introduce various extensions to Markdown syntax which Zettlr supports. Where necessary and applicable, we will mention which other apps in the wider ecosystem support this syntax, too, or if some important apps do not support it.