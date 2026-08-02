# Apresentações

Zettlr é capaz de exportar seus arquivos Markdown diretamente como arquivos de apresentação usando a estrutura [reveal.js](https://revealjs.com/#/). `reveal.js` é uma solução leve para criar apresentações usando HTML e JavaScript simples. Portanto, essas apresentações podem ser exibidas em _todos_ os computadores que rodam um navegador — hoje em dia isso significa: elas rodam em _todos_ os computadores.

Um documento Markdown que deve ser compilado em uma apresentação tem uma estrutura diferente de outros documentos Markdown. Nesta página, orientamos você na criação de tal apresentação.

O Zettlr já vem com um perfil que permite exportar arquivos como apresentações. Você pode personalizá-lo de forma semelhante a todos os outros perfis de acordo com suas preferências. Você pode encontrar uma documentação sobre configurações específicas para apresentações [na documentação do Pandoc](https://pandoc.org/MANUAL.html#slide-shows).

## Criando slides

Você pode criar novos slides de duas maneiras. Primeiro, cada título de nível 1 iniciará um novo slide e também atuará como título do slide. Mas caso o nível 1 do título seja muito grande para o seu gosto ou você simplesmente não queira um título naquele slide, você também pode delimitar os slides usando divisores Markdown (_`***` ou `---`).

Tudo o que segue o título ou a divisória acabará sendo o conteúdo dos slides. Você não precisa "terminar" explicitamente o último slide com uma divisória.

Dentro dos slides, você pode usar elementos Markdown e código HTML para maiores características. Eles serão renderizados enquanto você espera. Se você adicionar notas de rodapé, elas serão colocadas em privacidade, com o slide correspondente no final.

## Ferramentas Avançadas

Você pode usar classes CSS para informar à apresentação que certos elementos devem ser acionados antes de encaminhar uma apresentação. Estes são chamados de "fragmentos". Devido às limitações do mecanismo do Pandoc, você terá que usar HTML simples para conseguir isso. Considere, por exemplo, o código HTML da apresentação de demonstração:

```html
<ul>
    <li class="fragment fade-in">This item will fade in.</li>
    <li class="fragment highlight-blue">This will be highlighted blue.</li>
    <li class="fragment highlight-red">All available transitions are documented [here](https://github.com/hakimel/reveal.js/#fragments).</li>
</ul>
```

Isso criará uma lista com três itens. Todos os itens são “fragmentos”, o que significa que ao iniciar o atalho do próximo slide, o primeiro será `fade-in`, como diz a classe. Na próxima vez que você pressionar uma tecla de seta para a direita, o segundo item será destacado em azul. A terceira pressão da tecla de seta para a direita destacará o último item em vermelho. E ao abrir a tecla de seta pela quarta vez, o próximo slide será mostrado.

## Escolhendo um tema

Por padrão, o Zettlr usará o tema preto para sua apresentação. No entanto, existem vários temas disponíveis que você pode escolher com a variável `theme` frontmatter.

Os temas disponíveis são:

* `beige`
* `black` (o padrão, neste caso você pode omitir a variável `theme`)
* `blood`
* `league`
* `moon`
* `night`
* `serif`
* `simple`
* `sky`
* `solarized`
* `white`

## Manipulação de imagens

Uma das especificações de tais apresentações HTML é que, por padrão, as imagens não estão incluídas no arquivo. Isso significa: se você mover uma apresentação resultante no computador, todas as imagens da apresentação serão quebradas.

Há uma solução alternativa, no entanto. Arquivos de imagem e outros ativos podem ser incorporados no arquivo HTML, fazendo com que o arquivo seja verdadeiramente independente e possa ser movido sem que nada seja quebrado.

Para conseguir isso você pode usar duas variáveis ​​no perfil:

1. Defina `standalone: true` para garantir que o arquivo resultante será um arquivo HTML adequado
2. Defina `embed-resources: true` para garantir que imagens, JavaScript e estilos sejam incluídos no arquivo resultante e, portanto, movam-se junto com o arquivo de apresentação.

**Observação:**

    A incorporação de imagens pode aumentar o tamanho da apresentação em uma grande margem. Cada imagem incluída no arquivo aumentou de tamanho em aproximadamente 30%. Em outras palavras, uma apresentação que inclui uma imagem de 1 MB aumentada de tamanho em 1,3 MB.