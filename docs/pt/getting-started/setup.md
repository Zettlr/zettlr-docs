# Configurar

Zettlr está disponível para Windows, Linux e macOS. Ele pode ser instalado diretamente do nosso site ou através de um dos vários gerenciadores de pacotes suportados.

## Requisitos Mínimos do Sistema

* Sistema operacional:
    *Windows 10 ou mais recente
    * macOS 11.6.0 ou mais recente
    *Debian 8 ou mais recente
    *Ubuntu 12.04 ou mais recente
    * Fedora 24 ou mais recente
    *ArchLinux
    * Qualquer distribuição suportada por AppImage ou Flatpak
* Processador: Intel Dual-Core de 1 GHz de 64 bits ou superior (32 bits não é compatível)
    * No Linux, um processador ARM equivalente de 64 bits é compatível
    * No macOS, Apple Silicon (M1, M2, etc.) é compatível
* RAM: 1 GB
* Espaço em disco: pelo menos 500 MB de espaço livre em disco

**Observação:**

Observe que as versões do sistema operacional suportadas podem mudar a qualquer momento. A lista mais recente de plataformas suportadas pode ser encontrada [aqui](https://www.electronjs.org/docs/latest/development/build-instructions-gn#platform-prerequisites).

## Instalando o Zettlr

**Aviso:**

**Isenção de responsabilidade**

A equipe Zettlr compila e distribui o aplicativo diretamente para:
    
* macOS (Intel e Apple Silicon, `.dmg`)
    * Windows (x64, `.exe`)
    * Linux baseado em Debian ( `.deb` + APT)
    * Linux baseado em Fedora (`.rpm`)
    * AppImage (`.AppImage`)
    
Todas as outras fontes, como vários gerenciadores de pacotes ou o repositório Arch Linux, são mantidas e fornecidas por voluntários, e não pela equipe Zettlr. Em quase dez anos, nunca recebemos permissão de nenhuma das fontes que listamos aqui na documentação. Nós os listamos aqui porque consideramos seguros.
    
No entanto, não controlamos essas etapas de construção e não podemos assumir responsabilidade por nenhuma dessas fontes de terceiros. Leia-os a seus próprios títulos.

### Janelas

Para instalar o Zettlr no Windows, baixe o aplicativo na [página de download](https://www.zettlr.com/download) e clique duas vezes para abrir o instalador. Por padrão, o instalador solicitará permissão administrativa durante a configuração para instalar o aplicativo para todos os usuários do computador.

Se você não possui privilégios administrativos em seu computador ou não deseja instalar o aplicativo para todos, você pode optar por convidá-lo apenas para o usuário atual. Neste caso, nenhuma exigência é necessária, mas alguns recursos não podem funcionar conforme o esperado.

Zettlr também está [disponível no gerenciador de pacotes de chocolate](https://community.chocolatey.org/packages/zettlr).

**Observação:**

    Recomendamos instalar o Zettlr para todos os usuários.

### macOS

Para instalar o Zettlr no macOS, baixe o arquivo DMG em nossa [página de download](https://www.zettlr.com/download) e monte-o clicando duas vezes nele. Em seguida, arraste o ícone do Zettlr para o diretório de aplicativos e aguarde a cópia do aplicativo.

Zettlr também está disponível via [Homebrew](https://formulae.brew.sh/cask/zettlr). Para convocá-lo, execute o seguinte comando:

```bash
brew install --cask zettlr
```

### Linux

As distribuições Linux são legiões e muitas têm sua própria forma preferida de instalação de software. Nosso objetivo é fornecer o Zettlr da maneira mais conveniente possível para você, também graças aos esforços da comunidade.

#### AppImage

Zettlr está disponível como um pacote [AppImage](https://appimage.org/) para Linux. Para encontrá-lo, baixe o pacote em nossa [página de download](https://www.zettlr.com/download). Para instalar o AppImage, coloque o arquivo em um diretório de sua escolha, faça o necessário e comece a usá-lo.

#### Pacote Plano

Zettlr está disponível como [Flatpak](https://flathub.org/home). Para instalar a versão Flatpak, baixe-a na [página FlatHub do Zettlr](https://flathub.org/apps/details/com.zettlr.Zettlr) e siga as instruções de configuração.

**Observação:**

O Flatpak não pode acessar seu sistema de arquivos por padrão. Para conceder acesso aos seus documentos, você deve primeiro configurá-lo com um pacote como, por exemplo, [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal). Em caso de problemas, entre em contato com o mantenedor do Flatpak no [repositório GitHub correspondente](https://github.com/flathub/com.zettlr.Zettlr). Não arquive relatórios no repositório principal – não poderemos ajudá-lo.

#### Ubuntu/Debian

Para instalar o Zettlr no Debian e Ubuntu, bem como em distribuições derivadas, recomendamos instalar o Zettlr usando nosso repositório APT. Você pode encontrar todas as instruções de instalação em [apt.zettlr.com](https://apt.zettlr.com/). Basta adicionar nosso repositório:

```bash
curl -s --compressed "https://apt.zettlr.com/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/zettlr_apt.gpg > /dev/null
sudo curl -s --compressed -o /etc/apt/sources.list.d/zettlr.list "https://apt.zettlr.com/zettlr.list"
sudo apt update
sudo apt install zettlr
```

**Observação:**

Estas instruções podem mudar no futuro. Por favor consulte sempre o [repositório APT](https://apt.zettlr.com/), que sempre contém as instruções corretas e atualizadas.

Se sua distribuição não suporta o aptitude, ou você deseja instalar o arquivo manualmente, você pode baixar o pacote `deb` de nossa [página de download](https://www.zettlr.com/download) e executar o arquivo.

#### Fedora

Para instalar o Zettlr em derivados do Fedora ou Red Hat, baixe o pacote `rpm` de nossa [página de download](https://www.zettlr.com/download) e execute o arquivo.

#### ArchLinux

Graças aos esforços da comunidade, o Zettlr está disponível como um pacote regular para Arch Linux. Para instalar o Zettlr no Arch, siga as instruções normais de instalação dos pacotes no Arch. Leia mais na [página Wiki do Zettlr Arch](https://wiki.archlinux.org/title/Zettlr).

## Atualizando Zettlr

O aplicativo verifica novas atualizações de tempos em tempos. Você também pode ativar manualmente a busca por atualização clicando em “Ajuda” → “Verificar atualizações”. Se uma nova versão estiver disponível, o Zettlr exibirá um símbolo de “download” na barra de ferramentas. Se você clicar nele, o Zettlr abrirá uma caixa de diálogo que contém o número da nova versão, sua versão atual e um changelog com todos os recursos e correções de bugs que a nova versão contém.

**Aviso:**

**Nunca "pule" versões!** Às vezes, alteramos a configuração do Zettlr durante uma atualização. Isso pode levar à corrupção de dados durante uma atualização se você "deixar de fora" a versão necessária que migrará sua configuração. Se você não atualizar o Zettlr há algum tempo, **não** atualize diretamente para a versão mais recente. Em vez disso, instale cada atualização uma após a outra. Você pode encontrar todas as atualizações – não apenas as mais recentes – no [GitHub](https://github.com/Zettlr/Zettlr/releases).

Para atualizar, clique no botão de download e aguarde o download terminar. Em seguida, clique em “Iniciar atualização”, que fechará o Zettlr e iniciará o processo de atualização. O atualizador será colocado em sua pasta Downloads. Você pode removê-lo assim que a atualização for bem-sucedida.

**Observação:**

    Não use este procedimento de atualização se você instalou o Zettlr por meio de um gerenciador de pacotes, por exemplo, Homebrew. Nesse caso, atualize o acordo com o procedimento do seu gerenciador de pacotes para evitar conflitos. Você pode desativar a configuração "Verificar verificar automaticamente" em suas opções para evitar que o Zettlr verifique automaticamente.

Após qualquer atualização, prepare-se para **aguardar alguns minutos** para que o Zettlr seja lançado. Após cada atualização, o cache de arquivos é limpo e, quando a versão mais recente do Zettlr é inicializada pela primeira vez, é necessário recriar esse cache de arquivos. Quanto mais arquivos e pastas você abrir, mais tempo esse processo poderá atrasar.

### Atualizações manuais

Se as atualizações automáticas não funcionarem para você, você pode atualizar manualmente baixando o instalador correto para o seu sistema (veja acima). Não há diferença (técnica) entre a primeira configuração e uma atualização; os arquivos são iguais.

**Observação:**

    Você pode optar por versões beta. Para fazer isso, ative “Notifique-me sobre versões beta” nas configurações.

## Desinstalando o Zettlr

Se você não estiver satisfeito com o Zettlr ou precisar remover o aplicativo, siga estas instruções.

**Observação:**

Caso você tenha instalado o Zettlr como um gerenciador de pacotes, não siga estas instruções para desinstalar o aplicativo. Em vez disso, consulte a documentação do seu gerenciador de pacotes sobre como desinstalar o software.

No **Windows**, acesse as configurações do software e desinstale-o de acordo com as [instruções da Microsoft](https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs-in-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98). Se desejar remover também as configurações e os dados do usuário, você pode encontrá-los no diretório `C:\Users\<your-user-name>\AppData\Roaming\Zettlr`.

No **macOS**, vá para a pasta `Applications` e mova `Zettlr.app` para a lixeira. Se desejar remover também as configurações e os dados do usuário, você pode encontrá-los no diretório `/Users/<your-user-name>/Library/Application Support/Zettlr`.

No **Linux**, o procedimento de desinstalação depende de sua distribuição e de como você instalou o aplicativo. Consulte o manual de proteção sobre como fazer isso. Se desejar remover também as configurações e os dados do usuário, você pode encontrá-los no diretório `/home/<your-user-name>/.config/Zettlr`.

**Observação:**

O Zettlr também criará os chamados arquivos “ocultos” dentro de seus espaços de trabalho que lembram as configurações de seu diretório. Esses arquivos são denominados `.ztr-directory`. Após desinstalar o Zettlr, você pode remover esses arquivos com segurança.

## Lançamentos noturnos

Desde a versão 2.0.0, oferecemos os chamados lançamentos noturnos. Nightlies são lançamentos que são criados automaticamente todas as segundas-feiras ao meio-dia (UTC) (mas às vezes os construímos manualmente). Eles contêm as alterações mais recentes na base de código. Isso significa que eles ainda são mais recentes que as versões beta, **mas** isso também pode significar que eles contêm bugs graves que ainda não encontramos.

Os lançamentos noturnos são apenas para usuários avançados que entendem os riscos de usá-los. Se você mantiver suas configurações, estatísticas de gravação e backup de seus arquivos regularmente, poderá usar com segurança o Nightlies. Agradecemos a todos que usam nightlies e nos informamos sobre os bugs que encontramos.

Para instalar uma versão noturna, você precisa baixá-la manualmente em <https://nightly.zettlr.com/>. Seu atualizador não irá notificá-lo sobre lançamentos noturnos, mas como eles são criados automaticamente todas as semanas, você pode ter certeza de que haverá um novo lançamento.

**Aviso:**

    Os lançamentos noturnos são totalmente automatizados. Não garantimos qualquer estabilidade para estes. Normalmente, nada de ruim deve acontecer, mas há uma chance de que esses lançamentos danifiquem seu computador. Ao usar liberações noturnas, você concorda que abrange esses riscos.

Observe também que não mantemos nenhuma compilação noturna anterior. Uma noite de cada semana simplesmente substituirá a anterior. Se um nightly estiver inutilizável, sinta-se à vontade para nos notificar para que possamos agendar manualmente uma nova compilação depois de corrigirmos o bug.