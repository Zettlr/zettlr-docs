# カスタムCSS

Zettlrバージョン`1.1`以降では、カスタムCSS([Cascading Style Sheets](https://ja.wikipedia.org/wiki/Cascading_Style_Sheets))を使って、アプリケーションの見た目を完全に変えられるようになりました。これは、長らく要望されていた機能で、アプリケーションをカスタマイズする多くの可能性を拓きました。(そして、このアプリケーションでおそらく初めてのユーザー生成コンテンツでもあります。)

カスタムCSSエディタは、`Zettlr->カスタムCSS...`(macOSの場合)、または`ファイル->カスタムCSS...`(WindowsとLinuxの場合)にあります。

CSSはよくわからないけれど、このページのガイドをただコピー＆ペーストするだけでは嫌だという場合は、簡単な[CSSチュートリアル](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)を見てみるという選択肢もあります。インターネット上には多くのチュートリアルがあり、ちょっとGoogleで検索すればチュートリアル動画なども見つかります。

以下では、まず、CSS作成についての一般的な導入を示します。次に、簡単にコピー＆ペーストしてアプリケーションの見た目を変更できるいくつかの例を挙げます。最後に、**classの完全な一覧**があります。

## Zettlr向けにCSSを書く

自分でCSSを書くのではなくて、ただ**フォントを変えようとしている**のであれば、ここは飛ばして次のセクションに行ってください。

Zettlrは、多くの定義済みclassとIDを持っています。これは、`style`を使って直接プロパティを設定するべきではないという、良く知られた知見にしたがったものです。したがって、何をするにしてもclassを使います。

Zettlrのスタイルは、形状と実際のテーマの2つに分けられます。変更する場合は、要素のデザインのみを変更し、**決して**形状を変更**しないで**ください。形をいじりまわすのは楽しいかもしれませんが、予想できない振る舞いをもたらす可能性があります。これは、アプリケーションの一部で、要素のサイズが正しいことに依存しているためです。もし間違えてしまった場合も安心してください。Zettlrのデータディレクトリから`custom.css`を取り除くだけです。[インストール手順のドキュメント](../install.md)に書かれているパスを調べると、お使いのシステムでのデータディレクトリを見つけることができます。

ZettlrにおけるすべてのclassとIDは、それぞれのコンポーネントごとに名前空間が付けられています(グローバルのものを除く)。なので、実際にルールを上書きするには、完全な名前空間を使う必要があります。(もしくは、多くのルールを追加していて面倒な場合は、`!important`を使ってルールを上書きしてください。)

すべての要素が常に`body`の名前空間に属していて、アプリケーションがダークモードの場合には、`.dark`のクラスが付きます。なので、ダークモードの時のみに適用したいルールがある場合は、`body.dark`のプレフィックスを付けるようにしてください。

このページの下の方に、すべてのclassとID参照の一覧があるので、アプリケーションをつつきまわす必要はありません。(これは、ZettlrのCSSプリコンパイルで作られた、ただのダンプであることを、先に謝っておきます。)

## CSSコードスニペット

### Zettlrでカスタムフォントを使う

Zettlrのデフォルトフォントが気に入らない、もしくは変更の必要がある場合は、カスタムCSSエディタに以下のスニペットをペーストしてください。`your-font-name`はZettlrで使いたいフォントの**完全な名称**に置き換えてください。`placeholder`は、使用したいフォントによって変えてください:

- New Roman、Georgiaなどの**セリフ体**フォントを使いたい場合は、`serif`を使います。
- Arial、Helveticaなどの**サンセリフ体**フォントを使いたい場合は、`sans-serif`を使います。
- クラシックな**等幅フォント**を使いたい場合は、`monospace`を使います。

placeholderは、設定したフォントが見つからない場合に、同等のフォントを表示する、フォールバックとして機能します。

Zettlrには、セリフ体フォント、サンセリフ体フォント、等幅フォントが同梱されています。現代的なセリフ体フォントの`Crimson`、もしくは美しい等幅フォントの`Liberation Mono`を使うことができます。(デフォルトは`Lato`ですが、これを指定することはないでしょう。)

```css
#editor {
    font-family: '<your-font-name here>', <placeholder>;
}
```

### ランダムなUnsplash画像を背景にする

以下のコードにしたがうと、起動するたびに異なる画像をエディタの背景にすることができます。画像は、素晴らしいフリー写真サイトであるUnsplash.comから取ってきます。これには、URLにアクセスするたびに異なる画像を返す`Source API`を使用します。[ページを表示して、何回かリロードする](https://source.unsplash.com/random)と試すことができます。追加のオプション(例えば、本日の画像を表示するなど)については、[Unsplash Source API reference](https://source.unsplash.com/)を参照してください。

```css
/* Enter your custom CSS here */

#editor {
    background-color: transparent;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    background-position: center center;
}

body #editor .CodeMirror-sizer, body #editor .CodeMirror-gutter {
    background-color: rgba(255, 255, 255, .8);
    height: 100%;
}

body.dark #editor .CodeMirror-sizer, body.dark #editor .CodeMirror-gutter {
    background-color: rgba(0, 0, 0, .8);
}

#editor .CodeMirror {
    background-color: transparent;
}
```

![上記スニペットを使ったZettlrのプレビュー](../img/custom_css_unsplash.png)

### 改行を可視化する

改行がどこにあるのか見えるようにしたい場合は、次のカスタムCSSを使えば、行末に段落記号(¶)を表示することができます。

```css
.CodeMirror-line:not(:last-child)::after {
  content: "¶";
  color: #666;
}
```

![上記スニペットを使ったZettlrのプレビュー](../img/custom_css_pilcrow.png)

### 集中モードでツールバーを隠す

集中モードを、**すごく**集中できるモードにしたい人がいるかもしれません。ほとんどの人は書くことに集中するときも、すべてのツールとボタンにアクセスしたいだろうと思うので、Zettlrはデフォルトではツールバーを隠しません。それでも、集中モードでエディタのみを表示したいなら、以下のたった一行のCSSで、集中モード中のツールバーを隠すことができます。

次のCSSの1行をカスタムCSSにペーストするだけで、ツールバーが非表示になります:

```css
#editor.fullscreen, .CodeMirror-fullscreen { top: 0px; }
```

### 独自のアイディア

他にもZettlrの見た目を変えるアイディアがありますか？もし、そのまま使えそうなCSSスニペットがあれば、ここで紹介できるように、[私たちに共有](mailto:info@zettlr.com)してください。

## CSS classとID参照の完全なリスト

以下に、*すべての*CSS classとIDを網羅したリストがあります。今数えてみたところ、300個を超えています。

classの名前を抽出するのに、外部パッケージを使っていることにご注意ください。クラス以外のもの(例えば、色や、ドットで始まる`.5%`のような値)は、ほとんど取り除いてありますが、すべて見つけられたかどうかは保証しません。

**注意: 以下の参照一覧は将来的に変更される可能性があります。DOMやclass/ID名の変更により、Zettlrのあるバージョンで使えたclassが、他のバージョンでは使えないかもしれません。**

```css
.eot
#iefix
.ttf
.woff2
.otf
.woff
.dragger
.popup
.clearfix
.modal
.dialog
.uuid
.image-preview
#app-lang
.inline
.time
.info
.button
.request-file
.file-select-group
.changelog
.code
.clear
.box-left
.box-right
.paper
.a4paper
.set-target
.bmargin
.lmargin
.rmargin
.tmargin
.image-size
.image
.png
#file-list
#imageWidth
#imageHeight
#preview-image-sizes
.pdf-preview
.error
.projects
#prefs-taglist
.flex
#next-sheet
#prev-sheet
.ui-tabs-nav
.ui-tabs-tab
.dicts-list
.user-dict
.dicts-list-item
.user-dict-item
.dicts-list-search
.selected-dict
.clusterize-scroll
.clusterize-extra-row
.clusterize-keep-parity
.clusterize-content
.clusterize-no-data
.hidden
.list-item
.meta
.date
.directories
.files
.id
.tags
.tex-indicator
.virtual-directories
.target-progress-indicator
.filename
.taglist
.tag
.tagspacer
.directory
.virtual-directory
.sorter
.sortName
.sortTime
.empty-directory
.empty-file-list
#file-tree
#directories-dirs-header
#directories-files-header
.collapse-indicator
.collapsed
.dead-directory
.project
.display-search-results
.empty-tree
#editor
#sidebar
#component-container
.expanded
#arrow-button
#sidebar-inner-resizer
#sidebar-resize
.fullscreen
.ui-resizable-handle
.ui-resizable-autohide
.ui-resizable-disabled
.ui-resizable-w
.CodeMirror
.CodeMirror-code
.mute
.CodeMirror-scroll
.CodeMirror-fullscreen
.cm-readability-0
.cm-readability-1
.cm-readability-2
.cm-readability-3
.cm-readability-4
.cm-readability-5
.cm-readability-6
.cm-readability-7
.cm-readability-8
.cm-readability-10
.cm-readability-9
.CodeMirror-vscrollbar
.CodeMirror-sizer
.CodeMirror-empty
.svg
.search-result
.cm-table
.size-header-1
.pomodoro
.CodeMirror-gutter-elt
.size-header-2
.size-header-3
.size-header-4
.size-header-5
.size-header-6
.cm-comment
.cm-fenced-code
.cm-formatting-task
.CodeMirror-cursor
.cm-escape-char
.cm-formatting-code
.cm-formatting-code-block
.cm-formatting-em
.cm-formatting-quote
.cm-formatting-strong
.cm-formatting-list-ol
.cm-formatting-list-ul
.cm-link
.cm-url
.cm-zkn-link
.meta-key
.cm-zkn-tag
.cma
.CodeMirror-gutters
.CodeMirror-foldgutter
.CodeMirror-foldgutter-folded
.CodeMirror-foldgutter-open
.heading-tag
.CodeMirror-foldmarker
.CodeMirror-hints
.CodeMirror-hint
.cm-hint-colour
.sk-circle
.sk-child
.sk-circle2
.sk-circle3
.sk-circle4
.sk-circle5
.sk-circle6
.sk-circle7
.sk-circle8
.sk-circle9
.sk-circle10
.sk-circle11
.sk-circle12
.sk-three-bounce
.sk-bounce1
.sk-bounce2
.print-window
.quicklook-standalone
#init-print
.title
.find
.body
#toolbar
.content
.darwin
.win32
.linux
.file-info
.searchbar
#search-progress-indicator
.menu-popup
.dir-open
.file-new
.stats
.tag-cloud
.preferences
.file-save
.file-delete
.file-rename
.formatting
.readability
.share
.show-toc
.toggle-attachments
.spacer
.separator
.end-search
.notify
.popup-arrow
.down
.up
.left
.right
.toc-link
.small
#header-formatting
.row
.table-generator
.cell
.btn-share
.htm
.pdf
.docx
.odt
.plain
.tex
.revealjs
.revealjs-beige
.revealjs-black
.revealjs-league
.revealjs-moon
.revealjs-serif
.revealjs-sky
.revealjs-solarized
.revealjs-white
.rst
.rtf
.org
.textbundle
.textpack
#reveal-themes
.markdownHeading1
.markdownHeading2
.markdownHeading3
.markdownHeading4
.markdownHeading5
.markdownHeading6
.markdownBlockquote
.markdownLink
.markdownImage
.markdownCode
.markdownComment
.markdownMakeOrderedList
.markdownMakeUnorderedList
.markdownMakeTaskList
.markdownInsertTable
.markdownDivider
.insertFootnote
.markdownBold
.markdownItalic
.removeFootnote
.search
.footnote-edit
.regexp
#searchNext
#replaceNext
#replaceAll
#attachments
#open-dir-external
.csl-bib-body
.csl-entry
.cb-toggle
.radio-toggle
.toggle
.cb-group
.linux-window-controls
.windows-window-controls
.close
.minimise
.resize
.maximise
.theme-container
.theme-container-item
.theme-mockup
.traffic-lights
.traffic-light-close
.traffic-light-full
.traffic-light-min
.toolbar
.file-list
.file-list-item
.editor
#theme-berlin-mockup
#theme-frankfurt-mockup
#theme-bielefeld-mockup
#theme-karl-marx-stadt-mockup
.cm-meta
.cm-def
.sb-annotation
.alert
.success
.warning
.quicklook
.cm-stex-mode
.cm-css-mode
.cm-attribute
.cm-builtin
.cm-string
.cm-string-2
.cm-variable
.cm-variable-2
.cm-keyword
.cm-property
.cm-type
.cm-atom
.cm-number
.CodeMirror-focused
.CodeMirror-selected
.cm-formatting
.cm-tag
.cm-bracket
.cm-formatting-header-1
.cm-formatting-header-2
.cm-formatting-header-3
.cm-formatting-header-4
.cm-formatting-header-5
.cm-formatting-header-6
.cm-quote
.cm-strong
.cm-em
.cm-spell-error
.cm-zkn-id
.citeproc-citation
.cm-hr
.CodeMirror-guttermarker-subtle
.CodeMirror-hint-active
.selected
.alias
.file
.highlight
.dir
.root
.active
#searchWhat
.not-found
#replaceWhat
.pomodoro-task
.pomodoro-short
.pomodoro-long
.pomodoro-meter
.pomodoro-value
.task
.short
.long
.indicator-meter
.indicator-value
.error-info
.has-error
.form-inline-buttons
.prefs-submit-group
.ui-tabs-active
.tippy-popper
.table-helper-align-button-container
.table-helper-remove-button-container
.table-helper-add-button
.table-helper-align-button-line
.table-helper-remove-button-line
.table-helper
.dark
.container
.cm-formatting-escape
.maximise-svg
```
