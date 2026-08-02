# YAML Front Matter

Assim como o Pandoc, o Zettlr oferece suporte a assuntos frontais YAML para seus arquivos Markdown. Um [assunto inicial YAML](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block) é uma série de metavariáveis ​​que descrevem informações do documento que normalmente não fazem parte do conteúdo do texto em si, como autores, palavras-chave e um título.

As questões iniciais YAML podem ser definidas no início de um arquivo, começando na primeira linha com três travessões (`---`) e terminando a questão inicial com três travessões ou três pontos (a primeira variante é mais comum). Eles contêm YAML válido e podem ser usados ​​para definir variáveis ​​arbitrárias. Eles são úteis para uma variedade de casos de uso.

**Dica:**

Para obter uma documentação mais concisa sobre o que você pode fazer com assuntos frontais do YAML, consulte a [documentação do Pandoc](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).

## Definindo um assunto frontal YAML

Os termos iniciais do YAML podem ser definidos em qualquer lugar do documento, mas é mais comum definir um bloco de metadados no início de um documento. Zettlr suporta realce de sintaxe para blocos frontais YAML que ocorrem no início do arquivo.

Tal assunto inicial deve começar com três travessões (`---`) na primeira linha do documento e terminar com três travessões ou três pontos em uma única linha. Nesse meio tempo, o Zettlr aplicará o realce de sintaxe YAML. Para obter um guia completo sobre como escrever YAML, [veja a concepção](https://yaml.org/spec/1.2/spec.html).

Um assunto YAML válido para uma exportação Pandoc poderia ser assim:

```yaml
---
title: "Your document's title"
keywords:
  - A keyword
  - Another keyword
author:
  - The Zettlr Team
---
```

**Aviso:**

  O recuo é importante para o código YAML. Você deve usar espaços, não tabulações, e prestar atenção especial a isso.

## Front Matters versus arquivos padrão

Os assuntos frontais podem ser usados ​​para substituir os padrões definidos internamente pelo Pandoc ou por um dos arquivos padrão que o Zettlr usa para exportar seus arquivos. Para obter mais informações, leia a [documentação sobre arquivos padrão](../export/defaults-files.md) para evitar confusão!

## Variáveis ​​importantes do Front Matter

O assunto inicial serve para conter muitas informações úteis tanto para Zettlr quanto para Pandoc. Com esse assunto inicial, você pode controlar muitos aspectos de como seu documento será renderizado, como o local a ser usado ou uma lista de referências que você não cita no texto principal. O Zettlr pode compreender um subconjunto dessas variáveis ​​para mostrar informações adicionais em todo o programa.

Para obter uma lista completa de variáveis ​​​​​​disponíveis e mais instruções sobre como usar essas variáveis, consulte a [seção sobre blocos de metadados](https://pandoc.org/MANUAL.html#metadata-blocks) no manual Pandoc, bem como o [manual do Pandoc citeproc](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md).

**Dica:**

Nesta página listamos apenas algumas variáveis ​​importantes para uso com o Pandoc, mas os assuntos frontais do YAML também são suportados por outros mecanismos, como o [gerador de site estático Jekyll](https://jekyllrb.com/docs/front-matter/). Portanto, se você planeja usar uma ferramenta diferente para converter seus arquivos Markdown, consulte a documentação para obter uma lista de variáveis ​​disponíveis.

**Observação:**

Muitas vezes, o formato das variáveis ​​pode mudar, mesmo entre modelos. Por exemplo, a variável `author` pode receber uma lista de strings ou objetos com nomes, afiliações e endereços de e-mail. Sempre consulte o modelo ou a documentação do mecanismo para aprender sobre a sintaxe correta.

### `title`

Contém o título final do documento. Isto é útil porque os títulos de nível 1 não se destinam, especificamente, a denotar o *título* de um documento, mas sim a ordem superior das posições do documento.

Esta variável substituirá o nome do arquivo em vários locais onde o Zettlr exibe o nome do arquivo (como a lista de arquivos e a barra de guias do documento).

### `author`

Use este campo para especificar os autores de um arquivo. Esta é uma lista de nomes simples ou nomes de autores com afiliações. Esta variável será utilizada, por exemplo, para gerar uma página de título nas exportações de PDF.

Ambas as variantes a seguir podem ser corretas e usadas em modelos diferentes:

```yaml
author:
  - Author one
  - Author two
author:
  - name: Author one
    affiliation: University X
  - name: Author two
    affiliation: University Y
```

**Observação:**

Observe a retirada da propriedade `affiliation`: Alinha-se com a propriedade `name`.

### `keywords` / `tags`

A variável `keywords` contém palavras-chave ou tags que podem ser usadas pelo Pandoc. Muitos outros mecanismos também suportam a variável `tags`. O Zettlr confirmará ambas as propriedades e tratará ambas como garantias válidas de tags para o seu arquivo.

Essas propriedades também podem ser usadas para contornar uma restrição das tags comuns no texto que o Zettlr suporta: Você pode definir palavras-chave arbitrárias que também podem incluir espaços. Essas palavras-chave são reconhecidas pelo Zettlr e adicionadas à lista de tags do arquivo.

### `lang`

Esta variável controla o código do idioma a ser usado durante a exportação (citações, aspas e pontuação). Por padrão, o Pandoc usará `en-US`. Por exemplo, a pontuação do inglês britânico será convertida para os padrões de pontuação do inglês dos EUA durante o processo de exportação, a menos que `lang: en-GB` seja definido.

Também é útil para controlar em qual idioma as referências do seu arquivo aparecerão.  Se você não definir esta variável, o idioma das referências será retirado do campo de idioma padrão no estilo CSL utilizado, o que pode ser indesejável caso seu texto esteja em um idioma diferente.

Os valores válidos para este campo são identificadores de idioma compatíveis com [BCP-47](https://tools.ietf.org/html/bcp47) (por exemplo, `en-US`, `de-AT` ou `it`).

### `bibliography`

Esta variável permite especificar um arquivo de bibliografia apenas para um arquivo específico. Pode ser uma string (arquivo único) ou uma lista de vários arquivos.

O Zettlr mudará automaticamente para essa bibliografia, para sugerir chaves de citação e renderizar a bibliografia na barra lateral. No entanto, observe que se você usar várias bibliotecas, o Zettlr usará apenas a primeira, pois não poderá mesclar vários arquivos.

### `nocite`

Esta variável pode ser usada para incluir em sua lista de referências trabalhos que não foram realmente citados em seu documento. Coloque suas respectivas chaves de citação nesta variável. Lembre-se de colocar o valor entre aspas se ele contiver um `@` (como a maioria das citekeys faz), caso contrário, será interpretado como uma instrução para Pandoc e outras variáveis ​​​​​​no assunto inicial não pode funcionar como esperado (por exemplo, use `nocite: '@citekey'`).

### `reference-section-title`

Use esta variável para definir um título para sua lista de referências. Isso tem o mesmo efeito de quando você encerra o documento com um título (por exemplo, `## References`).

**Observação:**

Pode fazer sentido definir esta variável em um dos arquivos padrão de exportação, já que o Pandoc não adicionará tal cabeçalho por padrão. Em geral, lembre-se de que todas as variáveis ​​descritas aqui também podem ser definidas em um arquivo padrão para que se apliquem a *todas* essas exportações.

### `notes-after-punctuation`

Isso pode ser usado para direcionar o citeproc para mover notas de rodapé com suas instruções após a pontuação (por exemplo, se você citar `something [@citekey].`, ele se tornará `something.[^1]` na saída).

## Adicionando variáveis ​​a um perfil

Conforme indicado anteriormente, qualquer variável que você possa definir em um front issue também pode ser definida em um perfil. Dessa forma, as variáveis ​​serão utilizadas para qualquer documento que você exportar com esse perfil.

No entanto, devido a razões históricas, não é necessariamente simples fazê-lo. Especificamente, aplique-se as seguintes advertências:

* Algumas variáveis, como `bibliography` são suas próprias chaves de configuração no perfil.
* A maioria das variáveis deve ser definida na chave `metadata`
* Algumas variáveis podem precisar ser definidas em uma chave `variables` diferente.