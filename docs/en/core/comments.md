# Working With Comments

When writing or editing your work — or that of others — you may well wish to leave comments in a document. To leave a comment in markdown, precede the text of your comment with `<!--` and end it with `-->`. If you're familiar with HTML, you'll notice that this is the same markup used for HTML comments — as a rule, markdown supports HTML syntax.

For a single-line comment, the comment markup can all go on the same line as the comment itself:

```html
<!-- This is a single-line comment -->
```

For a comment that spans multiple lines, it's simplest to place the opening comment markup and the closing markup on their own lines, sandwiching the text of your comment in between:

```html
<!--
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nunc et lobortis enim. Suspendisse ac sagittis lectus, eget consequat odio.

Aliquam congue molestie justo in ullamcorper.

Nulla blandit dignissim erat, sit amet luctus odio luctus et.

Etiam euismod libero et lectus finibus, ac euismod metus iaculis.
-->
```

To make inserting comments dead simple, Zettlr includes a comment keyboard shortcut. Typing <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>c</kbd> will auto-complete the basic comment syntax, placing your cursor in the center, between the opening and closing angle brackets, so you can begin typing right away:

![Creating a new comment with the keyboard shortcut.](../img/NewComment.gif)

If you've already written a block of text that you'd like to turn into a comment, you can simply highlight it with your cursor and _then_ press the <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>c</kbd> shortcut to convert the selected passage into a comment:

![Converting text to a comment with the keyboard shortcut.](../img/ConverttoComment.gif)

!!! note

    As a Markdown editor, Zettlr does not natively support margin comments like those used in Google Docs or Microsoft Word. If you are [collaborating with editors or co-authors on these platforms](https://docs.zettlr.com/en/core/import/#working-with-co-workers), you can use Zettlr's export feature to generate a `.docx` or `.odt` document for them to comment on. After reviewing and incorporating your collaborator's comments in a word processor, you can then re-import the resulting document into Zettlr to continue working on it in the app.

## Doing More With Comments

While Zettlr is a dedicated writing tool, it borrows useful features from the powerful text editors developers use for writing code. Developers have not one, but _two_ important uses for comments. The first is, as you would expect, to leave helpful remarks in the code they're writing. When it comes time to run the code, these remarks — wrapped in their special comment markup — aren't treated as part of the program.

This hints at the second way developers commonly use comments, which is to "comment out" sections of their code that they want to remove from a program, but are hesitant to delete entirely. In other words, they will take a chunk of the code they've written and wrap it in markup that tells the browser — or whatever's running their program — to ignore it, treating it as a comment instead of part of the program.

Writers also have lots of use cases for which commenting out is handy functionality. We may want to leave notes-to-self in our documents. We may write sentences, paragraphs, or whole sections of articles that we're unsure whether to keep, or know we need to rewrite, but are hesitant to delete outright. Using comments in Zettlr is a neat way to address these problems.

If you're considering deleting a paragraph from your article, try commenting it out. When you do so, the text you've wrapped in comment markup will be visible to you in the editor, but will be omitted from previews and exported versions of your text. Similarly, you can place transcribed quotes from sources or reading notes for your lit review right into the document you're writing for reference. If you don't want those notes appearing when you export the finished article, simply comment them out.

!!! note

    It's worth noting here that, while commenting out passages will keep them from appearing in exported versions of your writing --- i.e., PDFs or Word documents --- if you share your original markdown file with a colleague, they will be able to view any comments you've left. This is handy if you want to annotate or leave questions in a document you're collaborating on, but it's also something to be aware of if you're leaving comments in your markdown that might be sensitive (e.g., human subjects data or off-the-record quotes).

### Folding Your Comments

While the ability to dump a bunch of notes into the middle of your document or comment out multiple paragraphs somewhere in your essay may be helpful during the writing process, it can also make it cumbersome to read through your work in the editor. Luckily, Zettlr has an answer to this problem: line folding.

To temporarily hide the text of a comment in the editor, simply hover your mouse in the left margin adjacent to the commented text. You'll see a chevron symbol (`⌄`) appear in the margin. Click it and the text of your comment will collapse, accordion-style, allowing you to read the the regular text above and below without interruption. Zettlr leaves an ellipsis symbol in the editor where you folded the comment (`…`) as a reminder that a hidden comment exists there.

To expand a comment again, simply mouse over the left margin in the editor and you will see the same chevron symbol appear as before, only it will be rightward, rather than downward, facing. Click on it again to unfold (expand) your comment once more.



