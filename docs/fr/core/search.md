# Recherche

L'un des grands avantages du passage à la notation pour la rédaction de documents est que les documents eux-mêmes sont consultables grâce à la recherche intégrée de votre système d'exploitation (par exemple Cortana sur Windows, Spotlight sur MacOS ou Dash sur les systèmes Linux). Mais bien sûr, cela aide beaucoup si vous n'avez pas à quitter le programme lorsque vous cherchez quelque chose. C'est là que la recherche entre en jeu ! Il y a en fait trois fonctions de recherche distinctes : Une fonction de filtrage rapide que vous utilisez chaque fois que vous sélectionnez un autre répertoire dans la liste de gauche, une recherche dans l'ensemble du document et une recherche globale.

## Filtrage des fichiers

La première fonction a déjà été mentionnée à plusieurs reprises. Comme la liste de prévisualisation n'affiche que tous les fichiers à l'intérieur d'un répertoire donné et de tous ses sous-répertoires, il suffit de sélectionner différents répertoires pour réduire la liste de tous les fichiers à ceux que vous devez voir. Ou bien, sélectionnez un répertoire racine pour obtenir la liste complète.

## Recherche dans les dossiers

Si vous recherchez des phrases ou des mots spécifiques dans votre fichier actuellement ouvert, il vous suffit d'appuyer sur `Cmd/Ctrl+F`. Un petit popup s'ouvrira sous le symbole d'agrandissement et vous fournira les options de recherche et de remplacement courantes. Il suffit de taper quelque chose et d'appuyer sur `Enter` de manière répétée pour parcourir les correspondances. Pressez `ESC` ou cliquez en dehors du popup pour fermer la recherche.

> **Un conseil** : Vous pouvez également utiliser de puissantes expressions régulières pour vos recherches. Zettlr effectue par défaut une recherche par défaut, mais lorsqu'une expression régulière est détectée (c'est-à-dire que votre recherche est encapsulée par des barres obliques), il effectue une recherche RegExp. Une fois que Zettlr a détecté une expression régulière, le champ de recherche changera sa police en monospace pour vous aider à écrire votre expression régulière. Pour rechercher tous les chiffres, par exemple, vous devez rechercher `/\d+/`. [Pour en savoir plus sur les expressions régulières JavaScript, cliquez ici](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Si vous appuyez `Enter` pendant que la saisie de remplacement est ciblée, Zettlr remplacera le résultat de la recherche actuelle et mettra automatiquement en évidence la prochaine occurrence de votre terme de recherche. Appuyez sur `Enter` de manière répétée pour remplacer les occurrences multiples. Si vous souhaitez remplacer toutes les occurrences en une seule fois, vous pouvez cliquer sur `Alt+Enter` tandis que la saisie de remplacement est sélectionnée.

> **Conseil** : Tout comme dans les autres éditeurs, vous pouvez utiliser des variables lors d'une recherche avec une expression régulière. Si vous recherchez quelque chose à l'aide d'une expression régulière qui contient au moins un groupe de capture, vous pouvez utiliser la variable `$1` à l'intérieur de votre texte de remplacement. Ces variables seront remplacées par le contenu réel trouvé des groupes de capture. Les occurrences multiples de la variable seront également remplacées. Le nombre après le `\$` se réfère à l'index du groupe de capture (le deuxième groupe de capture sera traité en utilisant `\$2`, et ainsi de suite). [Pour en savoir plus sur les expressions régulières JavaScript, cliquez ici](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Bien entendu, vous pouvez également utiliser la recherche dans les fenêtres Quicklook. Il vous suffit donc de cliquer sur le contenu de la fenêtre Quicklook que vous souhaitez rechercher (pour lui donner du relief et éviter que `Cmd/Ctrl+F` déclenche la recherche sur votre dossier principal) et appuyez sur `Cmd/Ctrl+F` pour commencer la recherche.

## Recherche globale

L'aspect le plus important de la recherche est, en fait, la recherche globale que vous pouvez déclencher en tapant `Cmd/Ctrl+Shift+F`. La saisie de recherche dans la barre d'outils sera ciblée, ce qui vous permettra de rechercher un sous-ensemble spécifique de fichiers dans votre répertoire racine : seuls ceux qui sont actuellement visibles dans le volet. Cela signifie que vous pouvez choisir les fichiers qui seront recherchés en sélectionnant un répertoire approprié dans la liste --- utilisez la fonction de filtrage à votre avantage !

Si vous souhaitez rechercher _tous_ les fichiers à la fois, sélectionnez un répertoire racine. Si vous ne souhaitez rechercher que dans un répertoire spécifique, sélectionnez celui-ci avant de lancer la recherche. Dans la plupart des cas, vous avez une idée de l'endroit où se trouve le texte dont vous avez besoin. Par exemple, si vous recherchez une citation sur un certain sujet qui peut être cité dans la recherche scientifique, vous ne voudrez peut-être pas chercher dans toutes vos pensées et idées, mais limiter votre recherche au répertoire où vous stockez vos extraits de textes et d'articles scientifiques.

La recherche elle-même est assez puissante. Vous pouvez utiliser plusieurs opérateurs différents pour spécifier exactement ce que vous recherchez :

* **AND-operator:** tapez `Boat Ship` pour n'afficher que les fichiers qui contiennent _à la fois_ le terme " boat " et le terme " ship ". Chaque espace est interprété comme "ET"..
* **OR-operator:** tapez `Boat | Ship` (| est le "Pipe-operator", inséré par `Alt+7` sur macOS ou `AltGr+<` sur d'autres systèmes) pour sélectionner tous les fichiers qui contiennent _soit_ le mot " boat " _soit_ le mot " ship"
* **Exact-Match-operator:** tapez `"Boat Ship"` pour rechercher cette expression exacte dans vos fichiers.
* **NOT-operator:** tapez `!Boat` pour rechercher uniquement les fichiers _ne_ contenant _pas_ ce terme. Fonctionne également avec des correspondances exactes : `!"Boat Ship"` excluerait tous les fichiers contenant l'expression exacte "bateau".

> **Attention** : alors que les opérateurs AND, OR et "correspondance exacte" travaillent en attribuant des poids (un fichier qui répond à tous les critères de recherche sera coloré en clair, alors que les fichiers qui ne correspondent pas à tous les termes de recherche ont un fond délavé), l'opérateur NOT exclut définitivement les fichiers. Ainsi, alors qu'une recherche de `boat ship` inclurait également les fichiers contenant un seul des deux termes (bien qu'avec un poids beaucoup plus faible), une recherche `!boat ship` exclura définitivement tous les fichiers contenant le mot boat.exclura définitivement tous les fichiers contenant le mot "boat".

Bien sûr, vous pouvez enchaîner tous ces opérateurs. Ainsi, vous pouvez rechercher `"Boat Ship" | vessel captain` pour afficher uniquement les fichiers qui contiennent soit l'expression exacte "Boat Ship", soit le mot "vessel", et qui comprennent également le mot "captain".

Ne vous inquiétez pas si vous ne vous souvenez pas du mot complet que vous recherchez : Zettlr essaiera de faire correspondre vos termes de recherche à des mots partiels, ainsi le mot " trooper " correspondra aussi à " Stromtrooper " ainsi qu'à " Troopership ", tout comme l'expression " Boat Ship " correspondra aussi à un " Steamboat Ship ". **Les recherches sont également insensibles à la casse**. Vous n'avez donc pas à vous soucier des petites fautes de frappe que vous pourriez avoir dans certains fichiers.

Lorsque Zettlr effectue une recherche, il affiche un indicateur de recherche à droite de la boîte de recherche. Une fois la recherche effectuée, il colorera tous vos fichiers. Plus ils sont verts, plus ils sont pertinents (c'est-à-dire que plus le fichier contient de correspondances de haute qualité). Il s'agit d'une sorte de **carte de chaleur pour les résultats de recherche** qui vous permet d'identifier facilement les dossiers pertinents pour votre recherche.

> Veuillez noter que Zettlr cachera tous les fichiers dans lesquels les termes de recherche n'ont jamais correspondu, ainsi que tous les répertoires.

Pour obtenir de meilleurs résultats, Zettlr pondérera différemment les différents types de correspondance. Par exemple, une correspondance exacte dans le titre peut être un signe que le fichier est très pertinent pour vous. C'est pourquoi Zettlr pèsera plus lourd que les autres correspondances. De plus, si un terme de recherche a été trouvé en tenant compte de la casse, ce résultat sera plus élevé que si le terme n'a été trouvé qu'en tenant compte de la casse (c'est-à-dire qu'il y a eu une différence de capitalisation).

Pour trouver l'endroit exact où votre recherche correspond, sélectionnez un fichier et Zettlr surlignera automatiquement tous les résultats en jaune vif facile à trouver. De plus, la barre de défilement située tout à droite de la fenêtre affichera des marqueurs pour indiquer à quelles positions du document se trouvent les termes de votre recherche.

## Sortir de la recherche globale

La recherche mondiale est à bien des égards persistante. Ainsi, vous pouvez vous promener dans les résultats de votre recherche sans avoir à craindre qu'une action ne sorte accidentellement de la recherche. Cela est particulièrement utile dans les grandes listes de fichiers, où la recherche peut prendre du temps. Néanmoins, _il y a_ des moyens de sortir d'une recherche globale.

Faites l'une des choses suivantes pour sortir de la recherche et afficher à nouveau normalement tous les fichiers :

* Pendant que la recherche est en saisie, appuyez sur `ESC`. (Vous pouvez la retrouver avec `Cmd/Ctrl+Shift+F`)
* Cliquez-droit le `x` sur le côté droit de la boîte de recherche.
* Sélectionnez un autre répertoire dans l'arborescence.
