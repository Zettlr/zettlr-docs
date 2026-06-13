# Migrando para um novo computador

Se você aproveitar ao máximo a funcionalidade do Zettlr, eventualmente criará uma extensa biblioteca de espaços de trabalho, notas interconectadas e provavelmente também algumas configurações personalizadas. Quando chegar a hora de substituir seu computador ou talvez migrar para um novo sistema operacional, você obviamente desejará levar esses dados com você.

A migração de seus dados para um novo computador envolve quatro etapas que explicamos detalhadamente nesta página:

1. Faça backup dos seus dados
2. Instale o Zettlr em seu novo computador
3. Mova seus dados para o novo computador
4. Reconecte seu gerenciador de referências, se aplicável.

## Cópia de segurança

Há duas coisas que você precisa fazer backup ou migrar para o seu novo computador. O primeiro são todos os seus espaços de trabalho e arquivos, que contêm o seu trabalho. A segunda são as configurações do seu aplicativo. Isso trechos, seus perfis de exportação, qualquer CSS personalizado ou inclui estatísticas escritas.

### Espaços de trabalho

Recomendamos que você mantenha backup de seus dados usando algum provedor de nuvem de sua escolha (por exemplo, Nextcloud, Dropbox, Google Drive ou OneDrive). Nesse caso, configure o mesmo provedor de nuvem em seu novo computador e espere até que ele termine de sincronizar os dados seja suficiente para mover todos os seus dados para o novo computador. Apenas é possível ocultar que o provedor de nuvem também faz backup de arquivos ocultos (Nextcloud, por exemplo, não faz isso por padrão). Se seu provedor de nuvem ignorar arquivos ocultos, você poderá perder as configurações da pasta (como classificação ou um ícone personalizado). Isto pode não ser trágico, mas é melhor ser evitado.

Se você não usa um provedor de nuvem, copie todos os seus espaços de trabalho para um armazenamento externo ou qualquer outro meio adequado. Mova seus espaços de trabalho e arquivos para o novo computador.

Se você esqueceu onde armazenou um espaço de trabalho, você pode clicar com o botão direito no gerenciador de arquivos do Zettlr e selecionar `Reveal in Finder/Explorer/File Browser` (o texto difere dependendo do sistema operacional) no menu de contexto que aparece. Isso abrirá uma pasta correspondente no navegador de arquivos do seu computador. Se você precisar localizar/fazer backup de um arquivo de notas individuais – um que não faz parte de um espaço de trabalho, por exemplo – você também pode clicar com o botão direito no gerenciador de arquivos Zettlr e escolher `Reveal in Finder/Explorer/File Browser` (o texto depende do sistema operacional) no menu de contexto.

### Configurações do aplicativo

A segunda parte do que você pode querer fazer backup são as configurações do aplicativo. Esses dados estão localizados no *caminho de dados do aplicativo* — um diretório de configuração cuja localização depende do seu sistema operacional:

* **Windows:** `C:\Users\<your username>\AppData\Roaming\Zettlr` (observe que “AppData” é uma pasta oculta, então você precisa garantir que as pastas ocultas mostradas sejam ou digitem manualmente o local na barra de endereço do Explorer)
* **macOS:** `/Users/<your username>/Library/Application Support/Zettlr` (abra uma janela do Finder, mantenha pressionada “Alt” enquanto abre o menu “Ir” e clique na entrada “Biblioteca” que aparece)
* **Linux:** `/home/<your username>/.config/Zettlr` (observe que `.config` é uma pasta oculta, então você pode querer usar uma linha de comando para abrir)

Depois de localizar esta pasta, salve uma cópia dos seguintes arquivos e subpastas dentro dela para mover para sua nova máquina:

* `stats.json`: suas estatísticas de escrita
* `config.json`: como configurações do aplicativo — veja a “*Nota de garantia*” abaixo
* `custom.css`: seu CSS personalizado
* `tags.json`: informações sobre suas tags codificadas por núcleos (tags regulares são migradas automaticamente porque fazem parte de seus dados)
* `targets.json`: seus alvos de escrita
* `user.dic`: seu próprio dicionário personalizado
* `defaults`: seus perfis de importação e exportação
* `snippets`: seus trechos
* `lua-filter`: Os filtros Lua usados para exportações

Os outros arquivos e pastas são parcialmente escritos pelo Electron (a estrutura que o Zettlr usa) ou dados voláteis que precisam ser recriados em seu novo computador, portanto, desconsidere-os.

## Migre as configurações do seu aplicativo para a nova máquina

Em sua nova máquina, instale o Zettlr e execute-o. Isso criará o diretório de configuração no qual você poderá fazer backups das configurações do aplicativo que você fez. Assim que o aplicativo for iniciado, feche-o novamente. Evite adicionar ou abrir quaisquer notas ou áreas de trabalho no Zettlr antes de copiar as configurações antigas do aplicativo - se fizer isso, você terá que adicioná-las novamente depois (veja a “Nota de garantia” abaixo).

Depois de sair do aplicativo, copie todos os backups de configurações do aplicativo que deseja manter a instalação antiga para o novo diretório de configuração (consulte as orientações acima sobre como determinar o caminho de dados do aplicativo correto para seu sistema operacional). Se a pergunta não houver problema em substituir os arquivos existentes, você pode confirmar. Agora você copiou as configurações do aplicativo do seu computador antigo.

**Observação:**

"Nota de esclarecimento"

O backup que você fez de `config.json` contém a localização de vários espaços de trabalho e notas em seu computador *antigo*. Ao reiniciar uma nova instalação do Zettlr após adicionar o backup do seu arquivo `config.json` antigo, ele removerá automaticamente os caminhos para os espaços de trabalho de sua configuração antiga, uma vez que eles não são mais válidos. Ao mesmo tempo, se você adicionar espaços de trabalho ou notas à nova instalação do Zettlr antes de restaurar o arquivo de backup `config.json`, o Zettlr esquecerá a localização dessas pastas e arquivos. Resumindo, não se preocupe quando for saudado com uma janela vazia. Suas e notas de trabalho serão restauradas assim que você reabrir na próxima etapa.

## Migre os espaços de trabalho que contêm suas notas para a nova máquina

Se o Zettlr ainda estiver fechado em sua nova máquina, comece agora. Como os espaços de trabalho do Zettlr são simplesmente pastas no seu computador e suas anotações são simplesmente arquivos de texto, mover esses dados para um novo computador é tão simples quanto copiar os backups dessas pastas e arquivos do seu computador antigo para o novo. Todos os metadados sobre suas notas e as conexões entre elas – IDs de notas, tags, etc. – são salvos em arquivos próprios de notas individuais, o que significa que essas informações viajam junto com os arquivos.

Depois de colocar os backups em sua nova máquina, você pode adicionar cada um dos espaços de trabalho - e os arquivos dentro deles - à sua nova instalação do Zettlr simplesmente acessando a opção de menu `File > Open Workspace …` e selecionando a pasta do espaço de trabalho (ou `File > Open` se precisar importar uma nota individual que não faz parte de um espaço de trabalho). Observe que este é o mesmo processo que você usaria se estivesse adicionando qualquer outra pasta ao Zettlr. A pasta do espaço de trabalho, incluindo as notas que ela contém, será preenchida em sua nova instalação do Zettlr. As conexões entre as notas também serão mantidas, embora se você tiver links para notas que residem em espaços de trabalho diferentes, você terá que se certificar de que também abriu essas pastas de espaço de trabalho e seu conteúdo na nova instalação do Zettlr.

**Observação:**

    Especialmente quando suas lacunas de trabalho estão crescendo, abrir pela primeira vez pode levar algum tempo, pois o Zettlr examinará cada arquivo e extrairá algumas informações primeiro. Essas informações são então armazenadas em cache, para que os espaços de trabalho abram muito mais rápido na próxima vez que você iniciar o Zettlr. Se um espaço de trabalho demorar algum tempo até aparecer, não entre em pânico!

## Reconecte seu gerenciador de referências

Por fim, se você estiver usando o Zettlr com um gerenciador de referências como o Zotero, você precisará passar pelo processo de migração desse software. Assim que seu gerenciador de referências estiver instalado e funcionando novamente na nova máquina, você poderá reconectá-lo ao Zettlr seguindo mais uma vez as etapas na parte “[Ativando instruções no Zettlr](https://docs.zettlr.com/en/academic/citations/#enabling-citations-in-zettlr)” desta documentação.