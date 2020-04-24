# Lisibilité

Une bonne écriture englobe de nombreux aspects. Outre un contenu concis, vos textes doivent présenter un mélange équilibré de phrases longues et courtes. En outre, vous devez vous abstenir de trop de mots complexes et difficiles. De plus, il est toujours bon de veiller à ce que vos paragraphes ne soient pas trop longs, d'utiliser la forme active et de structurer vos paragraphes en conséquence.

Depuis l'élaboration des textes, la créativité de l'humanité a donné de nombreux conseils pour bien écrire. Si Zettlr vous offre l'environnement idéal pour écrire, vous assurant ainsi une grande _clarté_ de votre texte, vous devez également veiller à sa _lisibilité_. Heureusement, en commençant par `1.4`, Zettlr a un outil pour vous : Le **mode de lisibilité**.

> Veuillez noter que la note de lisibilité n'est qu'un des nombreux critères mesurables qui peuvent vous aider à déterminer la facilité de lecture, mais ne doit pas être prise au sérieux. Si l'algorithme de lisibilité met en évidence une phrase en rouge profond, cela ne signifie pas nécessairement que vous devez réécrire la phrase. Il faut plutôt examiner le contexte de la phrase, dont l'algorithme ne tient pas compte, pour déterminer la qualité d'une phrase. **Nous vous recommandons de commencer par écrire votre texte sans le mode, puis de ne l'activer que pour certains passages dont vous avez le sentiment qu'ils pourraient être difficiles à comprendre.*

## Ce que fait le mode de lisibilité

Dans sa définition la plus courte, le mode de lisibilité est un mode de mise en évidence syntaxique pour CodeMirror qui calcule un score de base pour chacune de vos phrases, vous donnant une première impression de la lisibilité de vos textes. Il surligne chacune de vos phrases avec une couleur allant du vert au rouge, où le vert signifie que la phrase est facile à comprendre, tandis que le rouge signifie que la phrase est difficile à comprendre.

Le mode dispose de quatre algorithmes différents : La [formule Dale-Chall](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula), le [Gunning-Fog index](https://en.wikipedia.org/wiki/Gunning_fog_index), le [Coleman-Liau-index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index), et le [Automated Readability index](http://www.readabilityformulas.com/automated-readability-index.php). Ces derniers diffèrent par ce qu'ils estiment être une écriture difficile à comprendre, et par la "dureté" des notes qu'ils donnent aux phrases. Tous les indices ne constituent pas un bon choix pour chaque texte. Vous devez vous assurer de choisir les algorithmes de manière judicieuse.

### Le Dale-Chall

La formule Dale-Chall a été créée aux premiers jours de la recherche en éducation et a été écrite par Edgar Dale et Jeanne Chall. Son but était de fournir un moyen mesurable de déterminer la lisibilité des textes pour les écoliers. Elle utilise une liste de 3 000 mots faciles à comprendre pour les élèves américains de quatrième année et donne une note qui varie approximativement de 0 à 10, ce qui correspond approximativement aux années d'études nécessaires pour comprendre un texte. Cela signifie que : Si une phrase reçoit un 10, il faut avoir un diplôme universitaire pour comprendre le texte, tandis qu'une phrase avec un 1 pourrait être comprise par des débutants.

**Vous devriez utiliser l'index Dale-Chall, si** vous écrivez des textes pour un public plus large, car l'algorithme vous donnera des crédits de texte pour des phrases courtes et concises sans vous pousser à faire des phrases ridiculement courtes.

### L'index Gunning-Fog

Gunning-Fog a été créé à l'époque des premiers tabloïds et de la lecture facile. En 1952, Robert Gunning cherchait un moyen de rendre mesurables les livres et les journaux qu'il publiait. L'indice Gunning-Fog donne donc un score qui correspond approximativement au nombre d'années d'études nécessaires à un lecteur pour comprendre un texte. Néanmoins, étant un homme d'affaires et donc intéressé par une grande dispersion de ses publications, l'algorithme de Gunning tend à donner des scores élevés même à des textes relativement faciles à comprendre. Si vous passez en revue les différents algorithmes, vous constaterez que Gunning-Fog a tendance à tout peindre en rouge ~~noir~~.

**Vous devriez utiliser l'index Gunning-Fog, si** vous voulez écrire de courts textes publicitaires (par exemple pour des sites web) qui ne peuvent pas compter sur une motivation intrinsèque de base pour lire.

### Index Coleman/Liau

Avec la chute des prix des ordinateurs, les statistiques assistées par ordinateur sont devenues une option populaire pour traiter d'énormes quantités de données et cracher un mesurable significatif. L'indice Coleman/Liau est de cette époque. Il s'agit d'un algorithme qui ne repose pas sur le comptage de syllabes ou sur des listes de "mots difficiles". Par conséquent, l'indice Coleman/Liau est extrêmement précis dans sa mise en œuvre dans Zettlr. Comme les autres, il donne un score qui se rapproche des années d'éducation formelle nécessaires pour comprendre une phrase. De plus, l'indice Coleman/Liau donne des résultats raisonnables et ne vous pousse pas nécessairement à écrire des phrases courtes.

**Vous devriez utiliser l'indice Coleman/Liau, si** vous avez besoin d'une mesure précise de la lisibilité d'un texte. Il ne convient pas aux phrases d'un seul mot, mais il donnera des notes compréhensibles même aux textes plus difficiles à comprendre.

### Indice de lisibilité automatisé (ARI)

L'indice de lisibilité automatisé suit la formule Coleman/Liau, car il s'agit d'une formule plus récente qui permet de calculer des scores de lisibilité sur la base d'une simple analyse statistique. Il s'agit de l'algorithme le plus "indulgent" et produit des résultats qui ne vous incitent pas à réécrire la moitié de votre texte en raison d'une couleur de surlignage rouge.

**Vous devriez utiliser l'indice de lisibilité automatisé, si** vous écrivez des textes plus exigeants tels que des travaux universitaires, car il donnera des notes plus basses même pour certaines phrases difficiles.

### Une remarque sur les "mots difficiles"

Dans sa propre mise en œuvre, Zettlr n'est pas livré avec une liste de mots faciles à comprendre que le Dale-Chall exige. Au lieu de cela, il utilise une approche différente. La liste des mots faciles à comprendre diffère de temps en temps et, évidemment, d'une langue à l'autre. Par conséquent, Zettlr prend en compte un autre mesurable pour déterminer les mots jugés difficiles : la variance de la langue.

Les mots difficiles pour Zettlr sont définis comme étant plus longs que deux fois l'écart type de la longueur moyenne des mots. Comme Coleman et Liau l'ont indiqué dans leur article de 1975 intitulé "A Computer Readability Formula Designed for Machine Scoring", la longueur des mots est un bien meilleur indicateur de la difficulté des mots que le nombre de syllabes. Par conséquent, l'algorithme peut noter des phrases dans n'importe quelle langue d'écriture occidentale, et pas seulement en anglais. Vous pouvez consulter l'explication de l'algorithme [sur notre page consacrée à la lisibilité](https://zettlr.com/readability).

En outre, Zettlr apporte une modification supplémentaire aux algorithmes : alors que les quatre algorithmes ont été conçus pour être appliqués à des textes complets, le mode de lisibilité prendra chaque phrase, une à la fois, et laissera donc de côté leur contexte. En général, cela correspond à peu près à la difficulté de la phrase, mais il est évident qu'il peut marquer en vert certaines phrases qui sont difficiles à comprendre dans leur contexte donné, tandis qu'il marquera en rouge certaines phrases qui correspondent encore au contexte donné.