# Autocomplete

Autocomplete helps you complete various pieces of text by searching for parts of what you try to complete, and inserting the rest of the text for you. Across the Zettlr editor, a variety of autocomplete functions are available.

Usually, you trigger autocomplete with a special character at a valid position. These characters differ for the types of autocomplete Zettlr supports, such as citations, tags, snippets, or code blocks. A “valid position” usually means that the character needs to be preceded by whitespace, or inserted at the beginning of a line.

!!! tip

	Because one not always wants to insert an autocompletion, you need to accept an autocomplete suggestion by either clicking it, or pressing <kbd>Tab</kbd>. Pressing the <kbd>Enter</kbd>-key will abort the insertion process. This prevents accidental autocompletions.

## Tag Autocompletion

Zettlr can autocomplete tags, or keywords for you. To do so, insert a pound-sign (`#`) at the position where you wish to insert a tag. Start typing the tag until you have found it. Then, accept the autocompletion.

## Citation Autocompletion

When inserting citations, autocomplete helps you identify the correct citation key. To start a citation autocomplete, enter an `@`-character. Start typing parts of the citation key, author names, or parts of the title of the work to cite. Once you have identified the citation key, accept the suggestion with <kbd>Tab</kbd>.

!!! tip

	In your citation settings, you can determine how Zettlr will autocomplete the citation. There are three styles available, and Zettlr will add any required surrounding characters as necessary, and place your cursor accordingly.

## Snippets Autocompletion

To insert snippets, insert a colon-character (`:`). This will offer you available snippets to choose from.

!!! note

	The character also allows you to insert Emojis, if you have activated this setting.

## Emoji Autocompletion

Zettlr allows you to insert emojis based on string values (e.g., `:joy:`). Since the control character to start an emoji autocompletion is the same as for snippets, you can enable or disable this in the preferences.

When searching for an emoji, you can type various synonyms for the character.

!!! note

	Autocompleting an emoji will insert the actual Unicode-symbol for the emoji, not its string representation.

## Code Blocks

Zettlr can provide syntax highlighting for various programming languages out of the box. By default, code blocks do not provide syntax highlighting, and instead simply format your code in monospaced font.

To enable syntax highlighting for a language, you need to provide a code for the language. To help you identify the correct keywords, Zettlr offers automatic autocomplete of these language codes.

To start the code block language selector autocompletion, start by typing three backticks on a new line. After the third one, the autocomplete will start.

The preselected entry indicates “No Syntax Highlighting.” In that case, if you accept the autocompletion, Zettlr will simply insert the closing backticks and place your cursor into the codeblock without applying a language code.

Start typing a language name to search for the correct language code. Accept a completion with <kbd>Tab</kbd>.