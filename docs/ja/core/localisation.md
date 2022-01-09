# ローカライゼーション

As we write this, Zettlr is available in many languages. A few more languages are being translated at the moment. This means that you can use Zettlr in your native language if you prefer. Have a look at [our translation service](https://translate.zettlr.com/) to see an up-to-date list.

> For localisation of output files, see the [YAML Frontmatter variable `lang`](https://docs.zettlr.com/en/core/yaml-frontmatter/#variable-lang)

Furthermore, Zettlr ships with a few spellchecking dictionaries. Due to their size only a limited amount is available, but you can add new ones easily.

## Changing the Language and Enabling Spellchecking

To change the app's language, you can do so in the preferences. Please note that you have to restart the application to apply the new language.

> While the language of the interface can be adapted in the preferences, this does not apply to exported files. Especially when it comes to quotation marks and number delimiters, the export files will fall back to English (US). Change this by setting the `lang`-property in either your [defaults files](defaults-files.md) or the [YAML frontmatter](yaml-frontmatter.md).

To enable spellchecking, view the corresponding tab in your preferences. Click the checkbox next to all dictionaries you wish to load. Note, however, that more dictionaries can potentially slow down your computer due to their size. We recommend you stick with three dictionaries maximum.

> To disable spellchecking, simply uncheck all dictionaries.

## 新しい辞書をインストールする

ZettlrはLibreOfficeやMozillaアプリケーションでも使われている、Hunspell辞書を使用します。

特定の言語のスペルチェックを有効にするには、メニューから`ファイル`->`辞書をインポート...`を選択してください。そうすると、ユーザ辞書ファイルを配置するためのフォルダが開かれます。

辞書は2つのファイルからなります。一つは`.dic`ファイルで、もう一つは`.aff`ファイルです。この2つを、インポートしたい言語の名前を付けたフォルダの中に配置します。ポルトガル語の辞書をインポートする場合を考えます。まず、どこかのリポジトリから辞書を持ってきます。例えば、[こちらに拡張セットがあります](https://github.com/wooorm/dictionaries/tree/main/dictionaries)。そうしたら、`pt-PT`という名前のフォルダに、`pt-PT.dic`と`pt-PT.aff`というファイルが入っていることを確認します。Zettlrは、フォルダに入っているその他のファイルは無視します。`dict`フォルダにファイルを配置してから、Zettlrの設定画面を開くと、新たに追加した辞書が一覧に表示されているでしょう。

## Help Translate!

Is your language not yet available, or are a few translations displayed in English? If any of the strings in the app have not yet been translated, Zettlr will fall back to English for these ones. Anyone can help improve the existing translations and add new ones. To see how you can help, please refer to the [Get Involved page](../get-involved.md).
