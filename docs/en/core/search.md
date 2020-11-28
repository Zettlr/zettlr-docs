# Searching

One of the huge benefits of switching to Markdown to write documents is, that the documents themselves are searchable through your operating system's built-in search (e.g., Cortana on Windows, Spotlight on macOS or Dash on Linux systems). But of course it helps a lot if you don't have to leave the program when you are searching for something. That's where the search comes in! There are basically three distinct search functions: A fast filtering function that you use every time you select another directory in the list on the left, a document-wide search and a global search.

## Filtering files

The first function has already been mentioned on multiple occasions. As the preview list only displays all files inside a given directory and all of its sub-directories, just select different directories to narrow down the list of all files to the ones you need to see. Or, select a workspace to get the full list.

## Searching in files

If you are searching for specific phrases or words inside your currently opened file, just press `Cmd/Ctrl+F`. A small popup will open underneath the magnification symbol providing you with the common search and replace options. Just type something and hit `Enter` repeatedly to cycle through the matches. Press `ESC` or click outside the popup to close the search.

> **Tip**: You can also make use of powerful regular expressions for searching. Zettlr by default performs a default search, but when a regular expression is detected (i.e., your search is encapsulated with slashes), it will perform a RegEx search. Once Zettlr has detected a regular expression, the search field will change its font to monospace to help you write your regular expression. To search for all digits, for instance, you'd search for `/\d+/`. [Learn more about JavaScript regular expressions here](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

If you press `Enter` while the replace input is focused, Zettlr will replace the current search result and automatically highlight the next occurrence of your search term. Hit `Enter` repeatedly to replace multiple occurrences. If you want to replace all occurrences at once, you can hit `Alt+Enter` while the replace input has focus.

> **Tip**: Just as in other editors, you can make use of variables while searching with a regular expression. If you search for something using a regular expression that contains at least one capturing group, you can use the variable `$1` inside your replacement text. Such variables will be replaced with the actual found content of the capturing groups. Multiple occurrences of the variable will be replaced as well. The number after the `\$` refers to the index of the capturing group (the second capturing group will be addressed using `\$2`, and so forth). [Learn more about JavaScript regular expressions here](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Of course, you can also use the search in Quicklook windows. Therefore, just click into the content of the Quicklook you want to search (to give it focus and prevent that `Cmd/Ctrl+F` triggers the search on your main file) and press `Cmd/Ctrl+F` to begin searching.

## Searching globally

The most important aspect of searching is, in fact, the global search which you can trigger by hitting `Cmd/Ctrl+Shift+F`. The search input in the toolbar will receive focus, letting you search a specific subset of files in your workspace: Only those currently visible in the pane. That means you can choose which files will be searched by selecting an appropriate directory in the list -use the filtering function to your benefit!

If you want to search _all_ files at once, select a workspace. If you only want to search in a specific directory, select that before searching. In most cases you have an idea where the text you need is located. For instance, if you are searching for a quote on a certain issue that can be cited in scientific research you may not want to search through all your thoughts and ideas, but limit your search to the directory where you store your excerpts of scientific texts and papers.

The search itself is rather powerful. You can make use of several different operators to specify exactly what you are searching for:

* **AND operator:** Type `Boat Ship` to only display the files that contain _both_ the term "boat" and the term "ship". Each space is interpreted as "AND".
* **OR operator:** Type `Boat | Ship` (| is the Pipe-operator, inserted by `Alt+7` on macOS or `AltGr+<` on other systems) to select all files that contain _either_ the word "boat" _or_ the word "ship"
* **Exact-Match operator:** Type `"Boat Ship"` to search your files for that exact phrase.
* **NOT operator:** Type `!Boat` to search only for files _not_ containing that term. Works with exact matches as well: `!"Boat Ship"` would exclude all files containing the exact phrase "Boat Ship".

> **Attention**: While the `AND`, `OR`, and `Exact-Match` operators work by assigning weights (a file that fulfills all search criteria will be coloured bright, while files which do not match all search terms have a faded background), the `NOT` operator definitely excludes files. So while a search for `boat ship` would also include files containing only one of the two terms (albeit with a much lower weight), a search for `!boat ship` will definitely exclude all files containing the word boat.

Of course, you can chain all of these operators. So you could search for `"Boat Ship" | vessel captain` to display only files that either contain the exact phrase "Boat Ship" or the word "vessel", and which also include the word "captain".

Don't worry if you do not remember the complete word you are searching for: Zettlr will try to match your search terms also to partial words, so the word "trooper" would also match "Stromtrooper" as well as "Troopership" as would the phrase "Boat Ship" also match a "Steamboat Ship". **Searches are also case-insensitive**. So you don't have to worry about little typos you may have in some files.

While Zettlr is searching, it will display a search indicator to the right of the search box. Once it is done, it will colour all of your files. The more green-ish they are, the more relevant they are (i.e., the more high-quality matches have been found inside that file). This is kind of a **heat map for search results** letting you easily identify the relevant files for your search.

> Please note that Zettlr will hide all files in which the search terms did never match, as well as all directories.

To achieve better results, Zettlr will weigh different types of matches differently. For instance, an exact match in the title can be a sign that the file is highly relevant to you. Therefore, Zettlr will weigh this heavier than other matches. Also, if a search term has matched case-sensitive, this match will receive a higher score than if the term has only matched case-insensitive (i.e., there was a difference in capitalisation).

To find the exact place where your search matched, select a file and Zettlr will automatically highlight all matches in bright yellow easy to find. Also, the scrollbar to the very right of the window will be showing markers to indicate at which positions in the document your search terms occur.

## Exit the global search

The global search is in many ways persistent. This way you can stroll through your search results without having to fear that any action might accidentally exit the search. This is especially helpful in huge file lists, where searching can take its time. Nonetheless, there _are_ ways to exit a global search.

Do one of the following to exit the search and display all files regularly again:

* While the search input is focused, press `ESC`. (You can re-focus it with `Cmd/Ctrl+Shift+F`)
* Click the `x` on the right hand side of the search box.
* Select a different directory in the tree view.
