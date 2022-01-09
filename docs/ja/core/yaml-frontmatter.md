# YAML Frontmatter

Pandocと同様、ZettlrもMarkdownファイルでYAML frontmatterを使うことができます。[YAML frontmatter](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block)は、文章自体には含まれない、著者、キーワード、タイトルなどの情報を記述するための、メタ変数の並びです。

YAML frontmatterはファイルの最初に記述することができます。3つのハイフン(`---`)を書いた行で始まり、3つのハイフンまたはピリオドを書いた行で終わります。(より一般的なのは前者の形式です。) They contain valid YAML and can be used to define arbitrary variables. They come in handy for a variety of use cases.

> For a more concise documentation of what you can do with YAML frontmatters, please refer to the [Pandoc documentation](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).

## YAML frontmatterを定義する

YAML frontmatterはドキュメント中のどこでも定義することができ、Pandocでは複数の入力ファイルを一つの出力ファイルにまとめる目的で使われることが一般的です(Zettlrの場合、プロジェクトのエクスポート機能で同等のことを行っています)。Zettlrでは、ファイルの先頭に書かれたYAML frontmatterブロックのみ、シンタックスハイライトが適用されます。

ファイルの1行目が3つのハイフン(`---`)になっていて、3つのハイフンまたは3つのピリオドが書かれた行で終わるようなYAML frontmatterに限って、Zettlrはシンタックスハイライトを適用します。YAMLの書き方に関する詳しい説明は、[仕様](https://yaml.org/spec/1.2/spec.html)を参照してください。

Pandocのエクスポートで有効なYAML frontmatterは次のような形式です:

```yaml
---
title: "Your document's title"
keywords:
  - A keyword
  - Another keyword
author:
  - The Zettlr Team
---
```

> **注意**: YAMLの仕様により、インデントにタブ文字を使うことができません。有効なYAMLを記述するには、インデントに半角空白を使用してください。

## Frontmatters versus Defaults files

Frontmatters can be used to override defaults set by either Pandoc internally or one of the defaults files which Zettlr uses to export your files. For more information, make sure to read the [documentation on defaults files](defaults-files.md) to avoid confusion!

## frontmatter変数

PandocとPandoc citeprocでは、frontmatterを利用して、多くの有用な情報を保持しています。frontmatterによって、例えば使用するロケールや、本文中で引用していない参考文献のリストなど、ドキュメントの描画方法を様々な面でコントロールすることができます。Zettlr can understand a subset of these variables to show you additional information across the program. The support for variables such as `nocite` is likely going to increase further in future versions.

利用可能なすべての変数の一覧とそれらの使用方法については、Pandocのマニュアルの[metadata blockの説明](https://pandoc.org/MANUAL.html#metadata-blocks)、および[Pandoc citeprocのマニュアル](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md)を参照してください。

> ヒント: このページでは、Pandocで使える変数の中から重要なものを説明しています。しかし、YAML frontmatterは、[Jekyll static site generator](https://jekyllrb.com/docs/front-matter/)などのエンジンでも使用されています。そのような別のツールを使ってMarkdownファイルの変換を行おうとしている場合は、そのツールのドキュメンテーションを参照して利用可能な変数を確認してください。

### `title`

ドキュメントの最終的なタイトルを設定します。レベル1の見出しは、厳密に言えば、そのドキュメントのタイトルを記述するものではなく、文章の最上位のセクションであるというところに、この変数の利用価値があります。

この変数はZettlrの様々な場所で、ファイル名を上書きする形で表示されます。(例えば、ファイルリストやドキュメントタブなど)

### `author`

ファイルの作者を記述します。これは、単なる名前のリスト、もしくは著者名とその所属のリストです。この情報は、例えばPDFエクスポートでタイトルページを生成する場合などに利用されます。

以下の変数はいずれも正しい形式です:

```yaml
author:
  - Author one
  - Author two
author:
  - name: Author one
    affiliation: University X
  - name: Author two
    affiliation: University Y
```

> `affiliation`プロパティーのインデントに注意してください。`name`プロパティと位置を揃える必要があります。YAMLではインデントが重要な意味を持つので気を付けてください。

### `keywords` / `tags`

The `keywords` variable contains keywords, or tags, that can be used by Pandoc. Many other engines also support the variable `tags`. Zettlr recognises both properties and will treat both as valid descriptions of tags for your file.

これらのプロパティは、Zettlrがサポートする文章中に記述するタグの制限を回避するのにも利用することができます。ここでは、スペースも含め任意のキーワードを定義することができます。Zettlrは、キーワードを認識しファイルのタグ一覧に追加します。

### `lang`

This variable controls the locale to use during export (citations, quotation marks and punctuation). By default, Pandoc will use `en-US`. For instance British English punctuation will be converted to US English punctuation standards during the export process unless `lang: en-GB` is set.

It is also useful for controlling in which language the references of your file will show up. この変数を設定していない場合、参考文献の言語はCSLスタイルで使われているデフォルト言語となります。文書を他の言語で書いている場合には、意図しない表示になるかもしれません。

[BCP-47](https://tools.ietf.org/html/bcp47)に基づいた言語識別子(例えば、`en-US`、`de-AT`、`it`)が、有効な値として設定できます。

### `nocite`

この変数を使用すると、文章中で実際には引用されていない参考文献を記述することができます。この変数に、それぞれの引用キーを設定します。Remember to enclose the value in quotes if it contains an @ (as most citekeys do) as otherwise it will be interpreted as an instruction to Pandoc and other variables in the frontmatter may not work as expected (e.g. use `nocite: '@citekey'`).

### `reference-section-title`

この変数を使用すると、参考文献一覧の見出しを定義することができます。文章の最後に見出し(例えば、`## References`)を書いておくのと同じ効果があります。

> Note: It might make sense to define this variable in one of the export defaults files, since Pandoc will not add such a heading by default. In general, remember that all of the variables that are described here can also be defined in a defaults file so they apply to _every_ such export.

### `notes-after-punctuation`

これを設定すると、引用を句読点の後の脚注に移動することができます。(例えば、`something [@citekey].`のように引用を書くと、`something.[^1]`のように出力されます。)
