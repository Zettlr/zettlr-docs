# Inline Extensions

In this section, we document additional inline elements that Zettlr understands. Some of these elements may not be universally supported, so we will add information on where you can expect these elements to work or not.

## Highlighting

Zettlr supports highlighting text, which is displayed in the style of highlighting text using a text marker. By default, both Zettlr and when you export a document show this in the color yellow. This can be customized with [Custom CSS](../guides/custom-css.md) and with [custom templates](../guides/journal-latex-template.md).

To mark a range of text, surround it with equal-signs:

```markdown
This is a sentence ==with a highlighted span==.
```

Result:

> This is a sentence <span style="background-color: yellow; color: black;">with a highlighted span</span>.

For this to work during export, the `mark` extension must be enabled. Zettlr ensures that this is the case, unless you explicitly turn this off.

> [!important]
> This syntax is supported primarily by Pandoc, which means that most environments which use Pandoc (such as RStudio or Positron) should support it. However, most online parsers (e.g., on GitHub), typically don’t support this syntax.

## Strike-Through

Another element that was not part of the original Markdown but that has become commonplace is striking through text:

```markdown
This is a sentence ~~with a striken-through~~ part in between.
```

Result:

> This is a sentence ~~with a striken-through~~ part in between.

> [!important]
> This syntax has become widespread. You can expect most environments to support it. However, some may still lack support for this.

## Tags

This is a custom inline element that allows you to connect notes using tags within Zettlr. These work exactly like the hashtags you may know from social media platforms:

```markdown
This is a sentence which is followed by a set of tags. #todo #explainer
```

By default, these tags will be removed from your documents upon export, as they only make sense within the environment of Zettlr.

> [!tip]
> You can also place tags in a YAML front matter. This way, you can add tags to your files that contain spaces. Inline tags do not allow spaces.

> [!caution]
> Since tags and headings can be hard to distinguish, we strongly recommend you add a space between your heading formatting characters and the heading text. This way, there is no ambiguity whether the line starts with a tag or a heading.

> [!important]
> Tags are a quite unique feature of Zettlr, and as such you should not expect them to be detected as tags in other environments. Most parsers are going to ignore them, and depending on your needs, this may be perfectly fine.

## Wiki Links

This syntax has been unique to Zettlr for many years, before being picked up by more and more other applications. Nowadays, wiki links are quite commonplace, at least in serious Markdown editors.

Wiki links work similar to regular Markdown links, but use a different syntax. They are encapsulated by two square brackets. Furthermore, a file name is required. A title is optional, and can be separated with a pipe-character (`|`). Example:

```markdown
This is a sentence that links to a [[concept|file.md]].
```

Wiki links are natively supported during exports and will be converted to regular links. However, due to some disagreements on the ordering of elements, you will have to pick one flavor. Most editors follow the order `[[link|title]]`, and so does Zettlr. But if you intend to use your documents with a parser that expects the elements in the reverse order (`[[title|link]]`), you will need to tell Zettlr this. You can do so in the preferences → Zettelkasten.