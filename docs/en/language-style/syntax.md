# Markdown Syntax

Besides checking your language, it is also a good idea to check your Markdown syntax for style. This ensures that your Markdown documents remain readable even if someone only has a plain text editor available to read your documents.

## Enabling the Markdown Style Checker

To enable the Markdown style checker, go to the preferences → “Editor” section. Activate the setting “Check Markdown for style issues.” When this is active, Zettlr checks your documents.

Zettlr comes with a small, opinionated set of rules that the checker will test for. If your documents deviate from this style, it will mark the affected span.

The Markdown style checker uses the same mechanism as the spellchecking and LanguageTool integrations, so you can move with your mouse over an issue to view an explanation.

Unlike the other tools, Markdown style often affects entire blocks of text. Therefore, it uses its own gutter to display small warning signs whenever it has found an issue.

!!! note

	The style checker is opinionated. We believe that the rules it enforces ensure that your documents are well formatted. However, style can be subjective. This is why the tool will never use red lines to mark issues. In addition, you can disable the tool if you disagree with it.

!!! tip

	The style issues are collected alongside any misspellings and LanguageTool annotations in the diagnostics control on the status bar.
