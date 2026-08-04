# Compêndio Markdown

Esta seção é uma continuação do guia do usuário iniciante. Ele contém uma introdução mais abrangente à sintaxe do Markdown e apresenta elementos especiais que o suporte ao Markdown.

## O que é Markdown?

Markdown é uma linguagem de marcação muito simples que usa símbolos de formatação para formatar texto ao clicar em uma barra de ferramentas de formatação. Você já conhece muitas das convenções do Markdown. Por exemplo, para enfatizar o texto, basta cercá-lo com os símbolos `*` ou `_`. Na verdade, muitos aplicativos que você já conhece usam Markdown, como Slack, Discord, Microsoft Teams e muito mais.

**Observação:**

    Apesar de sua simplicidade, o Markdown contém todas as convenções de formatação permitidas para escrever artigos de pesquisa completos. E, caso você perca alguma coisa, você sempre pode inserir alguns comandos LaTeX ou tags HTML.

    Os dois principais benefícios do Markdown são que você pode formatar todo o documento sem usar o mouse ou trackpad e separar o conteúdo do layout.

**Observação:**

Para saber como personalizar a aparência de seus documentos depois de exportá-los, acesse a documentação dos [arquivos padrão](../export/defaults-files.md).

## Formatação de redução

Para formatar documentos Markdown, existem algumas regras básicas de formatação que você deve conhecer e que listamos aqui:

| Formatação | Sintaxe | Saída |
|--------------------|------------------------------------------|------------------------------------------------|
| Enfase | `_italics_` ou `*italics*` | _itálico_ |
| Ousado | `__bold__` ou `**bold**` | **negrito** |
| Tachado | `~~text~~` | <span style="text-decoration: line-through;">texto</span> |
| Ligação | `[Text](www.example.com)` | [Texto](#) |
| Imagem | `![Description](image.jpg)` | ![Descrição](../img/logo_small.png) |
| Título | `# Heading` | **Título** |
| Título 2 | `## Heading 2` | **Título 2** |
| Título 3 | `### Heading 3` | **Título 3** |
| Título 4 | `#### Heading 4` | **Título 4** |
| Título 5 | `##### Heading 5` | **Título 5** |
| Título 6 | `###### Heading 6` | **Título 6** |
| Lista de marcadores | `* List item` (ou `+` ou `-`) | &bala; Item da lista |
| Lista de itens | `1. List item` (ou `1)`) | 1. Item da lista |
| Notas de rodapé | `Some text[^1].` | Algum texto.                      |
| Referência de nota de rodapé | `[^1]: Footnote text.` | &sup1; Texto da nota de rodapé.                 |
| Comentário | `<!-- Commented out -->` | (Não visível) |
| Matemática embutida | `$E = mc^2$` | $E = mc^2$ |
| Bloco de matemática | `$$E = mc^2$$` | $E = mc^2$ |
| Linha horizontal | `***` ou `---` | <hr> |
| Citação em bloco | `> Some quote` | &nbsp;&nbsp;&nbsp;&nbsp;*Algumas nacionais* |

**Observação:**

    Esta lista não é exaustiva. Existem mais alguns símbolos de formatação que podem ser habilitados com extensões ou que serão inseridos posteriormente nestes documentos, por exemplo, especificações.

Se você quiser aprender ainda mais sobre Markdown, existem muitos recursos bons por aí. Um bom começo é o guia Markdown sobre [Aprenda X em Y minutos](https://learnxinyminutes.com/docs/markdown/).

## Atalhos de teclado

O Zettlr oferece uma variedade de atalhos de teclado que tornam a escrita do Markdown ainda mais eficiente, pois muitas vezes evita que você tenha que escrever caracteres de formatação por completo.

Você pode pensar nos atalhos do teclado do Zettlr como divididos em dois grupos lógicos. O primeiro grupo contém **atalhos comuns** que a maioria dos outros aplicativos também incorporam — ele segue convenções como usar <kbd>Cmd/Ctrl</kbd>+<kbd>B</kbd> para deixar o texto em preto. O segundo grupo, entretanto, vem de **escrever código** — ele permite que você mova e mova seu texto com muito mais eficiência do que a maioria dos erros de texto.

**Observação:**

Nesta documentação, você verá frequentemente a "chave" <kbd>Cmd/Ctrl</kbd>. Com isso queremos dizer que você precisará pressionar a tecla Command no macOS e a tecla Control caso contrário.

* <kbd>Cmd/Ctrl</kbd>+<kbd>B</kbd>: Deixa o texto **negrito**
* <kbd>Cmd/Ctrl</kbd>+<kbd>I</kbd>: _Enfatizar_ texto
* <kbd>Cmd/Ctrl</kbd>+<kbd>K</kbd>: Cria um novo link. O texto selecionado (se houver) poderá tornar o texto do link. Se houver uma URL na área de transferência, o Zettlr será usado automaticamente como destino do link.
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>: Insere uma imagem. O texto selecionado (se houver) tornará o título da imagem. Se houver uma URL na área de transferência, o Zettlr será usado automaticamente como fonte da imagem.
* <kbd>Tab</kbd>: recupera qualquer lista em um nível. Se não houver lista, insira um caractere de tabulação. (Se você estiver usando um leitor de tela e precisar usar o teclado para navegar pelo aplicativo, pressione <kbd>Esc</kbd> antes de iniciar o <kbd>Tab</kbd> para desfocar o editor.)
* <kbd>Shift</kbd>+<kbd>Tab</kbd>: Remove o retorno de um nível da lista.
* <kbd>Cmd/Ctrl</kbd>+<kbd>C</kbd>: Copiar texto como simples
* <kbd>Cmd/Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd>: Copiar texto com formatação (por exemplo, para colar texto formatado no Microsoft Word)
* <kbd>Cmd/Ctrl</kbd>+<kbd>X</kbd>: Cortar texto. Se não houver seleção, este comando corta a linha inteira.
* <kbd>Cmd/Ctrl</kbd>+<kbd>V</kbd>: Colar texto (se você copiou texto formatado, isso irá convertê-lo para Markdown antes da inserção)
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>: cola ou texto como simples
* <kbd>Cmd/Ctrl</kbd>+<kbd>Z</kbd>: Desfazer
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>: Refazer
* <kbd>Alt</kbd>+<kbd>ArrowUp</kbd>: Troca a linha atual pela anterior
* <kbd>Alt</kbd>+<kbd>ArrowDown</kbd>: Troca a linha atual pela próxima
* <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>ArrowUp</kbd>: Copiar a linha atual acima
* <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>ArrowDown</kbd>: Copiar a linha atual acima
* <kbd>Alt</kbd>+<kbd>L</kbd> (<kbd>Ctrl</kbd>+<kbd>L</kbd> no macOS): selecione a linha atual
* <kbd>Cmd/Ctrl</kbd>+<kbd>F</kbd>: abre o painel de pesquisa
* <kbd>Cmd/Ctrl</kbd>+<kbd>G</kbd>: Próxima ocorrência
* <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>: ocorrência anterior
* <kbd>Cmd/Ctrl</kbd>+<kbd>D</kbd>: Selecione a próxima ocorrência

**Observação:**

    Zettlr também oferece dois modos de escrita avançados: Emacs e Vim. Sempre que você ativar um desses modos, eles mudarão muitas sugestões de teclas e oferecerão novas. Essas configurações são recomendadas apenas para usuários avançados.

## Edição com vários cursores

Para economizar tempo durante o processo de edição, você pode usar a edição com vários cursores para fazer alterações simultâneas em seu documento. Em seguida, as teclas digitalizadas são aplicadas simultaneamente a todos os cursores ativos ou áreas selecionadas.

Para adicionar cursores, mantenha pressionadas as teclas <kbd>Cmd</kbd> (macOS) ou <kbd>Ctrl</kbd> (Windows/Linux) enquanto clica dentro do texto.

Para criar várias categorias a partir dos cursores, pressione adicionalmente <kbd>Shift</kbd> e qualquer uma das teclas de seta.

## Dialeto Markdown do Zettlr

Infelizmente, não existe “uma” previsão de Markdown que defina cada elemento que você possa precisar. Historicamente, diferentes empresas e produtos de software adotaram o Markdown em vários momentos ao longo da história e implementaram elementos personalizados sempre que necessário.

Isso levou à formação de vários chamados “dialetos” de Markdown. Por exemplo, existe [GitHub Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), existe [CommonMark](https://spec.commonmark.org/current/) (uma tentativa de padronizar a sintaxe) e existe [Pandoc Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown).

Zettlr suporta um dos dialetos mais abrangentes e abrangentes: Pandoc Markdown. Em comparação com outros dialetos, o dialeto Pandoc inclui suporte pronto para uso para muitos elementos que os acadêmicos precisam, incluindo, mas não se limitando a:

* Tabelas complexas
* Figuras
* Notas de rodapé
* Citações e referências cruzadas
* … e mais

**Aviso:**

    Embora os dialetos Markdown sejam, em sua maioria, compatíveis entre si, nem sempre é esse o caso. Alguns dialetos podem, por exemplo, não suportar a sintaxe de citação ou usar uma maneira predominantemente diferente de criar tabelas. Se você deseja escrever Markdown para um sistema específico, certifique-se sempre de verificar quais elementos esse sistema suporta.

## Elementos especiais no Zettlr Markdown

Nesta seção apresentamos uma sintaxe especial que funciona no Zettlr (e, por extensão, no Pandoc), mas não necessariamente em outros dialetos.

### Notas de rodapé

Uma adição mais importante à sintaxe comum do Markdown são as notas de rodapé. As notas de rodapé baseiam-se fortemente na sintaxe para definir links.

Para definir uma nota de rodapé regular, você faria o seguinte:

```markdown
This is some text.[^1]

[^1]: And this is the footnote text.
```

Em vez de números, você também pode usar letras e palavras, por exemplo, `[^a custom label]`. No entanto, Zettlr assume que, na maioria das vezes, você deseja rótulos numéricos simples para notas de rodapé. Portanto, quando você segue um esquema simples de numeração de notas de rodapé, o Zettlr garantirá automaticamente que todas as suas notas de rodapé permaneçam numeradas corretamente.

**Dica:**

    Independentemente do sistema de rotulagem escolhido para suas notas de rodapé, a única parte importante é que cada etiqueta deve ser única. Sempre que você exportar seus arquivos, as notas de rodapé serão numeradas corretamente em ordem crescente, independentemente da aparência de seus rótulos.

Você também pode definir notas de rodapé inline, se não quiser criar dois elementos. Para fazer isso, você colocaria o símbolo circunflexo (`^`) na frente do colchete:

```markdown
This is some text.^[I am an inline footnote.]
```

Como você pode ver, a principal diferença em relação aos links regulares é o uso de símbolos circunflexos.

### Citações

O segundo elemento personalizado mais significativo que não é necessariamente suportado por outros dialetos Markdown são as restrições. Zettlr é um editor acadêmico do Markdown e, como tal, trata as ofertas como cidades de primeira classe.

Inserir instruções é simples:

```markdown
This is some text [see @Citekey, p. 123].
```

Como você pode ver, as sugestões envolvem apenas escrever o que você deseja citar, com uma diferença crucial: em vez de digitar literalmente “Autor, Ano”, você precisa fornecer um ID de citação, ou Citekey. Para obter mais informações sobre o que são Citekeys e como conectar seu gerenciador de referências ao Zettlr, por favor [veja a página de documentos sobre transações](./citations.md).

### Atributos do Elemento

Um terceiro elemento personalizado suportado pelo Zettlr são os atributos do elemento. Zettlr permite que você especifique várias propriedades adicionais para qualquer elemento. Alguns deles serão aplicados diretamente pelo Zettlr (como alturas e larguras de imagens), enquanto outros são usados ​​apenas para aplicar estilos personalizados durante a exportação.

Para adicionar atributos, você precisará adicionar as chaves *após* o elemento. Muitas vezes, os atributos precisam seguir imediatamente ao elemento, às vezes é necessário um espaço entre o elemento e seus atributos. Para obter mais informações sobre quais elementos suportam atributos, consulte [a documentação do Pandoc](https://pandoc.org/MANUAL.html#extension-attributes).

Por exemplo, veja o seguinte exemplo que restringe o tamanho de uma imagem:

```markdown
This is some text.

![This is an image](image.png){width=50% height=700px}
```

Vários elementos suportam vários atributos. Em todos os casos, você pode adicionar atributos arbitrários que serão passados ​​ao arquivo exportado. Mas alguns atributos têm significados especiais.

Abaixo, mostramos alguns atributos comuns e seus casos de uso:

```markdown
# Heading {-}

A heading with the attribute "-" will not be numbered, even if
the exporter is configured as such.

![This is an image](image.png){width=50% height=700px}

Any image supports "width" and "height" properties.
These properties are supported by Zettlr directly.

You can also apply attributes to arbitrary text using
"bracketed spans" (see below):

This text contains [an underline]{.underline}.

The following is only valid for Beamer slides to create
a two-column layout. It uses Pandoc Divs (see below
for an explanation).

:::::::::::::: {.columns}
::: {.column width="40%"}
Slide contents on the left side
:::
::: {.column width="60%"}
Slide contents on the right side
:::
::::::::::::::
```

### Spans e contêineres nativos

O Zettlr também permite uma previsão de extensões e contêineres arbitrários para que você possa fornecer elementos personalizados com estilos necessários. Qualquer conteúdo entre colchetes que não seja uma nota de rodapé válida nem um link válido será tratado como um trecho de texto se você fornecer atributos.

Por exemplo, você pode sublinhar o texto usando a seguinte sintaxe: `[underlined text]{.underline}`. Da mesma forma, você pode usar a versalete: `[SMALL CAPS]{.smallcaps}`.

Para estilizar blocos inteiros de texto, você pode usar o que Pandoc chama de “Native Divs”. Divs nativos são simplesmente contêineres que podem ser usados ​​para fornecer estilo aos seus blocos na saída. Acima, mostramos como usá-los para fornecer um layout de duas colunas para slides do Beamer.
