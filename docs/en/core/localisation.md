# Localisation

As we write this, Zettlr is available in many languages. A few more languages are being translated at the moment. This means that you can use Zettlr in your native language if you prefer. Have a look at [our translation service](https://translate.zettlr.com/) to see an up-to-date list.

> For localisation of output files, see the [YAML Frontmatter variable `lang`](https://docs.zettlr.com/en/core/yaml-frontmatter/#variable-lang)

Furthermore, Zettlr ships with a few spellchecking dictionaries. Due to their size only a limited amount is available, but you can add new ones easily.

## Changing the Language and Enabling Spellchecking

To change the app's language, you can do so in the preferences. Please note that you have to restart the application to apply the new language.

> While the language of the interface can be adapted in the preferences, this does not apply to exported files. Especially when it comes to quotation marks and number delimiters, the export files will fall back to English (US). Change this by setting the `lang`-property in either your [defaults files](defaults-files.md) or the [YAML frontmatter](yaml-frontmatter.md).

To enable spellchecking, view the corresponding tab in your preferences. Click the checkbox next to all dictionaries you wish to load. Note, however, that more dictionaries can potentially slow down your computer due to their size. We recommend you stick with three dictionaries maximum.

> To disable spellchecking, simply uncheck all dictionaries.

## Install new dictionaries

Zettlr uses the popular Hunspell dictionaries that are also used by well-known software such as LibreOffice or Mozilla apps.

To enable spell-checking for a specific language, simply open the user dictionary folder by selecting `File`->`Import Dictionary …` from the menu. Zettlr will then open up the folder in which you need to place the dictionary files.

The dictionary consists of two files, one is a `.dic` file, and the other is an `.aff` file. They need to be placed inside a folder that is named after the language you want to import. Let us assume you want to import the dictionary for Portuguese. You need to grab it from some repository, for instance [here is an extensive set](https://github.com/wooorm/dictionaries/tree/main/dictionaries). Then you simply need to make sure the folder is named `pt-PT` and the two files are named `pt-PT.dic` and `pt-PT.aff`. Other files inside the directory will be ignored by Zettlr. As soon as you have placed your files inside the `dict` directory, open the preferences and Zettlr should list your newly imported dictionary!

## Help Translate!

Is your language not yet available, or are a few translations displayed in English? If any of the strings in the app have not yet been translated, Zettlr will fall back to English for these ones. Anyone can help improve the existing translations and add new ones. To see how you can help, please refer to the [Get Involved page](../getting-started/get-involved.md).
