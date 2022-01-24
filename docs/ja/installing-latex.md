# LaTeXのインストール

Zettlrはインポート/エクスポート時にドキュメントを他の形式に変換するために、Pandocというプログラムを使用しています。また、ZettlrにはPDFエクスポート機能も内蔵されています。しかし、PDFのエクスポートをカスタマイズしたい場合は、LaTeXのディストリビューションをコンピュータにインストールすることをお勧めします。

LaTeXはファイルに対して様々なことができる高度な組版用言語です。LaTeXディストリビューションを使用してドキュメントをPDFにエクスポートする場合、Zettlr内蔵のエクスポート機能を使用するのに比べて非常に多くのカスタマイズ設定を利用することができます。

> LaTeXディストリビューションには2つの種類があります。一つは、TeXを記述するためのグラフィカルなプログラムを含む「完全」インストール。もう一つは、実際のコンパイラのみを含む「最小」インストールです。Zettlrで使う分には「最小」インストールで十分です。(必要なのはコンパイラだけだからです。)しかし、LaTeXを使っていろいろなことをしたいなら、フル機能版をインストールしてもかまいません。

## Windows

* 最小インストール: MikTeX ([ダウンロード](https://miktex.org/download))
* 完全インストール: TeX Live ([ダウンロード](https://www.tug.org/texlive/))

## macOS

* 最小インストール: Basic TeX ([ダウンロード](https://www.tug.org/mactex/morepackages.html))
* 完全インストール: MacTeX ([ダウンロード](https://www.tug.org/mactex/mactex-download.html))

## Linux

Linuxディストリビューションでは一般的に、ソフトウェアマネージャからLaTeXパッケージがインストールできるようになっています。そこで、最小インストールと完全インストールが選択できるでしょう。以下に、有名なディストリビューションでの選択肢を示します。

> どのバージョンをインストールするかは、実際のところ、それほど重要ではありません。しかし、Zettlrが使用するコンパイラである`xetex`のバイナリは確実にインストールする必要があります。疑問がある場合は、使っているディストリビューションのマニュアルで、TeXの正しいインストール方法を確認してください。

### Debian/Ubuntu

XeLaTeXコンパイラの最小インストール:

```shell
$ sudo apt install texlive-base texlive-xetex
```

完全インストール:

```shell
$ sudo apt install texlive-full
```

### Fedora/RHEL

Fedoraでは、basic、medium、fullの3つのディストリビューションが提供されています。いずれかをインストールしてください:

```shell
$ sudo dnf install texlive-scheme-basic
$ sudo dnf install texlive-scheme-medium
$ sudo dnf install texlive-scheme-full
```
