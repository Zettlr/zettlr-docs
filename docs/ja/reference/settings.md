# 設定

Zettlrは、アプリケーションをカスタマイズするための多くの設定項目を持っています。It comes with three major settings dialogs, one of which is the [assets manager explained elsewhere](../core/assets-manager.md), a general preferences dialog, and a tag manager.

## 一般設定

一般設定ダイアログは`Cmd/Ctrl+,`のショートカットか、ツールバーのボタン(歯車)、メニュー内の対応する項目から開くことができます。ダイアログが表示され、カスタマイズ可能な設定項目が表示されます。設定項目は上部に表示された8つのタブに分かれています。

* [一般](#一般): Zettlr全体に影響する設定です。
* [エディタ](#エディタ): エディタ自体にのみ関係する設定です。
* [エクスポート](#エクスポート): ファイルをエクスポートする方法についての設定です。
* [Zettelkasten](#Zettelkasten): ZettlrをZettelkastenシステムに適用するための設定です。
* [表示](#表示): 画像やリンクなどの要素をどのようにエディタに表示するかの設定とアプリケーション表示のテーマを選択します。
* [スペルチェック](#スペルチェック): インストール済みの辞書およびユーザ辞書を選択します。
* [オートコレクト](#オートコレクト): 自動的に置換する文字列と、使用するクォーテーションの種類を選択します。
* [高度な設定](#高度な設定): 上級者向けの設定です。

### 一般

![settings_general.png](../img/settings_general.png)

一般タブには、Zettlrを使い始めるときにニーズに合わせて設定する可能性のある項目が並んでいます。アプリケーションの言語は、見た通りの意味です。

Next follows a set of checkboxes:

* **Dark mode**: Controls whether or not the app displays using its dark mode. You can also toggle this using `Cmd/Ctrl+Alt+L` and schedule the dark mode
* **Show file information**: Controls whether the file list displays additional metadata
* **Always load remote changes to the current file**: Controls whether Zettlr will ask you to reload a file if it has been modified externally
* **Avoid opening files in new tabs if possible**: By default, Zettlr opens every new file in a new tab. If checked, Zettlr tries to replace the currently active tab instead of opening a new tab. You can always force-open files in new tabs by using the middle mouse button or the corresponding context menu option

Next follows settings to schedule automatic dark mode:

* **Off**: switch between the modes manually
* **Schedule**: Zettlr will enter and leave dark mode between the given time span (24 hours format)
* **Follow Operating System**: On macOS and Windows, Zettlr can listen to operating system events to synchronize its dark mode with the operating system's

サイドバーモードは、サイドバーの表示内容を設定します。3つの選択肢があります。

* **Thin**: In thin mode, the file manager only displays _either_ the list of files _or_ the tree view. You can switch between both using the shortcut `Cmd/Ctrl+Shift+1`.
* **Expanded**: The expanded mode displays both the tree view and the file list side by side. In this mode, you have both lists always present.
* **Combined**: This makes the file manager look more like a traditional file browser, because it does not divide folders and files.

Finally, the sorting order determines how Zettlr will sort your files internally. The natural order is recommended; ASCII ignores certain natural language implications. The two last options give you the choice to either display the file creation time or the last modification time in your file list (if you select "Show file information"), and which time to use when you are sorting by time.

### エディタ

![settings_editor.png](../img/settings_editor.png)

エディタタブはエディタの機能をコントロールします。Markdownではアスタリスクとアンダースコアのどちらを使っても、テキストを太字や斜体にすることができますが、どちらを使用するかをここで選択できます。

Next, you can choose how Zettlr will **autocomplete your citations**. The first option will automatically encapsulate citekeys in square brackets so that you can add a prefix and a suffix. The second option will do nothing to the citekeys so that by default your citations will display as "Author (Year)". The third option defines a composite style, where the author name is rendered outside the brackets, while the publication year and a potential suffix is rendered in brackets.

> Note that this only controls how autocomplete will finish your citations. You can still edit everything later. Here, you should select the form of citation you use most often to save you some typing effort.

The **Autosave**-option allows you to determine if, and when, Zettlr will automatically save your files:

* **Off**: No autosave. You need to manually save using `Cmd/Ctrl+S`
* **Immediately**: Save every modification immediately. This is done after a very short delay of 250ms so that the stress on your hard drive is reduced
* **After a short delay**: This will automatically save your files five seconds after you stopped typing

The **default image path** is a path you can use to tell Zettlr where it should put your images when you paste them from clipboard. It can be absolute or relative. If you provide the name `assets`, Zettlr would put images by default into the `assets` subdirectory of the directory where your file is. You can even tell it to use a directory relative to the parent directory, e.g., `../assets`. Remember that you can always select the directory for an image on a case-by-case basis.

**インデントに使用する空白の数**は、例えばリストのレベルを増やす場合などに使用されます。

The **editor font size** determines how big the font is displayed in the editor. Adjust this to your liking.

> The font Crimson, which is shipped for the Frankfurt theme, is a little bit smaller than the other fonts, so you might want to increase the font size if you use the Frankfurt theme.

可読性モードで使用するアルゴリズムは、Zettlrの可読性モードをオンにした場合に使用されます。それぞれのアルゴリズムの違いに関する説明は、[可読性モードに関する資料](https://www.zettlr.com/readability)をご覧ください。

The last dropdown allows you to choose the input mode: For most users, Normal will suffice, but if you're a power user, you may find the Emacs mode useful.

Lastly, a few checkboxes that control various settings:

* **集中モード時にフォーカスされていない行の表示を薄くする**をオンにすると、集中モードをオンにしたとき、現在カーソルの置かれた1行以外の行が薄い色で表示されます。
* **Automatically close matching character pairs**: This allows you to type brackets and quotes, and the editor will automatically add the matching one afterwards
* **Accept spaces during autocompletion**: To minimize the impact autocomplete has on your writing flow, spaces end autocomplete by default. If you need to have spaces to search for things inside autocompletes, activate this setting
* **Use the CodeMirror default actions for `Home` and `End`**: By default, CodeMirror will jump to the very beginning or end of a whole paragraph if you press these keys. By disabling this option, `Home` and `End` jump to the beginning or end of the visible line.
* **Count characters instead of words**: Rather self-explanatory: If you need to type languages where words are represented by single glyphs, such as Japanese or Chinese, it makes sense to activate this option
* **Use visual order for arrow key movement while in RTL-mode**: If active, the arrow keys on your keyboard move the cursor visually whenever you are typing a right-to-left script (Arabic or Hebrew)

The final setting allows you to choose whether you want to type from right to left (RTL) or from left to right (LTR).

### エクスポート

![settings_export.png](../img/settings_export.png)

エクスポートタブでは、ファイルをエクスポートする方法について設定します。

* **Use the internal Pandoc for exports**: Zettlr ships with Pandoc bundled, so you don't need to install anything else for imports and exports. Should you ever need to use a system-wide Pandoc (must be in PATH), disable this setting and restart the app
* **Remove tags from files**: If checked, Zettlr will run a special Lua-filter that removes tags which are defined within your files (not the ones in the YAML frontmatter)
* **Internal Link Handling**: With the radio buttons you can choose what happens during export with internal links in double-square-brackets: Should they be completely removed, just unlinked (= remove the square brackets), or left alone?
The **target directory** controls where Zettlr will put files after the exporter ran. If you choose the temporary directory, your files will not clutter your computer. This makes it easy to export a file several times and tweak, e.g., the layout of the file. Once you are happy with the results, you can simply save the file to another place (because your operating system will clean out the temporary directory without warning!). If you choose the current working directory, Zettlr will place the exported file next to your source Markdown file. Careful not to overwrite files!

The CSL JSON database field can be used to open a literature database. Zettlr will read in the file and enable citation rendering in your files. You can select either a CSL JSON file (ends in `.json`) or a BibTeX file (`.bib`). BibLaTeX is unfortunately not yet supported.

> On macOS, the option to select BibTeX is unfortunately somewhat hidden. When the Open-dialog shows, click "Options" and then select BibTeX from the format chooser.

The CSL Style lets you overwrite the default citation style (APA). You can use any file present in the [Zotero style repository](https://www.zotero.org/styles).

> 参考文献の設定はプロジェクトごとの設定で上書きすることができます。

### Zettelkasten

![settings_zettelkasten.png](../img/settings_zettelkasten.png)

このタブではZettelkastenシステムを取り扱う方法について設定することができます。カスタムシステムを使用したい場合を除き、ほとんどの場合これらの設定をいじる必要はありません。

Zettelkastenにとって重要な4つの設定項目があります。IDの正規表現、リンクの開始と終了、生成用のパターンです。

#### IDの正規表現

Zettlrはファイル中のIDを探すために正規表現を内部で利用しています。このパターンを検索してマッチする文字列が見つかった場合、それがファイルのIDであるとみなします。**ファイルの中で最初に見つかったものをIDとみなします。**もし、IDとして4桁の数字を使うように設定したなら、正規表現はファイル中の年の表記にも一致してしまいます。Zettlrでは最初に見つかったIDを採用するので、ファイルの一番最初にそのファイルのIDを記述するようにしてください。

デフォルトの正規表現は`(\d{14})`です。(入力欄の右側のリセットボタンを押すと、デフォルトに戻すことができます。)つまり、Zettlrはちょうど年月日時分秒を合わせた桁数である14桁の数字(例えば、20181012143724)を探します。ファイル中に他にも14桁の数字が含まれていることは非常にまれなので、これはIDとしては優れた方法と言えます。さらに素晴らしいことに、IDは毎秒ごとに異なるため、毎秒新しいファイルを作っても一意なIDが割り振られます。

`\d{14}`の前後にある括弧は「キャプチャグループ」と呼ばれるものです。キャプチャグループは、正規表現を特定の文字列にマッチさせるだけでなく、その中から一部分のみを取り出すためのものです。ここでは、マッチした全体を取り出します。このようにして、ほとんどどのような構造のIDでも使用することができます。

> キャプチャグループのIDを省略することも可能であることに注意してください。キャプチャグループがない場合は、Zettlrが内部的に入力された正規表現を括弧で囲みます。

#### 内部リンク

内部リンクの設定は、内部リンクをどのように記述するかを選択します。デフォルトはWikiスタイルのリンク`[[your-link]]`です。代わりに波括弧`{{your-link}}`や、エクスクラメーションマーク`!your-link!`を使うこともできます。お好きなように設定してください。

内部リンクは2つの使い方があります。一つは、既存のファイル名かIDを使用して、それらをクリックすることで対応するファイルを直接開くことができます。(それぞれのファイルは、拡張子を除くファイル名かIDにより識別されます。)二つ目は、ファイル名やIDを含まない場合で、それらは検索機能の働きをします。つまり、内部リンクを`Cmd/Ctrl`を押しながらクリックすることで、検索を開始することができます。これで、何度も行うような検索を保存しておくことができます。

> リンクはファイルのIDとはみなされないことに注意してください。もし、内部リンクの開始終了の間にIDが見つかったとしても、それはファイルのIDとしては使用されません。

#### ID生成

設定ダイアログのZettelkastenタブの最後の項目は、IDを生成する方法を設定します。それは、変数を含む文字列で、変数はIDの生成時に置換されます。今のところ、年、月、日、時、分、秒の変数が利用可能です。デフォルトのID生成パターンは`%Y%M%D%h%m%s`です。`%Y`は現在の年(4桁)に、`%M`は現在の月(先頭ゼロ埋め)に、以下同様に置換されます。IDに固定の文字列を含めることもできます。例えば、`%Y-%M-%D_%h:%m:%s`というパターンを設定すると、`2018-10-12_12:03:56`のようなIDが生成されます。同じ変数を複数回使用することもできます。例えば、秒だけを使用して`%s%s%s`とすると、`565656`のようなIDが生成されます。

生成されたIDが、必ず「IDの正規表現」にマッチするように設定してください。`%Y-%M-%D_%h:%m:%s`というパターンで生成されたパターンを認識するには、`(\d{4}-\d{2}-\d{2}_\d{2}:\d{2}:\d{2})`という正規表現を設定する必要があります。`%uuid4`を使用する場合は、`[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[89aAbB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}`という正規表現を使用することができます。

#### Other Options

Lastly, you have the ability to choose when the filename of a file will be added after the actual link when you autocomplete such a link:

* **always** will always add the filename after the link, even if the file does not have an ID and thus will be linked using the filename (i.e. `[[filename]] filename`)
* **only when linking using the ID** will only add the filename if the file will be linked using its ID (i.e. `[[1234567890]] filename`)
* **never** will always just link the file without any extras

Selecting **Automatically create non-existing files** will make Zettlr always create files, if you follow a link and the file with the corresponding filename or ID does not yet exist, Zettlr will create it automatically. You can lastly choose whether or not a full-text search will be started whenever you follow an internal link.

> The last setting enables you to create a form of "saved search": You can actually wrap a search in such a link. When you click such a "search-link", Zettlr will automatically start a full-text search using the contents of the link. However, in that case you should make sure that Zettlr doesn't attempt to create a corresponding file, since that might lead to problems.

### 表示

![settings_display.png](../img/settings_display.png)

このタブでは、特定の要素のエディタ内での表示方法を制御します。ZettlrはMarkdownに対してセミプレビュー方式を採っているため、一部の要素のみを描画します。このタブでは、どの要素を表示するかを選択します。

> iframeの設定は、例えばYouTubeの動画などをiframeとして埋め込んだものを表示するかどうかを設定します。

#### Theme

Next you can choose which theme to use. Currently, you have five to choose from. Each theme comes with a little explainer to tell you how it looks. But don't hesitate: Click yourself through until you find one that you like!

Click on any of the previews to switch your application to that theme.

Furthermore you can constrain the size of images, which is especially beneficial if you use a lot of portrait oriented images. The first slider controls the maximum amount of width images are allowed to occupy. Setting this to 50%, for instance, will keep images at half the width of the text body. 100% disables this (images will never be wider than 100% of the text body width). The second slider controls the maximum height of the images relative to the window size. 50 percent would mean that images will never be higher than half of the window's total size. 100 percent disables this behaviour. Unlike the width, images may very well exceed 100 percent of the viewport if they are large and thin.

### スペルチェック

![settings_spellchecking.png](../img/settings_spellchecking.png)

ユーザ辞書の導入に合わせて、スペルチェック機能は専用のタブに移動しました。最初のリストは利用できるスペルチェック用辞書の一覧です。使いたいものを選択してください。複数選択すれば複数言語のチェックを行うことができます。一覧の上にある検索ボックスでリストを絞り込むことができます。

> **ヒント**: スペルチェック機能を無効化するには、すべての辞書をオフにしてください。辞書の追加方法は[ローカライゼーションの説明](../core/localisation.md)を参照してください。

最後に、2番目のリストにはカスタム辞書に追加した単語の一覧が表示されます。項目をカスタム辞書から削除することができます。

### オートコレクト

![settings_autocorrect.png](../img/settings_autocorrect.png)

このタブでは、バージョン1.5以降で使えるようになったオートコレクト機能の設定を行います。LibreOfficeやWordで知っている機能かもしれません。有効化のチェックを外すと、機能を完全に無効化することができます。また、スタイルを選択することができます。2つのスタイルの主な違いは、Wordの方が置換のタイミングが早いということです。Wordスタイルでは最後の文字を入力した瞬間に置換されますが、LibreOfficeスタイルではスペースまたはEnterを押してから置換が行われます。LibreOfficeスタイルの方がお節介と感じることは少ないですが、Wordに慣れている人にとってはWordスタイルの方が簡単かもしれません。

「マジッククォート」とは、普通のASCIIのクォート(`"`と`'`)の代わりに使用する、一次クォートと二次クォートの設定です。世界中で使われている多くの種類の記号を用意してあります。この機能を無効化したい場合は、いずれのドロップダウンも1番目の設定(ASCIIのクォート)を選択してください。

最後の設定項目は置換テーブルです。これは、単純に置換したい文字列と置換後の文字列を設定します。よく使われるトークンの包括的なリストを用意していますので、一覧を眺めて、自由に追加削除を行ってください。

### 高度な設定

![settings_advanced.png](../img/settings_advanced.png)

高度な設定タブには上級者向けの設定項目があります。

「新規ファイル名のパターン」は、新規のファイルを作成時にテキスト欄に表示される値です。ここに入力した値が自動入力されます。下に書かれた変数を使用することもできます(IDはZettelkastenタブの設定に従います。それから、年月日時分秒が使用可能です。)「新規ファイル作成時にファイル名を確認しない」設定も可能です。これによりワークフローを高速化できるかもしれません。

**デバッグ モード**をオンにすると、F5でGUIをリロードできるようになり、アプリケーションの動作を調べるためにChrome developper toolsを表示できるようになります。当然ながら、開発者としてはこれが必要となります。

また、**ベータ版のリリースを通知する**ことで、Zettlrを支援することもできます。この設定をオンにすると、Zettlrは通常のリリースに加えて、ベータ版のリリースも通知するようになります。その後、ベータ版を使用するかどうかを決めることができます。

右側のテキストエリアは**添付ファイル**サイドバーに表示するファイルの種類を設定します。使いたいファイル拡張子をカンマ区切りで設定します。よく使われるであろう拡張子の一覧が初期状態で設定されています。

Next you have, again, a few checkboxes:

* **Enable debug mode**: This does only one single thing: It will enable an additional "develop" menu from which you have access to a few developer sources. **We might ask you for some logs, if you report a bug. You can find those logs in the develop menu**
* **Notify me about beta releases**: If ticked, you will be informed by the app not only for stable releases, but also for preview releases
* **Use native window appearance** (Linux only): If checked, Zettlr will render the windows using the regular window chrome of whichever window manager you are using. By default (if unchecked), Zettlr displays a custom menubar and window buttons. This option is not available on macOS and Windows
* **Delete items irreversibly, if moving them to trash fails**: Some computers may have problems moving files into the trash. If you realize that Zettlr doesn't delete files even if you confirmed that, this could mitigate this; but at the expense that your files will be immediately deleted
* **Show app in the notification area**: This setting makes sure that Zettlr keeps running in the background even if you close the main window. Especially handy to have it open quickly whenever you need it

The token list below that allows you to define those file extensions, which Zettlr will display as "other files" in the sidebar. We've already added a handy list, but you can modify it if you need to.

Next, you can see the iFrame rendering whitelist. This list will be populated whenever you choose to show an iFrame. Since iFrames can be a security risks, you will have to explicitly allow any website, which will then show up here. You can remove those which accidentally slipped in there.

The last setting allows you to activate watchdog polling on Windows. Sometimes, especially on older computers, Zettlr may detect too many file modifications. If this happens to you, you can activate that setting and adjust the time. A timeout of 1,000ms (the default) will only scan the file system every second.

## タグマネージャ

![The Tags settings dialog](../img/tags_settings.png)

タグの管理ダイアログにはショートカットが設定されていないので、メニューの対応する項目から開く必要があります。ここでは、タグの色と説明文を設定できます。

タグの色設定を新規に作成するには、ダイアログ下部の`+`ボタンを押します。最初の欄にはタグ名からハッシュタグ記号を除いたものを入力します。(例えば`#todo`に色を設定する場合、単に`todo`と入力します。)次に、タグに割り当てる色を選択します。タグ名欄の隣のボタンをクリックすると、カラーピッカーが表示されて色を選択することができます。3つ目の欄にはタグに対する短い説明を入力することができます。この説明はファイルリストのタグマークにマウスカーソルを合わせたときに表示されます。

タグの色設定を削除するには、各行の最後にある`-`ボタンをクリックします。
