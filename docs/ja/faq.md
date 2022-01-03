# よくある質問

## ZettlrをWindowsにインストールしようとしたところ、アプリケーションをインストールしないようにというセキュリティ警告が出ました。

Zettlr uses code signing as recommended by both Microsoft and Apple to ensure that you install only trustworthy software. However, on Windows, an application needs a sufficiently large amount of installations in order to suppress this security warning. This "trust" is assigned to a code signing certificate, not the application itself. As Zettlr uses private-issued certificates, these have a limited lifetime. The current certificate is valid until 2022, after which Zettlr will be signed using a new certificate which has to go through the whole process once again. As long as you download Zettlr either [from our homepage](https://www.zettlr.com/download) or from the [GitHub releases page](https://github.com/Zettlr/Zettlr/releases) (both are the same files) you can safely install the application and dismiss the warning.

## I cannot dismiss the security warning on Windows and therefore cannot install the app!

In many companies the IT department puts restrictions in place so that you cannot dismiss a security warning on your own and therefore cannot install the app. If you work in such a restricted environment, it may be best to just talk to your IT department and ask them to whitelist Zettlr so that you (or your admins) can install the app. If they have questions regarding the origins and/or trustworthyness, it may be best to point them [to Zettlr's GitHub repository](https://github.com/Zettlr/Zettlr).

## I removed the tutorial folder from my computer, and now I cannot get it back!

When Zettlr detects it is being run for the very first time on a computer, it will automatically copy a folder with some Markdown files into your Documents-folder. These Markdown files contain some basic introduction on how to use Zettlr. However, they will only be copied once. In order to get these files if you later realised that you would like to revisit the tutorial, you have two options:

* Rename or remove the `config.json`-file from your application data directory. If that file is not there, Zettlr will think it is being run for the first time and copy the tutorial again.
* Simply [download the folder directly from source](https://github.com/Zettlr/Zettlr/tree/develop/static/tutorial) (note that this location might change).

## Zettlrをモバイル端末やタブレット端末(AndroidまたはiOS)に移植する予定はありますか。

Zettlrのモバイルバージョンに対する要望が増えてきています。Zettlrを気に入っていただいて、あらゆるデバイスで使いたいと思ってくれることを嬉しく思います。しかし、残念ながら、私たちのリソースはZettlrの開発を続けていくのに精一杯で、現段階では追加の作業を行うことは不可能です。

## Markdownとは何ですか。

Markdownはシンプルなマークアップ言語であり、普通のオフィスソフトウェアを使うのと同程度の複雑さを持ったテキストを、取り散らかさずに書くことを可能とします。見出しを表現するのに、書式設定を手動で選択するのではなく、Markdownでは`#`を入力するだけで事足ります。もっと知りたいのなら、[Markdownのドキュメンテーション](reference/markdown-basics.md)を見てください。

## Zettlrを使わなくなった場合、どうやって他のプログラムに乗り換えればよいですか。

単純にZettlrをアンインストールして、他のプログラムを使い始めてください。Zettlrは余計なファイルに干渉しません。プロジェクト機能を使っていたり、ディレクトリに手を加えていた場合は、`.ztr-directory`という名前の小さなファイルがいくつかのディレクトリに作成されています。これらを取り除くには、アンインストールを行う前に、すべてのディレクトリのソート順をデフォルトに戻し、すべてのプロジェクトを削除してください。(もしくは、後から手動でこれらのファイルを削除してください)

## Linuxを使っていますが、削除したファイルがゴミ箱に移動しません。

Zettlrがファイルを完全に削除することはありません。常にゴミ箱に移動するので、もし必要なファイルを誤って削除した場合は元に戻すことができます。macOSとWindowsでは、ごみ箱がデフォルトで有効になっていますが、いくつかのLinuxディストリビューションではゴミ箱機能を手動で有効化する必要があります。LinuxにおいてZettlrは(より正確に言うならElectronフレームワーク上で動作するアプリケーションは)、ファイルをゴミ箱に移動するのに`gvfs-trash`のバイナリを利用しています。それゆえ、この機能を使うために`gvfs-trash`がインストールされていることを確認してください。DebianまたはUbuntoでは、以下のコマンドを実行してください:

```bash
$ sudo apt install gvfs-bin
```

> If you do not want to use the trash functionality, you can also enable the setting in the advanced preferences telling Zettlr to terminally remove a file if moving it to the trash fails. Please note that this will remove files irreversibly!

## My `Home` and `End`-keys behave weirdly! How do I fix that?

Zettlr uses the code editor CodeMirror under the hood. By default, it assumes that pressing either the `Home` or `End`-key should move the cursor to the beginning and ending of the _actual_ line. An actual line is defined as a contiguous stream of characters _without a line break_. This means that what we _see_ as a paragraph is actually one single line that has been wrapped when it gets too long (that is: the editor automatically inserts linebreaks when the line gets too long).

There is an option in the editor preferences that allows you to control this behavior. If the preferences option "Use CodeMirror default actions for `Home` and `End`" is checked, this means that pressing the `Home` and `End` key will move the cursor to the beginning/end of the _actual_ line (that is: the beginning/end of the paragraph you see). If the option is checked, the keys will move the cursor to the beginning/end of the _visible_ line (that is, it will respect the automatically inserted linebreaks).

## Markdownリンクの正しいURLの書き方を教えてください。

ZettlrのMarkdownリンクは`[Your Link Text](your-link)`の形式で書かれ、`Cmd`または`Ctrl`を押しながらクリックすることが可能です。しかし、MarkdownのリンクはWebサイトとコンピュータ上のファイルのどちらも指し示すことができます。リンクからは多くの情報を省略することができ、Zettlrはヒューリスティックを利用してそれらの情報を補いますが、意図したものとは異なるコンテキストが推論されてしまう可能性があります。この動作について解説します。

- リンクにすべての情報（プロトコルと完全なパス）が含まれている場合、これが変更されることはありません。例えば、`file:///home/foo/documents/test.md`や`http://www.example.com/`です。
- `file://`プロトコルが相対パスで書かれている場合、絶対パスに変換されます。例えば、`file://./relative/file.md`が`file:///home/foo/documents/relative/file.md`に変換されます。
- プロトコルが指定されていない場合は、`https://`を補います。例えば、`www.zettlr.com`は`https://www.zettlr.com`になります。
- ファイルの絶対パスで、プロトコルが省略されている場合は`file://`が補完されます。例えば、`/home/bar/documents/absolute.md`は`file:///home/bar/documents/absolute.md`になります。
- ファイルの相対パスは、相対パスを表す`./`の有無にかかわらず絶対パスに変換されます。例えば、`./more/relative.md`と`more/relative.md`は`file:///home/foo/documents/more/relative.md`になります。**例外**：同一フォルダに存在する(.md以外の)ファイル`file.extension`はURLとして扱われます。

まとめ：リンクの扱われ方が不安な場合は、より明示的に記述してください。リンクをファイルまたはWebリンクとして明示するための2つのルールがあります。前に`./`を付けると**ファイル**、後ろに`/`を付けると**Web**リンクとなります。

## 内部リンクが対応するファイルを開いてくれません。

ファイルの相互リンクに使用される内部リンクが期待通りに動作しない場合、以下のことを確認してください:

1. リンクは認識されていますか？Zettlrでは、内部リンクがどのような見た目かを定義することができます。デフォルトでは`[[`と`]]`に囲まれた部分です。Zettlrが内部リンクを認識すると、色が着けられ、マウスホバーしたときにテキストにアンダーラインが引かれます。もし、そうなっていなければ、Zettlrは、それをリンクだと認識していません。この動作は設定で変更することができます。
2. リンクをクリックするときに`Cmd`または`Ctrl`キーを押していますか？テキスト内を普通にクリックすると、テキストを編集する操作になります。そうではなく、リンク先に移動したいということを、Zettlrに伝える必要があります。
3. 有効なファイル名またはIDを使っていますか？Zettlrは、指定のIDまたはファイル名に**完全に**一致した場合のみ、ファイルを開きます。リンクをクリックしても何も起こらない場合、指定のIDまたはファイル名がシステム上に存在しないということを意味すると思われます。また、リンクを作る際に、ファイルの拡張子を省略することに注意してください。例えば、`my-file.md`にリンクを張る場合、括弧内に`my-file`とだけ入力する必要があります。
4. ファイルは、現在Zettlrにロードされていますか？内部リンクはZettlrがファイルを読み込んでいる場合のみ動作します。

## 私はLaTeXを知っていて、Markdown中でも使いたいのですが、可能ですか？

可能です。単純に、好きな箇所に`LaTeX`ステートメントを書いてください。PDFにエクスポートすると、Pandocが残りの面倒を見てくれて、PDFエンジンにより処理されます。残念ながら`LaTeX`のシンタックスハイライトはサポートしていません。また、PDF以外にエクスポートする場合、Pandocは事前にすべての`LaTeX`ブロックを取り除いてしまいます。つまり、例えば`\begin`と`\end`に挟まれたようなブロックは、最終的なオフィスファイルでは見えなくなってしまいます。HTMLエクスポートの場合、すべての`LaTeX`ブロックはそのまま残りますが、他の何かに変換されることはありません。

## テキストを均等割り付けや右揃えすることができません。

これは、バグではなく仕様です。Markdownには、それらのフォーマット用の記号がありません。なぜなら、テキストは常に均等割り付けされるか、左揃えされるべきだからです。それゆえ、Markdownが必要とするブロックフォーマットには、それらは含まれません。それでも、`LaTeX`コマンドを使って、左揃えまたは右揃えにすることは可能です。その場合、テキストを`\begin{<option>}`と`\end{<option>}`で囲んでください。`<option>`には`flushleft`か`flushright`が入ります。また、均等割り付けしたい段落の最初には`\justify`を置いてください。詳細は[sharelatex.com](https://www.sharelatex.com/learn/Text_alignment)をご覧ください。

## PDF出力で、特定の見出しに番号を付けない（もしくは目次に出さない）ことはできますか。

これはPandocの機能で実現できます。特別なクラスである`-`（半角マイナス）、`.unlisted`を付け加えてください。半角マイナスは見出しに番号が付かないように、unlistedは見出しが目次に現れないようにします。これはPDF出力時にのみ適用されることに注意してください。

例:

```markdown
# この見出しには番号が付かないが、目次に現れる {-}

# この見出しには番号が付くが、目次に現れない {.unlisted}

# この見出しには番号が付かず、目次にも現れない {- .unlisted}
```

> 特別なクラスは行の末尾に書かれている必要があります。たとえコメントであっても、その後に書くと期待した動作をしなくなります。

## 改行をしたいのですが、段落を変えたくありません。エンターを1回押しただけだと、改行が取り除かれてしまいます。

Pandocに改行をそのまま出力させるためには、行末にバックスラッシュ(`\`)を置くか、2つの半角スペースを置いてください。バックスラッシュも2つの半角スペースもエクスポートしたファイルには描画されません。

## ZettlrがPandocとLaTeXをインストール済みにもかかわらず、見つけられないようです。

これは、ソフトウェアを標準のディレクトリではない場所にインストールした場合に起こり得ます。Zettlrはアプリケーションを見つけようと最善を尽くしますが、どこかに埋もれている場合には失敗する可能性があります。xelatexの実行ファイルにパスが通っていることを確認してください。

## PDFエクスポートで、いつもエラーメッセージが表示されます。

It might happen that you get certain errors when trying to export your files. There are two common types of errors, which you can solve by yourself.

よくあるエラーは次のようなものです:

**LaTeX Error: File \<some name\>.sty not found.**

これは単に、特定のパッケージ(拡張子`.sty`)が見つからないということを意味しています。Windowsでは、これらのパッケージは必要に応じて自動的にインストールされます(確認のポップアップウィンドウが表示されます)。macOSとLinuxでは`tlmgr install <some name>`のコマンドを実行する必要があります。

> Note that some `.sty`-files are part of larger packages. The easiest way to find out which package to install, go to [the CTAN homepage](https://ctan.org/) and search for the package name (the file name without the `.sty`). You will then see in the "Contained in"-section the actual name of the package you have to install. Example: [The `footnote.sty`-package](https://ctan.org/pkg/footnote) is contained in the package `mdwtools`, so instead of running `tlmgr install footnote` you must run `tlmgr install mdwtools`.

これ以外のエラーが発生した場合は、Zettlrが表示したエラーメッセージをコピー＆ペーストすることができます。Googleで検索すればすぐに解決策が見つかることでしょう。And if it doesn't the community can better help you if they see the error you are getting.

## バグを見つけました。

それは良い知らせです。いえ、悪い知らせですが、発見したのはいいことです。この場合、[GitHub](https://github.com/Zettlr/Zettlr/)に行って、issueを作成すれば、私たちが問題を認識してバグを修正することができます。

## 新機能の要望があります。/ 機能の改善提案があります。

ぜひお聞かせください。アプリケーションの効率と様々なシチュエーションにおける使いやすさを改善するため、私たちはいつも、他の人がアプリケーションを使う経験を頼っています。この場合、[GitHub](https://github.com/Zettlr/Zettlr/)に行って、issueを作成すれば、私たちにすぐに伝えることができます。

## プライバシーはどうなっていますか。Zettlrは何らかのデータを送信しますか、それとも心配ありませんか。

Zettlrはプライバシーを第一に考えています。一切のデータを送信せず、完全にオフラインで動作します。しかし、Zettlrを起動するたびに、または、メニューの項目から該当の項目を選択したとき、ZettlrはZettlr APIに接続し、リリースの一覧を取得します。次に、この一覧を使って、最新版を使っているかどうかを確認します。接続中に、Zettlrのサーバーは、あなたのIPアドレスを受け取り、この情報は最大で30日間(ログローテーションの間)保管されます。これは、サーバーでは、ごく一般的に行われていることです。この情報がサーバーから外部に出ることはなく、問題が発生した場合の原因調査のためだけに使われます。30日後にアクセス情報はサーバから削除されます。私たちはオープンソースです。Facebookではありません。
