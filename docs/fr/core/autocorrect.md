# Auto-correction et guillemets magiques

L'auto-correction (_AutoCorrect_) est une fonctionnalité bien connue qui est aussi prise en charge dans Zettlr.
Une pléthore de paramètres est disponible pour personnaliser la façon dont elle fonctionne.
Vous pouvez l'activer et la désactiver dans les [préférences](../reference/settings.md).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iPRDPTtJuCA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Auto-correction

L'auto-correction fonctionne en vérifiant constamment ce que vous tapez, et dès qu'elle rencontre une séquence de caractères de la table de substitution, elle va remplacer cette séquence par la chaîne de caractères correspondante de la table.

Zettlr est fourni avec une table de substitution pour l'auto-correction qui couvre la majorité des usages courants, tels que le remplacement de deux tirets (--) par un tiret semi-cadratin (–).
Vous pouvez ajouter, modifier et supprimer des remplacements dans les préférences du programe.
La colonne de gauche contient les caractères que l'application va chercher, alors que la colonne de droite contient leur remplacement.

L'auto-correction possède deux variantes : vous pouvez choisir le mode « Word » ou le mode « LibreOffice », suivant le logiciel de traitement de texte auquel vous êtes plus habitué·e.
La différence entre les deux modes réside dans leur déclenchement.
Le mode « Word » est généralement plus agressif et essaiera immédiatement de remplacer chaque séquence de caractères qu'il rencontre.
Le mode « LibreOffice » nécessite d'appuyer sur `Espace` ou `Entrée` avant qu'il essaie de remplacer quelque-chose.
Vous pouvez toujours annuler un remplacement en appuyant sur la touche de retour arrière (_Backspace_).

> Nous recommendons le mode « LibreOffice », car il permet d'empêcher préventivement un remplacement en appuyant sur `Shift+Espace` au lieu d'`Espace` et `Shift+Entrée` au lieu d'`Entrée`.

## Guillemets magiques

Les guillemets magiques sont une extension qui facilite l'écriture de guillemets typographiquement corrects, au lieu des caractères par défaut facilement accessibles (" et ').
Vous pouvez soit les choisir depuis une liste déroulante, ou sélectionner un ensemble pré-défini pour un petit nombre de langues en appuyant sur le bouton correspondant dans les préférences.
Choisir la première option (ou le bouton « Aucun ») restaure les guillemets par défaut.

> Les guillemets magiques sont activés tant que l'auto-correction est activée.
Si vous choisissez de désactiver l'auto-correction, cela désactivera automatiquement la réécriture des guillemets.
Pour désactiver les guillemets magiques tout en conservant la fonctionnalité d'auto-correction, choississez les guillemets par défaut comme expliqué ci-dessus.
