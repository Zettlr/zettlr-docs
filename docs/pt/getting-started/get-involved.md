# Envolva-se

Você quer tornar o Zettlr um aplicativo ainda melhor? Isso é ótimo! Quer você seja um usuário, queira fornecer uma nova tradução ou iniciar o desenvolvimento do aplicativo, você veio ao lugar certo!

## Junte-se à comunidade

Zettlr tem uma comunidade vibrante que ajuda uns aos outros em toda a rede. A lista a seguir contém os locais comuns para começar para qualquer problema que você possa ter.

* O [Fórum da comunidade Zettlr](https://forum.zettlr.com/) — O fórum oficial é um ótimo lugar para pedir ajuda, responder perguntas e discutir personalizações.
* [Zettlr Discord](https://go.zettlr.com/discord) — O Zettlr Discord é um lugar para os Discordianos (não parece haver um termo oficial).
* [Subreddit Zettlr](https://www.reddit.com/r/Zettlr) — O Subreddit Zettlr é destinado aos Redditors da comunidade.
* A [conta oficial do Mastodon](https://fosstodon.org/@zettlr) – Aqui você pode acompanhar as atualizações do aplicativo em tempo real. É o único lugar onde anunciamos regularmente tudo o que fazemos. Além disso, participamos da maioria das discussões, portanto, se você tiver dúvidas, pode deixá-las aqui.
* A [conta oficial Bluesky](https://bsky.app/profile/zettlr.com) — A mesma que nossa conta Mastodon
* [Nosso canal no YouTube](https://www.youtube.com/c/Zettlr) — Se você é mais do tipo visual, pode encontrar alguns vídeos introdutórios aqui. Observe que não mantemos o canal regularmente, portanto os vídeos podem estar desatualizados.
* [Discussões no GitHub](https://github.com/Zettlr/Zettlr/discussions) — Uma versão um pouco mais moderna dos fóruns clássicos da Internet.
* [O rastreador de problemas do GitHub](https://github.com/Zettlr/Zettlr/issues) — Este é o núcleo de nossos esforços para melhorar o aplicativo. Se você detectar um bug, tenha uma sugestão ou queira propor uma funcionalidade, aqui é o lugar certo. No entanto, especialmente quando se trata de dúvidas sobre o fluxo de trabalho do usuário ou novos recursos, **é melhor discutir suas ideias primeiro no fórum ou no Discord**.

## Contribuições do usuário

Como um usuário que deseja um aplicativo de escrita bonito e funcional, fique atento a qualquer erro que o aplicativo possa produzir e, mais importante, diga-nos como tornar o fluxo de trabalho mais eficiente! Só podemos julgar pelo nosso próprio fluxo de trabalho, portanto, para tornar o aplicativo melhor para você também, precisamos saber como. Lembre-se: não podemos criar um fluxo de trabalho como está no design. Quando fazemos concessões a outros fluxos de trabalho, tentamos tornar os recursos mais acessíveis ou operar de maneira mais tranquila, já que as compensações não são muito difíceis.

Por favor, relate bugs abrindo problemas no repositório GitHub. Desta forma podemos responder rapidamente ao relato e tratar diretamente do problema.

## Traduzindo o aplicativo

Agradecemos qualquer ajuda na tradução do aplicativo em todos os idiomas do planeta. Zettlr utiliza o sistema `gettext` para traduzir conteúdo.

As traduções são mantidas [junto com o código-fonte deste aplicativo em nosso repositório](https://github.com/Zettlr/Zettlr/tree/develop/static/lang). Para traduzir, você precisará de uma conta GitHub, mas não requer conhecimento técnico.

**Observação:**

Se você possui conhecimento técnico, também pode pular a explicação abaixo e [clonar o repositório](https://github.com/Zettlr/Zettlr) diretamente.

Para melhorar uma tradução, vá até a pasta `static/lang` e baixe o arquivo `*.po` que corresponde ao código do idioma que você deseja melhorar (por exemplo, `pt-BR.po` para português brasileiro).

Depois de baixar o arquivo, você precisará de um programa para modificar as traduções. Recomendamos o aplicativo [POedit](https://poedit.net/). Também oferece uma versão “pro”, mas você não precisa dela para traduzir.

Depois de modificar a tradução ao seu gosto, é hora de adicionar as traduções ao aplicativo. Para fazer isso, siga as etapas [este excelente guia sobre como propor alterações no GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing-files-in-another-users-repository).

### Criando uma nova tradução

Se você deseja criar uma tradução para um idioma que ainda não existe, o processo é um pouco mais complicado.

**Observação:**

    Se você não confia em suas próprias habilidades para criar uma nova tradução, entre em contato conosco. Teremos o maior prazer em criar o arquivo correspondente para que você possa seguir as etapas mais simples acima.

1. Para criar um novo arquivo de tradução, certifique-se de que o sistema `gettext` esteja instalado em seu computador
2. Clone o repositório: `git clone https://github.com/Zettlr/Zettlr.git`
3. Vá para o diretório: `cd Zettlr`
4. Execute o comando de inicialização, atualizando `<lang>` pelo código do idioma correspondente, por exemplo, “pt-BR” ou “de-DE”: `msginit --input=static/i18n.pot --locale=<lang> --output=static/lang/<lang>.po`
5. Um novo arquivo chamado `<lang>.po` deveria ter aparecido no diretório de tradução. Prossiga com a tradução e abra um PR.

## Desenvolvimento

Para começar a desenvolver, [bifurque o repositório](https://github.com/Zettlr/Zettlr), trabalhe em seus recursos, correções de bugs, etc. Por favor, lembre-se de **abrir PRs apenas no branch de desenvolvimento!** O branch master só é enviado quando uma nova versão está sendo elaborada. Portanto, se você estiver desenvolvendo um novo recurso e uma nova versão do Zettlr para ser lançada, você pode simplesmente puxar o `upstream master` para estar atualizado novamente e continuar escrevendo seu recurso.

Se você está começando a trabalhar em algo, lembre-se de anunciar isso no Issue Tracker para que possamos saber que não está funcionando.

**Observação:**

[O guia de desenvolvimento pode ser encontrado em nosso README](https://github.com/Zettlr/Zettlr#contributing-code), incluindo instruções de configuração e uma documentação dos comandos disponíveis.