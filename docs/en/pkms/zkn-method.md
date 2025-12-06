# The Zettelkasten method

The idea to write Zettlr came to my mind several years ago, when we were trying to elaborate on good workflows for academic writing. We tested a lot of different styles and workflow ideas, and one that stuck was the Zettelkasten method. The problem back then was that most of the software did not really succeed in implementing it. But nowadays, there are more and more applications that support some variations of this method.

Originally, the method stems from the German sociologist Niklas Luhmann, who, in an effort to remember everything he's ever read or thought, designed his own (back then analog) Zettelkasten containing cards with some information and numbers on them. The numbers could be used to locate other cards with other information that was in some way related to the content of the card. This was a way for Luhmann to reference back and forth between a set of cards and, as the box filled up with more and more cards, allowed it to somehow get “alive,” showing him connections between certain concepts that he himself had not thought about.

The basic idea, therefore, is to let you create relationships between small notes (or, for that matter, also long files) that enable you not only to move back and forth between files, but also to identify relationships that emerge in your files.

## Manage a Zettelkasten with Zettlr

Three central functions are available in Zettlr to kickstart your Zettelkasten:

1. Generating IDs for files
2. Linking searches and files
3. Tagging files

## File IDs

In order to create links between files, the first step is to consider whether to use IDs or file names. You can create links in Zettlr between files using either IDs or file names. The benefit of file names is that they are self-explanatory. The drawback is that you cannot change the file title even slightly, if the content of the note turns out to be slightly different from what you thought it was when you created the file.

That’s why IDs can be a good remedy. By naming files using only numerical IDs, you detach the file ID from its content — the title of the note can change, but the ID remains the same.

By default, Zettlr uses the current timestamp for IDs, in the format `YYYYMMDDHHMMSS`. You can adapt this format in the preferences → “Zettelkasten.”

This ID will be used by default for new filenames, although you can adapt this in the preferences, too. If you like to give your files descriptive names, but still want to add IDs to them, you can at any point press <kbd>Cmd/Ctrl</kbd>+<kbd>L</kbd> to generate a new ID.

Zettlr recognizes IDs (using the ID pattern in the preferences) both in the filename and in the file’s content. The first ID found will take precedence. You can also generate IDs when using snippets by using the variable `$ZKN_ID`.

!!! tip

    Take a look at the [Settings page](../reference/settings.md) to see options on how to customise all Zettelkasten functionality to your liking.

## Linking Files

Once the problem of Identification was solved, another occurred: How to link files across the app without jeopardising the above-mentioned aims of Zettlr to make files application-independent? Many apps, such as nvALT or The Archive implement an internal linking system that makes it possible to reference files from each other to make navigation through the system as easy as possible. Zettlr also includes such a system.

An internal link is written with the syntax of `[[This is the link]]`. If you `Cmd` or `Ctrl` click a link, it will trigger **two** distinct functions. First, it will try to find an exact match of the link's contents in the app. This means that it tries to find a file that reports that the content perfectly matches it. Such an exact match can be found in two ways: First, if the contents of the link (in the above example "This is the link") **exactly** matches a filename, excluding its extension, the appropriate file will report that it is indeed an exact match. The above example would exactly match the files `This is the link.md`, `This is the link.markdown` and `This is the link.txt`. Note that the filename matching is done **case-insensitive**. macOS for instance is by default case insensitive (so `filename.md` would match the same file as `FILENAME.MD`). The second way that such a link may yield an exact match would be if the link's contents contain an ID in the format `[[<your-id>]]`. If any file has the ID `<your-id>`, Zettlr will also yield an exact match. **If an exact match is found somewhere in the system, an Alt-Click on an internal link will immediately open the first matched file**. This means that you can use such links to navigate through your system. You could, for example, accommodate this by creating index files that contain internal links to several files, and in each file, place a link that back-links to the respective index file.

The second function triggered by such a link is a global search inside your currently selected directory. It will merely take the link contents, place it in your search field and automatically "press Enter", to initiate the search. This way you can not only open exact files, but also find all other files that link to the file you just opened. So a link in the format `[[<your-id>]]` would open that specific file and also search for all files that link back to this file.

## Tagging

Tagging may be the easiest form of internal searching. If you `Cmd` or `Ctrl` click on a tag, this will simply render a search for all files in your current directory that are tagged with this tag. As tags in the form `#keyword` are not used anywhere in the markdown syntax, using this approach enables Zettlr to use such tags as the perfect means to create a tagging system.
