# Migration vers un nouvel ordinateur

Si vous profitez pleinement des fonctionnalités de Zettlr, vous finirez par créer une vaste bibliothèque d'espaces de travail, de notes interconnectées et probablement aussi quelques paramètres personnalisés. Lorsque viendra le temps de remplacer votre ordinateur, ou peut-être de migrer vers un nouveau système d'exploitation, vous souhaiterez évidemment emporter ces données avec vous.

Vous serez heureux de savoir qu'il s'agit d'un processus simple, qui comprend généralement quatre étapes :

1. Sur votre ancienne machine, sauvegardez les paramètres de votre application et les espaces de travail contenant vos notes.
2. Migrez les paramètres de votre application vers la nouvelle machine.
3. Migrez les espaces de travail contenant vos notes vers la nouvelle machine.
4. Reconnectez votre gestionnaire de références (si vous en utilisez un).

## Sauvegardez les données sur votre ancienne machine

### Paramètres de l'application

Si vous avez personnalisé Zettlr et/ou si vous souhaitez conserver les différentes statistiques concernant vos notes, vous souhaiterez peut-être sauvegarder et copier quelques fichiers de configuration sur votre nouvelle machine. Ces données se trouvent dans le _chemin des données d'application_ — un répertoire de configuration dont l'emplacement dépend de votre système d'exploitation :

* **Windows :** `C:\Users\<votre nom d'utilisateur>\AppData\Roaming\Zettlr` (notez qu'AppData est un dossier caché, vous souhaiterez donc peut-être modifier les paramètres de l'Explorateur pour qu'il apparaisse)
* **macOS :** `/Users/<votre nom d'utilisateur>/Library/Application Support/Zettlr` (ouvrez une fenêtre du Finder, maintenez la touche "Alt" enfoncée tout en ouvrant le menu "Go" et cliquez sur "Bibliothèque" qui apparaît. " entrée)
* **Linux :** `/home/<votre nom d'utilisateur>/.config/Zettlr` (notez que `.config` est un dossier caché, vous souhaiterez donc peut-être utiliser une ligne de commande pour l'ouvrir)

Une fois que vous avez localisé ce dossier, enregistrez une copie des fichiers et sous-dossiers suivants pour la déplacer vers votre nouvel ordinateur :

* `stats.json` (vos statistiques d'écriture)
* `config.json` (les paramètres de l'application — voir la _"Note de réassurance"_ ci-dessous)
* `custom.css` (votre CSS personnalisé, le cas échéant)
* `tags.json` (vos balises à code couleur)
* `targets.json` (vos cibles d'écriture)
* `user.dic` (votre propre dictionnaire personnalisé)
* `defaults` (paramètres par défaut pour l'importation et l'exportation de documents)
* « extraits » (tous les extraits que vous avez configurés pour le remplissage automatique du contenu des notes)

### Espaces de travail contenant vos notes

Faites une sauvegarde des dossiers de l'espace de travail contenant vos notes sur votre ancien ordinateur. Si vous avez oublié où ils se trouvent, cliquez avec le bouton droit sur un espace de travail dans le gestionnaire de fichiers de Zettlr et sélectionnez « Révéler dans le Finder/Explorateur/Navigateur de fichiers » (le libellé diffère selon le système d'exploitation) dans le menu contextuel qui apparaît. Cela ouvrira le dossier correspondant dans le navigateur de fichiers de votre ordinateur. Si vous avez besoin de localiser/sauvegarder un fichier de notes individuel — un fichier qui ne fait pas partie d'un espace de travail, par exemple — vous pouvez également cliquer dessus avec le bouton droit dans le gestionnaire de fichiers Zettlr et choisir « Révéler dans le Finder/Explorateur/Navigateur de fichiers » (libellé diffère selon le système d'exploitation) dans le menu contextuel.

## Migrez les paramètres de votre application vers la nouvelle machine

Sur votre nouvelle machine, installez Zettlr et lancez-le. Cela créera le répertoire de configuration dans lequel vous pourrez placer les sauvegardes des paramètres d'application que vous avez effectuées. Une fois l'application lancée, quittez-la à nouveau. Évitez d'ajouter ou d'ouvrir des notes ou des espaces de travail dans Zettlr avant d'avoir copié les anciens paramètres de votre application - si vous le faites, vous devrez les ajouter à nouveau par la suite (voir la "Note de réassurance" ci-dessous).

Une fois que vous avez quitté l'application, copiez toutes les sauvegardes des paramètres d'application que vous souhaitez conserver de votre ancienne installation dans le nouveau répertoire de configuration (voir les conseils ci-dessus pour déterminer le chemin correct des données d'application pour votre système d'exploitation). Si vous êtes invité à indiquer si vous pouvez remplacer les fichiers existants, vous pouvez dire « d'accord ». Vous avez maintenant copié les paramètres de l'application de votre ancien ordinateur.

**Une note de réconfort sur `config.json` :** La sauvegarde que vous avez effectuée de `config.json` contient l'emplacement des différents espaces de travail et notes sur votre _ancien_ ordinateur. Lorsque vous relancez la nouvelle installation de Zettlr après avoir ajouté la sauvegarde de votre ancien fichier `config.json`, elle supprimera automatiquement les chemins vers les espaces de travail de votre ancienne configuration, car ils ne sont plus valides. Dans le même temps, si vous ajoutez des espaces de travail ou des notes à la nouvelle installation de Zettlr avant de restaurer le fichier de sauvegarde « config.json », Zettlr oubliera l'emplacement de ces dossiers et fichiers. Bref, ne vous inquiétez pas lorsque vous êtes accueilli avec une fenêtre vide. Vos notes et espaces de travail seront restaurés dès que vous les rouvrirez à l'étape suivante.

## Migrez les espaces de travail contenant vos notes vers la nouvelle machine

Si Zettlr est toujours fermé sur votre nouvelle machine, lancez-le maintenant. Étant donné que les espaces de travail Zettlr sont simplement des dossiers sur votre ordinateur et que vos notes sont simplement des fichiers texte, déplacer ces données vers un nouvel ordinateur est aussi simple que de copier les sauvegardes de ces dossiers et fichiers de votre ancien ordinateur vers le nouveau. Toutes les métadonnées sur vos notes et les connexions entre elles (ID de note, balises, etc.) sont enregistrées dans les fichiers de notes individuels eux-mêmes, ce qui signifie que ces informations voyagent avec les fichiers.

Une fois que vous avez placé les sauvegardes sur votre nouvelle machine, vous pouvez ajouter chacun des espaces de travail – et les fichiers qu'ils contiennent – à votre nouvelle installation Zettlr en allant simplement dans l'option de menu « Fichier > Ouvrir l'espace de travail… » et en sélectionnant ce dossier d'espace de travail. (ou « Fichier > Ouvrir » si vous devez importer une note individuelle qui ne fait pas partie d'un espace de travail). Notez qu'il s'agit du même processus que vous utiliseriez si vous ajoutiez un autre dossier à Zettlr. Le dossier de l'espace de travail, y compris les notes qu'il contient, sera renseigné dans votre nouvelle installation Zettlr. Les connexions entre les notes seront également conservées, mais si vous avez des liens vers des notes qui se trouvent dans différents espaces de travail, vous devrez vous assurer que vous avez également ouvert ces dossiers d'espace de travail et leur contenu dans votre nouvelle installation de Zettlr.

!!! note

     Surtout lorsque vos espaces de travail sont devenus volumineux, la première ouverture peut prendre un certain temps, car Zettlr examinera chaque fichier et extraira d'abord certaines informations. Ces informations sont ensuite mises en cache, afin que les espaces de travail s'ouvrent beaucoup plus rapidement au prochain démarrage de Zettlr. Si un espace de travail met du temps à apparaître, pas de panique !

## Reconnectez votre gestionnaire de références

Enfin, si vous utilisez Zettlr avec un gestionnaire de références comme Zotero, vous devrez passer par le processus de migration de ce logiciel. Une fois que votre gestionnaire de références est à nouveau opérationnel sur la nouvelle machine, vous pouvez le reconnecter à Zettlr en suivant à nouveau les étapes de la section "[Activation des citations dans Zettlr](https://docs.zettlr.com/en/academic/ citations/#enabling-citations-in-zettlr)" de cette documentation.
