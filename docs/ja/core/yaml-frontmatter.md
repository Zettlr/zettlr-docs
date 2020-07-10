# YAML Frontmatter

Pandocと同様、ZettlrもMarkdownファイルでYAML frontmatterを使うことができます。YAML frontmatterはPandocでは["metadata block"](https://pandoc.org/MANUAL.html#metadata-blocks)と呼ばれていて、文章自体には含まれない、著者、キーワード、タイトルなどの情報を記述するための、メタ変数の並びです。

YAML frontmatterはファイルの最初に記述することができます。3つのハイフン(`---`)を書いた行で始まり、3つのハイフンまたはピリオドを書いた行で終わります。(後者が一般的です。)

> ヒント: オートコレクトが有効な場合、3つのピリオドを入力すると省略点の文字に置き換えられ、シンタックスハイライトが崩れてしまいます。これを防ぐには、`Shift+Enter`を押して改行します(オートコレクトがLibreOfficeモードの場合)。

有効なYAMLであれば任意の変数を書くことができ、様々な目的に役に立ちます。

## YAML frontmatterを定義する

YAML frontmatterはドキュメント中のどこでも定義することができ、Pandocでは複数の入力ファイルを一つの出力ファイルにまとめる目的で使われることが一般的です(Zettlrの場合、プロジェクトのエクスポート機能で同等のことを行っています)。Zettlrでは、ファイルの先頭に書かれたYAML frontmatterブロックのみ、シンタックスハイライトが適用されます。

ファイルの1行目が3つのハイフン(`---`)になっていて、3つのハイフンまたは3つのピリオドが書かれた行で終わるようなYAML frontmatterに限って、Zettlrはシンタックスハイライトを適用します。YAMLの書き方に関する詳しい説明は、[仕様](https://yaml.org/spec/1.2/spec.html)を参照してください。

Pandocのエクスポートで有効なYAML frontmatterは次のような形式です:

```yaml
title: "Your document's title"
keywords:
  - A keyword
  - Another keyword
author:
  - The Zettlr Team
```

> **注意**: YAMLの仕様では、インデントにタブ文字を使うことができません。有効なYAMLを記述するには、インデントに半角空白を使用してください。

## frontmatter変数

PandocとPandoc citeprocでは、frontmatterを利用して、多くの有用な情報を保持しています。frontmatterによって、例えば参考文献リストの言語など、ドキュメントの描画方法を様々な面でコントロールすることができます。Zettlrは今のところ、これらの変数の一部のみをサポートしています。`nocite`や`lang`などの特定の変数は将来サポートする予定です。

利用可能なすべての変数の一覧とそれらの使用方法については、Pandocのマニュアルの[metadata blockの説明](https://pandoc.org/MANUAL.html#metadata-blocks)、および[Pandoc citeprocのマニュアル](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md)を参照してください。

> ヒント: このページでは、Pandocで使える変数の中から重要なものを説明しています。しかし、YAML frontmatterは、[Jekyll static site generator](https://jekyllrb.com/docs/front-matter/)などのエンジンでも使用されています。そのような別のツールを使ってMarkdownファイルの変換を行おうとしている場合は、そのツールのドキュメンテーションを参照して利用可能な変数を確認してください。

### 変数 `title`

ドキュメントの最終的なタイトルを設定します。レベル1の見出しは、厳密に言えば、そのドキュメントのタイトルを記述するものではなく、文章の最上位のセクションであるというところに、この変数の利用価値があります。

この変数はZettlrの様々な場所で、ファイル名を上書きする形で表示されます。(例えば、ファイルリストやドキュメントタブなど)

### 変数 `author`

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

### 変数 `keywords`

`keywords`変数にはキーワード、もしくはタグを含めることができます。これは、PandocでPDFファイルのキーワードプロパティに設定するために使用することができます。(注意: デフォルトのテンプレートを使ってPDFにエクスポートする場合は、[PDF設定](../reference/settings.md#pdf)でキーワードプロパティを設定します。)

キーワードは、Zettlrがサポートする文章中に記述するタグの制限を回避するのに利用することができます。ここでは、スペースも含め任意のキーワードを定義することができます。Zettlrは、キーワードを認識しファイルのタグ一覧に追加します。

### 変数 `lang`

この変数は、Pandoc citeprocの出力の言語を設定します。ファイルの参考文献の表示言語をコントロールすることができます。

この変数を設定していない場合、参考文献の言語はCSLスタイルで使われているデフォルト言語となります。文書を他の言語で書いている場合には、意図しない表示になるかもしれません。

[BCP-47](https://tools.ietf.org/html/bcp47)に基づいた言語識別子(例えば、`en-US`、`de-AT`、`it`)が、有効な値として設定できます。

### 変数 `nocite`

この変数を使用すると、文章中で実際には引用されていない参考文献を記述することができます。この変数に、それぞれの引用キーを設定します。

### 変数 `reference-section-title`

この変数を使用すると、参考文献一覧の見出しを定義することができます。文章の最後に見出し(例えば、`## References`)を書いておくのと同じ効果があります。

### 変数 `notes-after-punctuation`

これを設定すると、引用を句読点の後の脚注に移動することができます。(例えば、`something [@citekey].`のように引用を書くと、`something.[^1]`のように出力されます。)
