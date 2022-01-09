# What You See Is What You Mean (WYSIWYM)

Markdownは["What you see is what you mean"](https://en.wikipedia.org/wiki/WYSIWYM)と呼ばれる枠組みに基づいたファイル形式です(WYSIWYMは/ˈwɪziwɪm/と発音されます)。This paradigm is related to "What you see is what you get" (WYSIWYG), which you might already have heard of. Word processors like Word or LibreOffice, for instance, follow this paradigm. WYSIWYG means that whatever you _see_ in your word processor will be what you see, even when you save the document as PDF or as HTML. The guiding principle for WYSIWYG is that editing a document should match precisely any (exported or printed) version of it.

WYSIWYM, on the other hand, does not make such claims. Instead of "getting" what you see, WYSIWYM is built around the idea that whatever you see is what you _mean_. In practice, this means that Markdown allows you to define the _structure_ of a text (e.g., define headings, bold text, blockquotes and links) but **not what it looks like**. Markdown files need to be processed further for publication. In short: Markdown files are "raw" files that require to be compiled into a final format for publishing.

The benefit of this principle is that you **separate the actual writing process from the layouting process**. This makes incredible sense in many ways. Let us, as an example, compare HTML files with PDF files. HTML files are built around the principle of flexible layout, that is: You can resize your browser window and the HTML file will reflow so that it always looks good, no matter how you resize it. PDF files, on the other hand, are the opposite of flexibility: PDF is meant for printing documents, so these documents cannot be resized. This means that it will not adapt to the size of your PDF reader window. However, it allows you to use, e.g., a two-column layout or headers and footers much more easily. The only thing both documents have in common is the structure: A heading in your PDF file will also be a heading in your HTML file, even though it might look differently. And that is precisely what Markdown allows you to do.

Some elements, however, will negatively impact your workflow. For instance, if you want to quickly proof-read a paragraph you've just written, links would disturb that, because they would look like this: `A sentence with [a link](https://docs.zettlr.com) in it`. It is much easier to read a sentence that looks like this: `A sentence with _a link_ in it`. Thus, Zettlr will pre-render links for you. Something similar applies to images: For us humans, it is much easier to see the image that is supposed to be in there than to just see the path to it.

However, all of these rendered elements will _not_ match your exported files. They are simply there for your convenience and images, for example, offer some handy tools for easier editing, which will not be in your exported files.

## Linebreaks are Not Always Linebreaks

One common misconception is the meaning of linebreaks in Markdown, and we have to argue that this might be the most difficult idea to understand. Markdown will, by default, **remove single line breaks** and treat **double linebreaks as paragraph breaks**. However, a linebreak that is preceeded either by **two spaces** or **one backslash** will be retained.

Why does Markdown do this? There are several reasons. The most important one might be historic: Markdown was developed with code editors in mind, which means it was originally intended for people who are used to the idea to wrap their lines after around 72-80 characters. This principle is called [Characters Per Line (CPL)](https://en.wikipedia.org/wiki/Characters_per_line) and stems from historical roots. While for text this reasoning may be counter-intuitive, Markdown has kept this idea, so you will need to pay special attention to your line breaks.

Some people make use of this behaviour for their own writing process: They write one sentence per line so that they have an easier time trimming all sentences to approximately the same length. Take this example:

```md
This is one sentence.
This is a second sentence.
This sentence is much longer than the two sentences before.
A short sentence.

This is the next paragraph.
Another sentence in the second paragraph.
```

The above example will result in two paragraphs, one with four and one with two sentences. If you want to keep certain line breaks, you have to make this explicit, either by finishing a line with two spaces, or by putting a backslash at the end of the line:

```md
This sentence will be on its own line.  
This one also.\
This is on the third line.
This sentence will come directly after the third one.
```

Keep this behaviour in mind to know how your documents will look like when you export them into, e.g., PDF or Word.

> If you want to get an overview over the general ideas behind what you can and what you cannot do, please consult the [CommonMark specification](https://spec.commonmark.org/), to which Zettlr and the underlying exporter, Pandoc, will adhere to.

