# Répertoires virtuels

Les répertoires virtuels sont une fonction puissante de Zettlr qui vous permet de trier et de collecter des fichiers arbitrairement. Ils fonctionnent comme une sorte de boîte dans laquelle vous pouvez placer des fichiers manuellement.

## Création de répertoires virtuels

Les répertoires virtuels représentent des sous-ensembles d'un certain répertoire. Vous pouvez les créer en cliquant avec le bouton droit de la souris sur n'importe quel répertoire et en sélectionnant "Nouveau répertoire virtuel...". Vous pouvez ensuite leur donner un nom comme vous le feriez pour n'importe quel autre répertoire. Les mêmes règles s'appliquent aux noms des répertoires virtuels qu'aux répertoires ordinaires, non seulement pour maintenir un aspect cohérent dans toute l'application, mais aussi pour s'assurer que le nom est "[JSON](https://en.wikipedia.org/wiki/JSON)-safe".

Les répertoires virtuels apparaissent alors comme des sous-répertoires du répertoire dans lequel vous les avez créés. Ils resteront au-dessus de tous les autres sous-répertoires, ce qui vous permettra de les retrouver plus facilement. De plus, ils sont indiqués par une petite icône en forme de boîte et sont colorés différemment des répertoires normaux, ce qui indique leur statut particulier.

## Ajouter, supprimer et travailler avec des fichiers

Une fois que vous avez créé un répertoire virtuel, il agit principalement comme un répertoire normal. Vous pouvez y déposer des fichiers, les renommer et les supprimer. Cependant, une restriction notable s'applique :

> Vous ne pouvez ajouter que des fichiers qui résident _à l'intérieur_ du répertoire dans lequel vous avez créé le répertoire virtuel. Comme les répertoires virtuels sont censés représenter des sous-ensembles d'un répertoire spécifique, cela signifie que vous ne pouvez pas ajouter de fichiers qui se trouvent _à l'extérieur_ du répertoire.

Pour supprimer des fichiers, faites un clic droit à l'intérieur du répertoire virtuel (c'est-à-dire un clic droit sur leur représentation en violet, **pas** le fichier lui-même !) puis choisissez l'option "Supprimer du répertoire virtuel".

À l'intérieur du répertoire virtuel, toutes les opérations sur les fichiers sont autorisées, même leur déplacement vers des répertoires différents. Si vous renommez un fichier à l'intérieur d'un répertoire virtuel, cette modification sera répercutée à la fois sur le disque (c'est-à-dire dans leur répertoire "réel") et dans le répertoire virtuel. Si vous supprimez complètement un fichier, il sera également supprimé de tous les répertoires virtuels dans lesquels il a pu se trouver.

## Autres restrictions des répertoires virtuels

En plus de ne pas pouvoir conserver les fichiers en dehors de leur répertoire contenant, un certain nombre de restrictions supplémentaires s'appliquent au travail avec les répertoires virtuels.

1. Vous ne pouvez pas les déplacer car ils sont liés au répertoire dans lequel vous les avez créés.
2. Les répertoires virtuels sont persistants (c'est-à-dire stockés sur le disque), mais bien sûr pas comme une sorte de répertoire. Ils sont stockés dans un soi-disant [Dot-file] (https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory) (_fichier caché" sous linux_), ce qui pose quelques problèmes.
  1. Tout d'abord : sur les systèmes Windows, vous verrez toujours le fichier `.ztr-virtual-directory`, car Windows ne cache pas ces fichiers comme tous les autres systèmes.
  2. Deuxièmement, de nombreux services de cloud computing ne synchronisent pas les fichiers Dot pour des raisons de sécurité (par exemple, vous devez explicitement dire aux clients de Nextcloud de synchroniser les fichiers Dot). Cela signifie que si vous stockez vos fichiers à l'aide d'un service en nuage pour y accéder à partir de plusieurs appareils, il y a de fortes chances que vos répertoires virtuels ne soient pas transférés.