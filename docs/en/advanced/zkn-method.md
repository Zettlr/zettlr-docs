# The Zettelkasten method

The idea to write Zettlr came to my mind several years ago, when we were trying to elaborate on good workflows for academic writing. We tested a lot of different styles and workflow ideas, and one that stuck was the Zettelkasten method. The problem back then was that most of the software did not really succeed in implementing it, but since, there has been a lot of effort put into integrating the method, so that nowadays there are more and more applications that support some functions of this method.

Originally, the method stems from the German sociologist Niklas Luhmann, who, in an effort to remember everything he's ever read or thought, designed his own (back then analogue) Zettelkasten containing cards with some information and numbers on them. The numbers could be used to locate other cards with other information that was in some way related to the content of the card. This was a way for Luhmann to reference back and forth between a set of cards and, as the box filled up with more and more cards, allowed it to somehow get "alive", showing him connections between certain concepts that he himself had not thought about.

The basic idea, therefore, is to let you create relationships between small notes (or, for that matter, also long files) that enable you not only to move back and forth between files, but also to identify relationships that emerge in your files.

## Manage a Zettelkasten with Zettlr

Three functions are currently available in Zettlr to kickstart your Zettelkasten:

1. Generating Identifications for files
2. Linking searches and files
3. Tagging files

### File identification

One of the biggest problems in writing apps that try to leave files untouched with app-specific stuff is that you need a way to identify files. Internally, Zettlr uses 32-Bit hashes to identify specific files. But these depend on the paths, and, as Zettlr is designed to work even with cloud-saved files, the path on one computer will not be the same as on another computer, making the hash unusable as an ID. The second difficulty is offered by the format itself: Markdown files are plain text and therefore don't allow for all too much metadata to be added. Of course there have been approaches to integrate headers into markdown files, but this really was not the way to go, because this would jeopardise the rule of Zettlr to write agnostic markdown files. Metadata is way less standardised than the Markdown syntax itself, making it hard to imagine how that could work together with the philosophy of Zettlr. The solution we came up with is to simply bury IDs somewhere in the text. To add an ID to a file, simply press `Cmd/Ctrl+L` to generate one, or, if you prefer to do it manually, simply type an ID yourself. The ID will automatically be highlighted for you.

!!! tip

    Take a look at the [Settings page](../reference/settings.md) to see options on how to customise all Zettelkasten functionality to your liking.

The default ID is a good call, because it uses the date in the format YYYYMMDDHHMMSS, which is unique to the second. Also, our own experiences show that when one doesn't use easy-to-recognise IDs, one is less prone to assume stuff, making them better suited to cross-link files. Just try it yourself!

Zettlr will automatically try to find an ID for a file by searching through its contents. If it has found an ID that is _not_ encapsulated by a Wiki link (more on that below), it will assume this ID internally to refer to the file. If there is more than one valid ID in the file, **the first ID will take precedence**. This way, even in long files, if you can't find the ID, simply drop a new ID on top of the file to make this assume the role of a general ID for the file.

### Internal linking

Once the problem of Identification was solved, another occurred: How to link files across the app without jeopardising the above-mentioned aims of Zettlr to make files application-independent? Many apps, such as nvALT or The Archive implement an internal linking system that makes it possible to reference files from each other to make navigation through the system as easy as possible. Zettlr also includes such a system.

An internal link is written with the syntax of `[[This is the link]]`. If you `Cmd` or `Ctrl` click a link, it will trigger **two** distinct functions. First, it will try to find an exact match of the link's contents in the app. This means that it tries to find a file that reports that the content perfectly matches it. Such an exact match can be found in two ways: First, if the contents of the link (in the above example "This is the link") **exactly** matches a filename, excluding its extension, the appropriate file will report that it is indeed an exact match. The above example would exactly match the files `This is the link.md`, `This is the link.markdown` and `This is the link.txt`. Note that the filename matching is done **case-insensitive**. macOS for instance is by default case insensitive (so `filename.md` would match the same file as `FILENAME.MD`). The second way that such a link may yield an exact match would be if the link's contents contain an ID in the format `[[<your-id>]]`. If any file has the ID `<your-id>`, Zettlr will also yield an exact match. **If an exact match is found somewhere in the system, an Alt-Click on an internal link will immediately open the first matched file**. This means that you can use such links to navigate through your system. You could, for example, accommodate this by creating index files that contain internal links to several files, and in each file, place a link that back-links to the respective index file.

The second function triggered by such a link is a global search inside your currently selected directory. It will merely take the link contents, place it in your search field and automatically "press Enter", to initiate the search. This way you can not only open exact files, but also find all other files that link to the file you just opened. So a link in the format `[[<your-id>]]` would open that specific file and also search for all files that link back to this file.

!!! tip

    It is possible to utilize the standard markdown link syntax to set a title for an internal link. For example, `[My text]([[<my-doc-id>]])` will render as if it was a regular link. When you click on it once, it will enter edit mode and reveal the title text and the internal link. Then, you can `Cmd/Ctrl + click` the internal link to trigger its functionality. This 'hack' has two caveats, though: 1) When exporting your document, this may create empty links (depending on your export preferences); 2) If you `Cmd/Ctrl + click` the link (without clicking on it once to reveal the internal link), Zettlr will display an error saying that it could not open it.
    
    ![](../img/internal_linking_tip.gif)

### Tagging

Tagging may be the easiest form of internal searching. If you `Cmd` or `Ctrl` click on a tag, this will simply render a search for all files in your current directory that are tagged with this tag. As tags in the form `#keyword` are not used anywhere in the markdown syntax, using this approach enables Zettlr to use such tags as the perfect means to create a tagging system.
