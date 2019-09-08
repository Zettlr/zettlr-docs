# Localisation

Zettlr is not only capable of importing and exporting a lot of different formats, it also provides you with the possibility to translate the GUI and use your preferred spellchecking dictionaries. You can easily import new dictionaries and translate the user interface to your likings.

Zettlr comes shipped with the following languages:

- English (United Kingdom)
- English (United States)
- German (Germany)
- French (France)

The app includes the following dictionaries:

- English (United Kingdom)
- English (United States)
- German (Germany)
- French (France)
- Spanish (Spain)
- Dutch (Netherlands)
- Turkish
- Russian
- Ukrainian

## Install new dictionaries

Of course, you may want to install new dictionaries for languages you write in that are not shipped with the app. It is easy to do so. Zettlr uses the popular Hunspell dictionaries that are also used by well-known software such as LibreOffice or Mozilla apps.

To enable spell-checking for a specific language, simply open the user dictionary folder by selecting `File`->`Import Dictionary …` from the menu. Zettlr will then open up the folder in which you need to place the dictionary files.

The dictionary consists of two files, one is a `.dic`-file, and the other is an `.aff`-file. They need to be placed inside a folder that is named after the language you want to import. Let us assume you want to import the dictionary for Portuguese. You need to grab it from some repository, for instance [the GitHub user wooorm has an extensive set](https://github.com/wooorm/dictionaries/tree/master/dictionaries). Then you simply need to make sure the folder is named `pt-PT` and the two files are named `pt-PT.dic` and `pt-PT.aff`. Other files inside the directory will be ignored by Zettlr. As soon as you have placed your files inside the `dict`-directory, open the preferences and Zettlr should list your newly imported dictionary!

> **Hint:** Zettlr tries to translate the language strings automatically, but in some cases it may happen that Zettlr does not contain translations for specific languages. In this case, Zettlr will fallback to the language code and display it as, e.g., `pt-PT`.

## Translate the App

To help translate the app, please refer to the [Get Involved page](../get-involved.md).
