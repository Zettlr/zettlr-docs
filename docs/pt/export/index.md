# Exportar

Zettlr vem com um poderoso ecossistema de exportação, alimentado principalmente pela Pandoc. Esta seção apresenta o sistema e como personalizá-lo de acordo com suas necessidades.

## Usando o Exportador

Você pode iniciar um processo de exportação de duas maneiras. Você pode exportar seu documento atual rapidamente usando o extrator de arquivo único. Abra o pop-up de exportação usando o atalho <kbd>Cmd/Ctrl</kbd>+<kbd>E</kbd> ou clicando no ícone da barra de ferramentas. A partir daí, personalize as exportações selecionando um perfil e um diretório de destino e clique em “Exportar”.

A segunda forma de invocar o exportar é exportar um projeto. Você pode fazer isso clicando com o botão direito em uma pasta de projeto no gerenciador de arquivos e escolher “Exportar projeto”. Esta entrada será desabilitada se você ainda não tiver selecionado pelo menos um perfil para exportar o projeto.

**Dica:**

Leia mais sobre como invocar o exportar em nossas guias sobre [exportação de arquivos individuais](../first-time-users/exporting-files.md) e para [projetos](../file-manager/projects.md).

## Personalizando perfis de exportação

Cada formato de exportação é alimentado pelos chamados “perfis” ou “arquivos padrão”. Esses perfis configurados como o Zettlr exportarão seus arquivos e projetos. Eles podem aplicar modelos específicos, definir certas transformações do Markdown e assim por diante.

Os perfis são escritos usando a sintaxe YAML, que você também pode usar em assuntos iniciais. Como a personalização de perfis é bastante complexa, coletamos a [documentação em uma página separada](./defaults-files.md).

## Adicionando novos perfis

Você também pode adicionar novos perfis. Por exemplo, você pode adicionar várias exportações para PDF, cada uma delas usando um modelo separado. Isto é muito útil se você precisar enviar artigos para várias conferências, cada uma com seu próprio modelo. Ao adicionar esses modelos em seus respectivos perfis, você terá várias conferências disponíveis, para cujos modelos poderá exportar cada arquivo.

Para ver como adicionar modelos personalizados a perfis, acesse [nossa página sobre modelos personalizados](./custom-templates.md).

## Formatos especiais: Textbundle, Textpack e PDF simples

Existem três formatos especiais que funcionam de maneira um pouco diferente: Textbundle, Textpack e Simple PDF.

Textbundle e Textpack são dois formatos que você pode usar para compartilhar um arquivo Markdown junto com quaisquer imagens ou outros ativos com outras pessoas. É um formato padronizado reconhecido por vários aplicativos. [Consulte o site oficial do Textbundle para obter uma lista de todos os aplicativos compatíveis com o Textbundle](https://textbundle.org/). Como Textbundle e Textpack não desativam nenhuma conversão da sintaxe Markdown, eles não precisam de um perfil.

A opção de exportação **PDF simples** destina-se a situações em que você não pode instalar uma distribuição LaTeX em seu computador, por exemplo, se estiver usando um computador gerenciado da empresa. Simple PDF permite exportar um arquivo PDF sem a necessidade de LaTeX.

Quando o Zettlr exporta para Simple PDF, ele faz é exportar seu arquivo para HTML e depois imprimi-lo usando o mesmo processo que seu navegador usa para imprimir sites.

**Observação:**

    Como o Simple PDF converte seus arquivos para HTML primeiro, se quiser personalizar essa exportação, você terá que adaptar o modelo HTML, não o PDF.