# Get involved

Do you want to make Zettlr an even better app? That's great! Whether you are a user, want to provide a new translation, or get into development of the application, you've come to the right place!

## General Resources

Zettlr has a vibrant community helping each other all around the net. The following list contains the common places to start for any issue you might have.

* [Zettlr user forum](https://forum.zettlr.com) — Go here to ask general questions, discuss workflows and concepts of Zettlr and share your custom themes.
* [Zettlr subreddit](https://www.reddit.com/r/Zettlr) — The Zettlr subreddit is meant for the redditors in the community.
* [The official Twitter account](https://www.twitter.com/Zettlr) — Here you can follow the updates to the app in real time. It's the only place where we regularly announce everything we do. Additionally, we engage in most discussions, so if you have questions, you can drop them here.
* [The official Facebook page](https://fb.me/Zettlrapp) — Here you can message us, if you don't have a Twitter account.
* [Our YouTube channel](https://www.youtube.com/c/Zettlr) — If you are more the visual type, you can find some introductory videos here.
* [The GitHub issue tracker](https://github.com/Zettlr/Zettlr/issues) — This is the core of our endeavours to make the app better and better. If you spot a bug, have a suggestion or want to propose a feature, here's the right place. Nevertheless, especially when it comes to questions regarding the user workflow or new features, **it's best to discuss your ideas on the forum or on reddit first**.

## User Contributions

As a user who wants a good looking, well-working writing app, just keep your eyes open for any error the app might produce and, more importantly, tell us how to make the workflow more efficient! We can only judge for our own workflow, so to make the app better for you as well, we need to know how. Always remember: We cannot build a workflow as-is into the design but have to make concessions to other workflows, but we'll try to make features more accessible or working smoother as long as the trade-offs for the existing workflows and the new suggestion are not too hard.

Please report bugs by opening up issues on the GitHub repository. This way we are able to to quickly respond to the report and directly get to handle the problem.

## Translating the App

We welcome any help in translating the app in all languages of this planet. Translations are managed on our Translation Server. To translate, you'll need to create an account, which is only used as an anti-spam measure. Additionally —but only if you want to— you will be credited using your username in all generated translations.

Translating is simple. Just click on any language on the main page to see the list of all identifiers and all existing translations:

![Translation Keys](img/translations_list.png)

On the left side you'll see all translation IDs. They will mostly be self-explanatory. If you don't know where to start, simply have a look at the English translation and at the app. Then you'll know which translation IDs will correspond to which elements.

We've implemented a user-based quality management system in the service, which consists in you being able to vote on existing translations. So even if you don't want to translate yourself, you can look through all translations and vote for the one you deem correct. Whenever somebody downloads a translation, the system will take the best-rated translation strings to ensure all translations are verified by you, our users!

[For more information, please see the short guide to our translation service](https://translate.zettlr.com/welcome).

## Developing

To start developing, simply [fork the repository](https://github.com/Zettlr/Zettlr), work on your features, bug fixes, etc. and then open pull-requests. Please remember to **only PR to the develop branch!** The master-branch is only pushed to once a new release is being drafted. So if you are developing a new feature and a new version of Zettlr is released, you can simply pull the `upstream master` to be up to date again and continue writing your feature.

If you are beginning to develop a feature, it also may be wise to announce that using a new issue to just let the rest know that somebody is already doing it to maximise efficiency!

## Setting Up Your Development Environment

To set everything up, make sure to start your favourite IDE and spin up your terminal. Zettlr is based on a [NodeJS](https://nodejs.org/)-stack, so you'll need to have the current Node-Server installed on your system, and a Node Package Manager. Zettlr prefers [Yarn](https://yarnpkg.com/).

Then make sure to initialise everything.

**With Yarn**

```bash
$ git clone https://github.com/Zettlr/Zettlr.git
$ cd Zettlr
$ yarn install
$ cd source
$ yarn install
```

The second `install` in the `source` directory is necessary, because we make use of [electron-builder](https://www.electron.build/)'s two-directories-structure.

> The `install` commands will pre-compile all assets for the first time so that you can immediately `start` the application. However, if you change these assets, you will need to recompile them again in order to see the changes. Refer to the section on development commands to find out which commands you can use!

### Development Commands

This section lists all available commands that you can use during application development. These are defined within `package.json` and can be run from the command line by prefixing them either with `npm run` or `yarn`, depending on which package manager you use. Run them from within the base directory of the repository.

#### `build:quick`

This command builds the app locally without packing it. This means that within the `release` directory you will find a pre-built binary, depending on your operating system.

#### `csl:refresh`

This downloads the [Citation Style Language](https://citationstyles.org/) (CSL) files with which the application is shipped, and places them in the `source/main/assets/csl-locales` and `source/main/assets/csl-styles` directories respectively. You can occasionally run this command to pull potential updates from the repositories.

#### `handlebars`

This re-compiles the [Handlebars.js](https://handlebarsjs.com/) template files and places the pre-compiled templates in the `source/common/assets/handlebars` directory.

#### `lang:refresh`

This downloads the four default translations of the application from [Zettlr Translate](https://translate.zettlr.com/), with which it is shipped by default. It places the files in the `source/common/lang` directory. Currently, the default languages are: German (Germany), English (USA), English (UK), and French (France).

#### `less`

This re-generates the CSS files from the [LESS](http://lesscss.org/) source and places the final stylesheets in the `source/common/assets/css` directory. You need to run this command every time you modify the LESS-source in order to see the changes reflected in the app's appearance. _Note: During heavy development, it might be easier to watch the LESS files and automatically recompile them. You can do so by running the command `watch`._

#### `lint`

This simply runs [ESLint](https://eslint.org/) with the configuration and outputs a file `eslint_report.htm` into the base directory of the repository with the results. Apps such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) will automatically run ESLint in the background, but if you want to be extra safe, make sure to run this command prior to submitting a Pull Request.

#### `release:this`

This command is basically `build:quick`, but additionally packages it for your platform. That means, it will spit out a `.deb`, `.rpm`, `.dmg` or `.exe` package, depending on your operating system.

#### `release:app-image`

Explicitly creates [AppImage](https://appimage.org/) installer. This command compiles both 32-bit and 64-bit versions.

#### `release:linux`

Explicitly creates installer packages for Linux, that is: One `.deb` package and one `.rpm` package.

#### `release:mac`

Explicitly creates a release for macOS. _Note: This command only works on macOS._

#### `release:win`

Explicitly creates an installer for Windows. The installer package is significantly bigger than the other installers, as `electron-builder` ships the installer with both 32-bit and 64-bit versions of the app. _Note: This command requires either a Windows-based operating system or a Linux distribution. As long as the developers of [WINE](https://www.winehq.org/) do not port their library to 64-bit, this command will fail on macOS Catalina and newer._

#### `reveal:build`

This re-compiles the source-files needed by the exporter for building [reveal.js](https://revealjs.com/) presentations. Due to the nature of how [Pandoc](https://pandoc.org/) creates such presentations, Zettlr needs to modify the output by Pandoc, which is why these files need to be pre-compiled.

#### `start`

This command spins up Electron and runs the app. You will use this quite frequently during development.

#### `test`

This runs the unit tests in the directory `./test`. Make sure to run this command prior to submitting a Pull Request, as this will be run every time you commit to the PR, and this way you can make sure that your changes don't break any tests, making the whole PR-process easier.

#### `test-gui`

This prepares a test-directory (placed into your `./resources` directory) and tells Zettlr to run with a modified simple configuration. This way you can test some things that might destroy files without actually touching your own files.

#### `watch`

This spins up a process that watches the LESS-source for changes. As long as this process runs, every change to a LESS-file will trigger a build so that you can immediately see your changes in a running Electron-application by pressing `F5` to refresh the GUI.

#### `wp:dev`

Compiles the [Vue.js](https://vuejs.org/) assets from the `resources` directory. This tells [Webpack](https://webpack.js.org/) to compile in development mode, which increases logging and makes debugging easier. Please make sure to run `wp:prod` if you want to create a release.

#### `wp:prod`

Compiles the Vue-assets from the resources-directory. This tells Webpack to compile in production mode, which decreases logging and makes the generated scripts run faster. It is recommended to run `wp:dev` in case you need to debug the Vue-files.

### Command-Line Flags

Zettlr also includes some command-line flags that can be used both on the development version and on the final build. Simply run the app passing the flag. During development, it suffices to use `yarn start --flag` (replace "flag" with the corresponding flag).

#### `--config <configFile.json>`

Pass this flag to temporarily use a different configuration file. The configuration file needs to be in the correct format that Zettlr expects (see the ConfigProvider class in the codebase), but it can also be a stub, i.e., only containing the necessary options you want to use. All options that Zettlr expects and that are not set in that stub will be set to their respective default. This is extremely useful if you want to quickly switch the file tree that will be loaded by the app, e.g., for testing purposes. The `test-gui` command makes use of the `--config` flag in order to quickly exchange the loaded files to harmless ones that you can play with.

> Note: The flag expects an absolute path, so make sure to pass an absolute path to it! Relative paths might not work as expected (Good: `--config /Users/name/Documents/custom-config.json`; Bad: `--config ../resources/my-custom-config.json`).

#### `--clear-cache`

Pass this flag to force Zettlr to clear the FSAL cache. This is especially useful if you change something in the underlying architecture of the file system, as changes will not be detected without modifying the file (that is, the app will behave as if you did not add the additional properties, because it will always fall back to the cache). Also, this might help when unexpected problems occur.

### Project Structure

Now to the real technical stuff: The project's structure! In most respects, the structure adheres to the best practices concerning Electron application development. Nevertheless, the application is _huge_, and therefore you'll need some guidance.

Let's first cover the directory structure (this is a non-exhaustive list; only the folders and files you'll mostly be working on are covered):

```
Zettlr                  // The workspace.
|
+ release               // Will be created when you build the app.
|
+ resources             // Contains everything for dev, but won't be shipped.
|  |
|  + less               // Contains the source-files for the CSS.
|  |
|  + templates          // Contains the dialog and popup templates.
|  |
|  + vue                // Contains the Vue-components.
|
+ scripts               // Contains dev-scripts as mentioned above.
|
+ source                // Contains the actual application source.
|  |
|  + common             // Commonly used files.
|  |  |
|  |  + assets          // CSS, Fonts, HB-runtime, images, JS, templates.
|  |  |
|  |  + lang            // Default languages and the i18n module.
|  |  |
|  |  + util            // Utility functions, used around the app.
|  |  |
|  |  + data.json       // Static data for the application.
|  |  |
|  |  + validate.js     // The validation module.
|  |  |
|  |  + validation.json // Validation rules.
|  |
|  + main               // The main process files.
|  |  |
|  |  + assets          // Assets for the main process.
|  |  |
|  |  + commands        // All commands that can be executed reside here.
|  |  |
|  |  + modules         // Contains modules.
|  |  |
|  |  + providers       // Contains service providers for the app.
|  |
|  + print              // Source code for the print window.
|  |
|  + quicklook          // Source code for the QuickLooks.
|  |
|  + renderer           // The main window code.
|  |  |
|  |  + assets          // Some assets used only in the renderer process.
|  |  |  |
|  |  |  + codemirror   // Contains all CodeMirror plugins.
|  |  |  |
|  |  |  + context      // All files needed for the context menu.
|  |  |  |
|  |  |  + toolbar      // Contains the toolbar template.
|  |  |
|  |  + dialog          // The modules for all dialogs in the app.
|  |  |
|  |  + util            // Utility functions solely used in the renderer.
|  |
|  + main.js            // Entry point of the application.
|
+ CHANGELOG.md          // Contains a detailed list of all changes.
```

### Terminology

A module is not necessarily always a module, but directories and folders can mean the same. Due to semantic ambiguities, we decided to include this glossary section so that terms that are frequently thrown around in the ecosystem of Zettlr are well understood.

#### Folder/Directory

Used interchangeably to denote folders on a file system. Mostly, Zettlr will try to use "directory", but folder effectively means the same.

#### Sidebar

Refers to the left sidebar in the GUI that contains the loaded workspace.

#### Workspace (directory/file)

This means a top-level directory that is visible in the app. A workspace is just a directory loaded at the top level in Zettlr. You can have many workspaces loaded at the top level and each one can have any number of files and folders inside of it.

#### Attachment Sidebar

Refers to the right sidebar in the GUI that contains additional files and the bibliography. We are not happy with the term, so if you have a better one, please come forward!

#### Module

While Zettlr generally follows the definition of modules as seen on [NPM](https://www.npmjs.com/get-npm), there are also "sub-modules" within the main process, such as the File System Abstraction Layer or the exporter. These are treated as modules because these are self-sustaining modules that are being accessed by the app and expose an API that the app uses.

#### Service Provider

A service provider is a class which is instantiated during boot and then keeps running until the app is shut down. These providers provide functionality by attaching certain functional objects (some sort of internal API) to the `global` object. One example is the log provider which can be used for logging, e.g., `global.log.verbose('A message!')`. Another one is the configuration, which can be accessed similarly, e.g., `global.config.get('config.value')`.

#### Command

While a command within the Zettlr ecosystem mainly denotes the thing you'd generally associate with the term in a software engineering context, there is one class of `commands` that is special. Mostly, if we talk about commands, we mean one of the commands in the `source/main/commands` subdirectory. These commands are called whenever the user performs a conscious action that does something, such as opening a file, exporting, or saving the file.

#### Window

In the Zettlr context, a window not only comprises a literal window that can be opened by the app, but much more. In general, due to the structure of Electron applications, a window consists of one control class in the main process, one control class in the respective renderer process that is started for each window, and an accompanying HTML file that is loaded into the window.

#### Dialog

A dialog in Zettlr is an overlay over the main window that shows information and can also provide forms for settings, etc. Example of dialogs are the preferences, the tag manager, the tag cloud, or the PDF preferences.

#### Popup

A popup is similar to the dialogs, only that it does not create a full-page overlay but a smaller onscreen-window with an arrow pointing to the reference element. It is not to be confused with the tippy.js-tooltips that are not interactive.

#### Notification

A notification primarily means the onscreen-notifications that are shown in the top-right corner of the application.

#### Toolbar

The toolbar is the collection of buttons on the top edge of the main Zettlr window.

#### Editor

The "editor" in general refers to the main instance of CodeMirror launched in the main Zettlr window. It does not mean the other CodeMirror instances that are opened, e.g., in the Custom CSS dialog, or the QuickLook windows.

#### QuickLook

Similarly to the macOS QuickLook-feature, these are smaller (native) windows that enable you to preview a file but not edit it.

#### DevTools / Development Tools

The development tools are the ones you can open in Zettlr windows that enable you to debug the GUI. They work the same as the devtools shipped with Chrome browsers and can be opened when debug mode is enabled.

#### Theme

While a theme in the Zettlr context denotes the same as everywhere else, we included it here to stress the point that there is an additional CSS file loaded: `geometry.css`. The latter provides the geometric arrangement and size of elements, whereas the theme mostly only provides colouring.
