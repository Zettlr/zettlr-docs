# Dictionnaires et vérification orthographique

Comme toute application d'écriture moderne, Zettlr est doté d'un puissant moteur de vérification orthographique. Il est désactivé par défaut, car de nombreux utilisateurs souhaitent encore séparer la vérification orthographique du processus d'écriture proprement dit, mais vous pouvez l'activer facilement. De plus, Zettlr vous permet de vérifier l'orthographe de plusieurs langues à la fois, ce qui en fait l'outil idéal pour écrire des textes bilingues (par exemple, un article de journal en anglais avec quelques citations en allemand).

## Activer la vérification orthographique

Pour activer la vérification orthographique, ouvrez les préférences en utilisant l'élément de menu, le bouton de la barre d'outils ou en appuyant sur `Cmd/Ctrl+,`. Dans l'onglet Éditeur, vous pouvez alors sélectionner tous les dictionnaires que vous souhaitez activer. À gauche, il y a une liste affichant tous les dictionnaires disponibles. Cliquez sur l'un d'entre eux pour le déplacer vers la droite, où des rubans verts indiquent tous les dictionnaires actifs. Cliquez sur l'un de ces rubans verts pour désactiver à nouveau le dictionnaire.

Vous pouvez filtrer la liste des dictionnaires disponibles en tapant une clé de recherche dans le champ de texte supérieur. Zettlr masquera automatiquement tous les dictionnaires dont le nom ne contient pas votre chaîne de recherche. Supprimez les lettres du champ de recherche pour afficher à nouveau tous les dictionnaires.

Après avoir enregistré les paramètres avec votre nouvelle configuration de vérification orthographique, Zettlr commencera automatiquement à charger tous les dictionnaires. Il se peut que vous subissiez un certain retard pendant que Zettlr démarre les dictionnaires ; en particulier avec les gros dictionnaires tels que les langues italienne ou allemande, cela peut prendre un certain temps. Une fois que vous aurez quitté l'application, Zettlr chargera les dictionnaires à chaque démarrage après un court délai.

## Désactiver la vérification orthographique

Pour désactiver à nouveau la vérification orthographique, il suffit de supprimer tous les dictionnaires actifs en cliquant sur tous les rubans verts sur le côté droit de l'onglet Éditeur dans la fenêtre des préférences. Si aucun n'est activé, Zettlr ne tentera pas de vérifier l'orthographe de vos textes.

## Dictionnaire personnalisé

À partir de la version `1.3.0`, Zettlr permet d'ajouter certains mots à votre dictionnaire défini par l'utilisateur. Ceci est particulièrement utile pour les noms, car vous pouvez alors les marquer comme corrects pour supprimer la petite ligne rouge sous ces noms. Pour ajouter un mot au dictionnaire utilisateur, il suffit de faire un clic droit sur un mot ou un nom marqué, et de sélectionner "Ajouter au dictionnaire". Zettlr ne marquera alors plus jamais ce mot comme erroné.

## Ajouter de nouveaux dictionnaires

Bien que Zettlr soit livré avec plusieurs dictionnaires à l'installation, vous pouvez ajouter de nouveaux dictionnaires pour les langues dans lesquelles vous écrivez. Pour ajouter de tels dictionnaires, vous devrez rechercher des dictionnaires compatibles avec Hunspell. En principe, ceux-ci sont constitués de dossiers contenant deux fichiers -- un fichier `.dic` et un fichier `.aff`. Le fichier `.dic`contient tous les mots d'une langue avec ce qu'on appelle des affixes, par exemple des petits drapeaux qui indiquent à l'algorithme qu'un certain mot, par exemple, peut aussi avoir une terminaison différente (prenez par exemple la terminaison du mot -- alors que la terminaison est "end", il peut y avoir à la fois les suffixes "ends" et "ending" disponibles dans la langue -- le drapeau affixe indiquerait alors "ce mot peut aussi avoir la "fin" !). Le fichier `.aff` contient les définitions de ces drapeaux.

Alors pour ajouter ces dictionnaires, allez en ligne pour en chercher. Un bon point de départ est [ce dépôt par wooorm, un utilisateur GitHub](https://github.com/wooorm/dictionaries), qui comporte beaucoup de langues. Il suffit de télécharger l'un des dossiers sur votre ordinateur. Ensuite, dans Zettlr, cliquez sur Fichier -> "Importer un dictionnaire ...". Cela ouvrira le navigateur de fichiers de votre ordinateur avec le dossier `dict` dans Zettlr ouvert. Copiez tout le dossier du dictionnaire que vous venez de télécharger dans le dossier `dict`. Ensuite, vous pouvez sélectionner ce dictionnaire dans les paramètres.

N'oubliez pas que Zettlr effectuera quelques tests de base pour déterminer si un dictionnaire est valide ou non. Pour que Zettlr affiche le dictionnaire et puisse le sélectionner, le dictionnaire doit suivre les règles suivantes :

1. Le dossier contenant les fichiers `.dic`et `.aff` doit être nommé en utilisant la balise correspondante [BCP-47](https://tools.ietf.org/html/bcp47) de la langue que le dictionnaire contient. Bien que vous ne connaissiez peut-être pas le terme "BCP-47", il s'agit simplement de la balise de langue commune, ainsi par exemple un dictionnaire allemand serait nommé `de-DE` (pour l'allemand) ou `de-CH` (pour le suisse allemand), ou simplement `it` (pour l'italien). Une liste complète de [toutes les langues disponibles peut être trouvée ici](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
2. Dans ce dossier, au moins deux fichiers doivent être présents : un fichier `.dic` et un fichier `.aff`. Ceux-ci doivent être nommés soit à l'aide de la balise BCP-47 du dossier, soit `index.dic`/`index.aff`.
3. Le dossier du dictionnaire peut contenir d'autres fichiers (tels qu'une liste d'auteurs ou une LICENCE). Ceux-ci seront ignorés.

En résumé, Zettlr s'assurera de la validité d'un dictionnaire en vérifiant l'existence des chemins suivants :

- `bcp-47/bcp-47.dic` et `bcp-47/bcp-47.aff` _ou_
- `bcp-47/index.dic` et `bcp-47/index.aff`

> Attention : les algorithmes hunspell implémentés en JavaScript ne sont pas encore aussi puissants que l'algorithme principal utilisé par LibreOffice, il se peut donc très bien que certains dictionnaires s'avèrent tout simplement trop volumineux pour être chargés. Si Zettlr se bloque après le chargement d'un dictionnaire, il suffit de quitter l'application de force et de s'assurer que le dictionnaire est désélectionné.