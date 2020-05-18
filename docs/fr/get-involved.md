# Impliquez-vous

Vous voulez faire de Zettlr une application toujours meilleure ? C'est génial ! Que vous soyez utilisateur, que vous souhaitiez fournir une nouvelle traduction ou que vous vous lanciez dans le développement, vous êtes au bon endroit !

## Ressources

Zettlr a une communauté dynamique qui s'entraide tout autour du Net. La liste suivante contient les lieux à partir desquels vous pouvez commencer pour tout problème que vous pourriez avoir.

* [Forum d'utilisateurs de Zettlr](https://forum.zettlr.com) - Venez ici pour poser des questions générales, discuter de *workflows* et des concepts de Zettlr, partager vos thèmes personnalisés…
* [Subreddit Zettlr](https://www.reddit.com/r/Zettlr) - Le subreddit r/Zettlr pour les *redditors* de la communauté.
* [Le compte Twitter officiel](https://www.twitter.com/Zettlr) - Vous pouvez y suivre les mises à jour de l'application en temps réel. C'est l'endroit où nous annonçons le plus régulièrement tout ce que nous faisons. De plus, nous participons activement à la plupart des discussions, donc si vous avez des questions, vous pouvez les poser sans hésitation.
* [La page officielle de Facebook](https://fb.me/Zettlrapp) - Ici vous pouvez nous envoyer un message, si vous n'avez pas de compte Twitter. Normalement, nous recevons des notifications et répondons le plus rapidement possible, mais nous ne pouvons pas le garantir.
* [Notre chaîne YouTube](https://www.youtube.com/c/Zettlr) - Si vous fonctionnez mieux avec de la vidéo, vous pouvez trouver quelques vidéos d'introduction ici.
* [Le suivi des tickets (*issues*) sur GitHub](https://github.com/Zettlr/Zettlr/issues) - C'est le cœur de nos efforts pour améliorer l'application encore et toujours. Si vous repérez un bug, avez une suggestion ou souhaitez proposer une fonctionnalité, c'est le bon endroit. Néanmoins, surtout lorsqu'il s'agit de questions concernant les *workflows* des utilisateurs ou bien de nouvelles fonctionnalités, **il est préférable de discuter de vos idées sur le forum ou sur reddit en premier**.

## Contributer en tant qu'utilisateur

En tant qu'utilisateur désireux de disposer d'une application d'écriture à la fois belle et efficace, vous pouvez garder l'œil ouvert pour détecter toute erreur que l'application pourrait produire. Veuillez signaler les bugs en ouvrant un ticket (*issue*) sur le dépôt GitHub. De cette façon, nous sommes en mesure de répondre rapidement au rapport et de traiter directement le problème.

Vous pouvez aussi nous dire comment rendre votre flux de travail plus efficace ! Nous ne pouvons juger que de nos propres processus, donc pour améliorer l'application pour vous aussi, nous devons savoir dans quelle direction travailler. Retenez que nous ne pouvons pas intégrer un flux de travail entièrement nouveau tel quel dans la conception, nous devons faire des concessions à d'autres processus, mais nous essaierons de rendre les fonctionnalités plus accessibles ou de les faire fonctionner plus facilement tant que les compromis entre les flux de travail existants et la nouvelle suggestion ne sont pas trop difficiles.

## Traduire l'application

Toute aide à la traduction de l'application dans toutes les langues de la planète est la bienvenue. Les traductions sont gérées sur notre serveur de traduction. Pour traduire, vous devez créer un compte, qui n'est utilisé que comme mesure antispam. De plus - mais seulement si vous le souhaitez - vous serez crédité en utilisant votre nom d'utilisateur dans toutes les traductions générées.

Traduire est simple. Il suffit de cliquer sur n'importe quelle langue sur la page principale pour voir la liste de tous les identifiants et de toutes les traductions existantes :

![Clés de traduction](img/translations_list.png)

Sur le côté gauche, vous verrez tous les ID de traduction. Elles seront pour la plupart explicites. Si vous ne savez pas par où commencer, jetez simplement un coup d'œil à la traduction anglaise et à l'application. Vous saurez alors à quels éléments correspondent les ID de traduction.

Nous avons mis en place dans le service un système de gestion de la qualité basé sur l'utilisateur, qui consiste à vous permettre de voter sur les traductions existantes. Ainsi, même si vous ne souhaitez pas traduire vous-même, vous pouvez consulter toutes les traductions et voter pour celle que vous jugez correcte. Chaque fois que quelqu'un télécharge une traduction, le système prend les chaînes de traduction les mieux notées pour s'assurer que toutes les traductions sont vérifiées par vous, nos utilisateurs !

[Pour plus d'informations, veuillez consulter le petit guide de notre service de traduction](https://translate.zettlr.com/welcome).

## Contribuer au développement

Pour commencer le développement, il suffit de [créer une copie du dépôt](https://github.com/Zettlr/Zettlr), de travailler sur vos fonctionnalités, les corrections de bogues, etc. puis de soumettre une requête (*pull request, PR*). N'oubliez pas de **seulement faire une requête sur la branche de développement**. La branche `master` n'est ciblée que lorsqu'une nouvelle version est en cours de préparation. Ainsi, si vous développez une nouvelle fonctionnalité et qu'une nouvelle version de Zettlr est publiée entretemps, vous pouvez simplement récupérer `origin master` pour être à nouveau à jour et continuer à écrire votre fonctionnalité.

Si vous commencez à développer une fonctionnalité, il peut également être judicieux de l'annoncer en ouvrant un nouveau ticket (*issue*), vous faites savoir aux autres que quelqu'un le fait déjà pour maximiser l'efficacité !

### Débuter le développement

Pour tout mettre en place, lancez votre IDE et votre interface en ligne de commande favorite. Zettlr est basé sur un *stack* [NodeJS](https://nodejs.org/), vous devrez donc avoir la version actuelle de Node-Server installée sur votre système, et un gestionnaire de paquets pour Node. Zettlr préfère [Yarn](https://yarnpkg.com/), mais vous pouvez bien sûr aussi utiliser NPM (qui sera installé à côté de Node).

Assurez-vous ensuite de tout initialiser.

**Avec Yarn**

```bash
$ git clone https://github.com/Zettlr/Zettlr.git
$ cd Zettlr
$ yarn install
$ cd source
$ yarn install
```

**Avec NPM**

```bash
$ git clone https://github.com/Zettlr/Zettlr.git
$ cd Zettlr
$ npm install
$ cd source
$ npm install
```

La seconde `install` dans le répertoire source est nécessaire, parce que nous utilisons la structure à deux répertoires de [electron-builder](https://www.electron.build/).

### Interface en ligne de commande

Zettlr est livré avec un grand nombre de commandes utiles que vous pouvez utiliser dans votre processus de développement. Listons-les toutes.

> Vous pouvez exécuter n'importe laquelle de ces commandes soit avec `npm run <command>` ou `yarn <command>`, selon votre gestionnaire de paquets. Assurez-vous de les exécuter depuis le répertoire principal de Zettlr.

* `start` : Démarre l'application.
* `build:quick` : Construit rapidement l'application pour votre système d'exploitation (si elle est supportée par electron-builder) et la déplace dans `/release`.
* `release:this` : Même chose que `build:quick`, mais l'application sera également empaquetée (sous forme de fichier `.dmg` sur macOS, d'installateur `.exe` sur Windows, ou de paquet Linux).
* `release:mac` : Construire explicitement une version pour macOS.
* `release:win` : Construire explicitement une version pour Windows.
* `release:linux` : Construire explicitement une version pour Linux.
* `less` : Exécute le convertisseur LESS pour convertir les fichiers sources dans `/resources/less` en fichiers CSS finaux dans `source/common/assets/css`. Chaque fois que vous modifiez les styles, vous devez exécuter cette commande.
* `less:extract` : Extrait tous les ID et classes CSS des fichiers sources et les affiche dans `/resources/css_list.md`, un par ligne. Cette commande est uniquement utilisée pour générer notre [référence CSS personnalisée](https://docs.zettlr.com/core/custom-css/#complete-css-class-and-id-reference).
* `handlebars` : Ceci démarre le précompilateur Handlebars pour convertir les modèles (pour les dialogues et les popups) sous la forme qui sera livrée avec l'application dans le répertoire `/source/common/assets/tpl`. Chaque fois que vous modifiez quoi que ce soit dans un fichier dans `/resources/templates`, vous devez exécuter cette commande, sans quoi vos modifications ne seront pas visibles.
* `lang:refresh` : Télécharge la version la plus récente des traductions par défaut `German (Germany)`, `English (United States)`, `English (United Kingdom)`, et `French (France)` de [translate.zettlr.com](https://translate.zettlr.com/) et les place dans le répertoire `/source/common/lang`.
* `reveal:build` : Reconstruit le modèle des présentations Reveal-js.

En dehors de ces commandes, il y a une "commande maître" que nous utilisons pour exécuter un cycle complet pour chaque nouvelle version de Zettlr. Elle réside dans `/scripts/make.sh` et est une commande Shell qui exécutera la plupart des commandes mentionnées ci-dessus pour générer les installateurs pour les distributions Windows, macOS, Linux basées sur Debian et les distributions Linux basées sur Fedora. De plus, elle génère un fichier `SHASUMS.txt` contenant les *checksums* des quatre installateurs.

> Attention : actuellement, le script Make-script nécessite Yarn et macOS. Il ne fonctionne pas avec NPM ni sur aucune autre plate-forme. Ceci est dû à la commande de génération de sommes de contrôle SHA256, qui diffère entre les distributions macOS et Linux.

### Structure du projet

Passons maintenant aux choses vraiment techniques : la structure du projet ! Dans la plupart des cas, la structure se conforme aux bonnes pratiques du développement d'applications électroniques. Néanmoins, l'application est très étalée, et vous aurez donc besoin de quelques conseils.

Commençons par la structure des répertoires (cette liste n'est pas exhaustive ; seuls les répertoires et les fichiers sur lesquels vous travaillerez le plus sont couverts) :

> Traduction française à venir.

```
Zettlr                 // The root directory
|
+ release              // Will be created when you build the app.
|
+ resources            // Contains everything for dev, but won't be shipped.
|  |
|  + less              // Contains the source-files for the CSS
|  |
|  + templates         // Contains the dialog and popup templates.
|
+ scripts               // Contains dev-scripts as mentioned above.
|
+ source                // Contains the actual application source.
|  |
|  + common             // Commonly used files
|  |  |
|  |  + assets          // CSS, Fonts, HB-runtime, images, JS, templates.
|  |  |
|  |  + lang            // Default languages and the i18n module.
|  |  |
|  |  + util            // Utility functions, used around the app.
|  |  |
|  |  + data.json       // Static data for the application.
|  |  |
|  |  + validate.js     // The validation module
|  |  |
|  |  + validation.json // Validation rules.
|  |
|  + main               // The main process files
|  |  |
|  |  + assets          // Assets for the main process
|  |  |
|  |  + commands        // All commands that can be executed reside here.
|  |  |
|  |  + providers       // Contains service providers for the app.
|  |
|  + print              // Source code for the print window
|  |
|  + quicklook          // Source code for the QuickLooks.
|  |
|  + renderer           // The main window code.
|  |  |
|  |  + assets          // Some assets used only in the renderer process.
|  |  |  |
|  |  |  + codemirror   // Contains all CodeMirror plugins
|  |  |  |
|  |  |  + context      // All files needed for the context menu
|  |  |  |
|  |  |  + toolbar      // Contains the toolbar template.
|  |  |
|  |  + dialog          // The modules for all dialogs in the app
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

Refers to the left sidebar in the GUI that contains the loaded root directories.

#### Root (directory/file)

This means a top-level directory that is visible in the app. This does _not_ mean a root of your overall file system. Example: While `/home` is a root-level directory on a Linux installation, `/home/user/Zettlr` is a root directory _in the context of Zettlr_, if it is loaded as a root-directory. All directories and files within that directory are not roots, then.

#### Attachment Sidebar

Refers to the right sidebar in the GUI that contains additional files and the bibliography. We are not happy with the term, so if you have a better one, please come forward!

#### Module

While Zettlr generally follows the definition of modules as seen on [NPM](https://www.npmjs.com/get-npm), there are also "sub-modules" within the main process, such as the File System Abstraction Layer or the exporter. These are treated as modules because these are self-sustaining modules that are being accessed by the app and expose an API that the app uses.

#### Service Provider

A service provider is a class which is instantiated during boot and then keeps running until the app is shut down. These providers provide functionality by attaching certain functional objects (some sort of internal API) to the `global`-object. One example is the log provider which can be used for logging, e.g. `global.log.verbose('A message!')`. Another one is the configuration, which can be accessed similarly, e.g. `global.config.get('config.value')`.

#### Command

While a command within the Zettlr-ecosystem mainly denotes the thing you'd generally associate with the term in a software engineering context, there is one class of `commands` that is special. Mostly, if we talk about commands, we mean one of the commands in the `source/main/commands`-subdirectory. These commands are called whenever the user performs a conscious action that does something, such as opening a file, exporting, or saving the file.

#### Window

In the Zettlr-context, a window not only comprises a literal window that can be opened by the app, but much more. In general, due to the structure of Electron-applications, a window consists of one control class in the main process, one control class in the respective renderer process that is started for each window, and an accompanying HTML-file that is loaded into the window.

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

The development tools are the ones you can open in Zettlr windows that enable you to debug the GUI. They work the same as the devtools shipped with Chrome-browsers and can be opened when debug-mode is enabled.

#### Theme

While a theme in the Zettlr context denotes the same as everywhere else, we included it here to stress the point that there is an additional CSS file loaded: `geometry.css`. The latter provides the geometric arrangement and size of elements, whereas the theme mostly only provides colouring.