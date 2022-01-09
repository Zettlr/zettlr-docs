# Zettlrからのエクスポート

Zettlr allows you to export into many common file formats so that you can share your work with colleagues, friends, and (hopefully!) your publisher. However, Zettlr's export works slightly different than regular exports so you might want to check what happens whenever you export a file into a different format.

> For advanced PDF exports Zettlr will attempt to use LaTeX. While you can also save files to PDF without it, installing LaTeX can be advantageous in various situations. You can see how to install LaTeX in our [guide on installing such a distribution](../installing-latex.md).

## ファイルのエクスポート

Zettlrからのファイルのエクスポートは、単一ファイルのエクスポートとプロジェクトのエクスポートの2種類があります。単一ファイルのエクスポートはツールバーのボタンか、`Cmd/Ctrl+E`で行います。様々な形式へのエクスポートが可能です。After you choose the appropriate format, you can sometimes finetune some options for the specified exporter. You can also select whether to export to the temporary directory or the current file's directory (this setting can also be modified in the preferences).

2種類目は、[プロジェクト](../academic/projects.md)全体のファイルをエクスポートする方法です。プロジェクトのディレクトリを右クリックしてプロジェクトをエクスポートを選択します。

> LaTeX PDFへのエクスポート時に`file <name>.sty not found`という形式のエラーが表示されることがあります。このエラーは、不足しているLaTeXパッケージをインストールすることで解消することができます。LaTeXパッケージのインストール方法は、[このガイド](https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages)などを参考にしてください。

## 出力先の選択

エクスポートしたファイルの保存先をZettlrに指定する必要があります。これには2つの選択肢があります。**一時ディレクトリ**に保存するか、**ファイルと同じディレクトリ**に保存するか選ぶことができますが、どちらもメリットとデメリットがあります。

> [設定ダイアログ](../reference/settings.md)のエクスポートタブで設定することができます。

一時ファイルにエクスポートする場合は、後でファイルを削除することを考える必要がありません。なぜなら、一時ディレクトリはコンピュータが定期的に空にしてくれるからです。エクスポート後に自動的にデフォルトアプリケーション(例えば`.docs`ファイルならWord)でファイルが開かれるので、出力結果に満足すれば「名前を付けて保存」を選択して、そのファイルを他の場所に保存することができます。

Markdownファイルと同じ場所にエクスポートしたファイルがあっても気にしない場合は、現在の作業ディレクトリにファイルを保存することもできます。

> エクスポートしたファイルは、毎回確認することなく上書きされることに注意してください。If you add some text to an exported file, **always save it to another location!** It is generally a good idea never to keep files in your temporary directory if you would like to keep them.

## エクスポートをカスタマイズする

There are two general ways of customising your exports, a.k.a. change the appearance of the file. The first is to make use of defaults files. These defaults files specify how Pandoc will export your files and you can modify these to change all your exports. Please see [our documentation on defaults files](defaults-files.md) for a comprehensive guide of using these.

2つめの選択肢はカスタムテンプレートです。Zettlrに内蔵されているデフォルトのテンプレートは、見た目がよく汎用性の高いものとなっています。しかし、Zettlrを使い込んでいくと、出力のレイアウトをカスタマイズしたくなるかもしれません。このドキュメンテーション内に、[カスタムテンプレートについての詳しい説明](../academic/custom-templates.md)があります。
