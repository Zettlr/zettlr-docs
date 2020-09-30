# En-têtes YAML

Comme Pandoc, Zettlr prend en charge les en-têtes YAML (_YAML frontmatters_) pour vos fichiers Markdown.
Un en-tête YAML, appelé [« bloc de métadonnées »](https://pandoc.org/MANUAL.html#metadata-blocks) dans le jargon de Pandoc, est une série de métavariables qui fournissent des informations sur le fichiers qui ne font pas partie du contenu à proprement parler, comme les auteurs, les mots-clés, et le titre.

Un en-tête YAML peut être défini au début du fichier, en le commençant sur la première ligne avec trois tirets (`---`) et en le terminant soit avec trois tirets, ou trois points (la seconde version est la plus courante).

> Astuce : si l'auto-correction est activée, Zettlr va essayer de remplacer les trois points finaux par le caractère de points de suspension, cassant ainsi la mise en valeur syntaxique. Pour empêcher cela, appuyez sur `Shift+Enter` lors de la création d'un nouvel en-tête (si vous utilisez le mode LibreOffice d'auto-correction).

L'en-tête contient du YAML valide et peut être utilisé pour définir toutes sortes de variables, qui peuvent être utiles dans des situations diverses.

## Définir un en-tête YAML

Les en-têtes YAML peuvent être définis n'importe-où dans le document, comme il est courant lors de l'utilisation de Pandoc de concaténer plusieurs fichiers d'entrée en un seul fichier de sortie (c'est ce que fait Zettlr avec l'exportation de projets).
Zettlr prend en charge la mise en valeur syntaxique pour les en-têtes YAML qui apparaîssent en début de fichier.

Un tel en-tête doit commencer par trois tirets (`---`) sur la toute première ligne du document, et se termine soit par trois tirets, ou trois points successifs, seuls sur une ligne. Entre ces deux balises, Zettlr va appliquer la mise en valeur syntaxique pour le YAML.
Pour un guide complet sur le YAML, [consultez les spécifications](https://yaml.org/spec/1.2/spec.html).

Un en-tête YAML valide pour l'exportation par Pandoc pourrait ressembler à ceci :

```yaml
title: "Le titre de votre document"
keywords:
  - un mot-clé
  - un autre
author:
  - l'équipe Zettlr
```

> ** Attention **: Dans la spécification YAML, le caractère de tabulation n'est pas autorisé à être utilisé comme indentation. Pour que votre frontmatter YAML soit valide, utilisez des espaces pour l'indentation.

## Variables d'en-tête

Le but de l'en-tête est de fournir des informations utiles pour Pandoc et Pandoc-citeproc.
Avec un tel en-tête, vous pouvez controler beaucoup d'aspects du rendu du document, tels que la langue à utiliser pour la bibliographie.
Zettlr prend en charge pour le moment un sous-ensemble de ces variable.
La prise en charge pour certaines variables telles que `nocite` ou `lang` augmentera dans les prochaines versions.

Pour une liste complète des variables disponibles et pour plus d'instructions sur leur utilisation, veuillez consulter la
[section sur les blocs de métadonnées](https://pandoc.org/MANUAL.html#metadata-blocks) dans le manuel de Pandoc, ainsi que le [manuel de Pandoc citeproc](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md).

> Astuce : sur cette page, nous n'indiquons que quelques variables importantes pour Pandoc, mais les en-têtes YAML sont aussi pris en charge par d'autres moteurs, tels que [le générateur de sites web statiques Jekyll](https://jekyllrb.com/docs/front-matter/).
Si vous comptez utiliser un autre outil pour convertir vos fichiers Markdown, veuillez consulter leur documentation pour connaître la liste des variables.

### Variable `title`

Elle contient le titre final du document.
C'est utile car les titres de niveau 1, ne sont pas destinés à représenter le _titre_ d'un document, mais plutôt ceux des sections principales du document.

Le contenu de cette variable remplace le nom de fichier à plusieurs endroits dans l'affichage (comme la liste des fichiers et la barre d'onglets).

### Variable `author`

Utilisez cette variable pour indiquer les auteurs du fichier.
Il s'agit d'une liste soit de noms simples, soit de noms d'auteurs avec affiliation.
Cette variable sera utilisée par exemple pour générer la page de titre dans une exportation en PDF.

Les deux variantes suivantes sont possibles :

```yaml
author:
  - Auteur un
  - Auteur deux
author:
  - name: Auteur un
    affiliation: Université X
  - name: Auteur deux
    affiliation: Université Y
```

> Remarquez que l'indentation de la propriété `affiliation` : elle est alignée avec la propriété `name`.
L'indentation des valeurs YAML est importante et vous devez y faire attention.

### Variable `keywords`

Cette variable contient des mots-clés ou étiquettes, qui peuvent être utilisés par Pandoc pour remplir par exemple le champs de mots-clés d'un PDF (remarque : si vous utilisez le modèle par défaut pour l'exportation en PDF, le champs des mots-clés PDF est contrôlé dans les [paramètres PDF](../reference/settings.md#pdf-preferences)).

Ces mots-clés peuvent être utilisés pour contourner la limitation des étiquettes habituelles dans le texte que Zettlr prend en charge : vous pouvez définir ici des mots-clés avec des espaces.
Ces mots-clés sont reconnus par Zettlr et ajoutés à la liste des étiquettes du fichier.

### Variable `lang`

Cette variable contrôle la langue d'affichage pour Pandoc citeproc.
C'est particulièrement utile pour contrôler dans quelle langue la bibliographie du fichier sera affichée.

Si vous ne précisez pas de valeur pour cette variable, la langue pour la bibliographie sera celle par défaut définie dans le style CSL utilisé, ce qui peut être indésirable si le texte est dans une autre langue.

Les valeurs reconnues pour ce champs sont les identifiants de langue définis par la norme [BCP-47](https://tools.ietf.org/html/bcp47) (par exemple, `en-US`, `de-AT` ou `it`).

### Variable `nocite`

Cette variable peut être utilisée pour inclure dans la bibliographie des travaux qui ne sont pas cités explicitement dans le texte du document.
Indiquez les clés de citation correspondantes dans cette variable.

### Variable `reference-section-title`

Utilisez cette variable pour définir le titre de votre bibliographie. Cela a le même effet que si vous terminiez votre document avec un titre de section (par exemple, `## Bibliographie`).

### Variable `notes-after-punctuation`

Cette variable est utilisée pour indiquer à citeproc de déplacer les notes de bas de page avec vos références bibliographiques après la ponctuation
(par exemple, si vous citez `quelque-chose [@citekey].`, cela devient `quelque-chose.[^1]` dans le document exporté).
