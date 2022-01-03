# Zettlrにおける引用

Zettlrの引用機能は`citeproc-js`を使用しています。これは、Pandocのciteproc-engineやZoteroと同じように機能するライブラリです。つまり、ZoteroのワードプラグインやLibreOfficeプラグインが生成するのと同等のものがZettlrに表示されます。Zettlrの引用エンジンは3つの部品からなります。一つは、引用されるすべての項目を含んだCSL JSONもしくはBibTexライブラリ、次にプレビューエンジン、最後にファイルエクスポート時のスタイルを変更する場合に使用するCSLスタイルシートです。以下のガイドでは引用を使えるようにし、正しく一貫性のある引用を含んだ、美しい見た目のファイル(PDFに限りません)を生成できるように解説します。

## Zettlrの引用機能を有効化する

引用には2つのエンジンがあり、それぞれ異なる引用の体系に属しています。プレビュー(引用は画像として、もしくはリンクとしてプレビュー可能です)と、実際の引用を生成するプロセス(これはエクスポート時のみ実行されます)です。いずれの機能も、参照先を含んだ引用ライブラリを選択することで実行されます。このようなライブラリがなくても、Zettlrでは引用のプレビューは行えます(何がPandocのciteprocのトリガーとなるかを確認することができます)。しかし、引用の中身が実際に生成されて置換されることはありません。

そこで、まず最初のステップとしてファイルを作成します。ライブラリを管理するアプリケーションはZoteroまたはJabRefを推奨します。

> 話を簡単にするために、**このチュートリアルではZoteroを使用して説明します**。

Mendeley、Citavi、EndNote、その他のCSL JSON形式で出力する機能を持たない管理ソフトウェアを使用する場合は、BibTexファイルを使用することができます。BibTexファイルはCSL JSONファイルと同じように使えます。Zettlr内部でBibTexがCSL JSONに変換されます。

### ステップ1: BetterBibTexをインストールする

最初のステップは[ZoteroのBetterBibTexプラグイン](https://github.com/retorquere/zotero-better-bibtex/releases/latest)のインストールです。BetterBibTexを使うことには2つの大きな利点があります。一つは、ライブラリ全体で引用IDを一意にしてくれることです。もう一つは、エクスポートしたライブラリファイルを最新に保ってくれることです。そのため、何か変更があるたびにエクスポートしなおす必要がありません。

各引用項目には、それぞれ一意のIDが振られます。これは、例えば発行日が間違って保存されていたことに気づいた時に、Zoteroで修正するだけで、その後citeprocが正しい情報を使用できるようにするために必要です。BetterBibTexを使わない場合、同じIDが複数回発行される可能性があります。この場合、エラーを発生させるか(これは何か悪いことが起きていると分かるので良い方法です)、もしくは最初にIDに一致したものをciteprocに使わせます(これはエクスポート後に間違った引用を発見できるかどうか運任せになってしまうので悪い方法です)。

> **なぜこれが重要なのでしょうか？**例えば、引用の発行日が間違って保存されていたことに気づいた時に、Zoteroで変更すればciteprocは修正された情報を使うようになります。しかし、BetterBibTexを使わない場合、同じIDが複数発行されてしまう可能性があります。これにより明確なエラーが発生するのであれば、実際に間違ったことが起きているので良いことでしょう。しかし、気づかない内にエラーとなり、最初にIDに一致したものをciteprocが使用することもあり得ます。この場合、間違った引用をエクスポート後に発見することは困難です。

> **ヒント**: BetterBibTexが一意なIDを自動生成するためのアルゴリズムはカスタマイズすることができます。BetterBibTexは[JabRefの引用キーパターン](https://docs.jabref.org/setup/citationkeypatterns)と互換性があります。同じキーを生成する複数のエントリーがある場合、それぞれが一意となるように接尾辞が追加されます(例えば、`Harvey2005a`, `Harvey2005b`, `Harvey2005c`のようなIDが得られます。)[BetterBibTexの全機能についてはプラグインのドキュメンテーション](https://retorque.re/zotero-better-bibtex/citation-keys/)に書かれています。

### ステップ2: ライブラリをエクスポートする

次のステップでは実際にライブラリをエクスポートします。Zoteroの役割は引用先の管理を行うことですが、Zettlrでこれを使ってエクスポートと同様のプレビューを行うには、単独のファイルとして、引用をエクスポートする必要があります。

約700項目を含むライブラリで確認しましたが、それらをすべて含めてエクスポートしても、パフォーマンス上の問題はありませんでした。

![Export your Library as Better CSL JSON](../img/export-to-csl-json.png)

次に、`File`をクリックし`Export library...`を選択します。フォーマットとして`Better CSL JSON`を選択します。(BetterBibTexをインストールしない場合は、ここで`CSL JSON`を選択してもかまいません。)"Keep updated"というチェックボックスをオンにすると、BetterBibTexはZoteroで変更があるたびに自動的に`CSL JSON`ファイルを更新します。そうすることで、Zettlrは常に最新の正しい引用を利用することができます。

"Keep updated"をオンにした場合、Zoteroの設定画面の`BetterBibTex`タブで`Automatic Export`を選択すると、`CSL JSON`ファイルの状態を確認することができます。ここで、エクスポートの内容とタイミングの細かい設定を行うこともできます。

### ステップ3: ライブラリをZettlrで開く

ここで、Zettlrにライブラリをインポートします。そのためには、Zettlrの設定ダイアログで`エクスポート`タブを選択し、`参考文献データベース`入力欄の右側にある小さなフォルダアイコンをクリックします。データベースファイル(`CSL JSON`または`BibTex`)を選択するためのダイアログが表示されます。ファイルを選択し、設定を保存すると、自動的にデータベースが読み込まれます。これで、引用を行う準備ができました。

![Point Zettlr to your database file](../img/settings_export.png)

> デフォルトファイルに参考文献を追加することもできますが、Zettlrでは読み込まれず、そこに定義されたcitekeyはプレビューに表示されません。

### ステップ4: *参考文献を表示*を有効化する

引用機能を実際にエディタで利用するためには、設定の「表示」タブにある「参考文献を表示」を有効化する必要があります。この設定を一旦有効化すれば、通常はZettlrがアップデートしても有効化されたままとなります。

## Zettlrにおける引用

ZettlrではPandocのciteproc-syntaxをサポートしています。引用を書く方法は2種類あります。一つ目は文章中にIDを一つ置き、このIDに対応した引用を出力する方法です。この場合、`@Harvey2005a`のような形式になります。引用のキーは、ID(BetterBibTexのCiteKeyなど)の前に`@`を付けます。

> Zettlrには補完機能があるので、`@`を入力すると利用可能な引用キーを表示してくれます。利用可能な参照のリストが表示されない場合は、設定したデータベースファイル(`CSL JSON`や`BibTex`)に問題があるかもしれません。 `@`を入力した後、IDの最初の数文字を入力すると検索結果を絞り込むことができます。引用したい参照が一番上に表示されている場合、`Enter`を押すと選択することができます。選択したい参照がリストの2番目以降に表示されている場合は、矢印キーで選択を移動してから`Enter`キーを押すか、マウスでクリックすると選択できます。

引用に対して、ページ範囲などの詳細を記述したい場合もあると思います。次のように、角括弧の中にプレフィックス、引用キー、ページ範囲を書くことができます。

`[See @Harvey2005a, 45-51]`

著者が複数の場合、それぞれのブロックをセミコロンで区切ります。

`[See @Harvey2005a, 45-51; also @Ciepley2007, 8-9]`

Pandocのciteprocエンジンにおける引用についての詳しい説明は、[ガイドを参照](http://pandoc.org/demo/example19/Extension-citations.html)してください。

> **注意** Zettlrのciteprocエンジンは、**プレビューのみを目的としています**。簡潔さのため、Zettlrはすべての引用を完全に解析することはしていません。引用のプレビュー機能は、**引用が正しく認識されていて、エクスポートする引用に漏れがないかを確認する**ためのものです。エクスポート時にPandocのciteprocが完全に正確に動作することは、疑う余地もありません。

## 参考文献を確認する

After you're done citing and want to check that you've cited everything you planned to, you can open the [Sidebar](../core/sidebar.md) and switch to the references section. If something's missing from there, it's probably not been cited in your file.

## Using a file-specific library

You can also use a specific bibliography file that is only used for one of your files. To do so, you must add the bibliography file to your file's YAML frontmatter. If Zettlr detects the `bibliography` property in a file's frontmatter, it will automatically load that file and offer you items from that file instead of your main library.

Example:

```yaml
---
title: "My document"
tags: tag1, tag2, tag3
bibliography: ./assets/references.json
---
```

## 引用のスタイルを変更する

Zettlrは内部的には常にChicagoスタイルを使って引用を描画します。つまり、プレビューで表示される引用は、脚注スタイルではなく文書中に表示されるスタイルとなります。Zettlrでは、すべてが正しく動作していることを確認しやすくするために、このようにしています。

しかし、もちろんこれ以外にも、投稿先のジャーナルの要求や、個人的な好みに合わせた引用スタイルを使うこともできます。Pandocのciteprocが引用を出力するスタイルを変更するには、それに応じたCSLファイルをダウンロードする必要があります。まずは、[Zotero style repository](https://www.zotero.org/styles)を見てみてください。特定のスタイルを検索し、プレビューしダウンロードすることができます。Another good option is the [Citation Style Language styles repository](https://github.com/citation-style-language/styles)

Zettlrが使用するCSLファイルの設定は2か所あります。一つは、設定ダイアログです。`エクスポート`タブの参考文献データベース欄の下に、使いたいCSLスタイルを選択する設定があります。ツールバーのボタンからファイルを個別にエクスポートする際に、ここで選択したスタイルが使用されます。

次に、プロジェクトごとに異なるCSLスタイルの設定があります。ファイルマネージャに表示されたプロジェクトフォルダーを右クリックし、`プロジェクト設定`を選択します。そこで、プロジェクトのエクスポートに使用するCSLファイルを指定できます。

## 参考文献一覧のカスタマイズ

Citing stuff does not just involve rendering the citations inside your text correctly, but also to collect a list of references at the end of the document. By default, Pandoc will simply add a list of references to the end of your documents without any decoration whatsoever. But you have many options available to customize that behaviour, and knowing a few tricks can make all of your lists of references look good from the first export on.

### 1. Adding a Section Header

When you first export a document, you will notice that by default Pandoc will simply attach the list of references to the end of your document without any decoration – even without any title. To add a title, you can choose between two options.

The first option is to define the property `reference-section-title` in your file's YAML frontmatter. It accepts a string which will be set as the title for the whole section. So if you specify `reference-section-title: Bibliography`, Pandoc will use `Bibliography` as the title.

The second option is to simply end your document with the wanted heading, i.e. `## Bibliography`. Since Pandoc will literally slap the list of references onto the file at the end, if your file ends with a heading, that will become the section heading.

> Obviously, it does not make sense to use both approaches, since that would yield two headings following each other.

### 2. Changing where the List of References Appears

Another customization option you have when using Pandoc is that you can specify where your list of references appears. For example, if you want to add another section _after_ the list of references, such as an appendix, you will have to tell Pandoc precisely where your references should end up. For this, you need to define a `div`-element (which is a form of container for text) with the ID `#refs`. You can do so either by adding a literal HTML div, or by adding a Pandoc-internal div.

First, here's how you can define a HTML div:

```markdown
Here could be the last sentence of your conclusion.

## References

<div id="refs">
</div>

## Appendix

Here you could add an appendix.
```

Note that in this example you should not make use of the `reference-section-title` YAML frontmatter since we've added a heading manually.

Here's the second example using a Pandoc div:

```markdown
Here could be the last sentence of your conclusion.

## References

::: {#refs}
:::

## Appendix

Here you could add an appendix.
```

> You can read more on how to do this in the [Pandoc manual](https://pandoc.org/MANUAL.html#placement-of-the-bibliography).

### 3. Formatting the List of References

When you add citations to your files, you want to ensure the references are formatted neatly. If you export to Word or LibreOffice, you can fine-tune your references as you edit your file before sending it out. But this is not possible if you export to PDF. Thus you may need to add a few style directives to your file. Here we describe how to change the appearance of PDF files. To change the appearance of HTML exports, you can use CSS.

LaTeX uses lengths to determine the overall measurements of the exported PDF. These lengths are normally set globally, but they can be changed for different parts of document. One of these lengths is `parindent`, which controls the hanging indent of all paragraphs.

Whenever you use the command `\setlength` LaTeX will overwrite the specified length from wherever it encounters this command until you use `\setlength` again. Since the references section is formatted using paragraphs like the rest of the document, they will by default be formatted in this default style. In order to re-format the list of references to look differently, you should overwrite these just before the list of references.

The following code snippet gives you an example:

```latex
\setlength{\parindent}{-1cm} % Negative hanging indent
\setlength{\leftskip}{0.5cm} % Overall indentation
\setlength{\parskip}{0.1cm} % Spacing between paragraphs
```

The above example would render the reference list with a negative indent of minus one centimetre. Additionally it will apply an overall indentation of half a centimetre relative to the page margins. For example, if your left page margin is set to 3 centimetres, the reference list paragraphs will be offset 3.5 centimetres. The last value (`parskip`) controls the spacing _between_ paragraphs, so there will be a gap of 10 millimetres between paragraphs.

The above example is a good place to start. You can search for more lengths to tweak and adjust them to your liking.

> Note that this mainly applies if you export your documents using the default template, or any other template that does not specifically control how citations are formatted. If you are submitting, e.g., to a STEM journal which provides its own LaTeX template and you use that one, it is likely that this already formats the list of references correctly.

## YAML frontmatterによってPandoc Citeprocを制御する

Pandoc Citeprocのいくつかの機能は、YAML frontmatterの変数を使って制御できます。[説明のページ](../core/yaml-frontmatter.md)に、参考文献一覧の言語を変更する方法などが書かれています。

## Accessing a Reference's PDF From Zettlr

It will happen from time to time that you re-read something you have written and want to double-check a referenced work. You can do this by simply right-clicking a citation and opening the corresponding PDF file.

For this to work, **Zotero needs to be running** (since Zettlr will query the app using the citekey and ask for the actual path to the PDF file) and you need to **have BetterBibTex installed** (since only BetterBibTex offers the corresponding API endpoint necessary for requesting the PDF path).

Note that this does not apply for BibTex databases, since these already contain the full paths to linked PDF files (but note that these are optional, so you may need to explicitly tell your reference manager to add those paths) and as such Zettlr does not need to query an external program.
