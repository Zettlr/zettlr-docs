# Involúcrate

¿Quieres hacer de Zettlr una aplicación mejor? ¡Genial! Si lo usas, quieres proveer una nueva traducción o involucrarte con el desarrollo de la aplicación ¡llegaste al lugar adecuado!

## Recursos generales

Zettlr tiene una comunidad vibrante que se ayuda mutuamente en la red. Las siguientes listas contienen lugares comunes para empezar si tiene algún problema.

* [El Discord de Zettlr](https://discord.com/invite/PcfS3DM9Xj) — El Discord de Zettlr es un lugar para los Discordantes (no parece haber un término oficial).
* [El subreddit de Zettlr](https://www.reddit.com/r/Zettlr) — El subreddit de Zettlr se creó para los usuarios de Reddit de la comunidad.
* [La cuenta oficial de Twitter](https://www.twitter.com/Zettlr) — Aquí puedes seguir las actualizaciones de la app en tiempo real. Es el único lugar donde se anuncia regularmente todo lo que hacemos. Adicionalmente, nos involucramos en varias discusiones, así que si tienes preguntas, puedes dejarlas acá.
* [La página oficial de  Facebook](https://fb.me/Zettlrapp) — Aquí puedes dejarnos mensajes, en caso de que no tengas una cuenta en Twitter.
* [Nuestro canal de YouTube](https://www.youtube.com/c/Zettlr) — Si eres más de lo visual, puedes encontrar videos introductorios acá.
* [Foro de quienes usan Zettlr](https://forum.zettlr.com) — (Descontinuado)
* [El registro de problemas de GitHub](https://github.com/Zettlr/Zettlr/issues) — Este es el núcleo de nuestros esfuerzos para hacer mejor la aplicación. Si encuentras un error, tienes sugerencias o quieres proponer una nueva funcionalidad, aquí estarás en el lugar adecuado. Sin embargo, especialmente cuando se trata de preguntas sobre el flujo de trabajo o nuevas funcionalidades, **es mejor discutir tus ideas en GitHub o Reddit primero**.

## Contribuciones de usuarios

Como usuario que quiere una aplicación bonita y bien trabajada aplicación para escribir, mantén tus ojos abiertos para encontrar errores que se pueden producir y, más importante,  dinos cómo hacer el flujo de trabajo más eficiente. No podemos juzgar solo por  nuestro propio flujo de trabajo para hacer mejor la app, sino que también necesitamos saber cómo. Siempre recuerda: no podemos crear un flujo de trabajo como se ha diseñado sin darle ciertas concesiones a otros flujos de trabajo, pero intentaremos hacer nuevas funcionalidades más accesibles o que funcionen mejor siempre y cuando las compensaciones de los flujo  de trabajo existentes y las nuevas sugerencias no sean muy difíciles.

Por favor reporta los errores abriendo _issues_ en el repositorio de GitHub. Esta es la manera de que podamos responder rápidamente a un reporte y ponernos manos a la obra con el problema.

## Traduciendo la app

Cualquier ayuda con la traducción de esta app en cualquier idioma del planeta es bienvenida. Las traducciones son gestionadas por nuestro Servidor de Traducciones. Para traducir, necesitarás crear una cuenta,  que solo se usa como medida anti SPAM. Adicionalmente - pero sólo si así lo quieres - aparecerás en los créditos usando tu nombre de usuario en todas las traducciones creadas.

Traducir es simple.  Sólo  Just click on any language on the main page to see the list of all identifiers and all existing translations:

![Translation Keys](img/translations_list.png)

On the left side you'll see all translation IDs. They will mostly be self-explanatory. If you don't know where to start, simply have a look at the English translation and at the app. Then you'll know which translation IDs will correspond to which elements.

We've implemented a user-based quality management system in the service, which consists in you being able to vote on existing translations. So even if you don't want to translate yourself, you can look through all translations and vote for the one you deem correct. Whenever somebody downloads a translation, the system will take the best-rated translation strings to ensure all translations are verified by you, our users!

[For more information, please see the short guide to our translation service](https://translate.zettlr.com/welcome).

## Developing

To start developing, simply [fork the repository](https://github.com/Zettlr/Zettlr), work on your features, bug fixes, etc. and then open pull-requests. Please remember to **only PR to the develop branch!** The master-branch is only pushed to once a new release is being drafted. So if you are developing a new feature and a new version of Zettlr is released, you can simply pull the `upstream master` to be up to date again and continue writing your feature.

If you are beginning to develop a feature, it also may be wise to announce that using a new issue to just let the rest know that somebody is already doing it to maximise efficiency!

## Setting Up Your Development Environment

To set everything up, make sure to start your favourite IDE and spin up your terminal. Zettlr is based on a [NodeJS](https://nodejs.org/)-stack, so you'll need to have a current Node release installed on your system, and a Node Package Manager. Zettlr requires [Yarn](https://yarnpkg.com/).

Then make sure to initialise everything:

```bash
$ git clone https://github.com/Zettlr/Zettlr.git
$ cd Zettlr
$ yarn install --frozen-lockfile
```

> We have listed a much more comprehensive setup and development guide in [the repository's README](https://github.com/Zettlr/Zettlr#readme) file. In case, the README file will be more up to date since it's closer to the source code. If any of below's commands doesn't work, please look there first, and open a PR to update this documentation page!

### Development Commands

This section lists all available commands that you can use during application development. These are defined within the `package.json` and can be run from the command line by prefixing them with `yarn`. Run them from within the base directory of the repository.

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

This downloads the four default translations of the application from [Zettlr Translate](https://translate.zettlr.com/), with which it is shipped by default. It places the files in the `static/lang`-directory. Currently, the default languages are: German (Germany), English (USA), English (UK), and French (France).

> Please note, that this command is intended for an automated workflow that runs from time to time on the repository to perform this action. This means: Do **not** commit updated files to the repository. Instead, the updated files will be downloaded whenever you `git fetch`.

#### `csl:refresh`

This downloads the [Citation Style Language](https://citationstyles.org/) (CSL) files with which the application is shipped, and places them in the `static/csl-locales`- and `static/csl-styles`-directories respectively.

> Please note, that this command is intended for an automated workflow that runs from time to time on the repository to perform this action. This means: Do **not** commit updated files to the repository. Instead, the updated files will be downloaded whenever you `git fetch`.

#### `lint`

This simply runs [ESLint](https://eslint.org/). Apps such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) will automatically run ESLint in the background, but if you want to be extra-safe, make sure to run this command prior to submitting a Pull Request.

> This command will run automatically on each Pull Request to check your code for inconsistencies.

#### `reveal:build`

This re-compiles the source-files needed by the exporter for building [reveal.js](https://revealjs.com/)-presentations. Due to the nature of how [Pandoc](https://pandoc.org/) creates such presentations, Zettlr needs to modify the output by Pandoc, which is why these files need to be pre-compiled.

> Please note, that this command is intended for an automated workflow that runs from time to time on the repository to perform this action. This means: Do **not** commit updated files to the repository. Instead, the updated files will be downloaded whenever you `git fetch`.

#### `test`

This runs the unit tests in the directory `./test`. Make sure to run this command prior to submitting a Pull Request, as this will be run every time you commit to the PR, and this way you can make sure that your changes don't break any tests, making the whole PR-process easier.

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

## Command-Line Switches

The Zettlr binary features a few command line switches that you can make use of for different purposes.

#### `--clear-cache`

This will direct the File System Abstraction Layer to fully clear its cache on boot. This can be used to mitigate issues regarding changes in the code base. To ensure compatibility with any changes to the information stored in the cache, the cache is also automatically cleared when the version field in your `config.json` does not match the one in the `package.json`, which means that, as long as you do not explicitly set the `version`-field in your `test-config.yml`, the cache will always be cleared on each run when you type `yarn test-gui`.

#### `--config=path`

Use this switch to temporarily override the default configuration file stored in your AppData-equivalent folder. This path should be absolute. In case you need to provide a relative path, the base for resolving the path will be: either the binary's directory name (when the app is packaged), or the repository root (when the app is not packaged). If the path contains spaces, don't forget to escape it in quotes.

### Terminology

A module is not necessarily always a module, but directories and folders can mean the same. Due to semantic ambiguities, we decided to include this glossary section so that terms that are frequently thrown around in the ecosystem of Zettlr are well understood.

#### Folder/Directory

Used interchangeably to denote folders on a file system. Mostly, Zettlr will try to use "directory", but folder effectively means the same.

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

#### Toolbar

The toolbar is the collection of buttons on the top edge of the main Zettlr window.

#### Editor

The "editor" in general refers to the main instance of CodeMirror launched in the main Zettlr window. It does not mean the other CodeMirror instances that are opened, e.g., in the assets manager, or the QuickLook windows. If we mean the latter, we specify this normally.

#### QuickLook

Similarly to the macOS QuickLook-feature, these are windows that enable you to preview a file but not edit it.

#### DevTools / Development Tools

The development tools are the ones you can open in Zettlr windows that enable you to debug the GUI. They work the same as the devtools shipped with Chrome browsers and can be opened when debug mode is enabled.

#### Theme

While a theme in the Zettlr context denotes the same as everywhere else, we included it here to stress the point that there is an additional CSS file loaded: `geometry.css`. The latter provides the geometric arrangement and size of elements, whereas the theme mostly only provides colouring.
