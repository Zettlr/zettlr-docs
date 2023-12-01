# Résolution des problèmes

Comme tout logiciel, Zettlr peut poser des problèmes de temps en temps. Cette page contient des instructions sur la manière de résoudre bon nombre de ces problèmes. Nous avons des années d’expérience et, à ce titre, les options répertoriées ci-dessous devraient fonctionner dans la plupart des cas.

!!! note

     Veuillez essayer les étapes répertoriées ici et consulter d'abord [la FAQ](../reference/faq.md) si vous rencontrez des problèmes. Si ces étapes ne résolvent pas votre problème, veuillez [demander à notre communauté] (get-involved.md/#general-resources). Si notre communauté ne peut pas non plus vous aider, veuillez ouvrir un ticket sur GitHub.


## 1. Essayez de l'éteindre et de le rallumer

De nombreux problèmes peuvent être résolus simplement en quittant Zettlr et en le redémarrant. Parfois, un redémarrage de votre ordinateur peut également être utile.

!!! note

     Si vous pouvez reproduire le problème de manière fiable, c'est-à-dire : le problème _toujours_ apparaît après que vous ayez effectué une action spécifique, cela indique que vous avez trouvé un bogue reproductible. Dans ce cas, veuillez nous fournir ces étapes lorsque vous ouvrez un ticket sur github.

## 2. Installez la version la plus récente

De nombreux problèmes sont résolus dans les versions plus récentes. Si vous rencontrez un problème, assurez-vous que la version la plus récente est installée.

## 3. Essayez de vider le cache

Parfois, Zettlr peut rencontrer un problème, ce qui peut corrompre le cache FSAL. Cela peut être ennuyeux, car cela signifie qu’un comportement indésirable persiste lors des redémarrages. Un remède très simple à ces instances consiste à vider le cache FSAL. Pour vider le cache, dans le menu, cliquez simplement sur "Aide" &rarr; "Effacer le cache FSAL…" et confirmez pour redémarrer l'application.

L'application redémarrera immédiatement et recréera le cache FSAL. Surtout si vous avez un ordinateur plus lent, un disque plus lent ou si vous avez simplement chargé de nombreux fichiers, ce redémarrage prendra un certain temps. Zettlr ne vous montrera la fenêtre de l'application qu'une fois la recréation du cache FSAL terminée, cela peut donc prendre plusieurs secondes, voire plus. Soyez patient pendant ce processus – le prochain redémarrage de l’application sera à nouveau rapide.

!!! note

     Alternativement, il existe deux manières manuelles de faire la même chose, que nous énumérons ici uniquement au cas où vous en auriez besoin. Dans les deux cas, assurez-vous d’abord que Zettlr est fermé. Ensuite, pour l'option (a), rendez-vous dans le dossier de configuration de Zettlr et supprimez simplement le répertoire « fsal/cache ». L'option (b) consiste à démarrer Zettlr à partir de la ligne de commande avec l'indicateur `--clear-cache`.

## 4. Essayez de réinitialiser l'application

Parfois, l’application semble complètement en panne (elle ne démarre même pas, par exemple). Nous avons remarqué que parfois le cache du framework Electron sous-jacent peut également provoquer un problème. Comme nous n’avons aucun contrôle sur le cache du framework, il est parfois utile de supprimer ces fichiers.

Zettlr conserve les paramètres locaux et les métadonnées dans le même dossier qu'Electron conserve ses fichiers. Vous souhaiterez peut-être réinitialiser, lire ou modifier ces données dans certains cas (par exemple, si votre installation semble être interrompue, si vous avez accidentellement chargé un mauvais espace de travail, etc.).

Ces données se trouvent dans le _chemin des données d'application_ dont l'emplacement dépend de votre système d'exploitation :

* **Windows :** `C:\Users\<votre nom d'utilisateur>\AppData\Roaming\Zettlr` (notez qu'AppData est un dossier caché, vous souhaiterez donc peut-être modifier les paramètres de l'Explorateur pour qu'il apparaisse)
* **macOS :** `/Users/<votre nom d'utilisateur>/Library/Application Support/Zettlr` (ouvrez une fenêtre du Finder, maintenez la touche "Alt" enfoncée tout en ouvrant le menu "Go" et cliquez sur "Bibliothèque" qui apparaît. " entrée)
* **Linux :** `/home/<votre nom d'utilisateur>/.config/Zettlr` (notez que `.config` est un dossier caché, vous souhaiterez donc peut-être utiliser une ligne de commande pour l'ouvrir)

Si vous souhaitez réinitialiser complètement votre installation Zettlr locale, suivez ces étapes :

1. Assurez-vous d'abord que l'application est fermée (dans certains cas d'erreur, il existe un processus "zombie", que vous pouvez fermer depuis votre gestionnaire de tâches ou votre moniteur d'activité)
2. Assurez-vous de sauvegarder éventuellement ces fichiers et dossiers :
     * `stats.json` (vos statistiques d'écriture)
     * `config.json` (les paramètres de l'application — y compris l'emplacement de vos espaces de travail et des fichiers ouverts)
     * `custom.css` (votre CSS personnalisé, le cas échéant)
     * `tags.json` (vos balises à code couleur)
     * `targets.json` (vos cibles d'écriture)
     * `user.dic` (votre propre dictionnaire personnalisé)
     * `snippets` (un dossier de vos Snippets)
     * `profils` (un dossier de vos profils)
3. Sélectionnez tout ce qui se trouve dans ce répertoire et supprimez-le.
4. Redémarrez l'application. Certains de ces fichiers seront recréés.

# 5. Demandez de l'aide à la communauté

Si aucune des étapes ci-dessus ne semble vous aider, vous pouvez demander à la communauté. Parfois, quelqu'un d'autre a rencontré un problème similaire et pourra peut-être vous aider. La communauté est active à la fois sur [Discord](https://discord.gg/PcfS3DM9Xj) et sur le [subreddit Zettlr](https://www.reddit.com/r/Zettlr).

## 6. Ouvrez un ticket sur GitHub

Si la communauté ne peut pas vous aider, ou s'il semble s'agir d'un véritable bogue, veuillez ouvrir un ticket sur GitHub. Assurez-vous d'inclure autant d'informations que possible afin que nous puissions résoudre rapidement le problème.

!!! note

     Si vous ouvrez un ticket sur GitHub, assurez-vous de recevoir des notifications. Nous avons presque toujours des questions complémentaires concernant votre problème. Plus vite vous répondez, plus vite nous pourrons résoudre votre problème. Si personne ne répond à votre problème, cela peut indiquer que nous ne savons pas comment vous aider. Dans ce cas, il peut être utile de reformuler le problème ou d'ajouter des informations supplémentaires.

## 7. Revenir à une version précédente

Parfois, un problème peut nuire à votre productivité. Certains utilisateurs décident de revenir à une version précédente jusqu'à ce que nous soyons en mesure de résoudre le problème. Nous ne le recommandons pas, car cela peut entraîner de nombreux autres problèmes, alors faites preuve de jugement.

!!! avertissement

     Sauvegardez toujours tout avant de revenir ! N'exécutez jamais simplement une ancienne version. Cela peut entraîner une perte de données ou corrompre les fichiers de configuration dont Zettlr a besoin.

Bien que notre page d'accueil affiche uniquement la dernière version stable, vous pouvez toujours trouver toutes les versions (même les plus anciennes) sur [notre page des versions GitHub](https://github.com/Zettlr/Zettlr/releases).

Avant d'installer une ancienne version, vous devez d'abord effectuer une sauvegarde et garantir une installation propre. Surtout lorsque nous mettons à jour la configuration utilisée par l'application, les anciennes versions peuvent carrément planter car elles ne comprennent pas le format (plus récent). Par conséquent, revenez à la troisième étape et supprimez définitivement l’intégralité du répertoire (après avoir sauvegardé les fichiers). Cela garantit que l’ancienne version s’exécutera dès la première tentative.
