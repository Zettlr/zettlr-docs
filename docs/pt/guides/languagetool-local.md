# Configurando o LanguageTool localmente

Zettlr apresenta integração com LanguageTool, um serviço online que verifica não apenas a ortografia, mas também gramática e estilo. Porém, por ser um serviço online, a configuração padrão do Zettlr requer uma conexão aos servidores internos de uma empresa, o que pode constituir um risco à privacidade, uma vez que seus textos precisam ser enviados pela internet para serem verificados.

A razão pela qual o Zettlr contém uma integração do LanguageTool é porque também existe a possibilidade de instalar o serviço localmente no seu computador, caso o seu texto permaneça no seu dispositivo.

Neste guia, fornecemos várias maneiras de configurar o LanguageTool localmente:

1. Somente para macOS, você pode instalar o LanguageTool via Homebrew.
2. Somente para Linux, você pode instalar o LanguageTool via Flatpak.
3. Para cada computador (Windows/macOS/Linux), você pode instalar o LanguageTool via Docker.

Abaixo, listamos todos os três métodos de instalação do LanguageTool e descrevemos como fazê-lo.

## Configuração via `brew` (macOS)

**Observação:**

    Este guia de configuração exige que você execute comandos em seu aplicativo de terminal.

LanguageTool está disponível via [Homebrew](https://brew.sh/) e ocupará aproximadamente 500 MB de espaço em disco. Você perde alguma capacidade de personalização, mas esse caminho será o mais fácil – desde que você se sinta confortável em executar comandos no terminal.

Para instalar o LanguageTool no macOS via Homebrew, basta seguir estes passos:

1. Certifique-se de que o Homebrew esteja instalado. Instruções muito simples podem ser encontradas em <https://brew.sh/>.
2. Instale o LanguageTool executando `brew install languagetool`.
3. Inicie o servidor LanguageTool e registre-o para iniciar automaticamente a inicialização executando `brew services start languagetool`.

Agora, o LanguageTool estará em execução e você poderá indicar o Zettlr para o servidor em <http://localhost:8081/>. De vez em quando, você deve atualizar o LanguageTool executando `brew update` seguido de `brew upgrade`. Se você já usa o Homebrew regularmente, a atualização do LanguageTool não requer nenhuma etapa extra.

## Configurando via Flatpak (Linux)

**Aviso:**

Configure o LanguageTool seguindo este guia para instalar outro aplicativo chamado "Eloquent", que é um aplicativo de código aberto fornecido com um servidor LanguageTool. Você pode visualizar e operar seu código-fonte [no GitHub](https://github.com/sonnyp/Eloquent). Assim que você iniciar o aplicativo, um servidor LanguageTool também será iniciado.
    
**Se você preferir instalar apenas o próprio LanguageTool, siga as instruções do Docker abaixo**.

Caso você execute Linux e tenha Flatpak disponível, você pode instalar o LanguageTool via Flatpak. Existe um Flatpak disponível para instalação do aplicativo “Eloquent” que inclui um servidor LanguageTool para que você possa indicar o Zettlr.

Para instalar o LanguageTool por este caminho, basta seguir estas etapas:

1. Certifique-se de que o Flatpak esteja instalado em seu computador. Você pode encontrar as instruções de configuração em <https://flatpak.org/>.
2. Instale o Eloquent executando `flatpak install flathub re.sonny.Eloquent`.
3. Inicie o Eloquent (e seu servidor LanguageTool) executando `flatpak run re.sonny.Eloquent`.

Agora, um servidor LanguageTool estará em execução e você poderá indicar o Zettlr para o servidor em <http://localhost:8081/>. De tempos em tempos, você deve atualizar o Eloquent executando `flatpak update` para atualizar seu servidor LanguageTool. Se você já usa o Flatpak regularmente, a atualização do LanguageTool não requer nenhuma etapa extra.

## Configuração do Docker (todas as plataformas)

Se não desejar usar o aplicativo de terminal ou instalar um aplicativo diferente para ter o LanguageTool disponível, você pode usar o Docker para configurar um servidor LanguageTool independente.

**Observação:**

    O guia a seguir requer permissões administrativas em seu computador. Além disso, são necessários aproximadamente 1,5 GB de espaço livre em disco. Você não precisa de conhecimento técnico para seguir este guia.

### Pré-requisitos

O servidor LanguageTool pode ser encontrado online [neste repositório](https://github.com/languagetool-org/languagetool). Neste guia, configuraremos isso com [Docker](https://en.wikipedia.org/wiki/Docker_(software)). A principal razão é que o LanguageTool requer Java, o que é difícil de configurar. Docker torna esse processo muito mais simples.

**Observação:**

No macOS, este guia funcionará como está. Em computadores que não sejam da Apple, você terá que habilitar a virtualização de hardware. Às vezes, isso deve ser habilitado no BIOS do computador e/ou nas configurações do Windows. [Aqui está um guia](https://www.windowscentral.com/software-apps/windows-11/how-to-enable-virtualization-on-windows-11).

### Configurando o Docker Desktop

Se ainda não tiver o Docker instalado, você precisará primeiro configurar o Docker Desktop. Para fazer isso, acesse a [página de download do Docker](https://www.docker.com/products/docker-desktop/) e baixe o instalador de segurança. São suportados Macs com chips Intel e Silicon, Windows e Linux.

Instale o Docker Desktop de acordo com as instruções do seu sistema operacional.

Durante a configuração, o Docker solicitará várias configurações para configurar uma variedade de serviços em segundo plano – mais do que você está acostumado, especialmente no macOS. A razão é que Docker é um ambiente de virtualização que precisa se comunicar diretamente com seu hardware.

### Configurando o LanguageTool

Depois de configurar o Docker, é hora de instalar o LanguageTool. Para fazer isso, você precisará iniciar o Docker e certificar-se de que o Docker Engine está em execução. Para garantir que o Docker sempre seja executado quando você iniciar o computador, pode ser necessário acessar as configurações e selecionar “Iniciar Docker Desktop ao fazer login”. (Enquanto estiver lá, você também pode desativar a telemetria desmarcando “Enviar estatísticas de uso”.)

Depois de terminar, clique na grande barra de pesquisa na parte superior da janela Docker e digite `erikvl87/languagetool`. Isso abrirá uma lista de resultados de pesquisa. Na guia “Imagens”, você precisará selecionar a entrada `erikvl87/languagetool` e clicar em “Puxar”.

**Observação:**

    “Puxar” uma imagem Docker significa apenas baixá-la em seu computador. A imagem do LanguageTool precisa de aproximadamente 500 MB de espaço em disco.

Assim que o download terminar, clique em “Imagens” na barra lateral esquerda do Docker. Você verá uma imagem exibida lá. Na coluna “Ações” clique no botão “Play” para iniciar a imagem.

Uma nova janela aparecerá permitindo que você “Execute um novo contêiner”. Neste ponto, você desejará primeiro expandir como “Configurações específicas”.

Dê ao seu contêiner um nome legível, como “LanguageTool”. Se você não fizer isso, o Docker gerará um nome aleatório que não descreve o que o contêiner realmente faz.

A segunda configuração importante que você deseja alterar é a das portas. Insira um número de porta (deve estar entre 1025 e 65535; o padrão é 8010). Isto é crucial. Você também pode deixar em branco para que seja gerado aleatoriamente, mas você precisará desse número.

Finalmente, você pode definir algumas variáveis ​​de ambiente para ajustar o comportamento do LanguageTool. Estes são questionáveis. Se você quiser saber mais, [veja o arquivo README da imagem](https://hub.docker.com/r/erikvl87/languagetool).

Agora, clique em “Executar”. Você será removido automaticamente da guia “Containers”, onde verá alguma saída de log que mostra o que o LanguageTool está fazendo.

Abaixo do nome do contêiner na parte superior, você verá um link que diz algo como `8010:8010`. Clique nisso agora. Ele deve abrir seu navegador com uma URL como <http://localhost:8010/>. Se o LanguageTool estiver funcionando corretamente, aparecerá “Erro: Argumentos ausentes para a API do LanguageTool”.

Neste ponto, o LanguageTool está em execução!

## Configurando o Zettlr para usar o LanguageTool localmente

Finalmente chegou a hora de orientar o Zettlr sobre como se conectar à configuração local do LanguageTool. Para fazer isso, inicie o Zettlr e abra as preferências. Vá para o guia Verificação ortográfica.

Neste guia, ative a opção “Usar LanguageTool” e selecione “Servidor personalizado” como seu provedor de LanguageTool. No campo Servidor personalizado, insira a URL que você acabou de abrir, por exemplo, <http://localhost:8010/>. Se você instalou o LanguageTool através de uma das outras abordagens sugeridas, provavelmente precisará da URL <http://localhost:8081/>. Basta verificar novamente com o guia correspondente.

É isso! Agora, o Zettlr deve ser capaz de usar o LanguageTool localmente e nenhum texto será enviado pela Internet. Isso tem a vantagem adicional de que sua própria configuração do LanguageTool também funcione se você estiver offline, por exemplo, durante uma viagem.

Além disso, se você usar a extensão do navegador LanguageTool para verificar sua entrada de texto em sites, também poderá direcionar essa extensão para se conectar à sua configuração local.

## Manutenção e limpeza

De tempos em tempos, o LanguageTool receberá atualizações. Para garantir que você execute uma versão mais recente do LanguageTool, siga as instruções no guia para atualizar o LanguageTool. Caso você tenha instalado o LanguageTool via Docker, será necessário excluir o contêiner existente e baixar novamente a imagem mais recente para obter as atualizações mais recentes.

Além disso, é necessário verificar novamente se o Docker e o LanguageTool estão em execução sempre que você inicia o computador. Se o Zettlr reclamar que o LanguageTool está offline (mostrado na barra de status), isso indica que ele não parece estar em execução. Nesse caso, basta reiniciar o contêiner.