# Searching

One of the huge benefits of switching to Markdown to write documents is, that the documents themselves are searchable through your operating system's built-in search (e.g., Cortana on Windows, Spotlight on macOS or Dash on Linux systems). But of course it helps a lot if you don't have to leave the program when you are searching for something. That's where the search comes in! There are basically three distinct search functions: A fast filtering function that you use every time you select another directory in the list on the left, a document-wide search and a full-text search.

## Filtering Files

The first function has already been mentioned on multiple occasions. As the file list only displays all files inside a given directory and all of its sub-directories, just select different directories to narrow down the list of all files to the ones you need to see. Or, select a workspace root to get the full list.

You can also filter this list further using the text field on top of the file list.

## Searching in Files

If you are searching for specific phrases or words inside your currently opened file, just press `Cmd/Ctrl+F`. The search will open in the top-right corner of the editor. Just type something and hit `Enter` repeatedly to cycle through the matches. Click the small "x" button to close the search.

> **Tip**: You can also make use of powerful regular expressions for searching. Zettlr by default performs a default search, but when a regular expression is detected (i.e., your search is encapsulated with forward slashes), it will perform a RegEx search. Once Zettlr has detected a regular expression, the search field will change its font to monospace to help you write your regular expression. To search for all digits, for instance, you'd search for `/\d+/`. [Learn more about JavaScript regular expressions here](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

If you press `Enter` while the replace input is focused, Zettlr will replace the current search result and automatically highlight the next occurrence of your search term. Hit `Enter` repeatedly to replace multiple occurrences. If you want to replace all occurrences at once, you can hit `Alt+Enter` while the replace input has focus.

> **Tip**: Just as in other editors, you can make use of variables while searching with a regular expression. If you search for something using a regular expression that contains at least one capturing group, you can use the variable `$1` inside your replacement text. Such variables will be replaced with the actual found content of the capturing groups. Multiple occurrences of the variable will be replaced as well. The number after the `\$` refers to the index of the capturing group (the second capturing group will be addressed using `\$2`, and so forth). [Learn more about JavaScript regular expressions here](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Of course, you can also use the search in Quicklook windows. Therefore, just click into the content of the Quicklook you want to search (to give it focus and prevent that `Cmd/Ctrl+F` triggers the search on your main file) and press `Cmd/Ctrl+F` to begin searching.

## Full-Text Search

The most important aspect of searching is, in fact, the full-text search which you can open by pressing `Cmd/Ctrl+Shift+F`. The full text search is located where the file manager is and can be opened using the three-way toggle to the left of the toolbar. The full text search provides you with advanced functionality to get to the info you need as fast as possible.

![The full text search with explanations](../img/full_text_search.png)

The full-text search features three inputs:

* The **query field** contains the actual search terms you are looking for
* The second input allows you to **restrict your search to a specific directory**
* The last text field is only visible when a search is running, which allows you to **further filter your search results**

### The Search Results

The search results contain a few indicators that help you make sense of where the info is coming from, and what the file actually contains. In the header of each file result you fill first see either the filename, the `title` property, or the first heading of level 1, depending on your settings. Below that, you will always find the full path from the workspace root to the file in question. Furthermore, each search result has a relevancy score (previously the "heatmap"), which tells you how relevant Zettlr thinks this search result is: Gray means less relevant, blue means relevant, and green means very relevant. Lastly, you can collapse the search results of that file by clicking the arrow on the right-hand side.

Each search result will list you all the lines in which your search terms were found. The actual search results are emphasised while the rest of the line is displayed to provide you with the context of the result. In front of each line is the line-number. Upon clicking a single search result line, Zettlr will automatically open the file (if not already done) and jump to the corresponding line.

> Too many results? You can also toggle the display of all results using the corresponding button, and then only expand those which deserve a second look.

### Composing a Query

Composing a query works similar to other search engines which you are already familiar with. You can make use of several different operators to specify exactly what you are searching for:

* **AND operator:** Type `Boat Ship` to only display the files that contain _both_ the term "boat" and the term "ship". Each space is interpreted as "AND".
* **OR operator:** Type `Boat | Ship` (| is the Pipe-operator, inserted by `Alt+7` on macOS or `AltGr+<` on other systems) to select all files that contain _either_ the word "boat" _or_ the word "ship"
* **Exact-Match operator:** Type `"Boat Ship"` to search your files for that exact phrase.
* **NOT operator:** Type `!Boat` to search only for files _not_ containing that term. Works with exact matches as well: `!"Boat Ship"` would exclude all files containing the exact phrase "Boat Ship".

> **Attention**: While the `AND`, `OR`, and `Exact-Match` operators work by assigning weights (a file that fulfills all search criteria will be considered very relevant, while files which do not match all search terms have a blue or gray relevancy indicator), the `NOT` operator definitely excludes files. So while a search for `boat ship` would also include files containing only one of the two terms (albeit with a much lower weight), a search for `!boat ship` will definitely exclude all files containing the word boat.

Of course, you can chain all of these operators. So you could search for `"Boat Ship" | vessel captain` to display only files that either contain the exact phrase "Boat Ship" or the word "vessel", and which also include the word "captain".

Don't worry if you do not remember the complete word you are searching for: Zettlr will try to match your search terms also to partial words, so the word "trooper" would also match "Stromtrooper" as well as "Troopership" as would the phrase "Boat Ship" also match a "Steamboat Ship". **Searches are also case-insensitive**. So you don't have to worry about little typos you may have in some files.

While Zettlr is searching, it will display a search indicator. If a search takes too long, you can abort it prematurely.

To achieve better results, Zettlr will weigh different types of matches differently. For instance, an exact match in the title can be a sign that the file is highly relevant to you. Therefore, Zettlr will weigh this heavier than other matches. Also, if a search term has matched case-sensitive, this match will receive a higher score than if the term has only matched case-insensitive (i.e., there was a difference in capitalisation).

To find the exact place where your search matched, select a file and Zettlr will automatically highlight all matches in bright yellow easy to find. Also, the scrollbar to the very right of the window will be showing markers to indicate at which positions in the document your search terms occur.
