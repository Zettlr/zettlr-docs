# ローカライゼーション

Zettlrは様々な形式でインポート/エクスポートできるだけでなく、GUIの言語を変更したり、好きな言語の辞書を使用したスペルチェック機能も提供しています。新たに辞書をインポートしたり、インターフェースを自分の好きなように翻訳したりすることも簡単にできます。

Zettlrには、次の言語が付属しています:

- English (United Kingdom)
- English (United States)
- German (Germany)
- French (France)

また、次の辞書が含まれます:

- English (United Kingdom)
- English (United States)
- German (Germany)
- French (France)
- Spanish (Spain)
- Dutch (Netherlands)
- Turkish
- Russian
- Ukrainian

## 新しい辞書をインストールする

もちろん、アプリケーションに付属する以外に、自分の使う言語の辞書をインストールしたい場合があるでしょう。その場合も簡単です。ZettlrはLibreOfficeやMozillaアプリケーションでも使われている、Hunspell辞書を使用します。

特定の言語のスペルチェックを有効にするには、メニューから`ファイル`->`辞書をインポート...`を選択してください。そうすると、ユーザ辞書ファイルを配置するためのフォルダが開かれます。

辞書は2つのファイルからなります。一つは`.dic`ファイルで、もう一つは`.aff`ファイルです。この2つを、インポートしたい言語の名前を付けたフォルダの中に配置します。ポルトガル語の辞書をインポートする場合を考えます。まず、どこかのリポジトリから辞書を持ってきます。例えば、[GitHubユーザのwooormが、拡張セットを提供しています。](https://github.com/wooorm/dictionaries/tree/master/dictionaries)そうしたら、`pt-PT`という名前のフォルダに、`pt-PT.dic`と`pt-PT.aff`というファイルが入っていることを確認します。Zettlrは、フォルダに入っているその他のファイルは無視します。`dict`フォルダにファイルを配置してから、Zettlrの設定画面を開くと、新たに追加した辞書が一覧に表示されているでしょう。

> **ヒント:** Zettlrは、言語名を自動的に変換しようとしますが、特定の言語名の変換ができない場合があります。その場合、Zettlrは言語コード(例えば`pt-PT`)を代わりに表示します。

## アプリケーションの翻訳

アプリケーションの翻訳については、[「ご協力ください」](../get-involved.md)のページを参照してください。
