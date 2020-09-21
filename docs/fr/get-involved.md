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

## Contribuer en tant qu'utilisateur

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

La seconde `install` dans le répertoire source est nécessaire, parce que nous utilisons la structure à deux répertoires de [electron-builder](https://www.electron.build/).

> La commande `install` va précompiler tous les ressources pour la première fois de manière à pouvoir démarrer immédiatement l'application. Cependant, si vous changez ces ressources, vous aurez besoin de les recompiler encore pour voir les changements. Référez vous à la section sur les commandes de développement pour trouver quelles commandes vous pouvez utiliser !

### Commandes de développement

Cette section liste toutes les commandes disponibles utilisables pendant le développement. Elles sont définies dans `package.json` et peuvent être lancées depuis la ligne de commande en les préfixant avec `npm run` ou `yarn`, en fonction du gestionnaire de package que vous utilisez. Lancez-les depuis le dossier de base.

#### `build:quick`

Cette commande construit l'application localement sans la packager. Cela signifie que vous trouverez dans le dossier `release` un binaire préconstruit, en fonction de votre système d'exploitation.

#### `csl:refresh`

Télécharge les fichiers [Citation Style Language](https://citationstyles.org/) (CSL) avec l'application est livrée, et les place dans les dossiers `source/main/assets/csl-locales` et `source/main/assets/csl-styles` respectivement. Vous pouvez occasionnellement lancer cette commande pour récupérer les éventuelles mises à jour des répertoires distants.

#### `handlebars`

Recompile les [Handlebars.js](https://handlebarsjs.com/) templates et les place pré-compilés dans le dossier `source/common/assets/handlebars`.

#### `lang:refresh`

Télécharge kes 4 traductions par défaut de l'application depuis [Zettlr Translate](https://translate.zettlr.com/), traductions livrées par défaut avec l'application. Cela met les fichiers dans le dossier `source/common/lang`. Actuellement les langues par défaut sont : Allemand (Germany), Anglais (USA), Anglais (UK), et Français (France).

#### `less`

Régénère les fichier CSS depuis la source [LESS](http://lesscss.org/) et copie les feuilles de styles finales dans le dossier `source/common/assets/css`. Vous devez lancer cette commande chaque fois que vous modifiez le LESS-source de sorte que les changements soient visibles dans l'application. _Note: Pendant le développement intensif, il peut être plus simple de "watch" les fichiers LESS et de les recompiler automatiquement. Cela se fait avec la commande `watch`._

#### `lint`

Lance [ESLint](https://eslint.org/) avec la configuration et génère un rapport `eslint_report.htm` dans le dossier racine du projet avec les résultats. Des applications comme [Atom](https://atom.io/) ou [Visual Studio Code](https://code.visualstudio.com/) lanceront automatiquement ESLint en tâche de fond, mais si vous voulez être très prudent, soyez sûr de lancer cette commande avant de soumettre une Pull Request.

#### `release:this`

Cette commande est basiquement `build:quick`, mais en plus fait le package pour votre plateforme. Donc soit un package `.deb`, `.rpm`, `.dmg` ou `.exe`, en fonction de votre système d'exploitation.

#### `release:app-image`

Crée explicitement l'installateur [AppImage](https://appimage.org/). Cette commande compile dans les versions 32-bit et 64-bit.

#### `release:linux`

Crée explicitement les packages d'installation pour Linux, soit un package `.deb` et un package `.rpm`.

#### `release:mac`

Crée explicitement la release pour macOS. _Note: Cette commande ne marche que sur macOS._

#### `release:win`

Crée explicitement un installateur pour Windows. L'installateur de package est significativement plus grand que les autres installateurs, car `electron-builder` livre l'installateur avec les versions 32-bit et 64-bit de l'application. _Note: Cette commande requiert soit un système d'exploitation Windows ou une distribution Linux. Tant que les développeurs de [WINE](https://www.winehq.org/) ne feront pas le port de leur bibliothèque en 64-bit, cette commande échouera sur macOs Catalina et plus récent._

#### `reveal:build`

Recompile les fichiers source nécessaire pour l'exporteur pour construire les présentations [reveal.js](https://revealjs.com/). A cause de la façon dont [Pandoc](https://pandoc.org/) crée de telles péesentations, Zettlr a besoin de modifier la sortie de Pandoc, c'est pourquoi ces fichiers ont besoin d'être pré-compilés.

#### `start`

Cette commande fait tourner Electron et lance l'application. Vous l'utiliserez souvent pendant le développement.

#### `test`

Lance les tests unitaires dans le répertoire `./test`. Lancez cette commande avant toute Pull Request, étant donné que ce sera lancé à chaque fois que vous commiterez dans la PR, et de cette façon vous serez certain que vos changements ne cassent aucun tests, rendant ainsi le processus de PR plus facile.

#### `test-gui`

Prépare un répertoire test-directory (placé dans votre dossier `./resources`) et demande à Zettlr de se lancer avec une configuration simple modifiée. De cette façon vous pouvez tester des chose qui pourraient détruire des fichiers sans vraiment toucher vos propres fichiers.

#### `watch`

Lance un processus qui écoute les changements dans LESS-source. Tant que ce processus tourne, chaque changement dans un fichier LESS déclenchera un build de façon à ce que vous puissiez voir immédiatement les changements dans une application Electron en pressant `F5` pour rafraîchir l'IHM.

#### `wp:dev`

Compile les ressources [Vue.js](https://vuejs.org/) depuis le dossier `resources`. Demande à [Webpack](https://webpack.js.org/) de compiler en mode développement, ce qui augmente les logs et rend le debug plus facile. Merci de lancer `wp:prod` si vous voulez créer une release.

#### `wp:prod`

Compile les ressources Vue depuis le dossier ressources. Demande à Webpack de compiler en mode production, ce qui réduit les logs et rend les scripts générés plus rapides. Il est recommandé de lancer `wp:dev` si vous devez débuguer des fichiers Vue.

### Command-Line Flags

Zettlr inclue aussi des "flags" de ligne de commande qui peuvent être utilisés à la fois sur la version de développement et sur le build final. Lancez simplement l'application en passant les "flags". Pendant le développement if suffit d'utiliser `yarn start --flag` (remplacez "flag" avec le flag corerspondant).

#### `--config <configFile.json>`

Passez ce flag pour utiliser temporairement un autre fichier de configuration. Le fichier de configuration doit être dans le format attendu par Zettlr (voir la class ConfigProvider dans le code source), mais ça peut aussi être un stub, c'est à dire contenant seulement les options nécessaires que vous voulez utiliser. Toutes les options que Zettlr attend et qui ne sont pas dans ce "stub" seront à leur valeur par défaut. C'est très utile si vous voulez rapidement changer l'arborescence qui sera chargée par l'application, par exemple à des fins de test. La commande `test-gui` utilise le flag `--config` de façon à changer rapidement les fichiers chargés avec des fichiers sans danger avec lesquels vous pourrez jouer.

> Note: Le flag attend un chemin absolu, alors soyez certain de passer un chemin absolu ! Les chemins relatifs ne pourrait pas marcher comme attendu (Valide: `--config /Users/name/Documents/custom-config.json`; Invalide: `--config ../resources/my-custom-config.json`).

#### `--clear-cache`

Passer ce flag pour forcer Zettlr à vider le cache FSAL. This is especially useful if you change something in the underlying architecture of the file system, as changes will not be detected without modifying the file (that is, the app will behave as if you did not add the additional properties, because it will always fall back to the cache). Also, this might help when unexpected problems occur.

### Structure du projet

Passons maintenant aux choses vraiment techniques : la structure du projet ! Dans la plupart des cas, la structure se conforme aux bonnes pratiques du développement d'applications électroniques. Néanmoins, l'application est très étalée, et vous aurez donc besoin de quelques conseils.

Commençons par la structure des répertoires (cette liste n'est pas exhaustive ; seuls les répertoires et les fichiers sur lesquels vous travaillerez le plus sont couverts) :

```
Zettlr                 // Le répertoire racine
|
+ release              // Sera créé quand vous construirez l'application.
|
+ resources            // Contient tout pour le dev, mais ne sera pas livré.
|  |
|  + less              // Contient les fichiers sources pour le CSS
|  |
|  + templates         // Contient les templates pour les boite de dialogue et les popups.
|  |
|  + vue                // Contient les Vue-components.
|
+ scripts               // Contient les scripts de développement comme mentionné plus haut.
|
+ source                // Contient le code source réel de l'application.
|  |
|  + common             // Fichiers communs
|  |  |
|  |  + assets          // CSS, Fonts, HB-runtime, images, JS, templates.
|  |  |
|  |  + lang            // Langues par défaut et module i18n (internationalisation).
|  |  |
|  |  + util            // Fonctions utilitaires, utilisées à différents endroits de l'application.
|  |  |
|  |  + data.json       // Données statiques pour l'application.
|  |  |
|  |  + validate.js     // Le module de validation
|  |  |
|  |  + validation.json // Les règles de validation.
|  |
|  + main               // Les fichiers du process principal
|  |  |
|  |  + assets          // Ressources pour le process principal
|  |  |
|  |  + commands        // Toutes les commandes qui peuvent être exécutées sont ici.
|  |  |
|  |  + modules         // Contient les modules
|  |  |
|  |  + providers       // Contient les "service providers" de l'application.
|  |
|  + print              // Code source pour la fenêtre d'impression
|  |
|  + quicklook          // Code source pour le aperçu.
|  |
|  + renderer           // Le code de la fenêtre principale.
|  |  |
|  |  + assets          // Des ressources utilisées seulement par le process de rendu
|  |  |  |
|  |  |  + codemirror   // Contient tous les  plugins CodeMirror
|  |  |  |
|  |  |  + context      // Tous les fichiers dont a besoin le menu contextuel
|  |  |  |
|  |  |  + toolbar      // Contient le template de la barre d'outil.
|  |  |
|  |  + dialog          // Les modules pour toutes les boites de dialogue de l'application
|  |  |
|  |  + util            // Fonction utilitaires seulement pour le rendu.
|  |
|  + main.js            // Point d'entrée de l'application.
|
+ CHANGELOG.md          // Contient une liste détaillée de tous les changements.
```

### Terminologie

Un module n'est pas toujours nécessairement un module, mais les dossiers et répertoires peuvent signifier la même chose. A cause d'ambiguïté sémantiques, nous avons décider d'inclure cette section "glossaire" de sorte que les termes fréquemment utilisés dans l'écosystème de Zetllr soient bien compris.

#### Dossier/Répertoire

Utilisés de façon interchangeable pour indiquer des dossiers du système de fichier. 

#### Sidebar / Barre latérale

Se réfère à la barre latérale de gauche de l'IHM qui contient les répertoires chargés.

#### Racine (dossier/fichier)

Signifie un un répertoire au plus haut niveau visible dans l'application. Cela ne signifie pas une racine de tout votre système de fichier. Exemple : Alors que `/home` est un répertoire de niveau racine d'une distribution Linux, `/home/user/Zettlr` est un répertoire racine _dans le contexte de Zettlr_, s'il est chargé comme répertoire racine. Donc Tous les dossiers et fichiers à l'intérieur de ce répertoire ne sont pas des racines.

#### Barre latérale d'attachement

Se réfère à la barre latérale de droite de l'IHM qui contient des fichiers additionnels et la bibliographie. Nous ne sommes pas satisfaits du terme, donc si vous en avez un meilleur, veuillez nous le signaler !

#### Module

Alors que Zettlr suit en général la définition de modules comme vue dans [NPM](https://www.npmjs.com/get-npm), il y a aussi des "sous modules" à l'intérieur du process principal, comme le File System Abstraction Layer ou l'exporteur. Ils sont traités comme modules car ce sont des modules autonomes qui sont accédés par l'application et exposent une API que l'application utilise.

#### Service Provider / Fournisseur de service

Un fournisseur de service est une classe qui est instanciées durant le démarrage et qui fonctionne jusqu'à l'extinction de l'application. These providers provide functionality by attaching certain functional objects (some sort of internal API) to the `global`-object. Une exemple est le fournisseur de log provider qui peut être utilisé pour logger, par exemple `global.log.verbose('A message!')`. Un autre est la configuration, qui peut être accédée de façon similaire, par exemple `global.config.get('config.value')`.

#### Commande

Alors qu'une commande dans l'écosystème Zettlr signifie principale la chose que vous associez généralement avec le terme utilisé dans un contexte d'ingénierie logicielle, il y a une classe de `commands` qui est spéciale. Généralement, quand nous parlons de commandes, nous parlons d'un des commandes dans les sous répertoires de `source/main/comands`. Ces commandes sont appelées à chaque fois qu'un utilisateur effectue une action qui fait quelque chose, comme ouvrir un fichier ou sauvegarder un fichier.

#### Fenêtre

Dans le contexte de Zettlr, une fenêtre signifie non seulement la fenêtre ouverte par l'application, mais bien plus. En général, en raison de la structure des application Electron, une fenêtre consiste en une classe de contrôle dans le processus principal, une classe de contrôle dans les dans le process respectif qui est démarré pour chaque fenêtre, et un fichier HTML accompagnant qui est chargé dans la fenêtre. 

#### Boite de dialogue

Une boite de dialogue dans est une surcouche sur la fenêtre principale qui montre de l'information et peut aussi fournir des formulaires pour les paramètres, etc. Un exemple de boite de dialogue est les préférences, le gestionnaire de tag, le nuage (cloud) de tag, ou les préférences PDF.

#### Popup

Une popup est similaire aux boites de dialogue, mais elles ne créent pas une surcouche de pleine page, mais une fenêtre plus petite avec une flèche pointant vers l'élément de référence. Ne pas confondre avec les tooltips/info-bulles tippy.js qui ne sont pas interactifs.

#### Notification

Une notification est basiquement une notification à l'écran qui apparait dans le coin inférieur droit de l'application.

#### Barre d'outil

La barre d'outil est une collection de boutons sur le bord haut de la fenêtre principale de Zettlr.

#### Editeur

L'"éditeur" se référe en général à l'instance principale de CodeMirror lancée dans la fenêtre principale de Zettlr. Cela ne signifie pas que d'autres instances de CodeMirror sont ouvertes, par exemple, dans la boite de dialogue du CSS Custom, ou dans la fenêtre de l'aperçu.

#### Aperçu

Similaire à la fonction d'aperçu de macOS, cette plus petite fenêtre (native)qui active l'aperçu d'un fichier sans pouvoir l'éditer.

#### Outils de développements

Les outils de développement sont ceux que vous pouvez ouvrir dans la fenêtre de Zettlr et qui active le debug de l'IHM. Ils fonctionnent de la même façon que les devtools qui sont fournis avec les navigateurs Chrome et peuvent être ouverts qye le mode debug est activé.

#### Thème

Alors qu'un thème dans le contexte de Zettlr signifie la même chose que n'importe où, nous l'avons inclus ici pour souligner le fait qu'un fichier CSS supplémentaire est chargé : `geometry.css`. Ce dernier fournit la disposition géométrique et la taille des éléments, alors que le thème ne fournit généralement que la coloration.
