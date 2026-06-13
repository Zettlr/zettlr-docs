# Exportando fluxo de trabalho

Para personalizar sua experiência de exportação, é necessário entender o que acontece durante uma exportação e como os diversos componentes interagem para viabilizar as exportações. Nesta página, orientamos você pelas diversas etapas da exportação e referenciamos outras páginas de documentação conforme necessário para obter mais detalhes.

**Observação:**

    Este fluxo de trabalho se aplica somente se você executar uma exportação padrão. Se você usar um comando de exportação personalizado, o Zettlr apenas invocará seu comando e fornecerá o(s) caminho(s) para seus arquivos de entrada. Seu comando é responsável por lidar com a exportação nesse caso. Por favor, leia a seção sobre comandos personalizados para obter mais informações.

## O que acontece durante as exportações de arquivo único?

Assim que você iniciar “Exportar” no pop-up de exportação, o exportador será chamado, fornecendo suas configurações:

1. O arquivo será exportado.
2. Qual perfil usar.
3. O diretório de destino.

O exportador usa essas informações junto com suas preferências para determinar como exportar seu arquivo, prepara todos os dados necessários e, em seguida, invoca o Pandoc para converter seu documento no formato de destino correto.

## O que acontece durante as exportações do projeto?

As análises de projetos são realizadas deste processo em alguns aspectos centrais:

1. Os projetos serão sempre exportados para o diretório do projeto.
2. Eles compreendem vários arquivos de entrada, em vez de apenas um. Você pode configurar quais arquivos serão incluídos na ordem das propriedades do projeto.
3. As exportações do projeto iniciam uma exportação de matriz na qual o Pandoc é invocado uma vez para cada perfil selecionado.

## O fluxo de trabalho de exportação

Assim que o exportador é invocado, três etapas acontecem na sequência: Coleta de informações incluindo arquivos de entrada e saída, gerando um arquivo de padrões correto a partir disso e invocando o Pandoc.

**Observação:**

    Se você selecionar um comando de exportação personalizado, essas etapas serão ignoradas. Em vez disso, o Zettlr invocará seu comando e simplesmente percorrerá o caminho absoluto para o(s) arquivo(s).

### 1. Determine os arquivos de entrada e saída e o diretório de trabalho

Primeiro, a exportação calculará e verificará os caminhos absolutos para o(s) seu(s) arquivo(s) de entrada e para o arquivo de destino.

O diretório de trabalho do exportador será definido para a pasta correta – o diretório que contém o arquivo em uma exportação de arquivo exclusivo ou o diretório do projeto. Isso significa que quaisquer caminhos relacionados aos seus arquivos de origem serão interpretados a partir desse diretório.

Por último, o arquivo de padrões gerado na próxima etapa será colocado no diretório temporário, portanto, você deve evitar especificar caminhos relacionados nele. Isto afeta especialmente os arquivos do modelo.

### 2. Gere o arquivo de padrões finais

A seguir, o extrator lerá o arquivo padrão do perfil selecionado. Em seguida, procederá ao ajuste do arquivo de acordo com suas configurações.

**Observação:**

    Por favor, leia esta seção com atenção. Embora você possa personalizar seus perfis no gerenciador de ativos, o Zettlr alterará à força algumas dessas opções. Se você observar resultados inesperados durante as exportações, pode ser um motivo.

Ele ativará a extensão `wikilinks_title_after_pipe` ou `wikilinks_title_before_pipe` dependendo da configuração de como seus links wiki estão configurados. Em seguida, ele aplicará a extensão `mark` que orienta o Pandoc a interpretar corretamente os intervalos de destaque (`==mark==`). Isso alterará a configuração do leitor Markdown do perfil. Se você já especificou ambas as extensões corretamente em seu leitor (por exemplo, `reader: gfm+mark+wikilinks_title_before_pipe`), isso não mudará nada.

A seguir, o exportador adicionará sua biblioteca de restrições globais à chave `bibliography` do perfil. Se você especificar uma biblioteca na chave bibliográfica do seu perfil, ela não será removida. Em vez disso, o Zettlr anexa sua biblioteca global à chave.

Além disso, o Zettlr agora determinará se precisa substituir a chave `csl` do seu perfil. Caso você esteja exportando um projeto e tenha especificado um estilo CSL para o seu projeto, a chave `csl` será definida para aquele. Se você não especificou um estilo CSL personalizado para seu projeto, mas especificou um estilo CSL personalizado em suas preferências, o Zettlr definirá a chave `csl` para esse. Se você não especificou um estilo específico do projeto nem um estilo global, o Zettlr não tocará na tecla CSL.

Neste ponto, Zettlr criará as chaves de perfil `metadata` e `zettlr`. Ele definirá as chaves `strip_tags` e `strip_links` para qualquer configuração que você selecionou nas preferências.

Para projetos, o Zettlr também substituirá a chave `metadata.title` e a chave `template`. É por isso que recomendamos não especificar um modelo personalizado nas propriedades do projeto, se você tiver exportadores de PDF específicos com modelos personalizados.

Finalmente, o Zettlr garantirá que a chave `filters` exista e adicionará todos os filtros do seu diretório de filtros Lua a esta chave, garantindo que todos eles serão executados durante a exportação. Observe que um pedido específico não é garantido.

Agora ele adiciona quaisquer propriedades especiais que o plug-in correspondente exija ao arquivo de padrões e grave o arquivo de padrões alterado no disco. Essas propriedades incluem as chaves `input-files` e `output-file` que informam ao Pandoc quais arquivos ler e para onde exportar. Ambos serão sempre fornecidos como caminhos absolutos.

**Dica:**

As diversas maneiras de especificar a configuração do Pandoc podem ser difíceis de entender. Para entender qual configuração você pode especificar, onde e como, leia a [página de documentação sobre arquivos padrão](./defaults-files.md).

### 3. Execute o Pandoc

A etapa final que o exportador executa é invocar o Pandoc. Ele chamará o Pandoc, definirá seu diretório de trabalho como pasta do arquivo (no caso de uma exportação exclusiva) ou diretório do projeto (no caso de uma exportação do projeto) e fornecerá o arquivo padrão (que reside em sua pasta temporária).

Em essência, o Zettlr chama `pandoc --defaults /path/to/defaults.yml` e aguarda que o Pandoc realize uma exportação.