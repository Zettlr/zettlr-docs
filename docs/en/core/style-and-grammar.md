# Spelling, Style, and Grammar Checking

Knowing how to write Markdown is one thing, but when typing a lot, it happens frequently that we make a mistake. To ensure that you always deliver perfect texts, Zettlr offers a variety of tools, and the list is likely going to increase going forward. Currently, Zettlr ships with four tools:

* A **spell checker** for simple typography proofing
* A **Markdown style checker** that ensures well-formed syntax
* A **LanguageTool integration** for advanced spell and grammar checking
* A **readability mode** that indicates how easy your text is to read.

On this page, we're going to introduce you to three of these, what capabilities they have and how to utilize them.

> The readability mode works different from the first three tools and is more complex, [so we document its usage on a separate page](../academic/readability.md).

## How Linting Works

On a basic level, style and grammar checking in Zettlr works similar to Word or your smartphone. On a more technical level, all of these tools are known as **"linters"**. A linter is generally something that checks a text document and highlights potential issues.

Zettlr knows three "levels" of problems: Errors and spelling mistakes are generally underlined in red, grammatical issues and style issues are generally yellow, and purely informative messages are gray.

> For each of the tools Zettlr offers, the process of using them is the same.

Whenever one of these tools detects a problem, it will add a colored underline for the corresponding span of the document. If there are multiple issues at the same location, Zettlr will show the most severe color.

Hover with your mouse over the location to see a tooltip that includes all issues at that location. Each tooltip provides you a range of information:

1. The severity, indicated by the color of the message
2. A message explaining the problem
3. The source of the issue (the spell checker, the style checker, or LanguageTool)
4. Optionally, it provides a set of actions in the form of buttons that you can click to automatically apply a correction.

If you are more the list type of person, you can also view all issues found in a document in a single list. In order to do so, you need to first activate the status bar in the editor settings. The statusbar contains a counter of all problems found in any given text. Click on it to open the "lint panel" which contains every problem in your text in a single list that you can navigate with your keyboard.

## Spell Checking

The basic tool for well-written texts is the spell checker which utilizes the **hunspell** library that also provides spell checking for LibreOffice. It checks all your words for potential spelling mistakes. It works offline and supports a variety of languages.

Spellchecking is disabled by default. To enable it, select all languages that you would like to check against. Generally, we recommend to restrict yourself to two or three languages.

Note that the spellchecker cannot determine the language of a paragraph, so each dictionary will check against all words. However, when at least one dictionary reports a word as correct, Zettlr will not mark it as a spelling mistake.

If a word is underlined in red, this indicates a potential spelling error. By right-clicking the word, you can select one of the suggestions (if there are any), or choose to add that word to your personal dictionary.

> You can at any time remove words from the dictionary by going to settings &rarr; spell checking.

Currently, Zettlr ships with dictionaries for German, English (UK and US), Spanish, French, Dutch, Russian, Turkish, and Ukrainian (subject to change). If you need different languages, you can install them after the fact.

### Installing Dictionaries

To install an additional dictionary, you first need to find one in the language of your choice that is compatible with hunspell. One extensive set can be found [here](https://github.com/wooorm/dictionaries/tree/main/dictionaries).

After you have downloaded a dictionary, open Zettlr and navigate to 'File' &rarr; 'Import Dictionary…'. This will open a folder on your computer into which you can place that new dictionary.

Ensure that your dictionary has one `*.aff`-file and one `*.dic`-file, both contained in a folder named with the language code. For example, a Portuguese dictionary would need to be a folder named `pt-PT` that contains the two files `pt-PT.dic` and `pt-PT.aff`.

Place that directory in its entirety into the folder you opened earlier and Zettlr should immediately detect the new dictionary. To uninstall a dictionary again, simply remove it from the dictionary-folder.

## Markdown Style Checking

The second tool that Zettlr offers is a Markdown style checker. This style checker is also known as a "linter" and it ensures that the syntax you use to write your documents is consistent. For example, it will ensure that all lists are properly indented, that you use only one variation of emphasized text markers, keep a space between the heading formatting and its text, etc.

The style checker is active by default and will highlight any problems it finds in your documents. It utilizes yellow and gray as colors to indicate any potential problems in your texts. Yellow warnings should be attended to, while gray indicates informative messages.

> The Markdown style checker will not use the color red, since style can be to a certain point subjective. If you do not wish to receive style warnings, you can disable it at any time in the settings &rarr; Check Markdown for style issues.

## LanguageTool Integration

The most powerful tool to ensure you write well-formed texts is a brand-new integration with LanguageTool. LanguageTool is a service by LanguageTooler GmbH, a German competitor to Grammarly that offers free typographical checks of your texts. We chose to integrate LanguageTool into Zettlr, as it also offers an Open Source version of their service that can be self-hosted.

LanguageTool is disabled by default, since it requires an internet connection to the service. Once you activate the corresponding switch in the settings, LanguageTool will begin to check your documents for issues.

> LanguageTool utilizes all three "levels" for reporting problems: Red for spelling mistakes, yellow for grammatical errors, and gray for informative messages on improving your style.

If you have a premium subscription from LanguageTool and wish to use this, enter your username and API-key into the corresponding fields in the settings. Note that entering something in these fields will overwrite a potential custom server (i.e. Zettlr will in this case always contact the official LanguageTool servers).

With the statusbar active, you have two elements that pertain to LanguageTool: The statusbar includes an issue counter that tells you how many errors, warnings, and infos the various linters have found in your texts. Next to it, you will see information on the status of LanguageTool, allowing you to switch the auto-detected language if it has detected a wrong language, and see whether LanguageTool ran successfully.

### Using LanguageTool Offline or Self-Hosted

Thanks to the Open Source nature of LanguageTool, you do not need an internet connection to check your writing. It is possible to set up LanguageTool locally on your computer. We have created [a guide on how to set up LanguageTool locally on your computer with Docker](../guides/languagetool-local.md).

Once you have installed LanguageTool – either on your computer or a server – you can direct Zettlr to utilize a custom server instead of the official LanguageTool server. After selecting the appropriate setting, enter the address at which Zettlr can reach your server (either a URL or something starting with `http://localhost` if you set it up locally). Zettlr will then immediately start using the new server.

> Note that if you insert any credentials into the premium fields in Zettlr, Zettlr will ignore your custom server setting. A self-hosted setup should not need credentials.
