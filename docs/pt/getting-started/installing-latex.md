# Instalando o LaTeX

Zettlr permite exportar para vários formatos de arquivo, incluindo PDF. Existem duas maneiras de exportar para PDF: Através do próprio Zettlr e com a ajuda de um programa externo chamado LaTeX. Pronto para uso, o Zettlr oferece suporte a um formato de exportação chamado `Simple PDF`. Isso exportará um arquivo para HTML e depois o “imprimirá”, semelhante à forma como os navegadores imprimem sites.

Para exportar arquivos PDF mais avançados, você precisa instalar o [LaTeX](https://en.wikipedia.org/wiki/LaTeX). LaTeX é uma linguagem de composição que permite uma grande personalização, mas por ser um programa relativamente grande, não vem junto com o Zettlr. Aqui mostramos como confluí-lo.

**Dica:**

Zettlr oferece suporte a vários mecanismos para criar arquivos PDF, não apenas LaTeX. Por exemplo, Zettlr também oferece suporte a Tectonic ou Typst. Nesta documentação, nos concentramos no LaTeX, pois é o sistema mais confiável para a criação de arquivos PDF. Você pode selecionar qual mecanismo PDF deseja usar modificando seu [perfis de exportação ("Arquivos padrão")](../export/defaults-files/). Se você não deseja usar o LaTeX para exportar PDF, não é necessário instalar o LaTeX. Escrevemos um guia fácil para [escolher o mecanismo de PDF correto](../export/pdf-engine.md) aqui na documentação.

As distribuições LaTeX geralmente vêm em dois sabores: uma instalação “completa” apresentando uma série de programas gráficos para escrever TeX diretamente e uma instalação “mínima” que contém apenas os compiladores reais. O Zettlr fica satisfeito com apenas uma instalação mínima (porque só precisa do compilador), mas se você quiser mexer mais com o LaTeX, você está livre para instalar o pacote completo.

**Observação:**

Especialmente se você instalar apenas a configuração mínima, será necessário instalar pacotes adicionais posteriormente. Leia até o final deste guia para ver como.

## Janelas

A instalação do LaTeX no Windows funciona como qualquer outro programa. Basta baixar e instalar um dos seguintes:

* Configuração mínima: MikTeX ([download](https://miktex.org/download))
* Configuração completa: TeX Live ([download](https://www.tug.org/texlive/))

## macOS

Semelhante ao Windows, o macOS também possui instaladores simples que instalam uma das duas versões:

* Configuração mínima: Basic TeX ([download](https://www.tug.org/mactex/morepackages.html))
* Configuração completa: MacTeX ([download](https://www.tug.org/mactex/mactex-download.html))

## Linux

As distribuições Linux possuem vários pacotes LaTeX disponíveis para instalação diretamente do seu gerenciador de software. Se você estiver executando o Flatpak, deverá instalar a extensão Flatpak TeX Live, em vez de uma distribuição TeX do gerenciador de software do sistema. Existem também pacotes mínimos e completos. Listamos opções para distribuições comuns abaixo.

**Observação:**

Na verdade, não importa quais versões você instala, mas há um requisito: você precisa instalar o binário `xetex`, já que esse é o compilador que o Zettlr usa por padrão. Em caso de dúvida, consulte o manual de sua distribuição para obter mais informações sobre como instalar corretamente o TeX.

### Debian/Ubuntu

A configuração mínima com o compilador XeLaTeX:

```shell
$ sudo apt install texlive-base texlive-xetex
```

A configuração completa:

```shell
$ sudo apt install texlive-full
```

### Fedora/RHEL

O Fedora oferece três distribuições: básica, média e completa. Instale um destes:

```shell
$ sudo dnf install texlive-scheme-basic
$ sudo dnf install texlive-scheme-medium
$ sudo dnf install texlive-scheme-full
```

### Pacote plano

Instale o plugin texlive para Flatpak (atenção, é a versão completa e, portanto, bastante grande):

```shell
$ flatpak install org.freedesktop.Sdk.Extension.texlive
```

## Instalando pacotes adicionais

A maioria dos recursos do LaTeX vem na forma de pacotes. Por padrão, as instalações mínimas vêm apenas com um conjunto básico de pacotes. O modelo padrão usado pelo Zettlr requer a presença de alguns pacotes adicionais em seu sistema. Você precisa instalar esses pacotes, mas eles geralmente têm apenas alguns quilobytes de tamanho, portanto não ocupam muito espaço no disco. Mesmo com instalações grandes ou completas, alguns pacotes podem estar faltando.

Recomendamos que você não instale pacotes, a menos que o Zettlr reclame durante as exportações. Se estiver faltando algum pacote, o Zettlr apresentará um de dois erros: `Command \somecommand not defined` ou `File somefile.sty not found`. Em ambos os casos, é provável que o comando ou arquivo seja fornecido por um pacote. É fácil instalar os pacotes ausentes usando o procedimento a seguir.

**Observação:**

No Windows, o LaTeX tentará instalar os pacotes ausentes automaticamente e perguntará se deve fazê-lo. Isso significa que você só precisa confirmar uma caixa de diálogo. No macOS e no Linux, você precisará usar uma linha de comando. Mais especificamente, no macOS e Linux, você precisa usar uma ferramenta chamada `tlmgr` (TeXLive Manager).

1. Todos os pacotes LaTeX estão listados em [“Comprehensive TeX Archive Network” (CTAN)](https://www.ctan.org/). Pegue o nome do arquivo (incluindo sua extensão, `.sty`) ou o comando e pesquise-o usando a barra de pesquisa.
2. Por exemplo, se o LaTeX reclamar que o comando `\hypertarget` não está definido, [procure-o assim](https://www.ctan.org/search?phrase=hypertarget).
3. No caso de “hipertarget”, você receberá um único pacote: `gmiflink`. Se houver mais de um resultado, tente pesquisar no Google o que você precisa. Geralmente há alguma discussão, já que você nunca é o primeiro a enfrentar o problema.
4. Para chamá-lo no macOS ou Linux, digite `sudo tlmgr install <packagename>` em uma janela do terminal.
5. Em seguida, tente exportar novamente. Repita essas etapas até que todos os pacotes ausentes sejam instalados.

**Dica:**

Às vezes, a pesquisa CTAN não fornece resultados para suas pesquisas. Uma alternativa para pesquisar CTAN diretamente é usar `tlmgr`. Você pode consultar quais pacotes contêm um arquivo chamado `tlmgr info <filename>`. Por exemplo, muitos que Zettlr exibem uma mensagem de erro que diz "Arquivo `biblatex.sty' not found." You can then query `tlmgr` for this file by running `tlmgr info biblatex.sty`. It will provide you several search results, which includes the package `biblatex`. You can then proceed to install it by running `tlmgr install biblatex` e espere até que o comando tenha concluído. Em seguida, tente exportar novamente.