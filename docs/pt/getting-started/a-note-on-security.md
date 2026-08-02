# Uma nota sobre segurança

O formato Markdown é em geral uma forma muito segura de escrever. Ao contrário dos documentos do Word, que só podem ser abertos com segurança em modo restrito, os documentos Markdown são visualizados com muito menos cuidado.

No entanto, os mesmos documentos Markdown podem trazer certas implicações de segurança. Esses documentos podem conter códigos maliciosos que podem colocar sua segurança em risco. Além disso, modelos ou outros recursos baixados da Internet podem conter códigos maliciosos ou até mesmo baixar vírus e malware em seu computador.

Nesta página, descrevemos as várias maneiras pelas quais trabalhar com o Zettlr pode expor possíveis problemas de segurança se você não tomar cuidado. Se você seguir as orientações gerais de segurança contidas neste documento e estiver vigilante, deverá estar sempre do lado seguro.

Como observação geral: Zettlr oferece grande liberdade quando se trata de trabalhar com seus arquivos Markdown. Portanto, a capacidade do Zettlr de executar código arbitrário ao importar, visualizar e exportar documentos Markdown não é uma falha de segurança, mas uma decisão consciente de design. Se impedirmos a execução de qualquer código arbitrário, trabalharemos com Markdown e exportaremos seus documentos iriam restringi-lo injustificadamente. Para citar um velho ditado: “Com grandes poderes vêm grandes responsabilidades”.

**Observação:**

    O Zettlr é constantemente examinado por pesquisadores de segurança que auditam o aplicativo em busca de formas pelas quais atores mal-intencionados podem executar código onde você não esperaria. Se recebermos uma notificação sobre um problema crítico de segurança, corrigiremos o problema o mais rápido possível e informaremos você em nossos canais de mídia social. Portanto, comprove-se de seguir Zettlr no Mastodon ou Bluesky, ou junte-se ao nosso Discord.

## Execução de código durante a leitura e gravação de documentos Markdown

Markdown é um formato perfeitamente seguro porque consiste apenas em código-fonte. Em outras palavras, o Markdown pode ser lido como está, apenas observando os vários caracteres de formatação contidos no documento.

Às vezes, porém, visualizar texto simples do Markdown pode se tornar árduo. Por exemplo, ao revisar um texto, você desejará ler a segurança dos links, mas não os links em si. Da mesma forma, ao criar uma tabela, muitas vezes você não deseja ver os vários caracteres de formatação, mas apenas o conteúdo real da tabela.

O Zettlr tem como objetivo tornar a visualização e gravação do Markdown mais fácil para você. Para isso, o Zettlr precisa pré-renderizar alguns elementos de seus documentos. Por exemplo, uma pré-renderização de imagens é muito útil. No entanto, as imagens podem conter código malicioso. Um problema semelhante ocorre com a renderização de tabelas no Editor de Tabelas: cada célula da tabela pode conter código HTML malicioso que será executado ao renderizá-la.

Portanto, muitos dos renderizadores que tornam o Markdown legível podem executar códigos maliciosos em documentos e colocar sua segurança em risco.

Se você abrir apenas arquivos de fontes confiáveis, isso não será um problema. No entanto, se você frequentemente precisa abrir documentos Markdown da Internet ou de fontes nas quais não pode confiar totalmente, pode fazer sentido desabilitar esses renderizadores para garantir que nenhum documento Markdown com código malicioso possa prejudicá-lo. Desabilitar esses renderizadores tornará seu código Markdown um pouco mais difícil de ler, mas também evitará que qualquer código malicioso coloque você em danger.

Ao desabilitar todos os renderizadores, o Zettlr não executará acidentalmente nenhum código inseguro contido nos arquivos Markdown. Você pode alternar rapidamente entre o modo de visualização do Zettlr e o modo bruto do Zettlr usando a alternância da barra de status. Caso contrário, você poderá usar a configuração correspondente.

**Observação:**

    Este conselho também se aplica a colar algo: assim que você colar algum texto em um documento com modo de visualização ativo, o Zettlr tentará renderizá-lo imediatamente. Se contiver algum código prejudicial, será executado imediatamente. Portanto, fique atento ao copiar textos aparentemente inofensivos.

## Documentos Markdown baixados da Internet

Um vetor de ataque infame é distribuir documentos Markdown com código malicioso. Portanto, a melhor aposta é nunca baixar documentos Markdown da internet.

Se você precisar baixar um arquivo Markdown e duvidar de sua segurança, recomendamos abrir um editor de texto comum com antecedência (por exemplo, Bloco de Notas no Windows, TextEdit no macOS ou qualquer um dos vários editores de texto baseados em Linux disponíveis) e remover qualquer HTML bruto e outro código incomum do antes de abri-lo no Zettlr.

Se você ativar o modo bruto, também é seguro abrir esse documento diretamente no Zettlr.

Dessa forma, mesmo que exista uma maneira de pessoas mal-intencionadas comprometerem seu computador via Zettlr que ainda não conhece (a chamada “exploração de dia zero”), não funcionará porque você removeu o código ambiental prejudicial de antemão.

**Observação:**

**Regra geral**: se um documento Markdown contiver quase exclusivamente código HTML, isso deve levantar sua suspeita. A sintaxe Markdown não é muito útil para agentes mal-intencionados, então eles tentam inserir HTML em seu código.

## Modelos baixados da Internet

Outro vetor de ataque é a distribuição de modelos maliciosos. Durante as exportações, você pode especificar modelos que serão usados ​​para compor seus documentos Markdown. Podem ser arquivos HTML, arquivos LaTeX ou até mesmo documentos do Word. Todos esses arquivos podem conter códigos maliciosos.

É provável que em algum momento você queira baixar um modelo para personalizar suas exportações. No entanto, devido à capacidade de inserir códigos maliciosos em modelos, esta pode ser uma maneira fácil para que invasores comprometam seu computador.

Como os modelos não são escritos em Markdown, recomendamos cautela ao baixar modelos da Internet. Ao contrário dos documentos Markdown, que podem ser exibidos com segurança, isso é muito mais difícil com modelos.

Se você realmente deseja baixar um modelo da Internet, **certifique-se de que alguém em quem você confia e com experiência técnica verifique se o documento é seguro antes de usá-lo**!

**Observação:**

**Regra geral**: mesmo que um colega lhe envie um modelo, verifique-o novamente, pois seu colega pode ter prejutipdo um modelo prejudicial e ignorado o código malicioso.

## Execução de código durante importação e exportação

Embora você possa impedir qualquer execução de código ao ler e gravar documentos Markdown, desativando todos os renderizadores e alternando para o modo “bruto”, é impossível impedir a execução de código durante a importação e exportação. Para importar ou exportar seus arquivos corretamente, o Zettlr deve permitir a execução do código.

Por exemplo, se você incluir equações em seu documento e depois exportá-lo para HTML, será executado um código que renderizará essas equações específicas. Da mesma forma, alguns modelos podem exigir código ou recursos da Internet para funcionar corretamente.

Mesmo que você não baixe nenhum modelo adicional, a exportação e a importação ainda podem representar um risco à segurança. Especificamente, alguns dos modelos padrão fornecidos com o Zettlr incluem recursos online. Embora sejam considerados seguros, em algumas situações pode acontecer que pessoas mal-intencionadas obtenham acesso a esses recursos online e injetem códigos de pagamento.

Isso significa que mesmo quando você exporta um documento Markdown que você mesmo criou sem nenhum modelo específico, ainda há uma pequena chance de que isso represente um risco à segurança.

As importações e exportações são sempre facilitadas com a ajuda do Pandoc. O próprio Pandoc coletou um conjunto de recomendações de segurança que recomendamos que você leia, entenda e siga para garantir que você e seu computador permaneçam seguros. [Leia uma nota de segurança Pandoc aqui](https://pandoc.org/MANUAL.html#a-note-on-security).

### Comandos de exportação personalizados

Zettlr permite especificar comandos arbitrários para exportação nas configurações. Isso é útil quando você, por exemplo, usa um contêiner Docker pré-fabricado que contém uma instalação especializada do Pandoc, ou quando deseja, por exemplo, fazer upload do arquivo em algum lugar. No entanto, isso significa que você precisa confiar em qualquer comando executado. Nunca, sob nenhuma circunstância, adicione ou execute um comando personalizado nas configurações nas quais você não confia totalmente.

**Observação:**

**Regra prática**: sempre trate todas as exportações e, ocasionais, como potencialmente inseguras.