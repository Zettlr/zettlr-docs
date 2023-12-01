# Impliquez-vous

Vous voulez améliorer Zettlr ? Cool ! Que vous soyez un utilisateur,  que souhaitiez proposer une nouvelle traduction ou vous voulez vous  lancer dans le développement de l'application, vous êtes au bon endroit !

## Ressources générales

Zettlr a une communauté dynamique qui s’entraide partout sur le net. La liste suivante contient les points de départ courants pour tout problème que vous pourriez rencontrer.

* [Zettlr Discord](https://discord.com/invite/PcfS3DM9Xj) — Le Zettlr Discord est un lieu pour les Discordiens (il ne semble pas y avoir de terme officiel).
* [Subreddit Zettlr](https://www.reddit.com/r/Zettlr) — Le subreddit Zettlr est destiné aux Redditors de la communauté.
* [Le compte officiel Mastodon](https://fosstodon.org/@zettlr) – Ici, vous pouvez suivre les mises à jour de l'application en temps réel. C'est le seul endroit où nous annonçons régulièrement tout ce que nous faisons. De plus, nous participons à la plupart des discussions, donc si vous avez des questions, vous pouvez les déposer ici.
* [Le compte Twitter officiel](https://www.twitter.com/Zettlr) — Identique à notre compte Mastodon.
* [Notre chaîne YouTube](https://www.youtube.com/c/Zettlr) — Si vous êtes plutôt du genre visuel, vous pouvez trouver quelques vidéos d'introduction ici. Notez que nous ne maintenons pas régulièrement la chaîne, les vidéos peuvent donc être obsolètes.
* [GitHub Discussions](https://github.com/Zettlr/Zettlr/discussions) — une version légèrement plus moderne des forums Internet classiques.
* [Le suivi des problèmes GitHub](https://github.com/Zettlr/Zettlr/issues) — C'est au cœur de nos efforts pour améliorer l'application. Si vous repérez un bug, avez une suggestion ou souhaitez proposer une fonctionnalité, voici le bon endroit. Néanmoins, surtout lorsqu'il s'agit de questions concernant le flux de travail utilisateur ou les nouvelles fonctionnalités, **il est préférable de discuter d'abord de vos idées dans la section Discussions GitHub ou sur Discord**.

## Contributions des utilisateurs

En tant qu'utilisateur souhaitant une application d'écriture esthétique et efficace, soyez simplement attentif à toute erreur que l'application pourrait produire et, plus important encore, dites-nous comment rendre le flux de travail plus efficace ! Nous ne pouvons juger que par notre propre flux de travail, donc pour améliorer l'application au profit de tous , nous devons savoir comment. N'oubliez jamais : nous ne pouvons pas créer un flux de travail tel quel dans la conception, mais devons faire des concessions à d'autres flux de travail, mais nous essaierons de rendre les fonctionnalités plus accessibles ou de rendre le fonctionnement plus fluide tant que les compromis entre les flux de travail existants et les nouveaux les suggestions ne sont pas trop difficiles.

Veuillez signaler les bogues en ouvrant des problèmes sur le repository GitHub. De cette façon, nous sommes en mesure de répondre rapidement au rapport et de traiter directement le problème.

## Traduire l'application

Nous apprécions toute aide pour traduire l'application dans toutes les langues de cette planète. Zettlr utilise le système « gettext » pour traduire le contenu.

Les traductions sont conservées [à côté du code source de cette application dans notre référentiel](https://github.com/Zettlr/Zettlr/tree/develop/static/lang). Pour traduire, vous aurez besoin d’un compte GitHub, mais cela ne nécessite aucune connaissance technique.

!!! note

     Si vous possédez des connaissances techniques, vous pouvez également ignorer les explications ci-dessous et [cloner le référentiel](https://github.com/Zettlr/Zettlr) directement.

Pour améliorer une traduction, rendez-vous dans le dossier `static/lang` et téléchargez le fichier `*.po` qui correspond au code de langue que vous souhaitez améliorer (par exemple, `pt-BR.po` pour le portugais brésilien) .

Après avoir téléchargé le fichier, vous aurez besoin d'un programme pour modifier les traductions. Nous recommandons l'application [POedit](https://poedit.net/). Il propose également une version « pro », mais vous n’en aurez pas besoin pour traduire.

Une fois que vous avez modifié la traduction à votre guise, il est temps d'ajouter les traductions à l'application. Pour ce faire, suivez les étapes de [cet excellent guide sur la façon de proposer des modifications sur GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing -fichiers-dans-un-autre-référentiel-d'utilisateurs).

### Créer une nouvelle traduction

Si vous souhaitez créer une traduction pour une langue qui n'existe pas encore, le processus est un peu plus complexe.

!!! note

     Si vous ne faites pas confiance à vos propres compétences pour créer une nouvelle traduction, veuillez nous contacter. Nous nous ferons un plaisir de créer le fichier correspondant pour vous afin que vous puissiez ensuite suivre les étapes plus simples ci-dessus.

1. Pour créer un nouveau fichier de traduction, assurez-vous que le système « gettext » est installé sur votre ordinateur
2. Clonez le référentiel : `git clone https://github.com/Zettlr/Zettlr.git`
3. Déplacez-vous dans le répertoire : `cd Zettlr`
4. Exécutez la commande d'initialisation en remplaçant « <lang> » par le code de langue correspondant, par exemple « pt-BR » ou « de-DE » : `msginit --input=static/i18n.pot --locale=<lang > --output=static/lang/<lang>.po`
5. Un nouveau fichier appelé `<lang>.po` aurait dû apparaître dans le répertoire de traduction. Procédez à la traduction, puis ouvrez un PR.

## Développement

Pour commencer à développer, [forkez le repository ](https://github.com/Zettlr/Zettlr), travaillez sur vos fonctionnalités, corrections de bugs, etc., puis ouvrez les pull-requests. N'oubliez pas de **ouvrir uniquement les PR sur la branche de développement !** La branche principale n'est poussée qu'une fois qu'une nouvelle version est en cours de rédaction. Ainsi, si vous développez une nouvelle fonctionnalité et qu'une nouvelle version de Zettlr est publiée, vous pouvez simplement extraire le « maître en amont » pour être à nouveau à jour et continuer à écrire votre fonctionnalité.

Si vous commencez à travailler sur quelque chose, n'oubliez pas de l'annoncer sur le système de suivi des problèmes afin que nous sachions sur quoi nous travaillons.

!!! note

     [Le guide de développement peut être trouvé dans notre README](https://github.com/Zettlr/Zettlr#contributing-code), comprenant les instructions de configuration et une documentation des commandes disponibles.



