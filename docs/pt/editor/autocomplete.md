# Preenchimento automático

O preenchimento automático ajuda a completar vários trechos de texto, pesquisando partes do que você está tentando completar e inserindo o restante do texto para você. No editor Zettlr, uma variedade de funções de preenchimento automático estão disponíveis.

Normalmente, você aciona o preenchimento automático com um caractere especial em uma posição válida. Esses caracteres são curtos para os tipos de preenchimento automático suportados pelo Zettlr, como restrições, tags, snippets ou blocos de código. Uma “posição válida” geralmente significa que o caractere precisa ser precedido de espaço em branco ou inserido no início de uma linha.

**Dica:**

    Como nem sempre deseja inserir um preenchimento automático, você precisa aceitar uma sugestão de preenchimento automático nela clicando ou pressionando <kbd>Tab</kbd>. Pressionar a tecla <kbd>Enter</kbd> abortará o processo de inserção. Isso evita preenchimentos automáticos acidentais.

## Preenchimento automático de tags

Zettlr pode preencher automaticamente tags ou palavras-chave para você. Para isso, insira um sinal de cerquilha (`#`) na posição onde deseja inserir a tag. Comece a digitar a tag até encontrá-la. Em seguida, aceite o preenchimento automático.

## Preenchimento automático de transações

Ao fazer perguntas, o preenchimento automático ajuda a identificar a chave da citação correta. Para iniciar um preenchimento automático de citação, insira o caractere `@`. Comece a escrever partes da chave de citação, nomes dos autores ou partes do título do trabalho a ser citado. Depois de identificar a chave de citação, aceite a sugestão com <kbd>Tab</kbd>.

**Dica:**

    Nas configurações de citação, você pode determinar como o Zettlr preencherá automaticamente a citação. Existem três estilos disponíveis, e o Zettlr adicionará quaisquer caracteres específicos necessários, conforme necessário, e posicionará o cursor de acordo.

## Preenchimento automático de snippets

Para inserir trechos, insira dois pontos (`:`). Isso oferecerá trechos disponíveis para você escolher.

**Observação:**

    O personagem também permite inserir Emojis, caso você tenha ativado esta configuração.

## Preenchimento automático de emojis

Zettlr permite inserir emojis com base em valores de string (por exemplo, `:joy:`). Como o recurso de controle para iniciar o preenchimento automático de emoji é o mesmo dos snippets, você pode ativar ou desativar isso nas opções.

Ao pesquisar um emoji, você pode digitar várias semelhanças para o personagem.

**Observação:**

    O preenchimento automático de um emoji inserirá o símbolo Unicode real do emoji, não sua representação de string.

## Blocos de código

Zettlr pode fornecer destaque de sintaxe para diversas linguagens de programação prontas para uso. Por padrão, os blocos de código não fornecem realce de sintaxe e, em vez disso, simplesmente formatam seu código em fonte monoespaçada.

Para ativar o realce de sintaxe para um idioma, você precisa fornecer um código para o idioma. Para ajudá-lo a identificar palavras-chave corretas, o Zettlr oferece preenchimento automático desses códigos de idioma.

Para iniciar o preenchimento automático do seletor de idioma do bloco de código, comece escrevendo três crases em uma nova linha. Após o terceiro, o preenchimento automático será iniciado.

A entrada pré-selecionada indica “Sem destaque de sintaxe”. Nesse caso, se você aceitar o preenchimento automático, o Zettlr simplesmente inserirá as crases de fechamento e colocará o cursor no bloco de código sem aplicar um código de idioma.

Comece a digitar o nome de um idioma para procurar o código do idioma correto. Aceite uma conclusão com <kbd>Tab</kbd>.