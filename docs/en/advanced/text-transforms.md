## Transforms

One frequent part of the academic writing workflow is cutting and pasting quoted text from websites or from PDFs of articles and book chapters into documents you're writing. You're doubtless familiar with a common annoyance that comes with this—the pasted text often includes unwanted formatting. A passage pasted from a PDF with narrow columns of text, for instance, may contain numerous line breaks. Some document designers replace double quotes with pairs of single quotes. And so on.

Another frequent problem is that elements of the pasted text—or even text you've written yourself—may need to change to accommodate the style guide to which you're writing. A title that appears in quotes may need to be changed to italics. Sentence-case headings may need to be capitalized. Or vice versa.

These are the sorts of manual—and often repetitive—tasks that cry out for automation, and this is where Zettlr's `Transform` features comes in. To use them, simply select a region of text in the editor and right-click to open a context menu. There you'll find a sub-menu called `Transform`, which contains numerous common operations for cleaning up pasted text.

Here is a rundown of the options, presented in the order they appear in the `Transform` menu: 

_Zap gremlins_

A powerful feature borrowed from programming text editors, `Zap gremlins` removes hidden formatting like non-breaking spaces and problematic character encodings from text. These are invisible characters that are sometimes inserted intentionally by page designers to tweak the look of a document; other times they get introduced accidentally when a file is converted or saved incorrectly. When pasted into your Zettlr document, gremlins can interfere with the way your text looks and exports.

The term "[gremlins](https://fluffyandflakey.blog/2024/03/21/rooting-out-gremlins/)" refers to the fact that these hidden formatting characters are non-obvious—you may not be able to tell they're there just by looking at the document. But if a pasted passage in your document is behaving or exporting strangely, try applying `Zap gremlins` to the problematic text to see if it solves the problem.

_Strip duplicate spaces_

There are a variety of scenarios in which text may have unwanted extra spaces in it. Some PDF viewers replace line breaks with duplicate spaces when you copy text from them to the clipboard. Plaintext documents, like `README` files, may add repeated spaces to tweak the look of the text. Co-authors from the typewriter era may put two spaces after every period. `Strip duplicate spaces` removes these unwanted spaces.

_Italics to quotes_ and _Quotes to italics_

Some style guides place the titles of major works, like books or films, in italics, while others ask that you place them in quotation marks. These transforms allow you to easily toggle between the two.

_Remove line breaks_

Text pasted from PDFs frequently contains hard line wraps that have to be removed when a quoted passage is inserted into the document you're writing. This is particularly irksome when the PDF contains narrow columns of text and thus frequent line breaks. And, of course, text pasted from other documents may likewise contain unwanted hard wraps. `Remove line breaks` gets rid of these, while preserving intentional breaks between paragraphs.

_Straighen quotes_

Many documents contain smart quotes (a.k.a. curly quotes) that at best are useless in Zettlr and, at worst, may interfere with preferred formatting during export. This transform replaces curly quotes with straight quotes.

_Ensure double quotes_

Some page designers replace double-quotes with a pair of single quotes for visual effect. If you're cutting and pasting from a PDF of a book or journal article with this issue, you can transform those pairs of single quotes back to double quotes with `Ensure double quotes`. This transform also works for text pasted from LaTeX documents, in which the direction of curly double-quotes is often specified by using a pair of backticks (<code>``</code>) or single quotes (`''`).

_Double quotes to single_ and _Single quotes to double_

If you're quoting a passage in your document that itself contains quoted text, you may need to transform the double quotes in the original to single quotes. For example, the passage…

> During this time the meanings of "liveness" and "presence" were indistinguishable from Western discourses of modernization.
…becomes…

> Lisa Parks argues that "during this time the meanings of 'liveness' and 'presence' were indistinguishable from Western discourses of modernization."
Certain style guides may also specify a preference for single versus double quotes. These two transforms help you to toggle easily between these scenarios.

_Emdash — Add spaces around_ and _Emdash — Remove spaces around_

Academics, and occasionally other writers, can be prolific in their use of the elongated hyphens known as emdashes (`—`), but style guides differ in whether these characters should be accompanied by a space on either side. Most books prefer no spaces around emdashes (e.g, "…he contended—in a curious mixing of metaphors…"), whereas some articles and many prominent websites, the _New York Times_ among them, do use spaces (e.g., "It's not a film about monsters — it's a film about us."). These transforms allow you to easily toggle between the two scenarios when adapting your text for publication.

_To sentence case_ and _To title case_

Depending on the publisher you're writing for, document headings or other passages in your text may need to be changed from sentence case (e.g., "Results and analysis") to title case (e.g., "Results and Analysis") or vice versa. These transforms allow you to toggle between the two easily.

Note that different style guides have different capitalization rules for title case headings. As such, you should check to make sure that a heading changed to title case using the transform comports with the style used by your publisher. For consistency with other common software tools, these two transforms use the same capitalization rules for toggling between sentence case and title case employed by Zotero.
