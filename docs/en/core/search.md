# Searching

Writing text is one thing, finding it again at a later point in time another. Zettlr has various ways built in to help you find something among your files. On this page, we are going to introduce filtering, searching, and the global search to you.

## Filtering Files

The built-in file-filters allow you to perform a coarse but very quick filtering of files based on metadata. The file manager contains filter fields at the top that you can use to quickly reduce the files and folders shown by searching through their metadata.

This search is very quick but does not take the actual content of a file into account. In the section on workspaces we mentioned that sometimes loading a workspace can take a while as Zettlr is indexing any file it finds. The quick filter is one of the functions that use this metadata.

## Searching in Files

If you are interested in searching through the content of a specific file, you can use the search function. Press `Cmd/Ctrl+F` to bring up the search panel. You can type anything you would like to search for and repeatedly hit Enter to cycle through the matches.

You can also enter something into the replace field in order to replace matches with that string. The search also offers you some more common settings.

Activating the "match case" checkbox, the search will be performed case sensitive. Activating the "by word" checkbox, the search will match on word boundaries (so that "pau" would match "pau", but not "paul"). Lastly, activating the "regexp" checkbox, the search will interpret your query as a regular expression instead of a fixed string. This way you can make use of JavaScript's regular expressions for more advanced searching.

If you press `Enter` while the replace input is focused, Zettlr will replace the current search result and automatically highlight the next occurrence of your search term. Hit `Enter` repeatedly to replace multiple occurrences.

> **Tip**: If you search for something using a regular expression that contains at least one capturing group, you can use the variable `$1` inside your replacement text. Such variables will be replaced with the content of the capturing groups. Multiple occurrences of the variable will be replaced as well. The number after the `$` refers to the index of the capturing group (the second capturing group will be addressed using `$2`, and so forth). [Learn more about JavaScript regular expressions here](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

## Full-Text Search

If you need to find something across multiple files, you can use the full-text search. You can open it either by pressing `Cmd/Ctrl+Shift+F` or by clicking the second button from the left in the toolbar. The full-text search is contained in the same panel as the file manager.

![The full text search with explanations](../img/full_text_search.png)

The full-text search features three inputs:

* The **query field** contains the actual search terms you are looking for
* The second input allows you to **restrict your search to a specific directory**
* The last text field is only visible when a search is running, which allows you to **further filter your search results**

### The Search Results

The search results contain a few indicators that help you make sense of where the info is coming from, and what the file actually contains. In the header of each file result you fill first see either the filename, the `title` property, or the first heading of level 1, depending on your settings. Below that, you will always find the full path from the workspace root to the file in question. Furthermore, each search result has a relevancy score which tells you how relevant Zettlr thinks this search result is: Gray means less relevant, blue means relevant, and green means very relevant. Lastly, you can collapse the search results of that file by clicking the arrow on the right-hand side.

Each search result will list all lines of the file in which your search terms were found. The actual search results are emphasised while the rest of the line is displayed to provide you with the context of the result. In front of each line is the line-number. Upon clicking a single search result line, Zettlr will automatically open the file (if not already done) and jump to the corresponding line.

> Too many results? You can also toggle the display of all results using the corresponding button, and then only expand those which deserve a second look.

### Composing a Query

You can make use of several different operators to specify exactly what you are searching for:

* **AND operator:** Type `Boat Ship` to only display the files that contain _both_ the term "boat" and the term "ship". Each space is interpreted as "AND".
* **OR operator:** Type `Boat | Ship` (| is the Pipe-operator, `Shift+\\` on US-ANSI keyboards, `Alt+7` on ISO-style macOS keyboards, or `AltGr+<` on other ISO-style systems) to select all files that contain _either_ the word "boat" _or_ the word "ship"
* **Exact-Match operator:** Enclose your query in quotation marks (e.g.,`"Boat Ship"`) to search your files for that exact phrase.
* **NOT operator:** Type `!Boat` to search only for files _not_ containing that term. Works with exact matches as well: `!"Boat Ship"` would exclude all files containing the exact phrase "Boat Ship".

> **Attention**: While the `AND`, `OR`, and `Exact-Match` operators work by assigning weights (a file that fulfills all search criteria will be considered very relevant, while files which do not match all search terms have a blue or gray relevancy indicator), the `NOT` operator definitely excludes files. So while a search for `boat ship` would also include files containing only one of the two terms (albeit with a much lower weight), a search for `!boat ship` will definitely exclude all files containing the word boat.

Of course, you can chain all of these operators. So you could search for `"Boat Ship" | vessel captain` to display only files that either contain the exact phrase "Boat Ship" or the word "vessel", and which also include the word "captain".

Don't worry if you do not remember the complete word you are searching for: Zettlr will try to match your search terms also to partial words, so the word "trooper" would match "Stromtrooper" as well as "Troopership", and the phrase "Boat Ship" matches a "Steamboat Ship". **Searches are also case-insensitive**. So you don't have to worry about little typos you may have in some files.

While Zettlr is searching, it will display a search indicator. If a search takes too long, you can cancel it.

To achieve better results, Zettlr will weigh different types of matches differently. For instance, an exact match in the title can be a sign that the file is highly relevant to you. Therefore, Zettlr will weigh this heavier than other matches. Also, if a search term has matched case-sensitive, this match will receive a higher score than if the term has only matched case-insensitive (i.e., there was a difference in capitalisation).

To find the exact place where your search matched, select a file and Zettlr will automatically highlight all matches in bright yellow easy to find.
