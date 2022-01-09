# ご協力ください

Zettlrをより良いアプリケーションにしたいとお考えですか？素晴らしい！新たに翻訳を提供したい方、開発に参加したい方は、このページをご覧ください。

## 全般的なリソース

Zettlrは、インターネット中で互いに助け合う活発なコミュニティを有しています。あなたが抱いた疑問を投げかけることができる場所を、以下の一覧に示します。

* [Zettlr Discord](https://discord.com/invite/PcfS3DM9Xj) — The Zettlr Discord is a place for the Discordians (there doesn’t appear to be an official term).

* [Zettlr subreddit](https://www.reddit.com/r/Zettlr) — The Zettlr subreddit is meant for the Redditors in the community.
* [公式Twitterアカウント](https://www.twitter.com/Zettlr) — アプリケーションの更新をリアルタイムに確認することができます。これが、私たちの活動を定期的に知らせる唯一の場所です。さらに、ほとんどの議論もここで行われます。質問がある場合は、ここに投げてください。
* [公式Facebookページ](https://fb.me/Zettlrapp) — ツイッターのアカウントを持っていない場合、ここからメッセージを送ることができます。
* [YouTubeチャンネル](https://www.youtube.com/c/Zettlr) — 視覚からの情報を好む方は、こちらで入門用の動画をいくつか見ることができます。
* [Zettlr user forum](https://forum.zettlr.com) — (廃止)
* [The GitHub issue tracker](https://github.com/Zettlr/Zettlr/issues) — アプリケーションをより良くしようとする私たちの努力の結晶です。バグの指摘や新機能の提案を行うならこちらです。しかしながら、特にユーザのワークフローや新機能に関わる質問については、**まず、GitHubやRedditで話し合うのが最善です。**

## ユーザの貢献

あなたが、見た目が良くて適切に機能するアプリケーションを求めるユーザーであるならば、エラーが発生したときに見逃さないように、ちゃんと見ていてください。そしてさらに重要なことは、ワークフローをより効率的にする方法を私たちに教えてください。私たちは、私たち自身のワークフローについて判断することしかできません。あなたがより使いやすいアプリケーションとするために、私たちに、その方法を教えてください。ただし、ワークフローをそのままの形で設計に乗せることはできず、他のワークフローとの折り合いをつける必要があることを記憶に留めておいてください。しかし、既存の機能と新提案の機能とのトレードオフが大きくなければ、可能な限り便利でスムーズに動作する機能となるように努力します。

バグ報告は、GitHubリポジトリでIssueをオープンしてください。この方法であれば、私たちが報告に素早く対応できて、直接問題に対処できます。

## アプリケーションの翻訳

アプリケーションを、地球上に存在するあらゆる言語に翻訳するための協力を歓迎します。翻訳は翻訳サーバにて管理されています。翻訳を行うためには、アカウントの作成が必要です。これは、スパム対策のために行っています。加えて、生成された翻訳データに（あなたが希望するならば）あなたのユーザー名がクレジットされます。

翻訳方法は単純です。メインページで任意の言語をクリックして、現在存在する識別子の一覧を表示します。

![Translation Keys](img/translations_list.png)

左の列に書いてあるのが翻訳IDです。これらは概ね、自己説明的な名前になっています。どのように始めたら良いか分からない場合は、英語の翻訳文と、実際のアプリケーションを見比べてれば、翻訳IDがどの要素に対応しているかが分かると思います。

ユーザベースの品質マネジメントシステムが実装されていて、これは、みなさんが既存の翻訳文に投票することで機能します。つまり、自分で翻訳をしたいと思わなくても、翻訳文の中から適切だと思うものに投票することができるのです。誰かが翻訳をダウンロードする際には、得票数の最も多い翻訳文がシステムにより自動的に選択されることで、翻訳の検証が反映されます。

[詳細は、翻訳サービスのショートガイドをご覧ください。](https://translate.zettlr.com/welcome).

## 開発

開発を始めるには、[リポジトリをフォークし](https://github.com/Zettlr/Zettlr)、機能の開発やバグ修正などを行います。それから、プルリクエストをオープンします。**developブランチに対してのみプルリクを出す**ということを覚えておいてください。masterブランチへは、新しいリリースが準備されるときのみpushされます。ですので、新機能を開発しているときにZettlrの新バージョンがリリースされたなら、単純に`upstream master`をpullして最新化すれば、機能の開発を続けられます。

機能の開発を始めようと思ったら、新規のissueを作成して他の人に知らせるのが良いでしょう。誰かがすでに取り掛かっていると知らせることで効率を最大化できます。

## 開発環境のセットアップ

すべて準備ができたら、お好きなIDEとターミナルを起動してください。Zettlrは[NodeJS](https://nodejs.org/)スタックに基づいているので、現行のNodeリリースとNodeパッケージマネージャがシステムにインストールされている必要があります。Zettlrでは[Yarn](https://yarnpkg.com/)を使用します。

続いて、初期化を行います。

```bash
$ git clone https://github.com/Zettlr/Zettlr.git
$ cd Zettlr
$ yarn install --frozen-lockfile
```

> We have listed a much more comprehensive setup and development guide in [the repository's README](https://github.com/Zettlr/Zettlr#readme) file. In case, the README file will be more up to date since it's closer to the source code. If any of below's commands doesn't work, please look there first, and open a PR to update this documentation page!

### 開発用コマンド

ここでは、アプリケーションの開発中に使用できるすべてのコマンドを紹介します。これらは、`package.json`中に定義されていて、`yarn`の後に続けて入力することで実行することができます。コマンドは、リポジトリのベースディレクトリで実行してください。

#### `start`

Starts `electron-forge`, which will build the application and launch it in development mode. This will use the normal settings, so if you use Zettlr on the same computer in production, it will use the same configuration files as the regular application. This means: be careful when breaking things. In that case, it's better to use `test-gui`.

#### `package`

Packages the application, but not bundle it into an installer. Without any suffix, this command will package the application for your current platform. To create specific packages (may require running on the corresponding platform), the following suffixes are available:

- `package:mac`
- `package:win`
- `package:win-arm`
- `package:linux-x32`
- `package:linux-x64`

The resulting application packages are stored in `./out`.

#### `release:{platform}`

Packages the application and then bundles it into an installer for the corresponding platform. To create such a bundle (may require running on the corresponding platform), one of the following values for `{platform}` is required:

- `release:mac`
- `release:win`
- `release:win-arm`
- `release:linux-x32`
- `release:linux-x64`
- `release:linux` (shorthand for calling `yarn release:linux-x32 && yarn release:linux-x64`)

The resulting setup bundles are stored in `./release`.

> Please note that, while you can `package` directly for your platform without any suffix, for creating a release specifying the platform is required as electron-builder would otherwise include the development-dependencies in the `app.asar`, resulting in a bloated application.

#### `lang:refresh`

4つのデフォルト翻訳を[Zettlr Translate](https://translate.zettlr.com/)からダウンロードします。ファイルは、`source/common/lang`ディレクトリに格納されます。現在のところ、デフォルトの言語は、ドイツ語（ドイツ）、英語（USA）、英語（UK）、フランス語（フランス）です。

> Please note, that this command is intended for an automated workflow that runs from time to time on the repository to perform this action. This means: Do **not** commit updated files to the repository. Instead, the updated files will be downloaded whenever you `git fetch`.

#### `csl:refresh`

This downloads the [Citation Style Language](https://citationstyles.org/) (CSL) files with which the application is shipped, and places them in the `static/csl-locales`- and `static/csl-styles`-directories respectively.

> Please note, that this command is intended for an automated workflow that runs from time to time on the repository to perform this action. This means: Do **not** commit updated files to the repository. Instead, the updated files will be downloaded whenever you `git fetch`.

#### `lint`

[ESLint](https://eslint.org/)を実行します。[Atom](https://atom.io/)や[Visual Studio Code](https://code.visualstudio.com/)のようなアプリケーションでは、バックグラウンドで自動的にESLintが実行されますが、プルリクエストを作成する前には、このコマンドを念のために実行してください。

> This command will run automatically on each Pull Request to check your code for inconsistencies.

#### `reveal:build`

このコマンドは、[reveal.js](https://revealjs.com/)プレゼンテーションのエクスポート機能のビルドで必要となるソースファイルを再コンパイルします。[Pandoc](https://pandoc.org/)がプレゼンテーションを出力する処理の性質上、ZettlrはPandocの出力を修正する必要があるため、これらのファイルを事前にコンパイルしておきます。

> Please note, that this command is intended for an automated workflow that runs from time to time on the repository to perform this action. This means: Do **not** commit updated files to the repository. Instead, the updated files will be downloaded whenever you `git fetch`.

#### `test`

`./test`ディレクトリに配置されたユニットテストを実行します。プルリクエストの送信に先立ってこのコマンドを実行するようにしてください。これは、プルリクエストにコミットが追加されるたびに実行されるので、変更点がテストを破壊していないことを確認することができます。これにより、プルリクエストのプロセス全体を簡単にすることができます。

#### `test-gui`

Use this command to carefree test any changes you make to the application. This command will start the application as if you ran `yarn start`, but will provide a custom configuration and a custom directory.

**The first time you start this command**, pass the `--clean`-flag to copy a bunch of test-files to your `./resources`-directory, create a `test-config.yml` in your project root, and start the application with this clean configuration. Then, you can adapt the `test-config.yml` to your liking (so that certain settings which you would otherwise _always_ set will be pre-set without you having to open the preferences).

Whenever you want to reset the test directory to its initial state (or you removed the directory, or cloned the whole project anew), pass the flag `--clean` to the command in order to create or reset the directory. **This is also necessary if you changed something in `test-config.yml`**.

You can pass additional command-line switches such as `--clear-cache` to this command as well. They will be passed to the child process.

> Attention: Before first running the command, you **must** run it with the `--clean`-flag to create the directory in the first place!

### Directory Structure

Zettlr is a mature app that has amassed hundreds of directories over the course of its development. Since it is hard to contribute to an application without any guidance, we have compiled a short description of the directories with how they interrelate.

```
.
├── resources                      # Contains resource files
│   ├── NSIS                       # Images for the Windows installer
│   ├── icons                      # Icons used to build the application
│   ├── screenshots                # The screenshots used in this README file
├── scripts                        # Scripts that are run by the CI and some YARN commands
│   ├── assets                     # Asset files used by some scripts
│   └── test-gui                   # Test files used by `yarn test-gui`
├── source                         # Contains the actual source code for the app
│   ├── app                        # Contains service providers and the boot/shutdown routines
│   ├── common                     # Common files used by several or all renderer processes
│   │   ├── fonts                  # Contains the font files (note: location will likely change)
│   │   ├── img                    # Currently unused image files
│   │   ├── less                   # Contains the themes (note: location will likely change)
│   │   ├── modules                # Contains renderer modules
│   │   │   ├── markdown-editor    # The central CodeMirror markdown editor
│   │   │   ├── preload            # Electron preload files
│   │   │   └── window-register    # Run by every renderer during setup
│   │   ├── util                   # A collection of utility functions
│   │   └── vue                    # Contains Vue components used by the graphical interface
│   ├── main                       # Contains code for the main process
│   │   ├── assets                 # Static files (note: location will likely change)
│   │   ├── commands               # Commands that perform user-actions, run from within zettlr.ts
│   │   └── modules                # Main process modules
│   │       ├── document-manager   # The document manager handles all open files
│   │       ├── export             # The exporter converts Markdown files into other formats
│   │       ├── fsal               # The File System Abstraction Layer provides the file tree
│   │       ├── import             # The importer converts other formats into Markdown files
│   │       └── window-manager     # The window manager manages all application windows
│   ├── win-about                  # Code for the About window
│   ├── win-custom-css             # Code for the Custom CSS window
│   ├── win-defaults               # Code for the defaults file editor
│   ├── win-error                  # The error modal window
│   ├── win-log-viewer             # Displays the running logs from the app
│   ├── win-main                   # The main window
│   ├── win-paste-image            # The modal displayed when pasting an image
│   ├── win-preferences            # The preferences window
│   ├── win-print                  # Code for the print and preview window
│   ├── win-quicklook              # Code for the Quicklook windows
│   ├── win-stats                  # Code for the general statistics window
│   ├── win-tag-manager            # Code for the tag manager
│   └── win-update                 # The dedicated update window
├── static                         # Contains static files, cf. the README-file in there
└── test                           # Unit tests
```

### On the Distinction between Modules and Service Providers

You'll notice that Zettlr contains both "modules" and "service providers". The difference between the two is simple: Service providers run in the main process and are completely autonomous while providing functionality to the app as a whole. Modules, on the other hand, provide functionality that must be triggered by user actions (e.g. the exporter and the importer).

### The Application Lifecycle

Whenever you run Zettlr, the following steps will be executed:

0. Execute `source/main.ts`
1. Environment check (`source/app/lifecycle.ts::bootApplication`)
2. Boot service providers (`source/app/lifecycle.ts::bootApplication`)
3. Boot main application (`source/main/zettlr.ts`)
4. Load the file tree and the documents
5. Show the main window

And when you shut down the app, the following steps will run:

1. Close all windows except the main window
2. Attempt to close the main window
3. Shutdown the main application (`source/main/zettlr.ts::shutdown`)
4. Shutdown the service providers (`source/app/lifecycle.ts::shutdownApplication`)
5. Exit the application

During development of the app (`yarn start` and `yarn test-gui`), the following steps will run:

1. Electron forge will compile the code for the main process and each renderer process separately (since these are separate processes), using TypeScript and webpack to compile and transpile.
2. Electron forge will put that code into the directory `.webpack`, replacing the constants you can find in the "create"-methods of the window manager with the appropriate entry points.
3. Electron forge will start a few development servers to provide hot module reloading (HMR) and then actually start the application.

Whenever the app is built, the following steps will run:

1. Electron forge will perform steps 1 and 2 above, but instead of running the app, it will package the resulting code into a functional app package.
2. Electron builder will then take these pre-built packages and wrap them in a platform-specific installer (DMG-files, Windows installer, or Linux packages).

Electron forge will put the packaged applications into the directory `./out` while Electron builder will put the installers into the directory `./release`.

### コマンドラインスイッチ

Zettlrの実行ファイルには、いくつかのコマンドラインスイッチがあり、目的に応じて使用することができます。

#### `--clear-cache`

This will direct the File System Abstraction Layer to fully clear its cache on boot. This can be used to mitigate issues regarding changes in the code base. To ensure compatibility with any changes to the information stored in the cache, the cache is also automatically cleared when the version field in your `config.json` does not match the one in the `package.json`, which means that, as long as you do not explicitly set the `version`-field in your `test-config.yml`, the cache will always be cleared on each run when you type `yarn test-gui`.

#### `--config=path`

Use this switch to temporarily override the default configuration file stored in your AppData-equivalent folder. This path should be absolute. In case you need to provide a relative path, the base for resolving the path will be: either the binary's directory name (when the app is packaged), or the repository root (when the app is not packaged). If the path contains spaces, don't forget to escape it in quotes.

### 用語解説

モジュールは常にモジュールを意味するとは限りません、一方でディレクトリとフォルダは同じ意味の場合があります。文脈的なあいまいさが存在するため、ここにZettlrのエコシステムでよく使われる用語を理解するための用語集を用意しました。

#### フォルダ(Folder)/ディレクトリ(Directory)

いずれもファイルシステム上のフォルダの意味で使われます。Zettlrでは、なるべく「ディレクトリ」を使うようにしていますが、フォルダも同じ意味で使われています。

#### File Manager

Refers to the left sidebar in the GUI that contains your workspaces and files.

#### Sidebar

Refers to the right sidebar in the GUI that contains contextual information regarding to the current file and folder.

#### Workspace

A workspace is a top-level directory that is visible in the app. This does _not_ mean a root of your overall file system. Example: While `/home` is a root-level directory on a Linux installation, `/home/user/Zettlr` is a root directory _in the context of Zettlr_, if it is loaded as a workspace.

#### Standalone/Root Files

A standalone or root file is a Markdown or code file that is not contained within any of the loaded workspaces. As such, it will be displayed in the file manager on top of your workspaces.

#### Markdown Files vs. Code Files

Internally, Zettlr makes a crucial distinction between three file types: A Markdown file, a code file, and any other file. A Markdown file is denoted by its file extension, and could be `.md`, `.markdown`, or `.txt`. A "code file" is one of the few code files which are supported by Zettlr, e.g. YAML files ( `.yaml` or `.yml`) or JSON files (`.json`). Any file that has a different file extension does not count as either a Markdown file or a code file and is internally called an "other" file (formerly: attachment).

#### Module

While Zettlr generally follows the definition of modules as seen on [NPM](https://www.npmjs.com/get-npm), there are also "sub-modules" within the main process, such as the File System Abstraction Layer or the exporter. These are treated as modules because these are self-sustaining modules that are being accessed by the app and expose an API that the app uses. Furthermore, we bundle certain functionality into modules if it is being used in more than one place.

#### Service Provider

A service provider is a class which is instantiated during boot and then keeps running until the app is shut down. These providers provide functionality by attaching certain functional objects (some sort of internal API) to the `global` object. One example is the log provider which can be used for logging, e.g., `global.log.verbose('A message!')`. Another one is the configuration, which can be accessed similarly, e.g., `global.config.get('config.value')`.

Some service providers also broadcast messages to all windows using the `broadcastIpcMessage` function in case their internal state has changed. Most service providers furthermore provide an API between the main process and the renderer processes so that windows can request information from them, using `ipcMain.handle` event-listeners.

#### Command

While a command within the Zettlr ecosystem mainly denotes the thing you'd generally associate with the term in a software engineering context, there is one class of `commands` that is special. Mostly, if we talk about commands, we mean one of the commands in the `source/main/commands` subdirectory. These commands are called whenever the user performs an action that does something, such as opening a file, exporting, or saving the file.

#### ツールバー(Toolbar)

ツールバーとは、Zettlrのメインウィンドウの上部に表示されるボタンが並んだ領域のことです。

#### エディタ(Editor)

エディタとはZettlrのメインウィンドウに表示されるCodeMirrorインスタンスのことです。アセットマネージャや、QuickLookウィンドウに開かれた他のCodeMirrorインスタンスはエディタとは呼びません。後者を意味している場合は、そのことを明示します。

#### QuickLook

macOSのQuickLook機能と同様に、ファイルをプレビューすることができるウィンドウです。編集は行えません。

#### 開発者ツール(DevTools / Development Tools)

開発者ツールは、Zettlrのウィンドウ内に表示してGUIのデバッグを行うことができるものです。Chromeブラウザに付属のDevToolsと同じように機能します。デバッグモードが有効の場合に開くことができます。

#### テーマ(Theme)

Zettlrにおけるテーマとは、一般的に使われるテーマと同じ意味ですが、追加で読み込まれるCSSファイルである`geometry.css`が存在するため、ここに取り上げました。後者は要素の配置とサイズを提供しますが、テーマはほとんど色を提供するためのものです。
