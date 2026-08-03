# Solução de problemas

Como qualquer software, o Zettlr pode causar problemas de vez em quando. Esta página contém instruções sobre como resolver muitos desses problemas e também como ajudar os desenvolvedores a resolver seus problemas mais rapidamente, caso eles ocorram. Temos anos de experiência e, como tal, as opções abaixo devem funcionar na maioria dos casos.

**Observação:**

Tente as etapas apresentadas aqui e consulte [as perguntas frequentes](../reference/faq.md) primeiro se encontrar algum problema. Essas etapas não resolvem seu problema, [pergunte à nossa comunidade](get-involved.md/#join-the-community). Se nossa comunidade também não puder ajudá-lo, abra um problema no GitHub. Leia as instruções abaixo para descobrir como fornecer todas as informações que você precisa.

## 1. Tente desligar e ligar novamente

Muitos problemas podem ser resolvidos simplesmente saindo do Zettlr e reiniciando-o. Às vezes, reiniciar o computador também pode ajudar.

**Observação:**

    Se você puder reproduzir o problema de forma confiável, ou seja: o problema *sempre* aparece após você executar uma ação específica, isso indica que você encontrou um bug replicável. Nesse caso, forneça-nos estas etapas para abrir um problema.

## 2. Instale a versão mais recente

Muitos problemas foram corrigidos em versões mais recentes. Se você encontrar um problema, comprove-se de ter a versão mais recente instalada. Para fazer isso, vá em “Ajuda” → “Verificar atualizações” e veja se o aplicativo detecta uma nova atualização. Se você usou um gerenciador de pacotes para instalar o Zettlr, use-o para atualizar o aplicativo. Você sempre pode encontrar a [versão mais recente no GitHub](https://github.com/Zettlr/Zettlr/releases).

## 3. Tente limpar o cache

Às vezes, o Zettlr pode apresentar soluções, ou que pode corromper o cache FSAL. Isso pode ser irritante porque significa que o comportamento indesejado persiste durante as reinicializações. Uma solução muito simples para esses casos é limpar o cache FSAL. Para limpar o cache, no menu basta clicar em “Ajuda” → “Limpar cache FSAL…” e confirmar para reiniciar o aplicativo.

O aplicativo irá reiniciar imediatamente e recriar o cache FSAL. Principalmente se você tiver um computador mais lento, um disco mais lento ou simplesmente tiver muitos arquivos carregados, essa atualização atualizará algum tempo. O Zettlr só mostrará uma janela do aplicativo depois de concluir a recriação do cache FSAL, portanto, pode levar vários segundos ou até mais. Seja paciente durante este processo – a próxima atualização do aplicativo será rápida novamente.

**Observação:**

Alternativamente, existem duas maneiras manuais de fazer o mesmo, que listamos aqui apenas caso você precise delas. Em ambos os casos, primeiro comprovou-se que o Zettlr está fechado. Então, para a opção (a), vá para a pasta de configuração do Zettlr e apenas remova o diretório `fsal/cache`. A opção (b) é iniciar o Zettlr a partir da linha de comando com o sinalizador `--clear-cache`.

## 4. Tente redefinir o aplicativo

Às vezes, o aplicativo parece estar totalmente quebrado (nem iniciado, por exemplo). Percebemos que às vezes o cache da estrutura Electron subjacente também pode causar problemas. Como não temos controle sobre o cache do framework, às vezes ajuda a excluir esses arquivos.

O Zettlr mantém configurações locais e metadados na mesma pasta que o Electron mantém seus arquivos. Você pode querer redefinir, ler ou modificar esses dados em alguns casos (por exemplo, se sua instalação parecer quebrada, se você carregou acidentalmente um espaço de trabalho inválido, etc.).

Esses dados estão localizados no *caminho de dados do aplicativo* cuja localização depende do seu sistema operacional:

* **Windows:** `C:\Users\<your username>\AppData\Roaming\Zettlr` (observe que AppData é uma pasta oculta, então você pode querer alterar as configurações do Explorer para que ele apareça)
* **macOS:** `/Users/<your username>/Library/Application Support/Zettlr` (abra uma janela do Finder, mantenha pressionada “Alt” enquanto abre o menu “Ir” e clique na entrada “Biblioteca” que aparece)
* **Linux:** `/home/<your username>/.config/Zettlr` (observe que `.config` é uma pasta oculta, então você pode querer usar uma linha de comando para abrir)

Se você deseja redefinir completamente a instalação local do Zettlr, siga estas etapas:

1. Primeiro, certifique-se de que o aplicativo está fechado (em alguns casos de erro, existe um processo “zumbi”, que você pode fechar no Gerenciador de Tarefas ou Monitor de Atividades)
2. Opcionalmente, demonstre-se como fazer backup desses arquivos e pastas:
    * `stats.json`: suas estatísticas de escrita
    * `config.json`: como configurações do aplicativo
    * `custom.css`: seu CSS personalizado
    * `tags.json`: informações sobre suas tags codificadas por núcleos (tags regulares são migradas automaticamente porque fazem parte de seus dados)
    * `targets.json`: seus alvos de escrita
    * `user.dic`: seu próprio dicionário personalizado
    * `defaults`: seus perfis de importação e exportação
    * `snippets`: seus trechos
    * `lua-filter`: Os filtros Lua usados para exportações
3. Selecione tudo neste diretório e exclua-o.
4. Reinicie o aplicativo. Alguns desses arquivos serão recriados.

## 5. Peça ajuda à comunidade

Se nenhuma das etapas acima parecer útil, você pode perguntar à comunidade. Às vezes, alguém encontrou um problema semelhante e pode ajudá-lo. A comunidade está ativa no [fórum oficial da comunidade](https://forum.zettlr.com/), no [Discord](https://go.zettlr.com/discord) e no [Subreddit Zettlr](https://www.reddit.com/r/Zettlr).

## 6. Abra um problema no GitHub

Se a comunidade não puder ajudá-lo ou parecer um bug real, abra um problema no GitHub. Deve-se incluir o máximo de informações possíveis para que possamos resolver o problema rapidamente. [Clique aqui para abrir o formulário](https://github.com/Zettlr/Zettlr/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml) (é necessária uma conta no GitHub). O formulário fará as perguntas mais importantes antecipadamente.

Certifique-se de incluir:

* Uma descrição concisa do que acontece e do que você espera que aconteça
* Como você pode desencadear esse problema? Seja preciso aqui para que possamos reproduzir o problema do nosso lado
*Inclui capturas de tela ou screencasts inteiros para demonstrar o problema. Muitas vezes, as imagens “dizem mais do que mil palavras”.
* Também fornece entradas de log. Você pode encontrar os logs ativando o modo de depuração e selecionando “Desenvolver” → “Abrir logs”. Os logs também podem ser encontrados no caminho de dados do aplicativo Zettlr (veja a etapa 4 acima) na pasta “logs”, caso você não possa usar o aplicativo para visualizá-los.

**Observação:**

    Se você abrir um problema no GitHub, certifique-se de receber notificações. Geralmente temos perguntas de envio sobre o seu problema. Quanto mais rápido você responder, mais rápido poderemos resolver seu problema. Se ninguém responder ao seu problema, isso pode indicar que não temos certeza de como ajudá-lo. Nesse caso, pode ser útil reformular o problema ou adicionar informações adicionais.

## 7. Reverter para uma versão anterior

Às vezes, um problema pode prejutipr sua produtividade. Alguns usuários decidem reverter para uma versão anterior até que possamos corrigir o problema. Não recomendamos isso, pois pode causar uma série de outros problemas, então faça por sua conta e risco.

**Aviso:**

    Sempre faça backup de tudo antes de reverter! Nunca execute apenas uma versão mais antiga. Isso pode levar à perda de dados ou corromper os arquivos de configuração necessários ao Zettlr.

Embora nossa página inicial exiba apenas a versão estável mais recente, você sempre pode encontrar todas as versões (mesmo as antigas) em [nossa página de versões do GitHub](https://github.com/Zettlr/Zettlr/releases).

Antes de instalar uma versão mais antiga, você deve primeiro fazer um backup e garantir uma instalação limpa. Especialmente quando atualizamos a configuração que o aplicativo usa, as versões mais antigas podem travar completamente porque não entendem o formato (mais recente). Portanto, volte para a etapa três e remova todo o diretório definitivamente (após fazer backup dos arquivos). Isso garante que a versão mais antiga será realizada na primeira tentativa.