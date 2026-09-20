# Admonitions

Admonitions, which are also known as alerts or callouts, have become quite popular in recent years. Many tools support them, and so does Zettlr.

> [!important]
> Admonitions are an odd syntactic element. While elements such as tables or footnotes are not always supported, they typically share a common syntax. Admonitions, on the other hand, are supported by a wide range of tools, but with sometimes completely incompatible syntax.
> 
> For example, Pandoc supports GitHub style admonitions and allows nesting them, which GitHub does not. On the other hand, neither Pandoc nor GitHub support custom titles, while Zettlr and Obsidian do. The framework on which this very documentation runs, VuePress, supports custom titles, but when using a different syntax that is borrowed from Pandoc’s fenced div syntax.
>
> In short: It’s complicated.

## Basic Syntax

Zettlr supports a superset of features of GitHub style admonitions. These are created like blockquotes, but are distinguished with a custom header that includes a keyword describing the semantic meaning of the admonition:

```markdown
> [!note]
> This is a note.
```

The keyword is surrounded by `[!` and `]`. Zettlr accepts the keyword both in UPPERCASE and lowercase. In total, Zettlr implements the keywords `note`, `tip`, `important`, `warning`, and `caution` — the same that Pandoc and GitHub support.

To add a custom title, you simply add it after the keyword on the first line:

```markdown
> [!warning] Custom warning
> This is the content of this warning.
```

When pre-rendering admonitions in Zettlr, it will frame them in a box with a custom color, background color, and border. Initially, it uses the colors gray (`note`), green (`tip`), purple (`important`), yellow (`warning`), and red (`caution`). It comes in two flavors, one for light mode, and one for dark mode.

Aside from the special first line, the syntax of admonitions is exactly the same as for blockquotes. They can contain other block elements, and even other admonitions.

## Customizing the Colors

If the default color palette of admonitions do not suit your preferences, you can change the colors using [Custom CSS](../guides/custom-css.md). The colors of admonitions are defined using CSS root variables. Overwrite them in your Custom CSS to achieve the desired effect. The variables are defined once on the `:root`-level, and once for `prefers-color-scheme: dark`.

The available variables are:

* `--zettlr-admonition-note-color`: The color used for the font and the border
* `--zettlr-admonition-note-bg`: The color used for the background

Replace `note` with any one of the available keywords to target the specific type of admonition.

> [!caution]
> By overriding these values, you also adjust the colors of Zettlr’s built-in admonitions that you can see, e.g., in the assets manager.

To change other properties, such as the padding or border color, target the corresponding CSS elements as described in our [Custom CSS guide](../guides/custom-css.md). As always, we do not offer any amount of stability for these elements.