# Dictionaries & Spell Checking

As with all modern writing app, Zettlr features a powerful spell checking engine at its heart. It is deactivated by default, as many users still would like to separate spell checking from the actual writing process, but you can activate it with ease. Additionally, Zettlr allows you to check against multiple languages at once, making it the ideal tool for writing bilingual texts (for instance, an English journal paper with some German quotations).

## Activate spell checking

To activate spell checking, open Preferences using either the menu item, the toolbar button or pressing `Cmd/Ctrl+,`. In the Spellchecking tab, you can then select all dictionaries you would like to activate. You can activate/deactivate a dictionary using the toggle switch next to its name.

You can filter the list of available dictionaries by typing a search key into the upper text field. Zettlr will automatically hide all dictionaries whose name does not contain your search string. Remove any letters from the search field to display all dictionaries again.

After saving the settings with your new spell checking configuration, Zettlr will automatically begin to load all dictionaries. You may experience some lag while Zettlr boots up the dictionaries; especially with huge dictionaries such as the Italian or German languages this may take some time. After you quit the app, Zettlr will load the dictionaries on each start after a short delay.

## Deactivate spell checking

To deactivate spell checking again, simply deactivate all dictionaries via their toggle swtiches. If there are no dictionaries are activated, Zettlr won't attempt to perform spell checking on your texts.

## Custom Dictionary

From version `1.3.0` onward, Zettlr supports adding certain words to your user defined dictionary. Especially for names this is useful, as you can then mark them as correct to remove the small red line underneath those names. To add a word to the user dictionary, simply right-click a marked word or name, and select "Add to Dictionary". Zettlr will then never mark this word as wrong again.

## Add new Dictionaries

While Zettlr ships with several dictionaries on install, you may want to add new dictionaries for languages that you write in. To add such dictionaries, you'll need to search for Hunspell compatible dictionaries. Basically, these consist of folders containing two files – a `.dic` file and an `.aff` file. The `.dic` file contains all words in a language with so-called affixes, e.g., small flags that tell the algorithm that a certain word, for instance, may also feature a different ending (take for instance the word "ending" – while the stem is "end", there may be both the words "ends", and "ending" available in the language – the affix flag would then indicate "this word can also have the `-ing` ending!"). The `.aff` file contains the definitions of these flags.

So to add these dictionaries, go online to search for some. A good starting point is [this repository by the GitHub user wooorm](https://github.com/wooorm/dictionaries), which features a lot of languages. Simply download one of the folders to your computer. Then, in Zettlr, click File -> "Import Dictionary …". This will open up your computer's file browser with the `dict` folder in Zettlr open. Copy the whole dictionary folder that you just downloaded into the `dict` folder. Then you can select this dictionary from the settings.

Bear in mind that Zettlr will perform some basic tests to determine whether or not a dictionary is valid. To have Zettlr display the dictionary and being able to select it, the dictionary must follow the following rules:

1. The folder containing the `.dic` and `.aff` files must be named using the corresponding [BCP-47 tag](https://tools.ietf.org/html/bcp47) of the language the dictionary contains. Although you may not be aware of the term "BCP-47", it's simply the common language tag, so for instance, a German dictionary would be named `de-DE` (for German German) or `de-CH` (for Swiss German), or simply `it` (for Italian). A complete [list of all available languages can be found here](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
2. Inside this folder, at least two files must be present: a `.dic` file and an `.aff` file. These must be named either using the BCP-47 tag of the folder, or `index.dic`/`index.aff`.
3. The dictionary folder may contain other files (such as a list of authors, or a LICENSE). These will be ignored.

To sum up, Zettlr will make sure a dictionary is valid by checking that the following paths exist:

- `bcp-47/bcp-47.dic` and `bcp-47/bcp-47.aff` _or_
- `bcp-47/index.dic` and `bcp-47/index.aff`
