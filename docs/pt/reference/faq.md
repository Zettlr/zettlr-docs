# Perguntas Frequentes

## Tente instalar o Zettlr no Windows, mas há um aviso de segurança dizendo que não devo instalar o aplicativo!

Zettlr usa assinatura de código conforme recomendado pela Microsoft e pela Apple para garantir que você instale apenas software confiável. No entanto, no Windows, um aplicativo precisa de uma quantidade suficientemente grande de instalações para suprimir esse aviso de segurança. Essa "confiança" é atribuída a um certificado de assinatura de código, não ao aplicativo em si. Como o Zettlr usa certificados de forma privada emitidos, eles têm vida útil limitada. O certificado atual é válido até 2025, após o qual o Zettlr será assinado com um novo certificado que deverá passar por todo o processo mais uma vez. Contanto que você baixe o Zettlr [da nossa página inicial](https://www.zettlr.com/download) ou da [página de lançamentos do GitHub](https://github.com/Zettlr/Zettlr/releases) (ambos são os mesmos arquivos), você pode instalar o aplicativo com segurança e ignorar o aviso.

## Não posso ignorar o aviso de segurança no Windows e, portanto, não consigo instalar o aplicativo!

Em muitas empresas, o departamento de TI impõe restrições para que você não possa ignorar um aviso de segurança por conta própria e, portanto, não possa instalar o aplicativo. Se você trabalha em um ambiente tão restrito, talvez seja melhor apenas falar com seu departamento de TI e pedir que eles coloquem o Zettlr na lista de permissões para que você (ou seus administradores) possam instalar o aplicativo. Se eles tiverem dúvidas sobre as origens e/ou confiabilidade, talvez seja melhor encaminhá-los [para o repositório GitHub do Zettlr](https://github.com/Zettlr/Zettlr).

## macOS me pergunta se desejo instalar "ferramentas XCode Commandline" ao iniciar o Zettlr

O Zettlr se integra ao Git detectando repositórios em seu sistema e exibindo informações relevantes nas propriedades do diretório. Na inicialização, o Zettlr confirma a instalação de `git` em sistemas Windows e Linux por meio de uma seleção simples. No macOS, se `git` estiver ausente, o sistema solicitará a instalação de "ferramentas de linha de comando XCode", que inclui `git`. Infelizmente, esse prompt não pode ser suprimido de forma confiável. Os usuários devem recusar repetidamente o prompt ao abrir o Zettlr ou optar por instalar as ferramentas de linha de comando. A instalação destas ferramentas é segura e discreta, oferecendo benefícios adicionais. Para obter mais detalhes sobre as ferramentas de linha de comando, consulte [este tópico de discussão da Apple](https://developer.apple.com/forums/thread/13781). Mais informações podem ser descobertas no [problema relacionado ao GitHub](https://github.com/Zettlr/Zettlr/issues/4709).

## Remova a pasta do tutorial do meu computador e agora não consigo recuperá-la!

Quando o Zettlr detecta que está sendo executado pela primeira vez em um computador, ele copiará automaticamente uma pasta com alguns arquivos Markdown para a pasta Documentos. Esses arquivos Markdown contêm algumas introduções básicas sobre como usar o Zettlr. No entanto, eles serão copiados apenas uma vez. Para obter esses arquivos, caso mais tarde você perceba que gostaria de revisitar o tutorial, você tem duas opções:

* Renomeie ou remova o arquivo `config.json` do diretório de dados do seu aplicativo. Se esse arquivo não estiver lá, o Zettlr pensará que está sendo executado pela primeira vez e copiará o tutorial novamente.
* Simplesmente [baixe a pasta diretamente da fonte](https://github.com/Zettlr/Zettlr/tree/develop/static/tutorial) (observe que este local pode mudar).

## Existem planos de portar o Zettlr para celulares e tablets, para Android ou iOS?

Estamos recebendo cada vez mais proteção de versões móveis do Zettlr. Estamos muito felizes que você goste do Zettlr o suficiente para querer ele em todos os seus dispositivos e adoraríamos realizar seu desejo! Infelizmente, porém, nossos recursos são suficientes apenas para manter o desenvolvimento do Zettlr em funcionamento, e adicionar mais trabalho simplesmente não é possível no momento.

## O que é Markdown?

Markdown é uma linguagem de marcação simples que permite escrever textos tão complexos quanto usar um software de escritório padrão, mas com muito menos confusão. Em vez de ter que selecionar manualmente todas as opções de formatação, no Markdown, digite `#` é suficiente para indicar um título! Quer ouvir mais? Então vá para [documentação sobre Markdown](../first-time-users/writing-markdown.md)!

## Eu tenho um limite de caracteres ou palavras muito estranhas para um texto, mas a contagem de caracteres/palavras do Zettlr está errada!

Ao escrever no Zettlr, você está escrevendo um *código-fonte* que é exportado para PDF, um documento do Word ou qualquer formato necessário. Durante essa exportação, o texto será "compilado", o que significa: as especificações serão renderizadas corretamente, uma lista de referências será adicionada, os marcadores serão convertidos em uma lista, etc. O próprio Zettlr apenas "vê" o código-fonte e, portanto, contém os caracteres presentes em seu arquivo, que serão diferentes do documento exportado.

A contagem real de palavras ou caracteres no arquivo final exportado pode, portanto, variar com base em muitas variáveis:

* O estilo de citação que você usa – alguns são mais detalhados que outros
*Alguns códigos podem ser totalmente removidos
*Alguns modelos podem gerar páginas de título ou tabelas de conteúdo, o que aumenta a contagem de palavras/caracteres

Zettlr não pode levar em conta todas essas variações. Portanto, aqui estão algumas tips para ajudá-lo a atingir a meta:

1. A maioria dos professores não importará que você ultrapasse o limite de algumas palavras ou caracteres, desde que seja razoável.
2. Se você tiver que enviar algo em PDF, ninguém se sentará e contará os caracteres ou palavras visíveis.
3. Se por algum motivo você não puder ultrapassar o limite nem mesmo em uma única palavra ou caractere, tente **ultrapassá-lo** e exporte-o quando chegar à linha de chegada para visualizar o caractere real ou a contagem de palavras. Depois de algumas vezes, você terá uma boa ideia de quanto tempo o documento exportado será baseado na contagem de palavras/caracteres do Zettlr.

## Se eu não quiser mais usar o Zettlr, o que preciso fazer para trocar de programa?

Simplesmente desinstale o Zettlr e comece a usar outro programa de sua escolha. Zettlr não mexe com seus arquivos. Se você estiver usando projetos ou modificados os diretórios, haverá pequenos arquivos chamados `.ztr-directory` presentes em algumas pastas. Para removê-los, basta redefinir a classificação dos diretórios para o padrão e remover todos os projetos antes de desinstalar o aplicativo (ou remover manualmente esses arquivos posteriormente).

## Qual é a formatação correta de URI para links Markdown?

Por padrão, o Zettlr renderiza links Markdown no formato `[Your Link Text](your-link)` para serem clicáveis​​(ao manter botões `Cmd` ou `Ctrl`). No entanto, os links Markdown podem apontar tanto para sites quanto para outros arquivos no seu computador. Você pode omitir muitas informações do seu link, e o Zettlr usa uma heurística para determinar as informações por conta própria, mas pode inferir um contexto falso para o que você pretende. Veja como funciona:

- Os links com todas as informações presentes (um protocolo e um caminho totalmente atualizado) não serão alterados. Exemplos: `file:///home/foo/documents/test.md` e `http://www.example.com/`.
- Links relativos ao protocolo `file://` serão convertidos em absolutos. Exemplo: `file://./relative/file.md` se tornará `file:///home/foo/documents/relative/file.md`.
- Presume-se que links sem protocolo tenham `https://`. Exemplo: `www.zettlr.com` se tornará `https://www.zettlr.com`.
- Caminhos de arquivo absolutos, mas sem o protocolo `file://` terão esse prefixo. Exemplo: `/home/bar/documents/absolute.md` se tornará `file:///home/bar/documents/absolute.md`.
- Caminhos de arquivos relativos com e sem o indicador relativo (`./`)serão convertidos em caminhos de arquivos absolutos. Exemplo: `./more/relative.md` e `more/relative.md` se tornarão `file:///home/foo/documents/more/relative.md`. **Exceção**: Eles residem na mesma pasta: `file.extension` nesse caso será tratado como um URI (exceto que o arquivo é `.md`).

Resumindo: se você está preocupado com a forma como seus links são tratados, seja mais explícito. Duas regras gerais podem ser usadas para forçar o Zettlr a tratar um link como um arquivo ou link da web: Anexe um `./` para solicitar explicitamente um link de _arquivo_ e anexo `/` para solicitar explicitamente um link de _web_.

## Os links internos não abrem o arquivo correspondente!

Caso os links internos usados ​​para interligar arquivos não funcionem conforme o esperado, comprovem-se de ter feito o seguinte:

1. O link é reconhecido? Esses links são encapsulados por `[[` e `]]`. Quando o registrador Zettlr um link interno, ele o colore e se você passar o cursor do mouse sobre ele, uma tip de ferramenta deverá aparecer fornecendo algumas informações iniciais sobre o arquivo ou informando que o arquivo fornecido não foi encontrado.
2. Você pressionou a tecla `Cmd` ou `Ctrl` ao clicar no link? Clicar com o mouse em algum lugar do texto significa que você pretende editar o texto, então você deve informar ao Zettlr que realmente deseja seguir o link.
3. Você usou um nome de arquivo ou ID válido? Zettlr abre apenas arquivos que _exatamente_ possuem o ID fornecido ou o nome do arquivo fornecido (sem distinção entre segredos e minúsculos). Se nada acontecer ao clicar no link, isso certamente significa que um arquivo com o ID ou nome do arquivo fornecido não existe no sistema. Observe que você deve omitir a extensão do arquivo ao criar um link. Por exemplo, para vincular a `my-file.md`, você só precisa colocar `my-file` entre colchetes.
4. O arquivo está atualmente carregado no Zettlr? A vinculação interna só funciona se o Zettlr tiver lido o arquivo.

## Conheço LaTeX e quero usá-lo também em meus arquivos Markdown. Isso é possível?

Sim. Basta escrever suas declarações `LaTeX` onde desejar. Assim que você exportar para PDF, o Pandoc fará o resto e os extratos serão interpretados pelo mecanismo PDF. Infelizmente, o realce de sintaxe `LaTeX` não é suportado. Além disso, observe que o Pandoc limpará todos os blocos `LaTeX` antes de exportar para qualquer coisa que não seja PDF, o que significa que os blocos dentro de `\begin` e `\end`, por exemplo, estarão completamente ausentes do arquivo final do Office. Na exportação HTML, todos os blocos `LaTeX` serão retidos, mas não convertidos para outra coisa.

## Não consigo alinhar o texto justificado ou certo!

Não é um bug, é uma funcionalidade: o Markdown não possui os sinais de formatação porque o texto deve estar sempre justificado ou alinhado à esquerda (para idiomas LTR) e portanto não pertence ao conjunto de formatos de bloco necessários que o Markdown oferece. No entanto, você ainda pode usar os comandos `LaTeX` para renderizá-los à esquerda ou à direita. Basta colocar o texto que você deseja alinhar à direita ou prescrição em `\begin{<option>}` e `\end{<option>}`, onde `<option>` pode se referir a `flushleft`, `flushright` ou colocar um `\justify` na frente de um parágrafo que você deseja ocasionalmente. [Saiba mais em sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

## Na saída PDF, desejo que determinados títulos não sejam numerados/não listados no Índice

Este é um recurso especial do Pandoc. Adicione as aulas especiais `-` (simplesmente um sinal de menos) ou `.unlisted` respectivamente. O sinal de menos números evitados, enquanto “não listado” impede que o título seja aplicado no índice. Observe que isso se aplica apenas à saída em PDF.

Exemplos:

```markdown
# This heading will be unnumbered, but in the ToC {-}

# This heading will be numbered, but not in the ToC {.unlisted}

# This heading will both be unnumbered, and hidden from the ToC {- .unlisted}
```

**Observação:**

    Observe que esses colchetes precisam ser a última coisa da linha. Mesmo os comentários posteriores irão quebrar esse comportamento.

## Quero usar quebras de linha única e não criar novos parágrafos. Quando simplesmente pressiono Enter uma vez, a quebra de linha única é removida!

Para forçar o Pandoc a renderizar quebras de linha únicas como tal, termine sua linha com uma barra invertida (`\`) ou dois espaços. A barra invertida e os dois espaços não serão renderizados no arquivo exportado.

## O Zettlr parece não encontrar o LaTeX, que mesmo assim está instalado!

Isso pode acontecer caso seu computador decida instalar o software em um diretório não padrão. O Zettlr fará o possível para localizar os aplicativos, mas poderá falhar se eles forem enterrados em algum lugar. Certifique-se de que o binário xelatex esteja dentro do seu PATH.

## Ao exportar para PDF, recebo constantemente mensagens de erro!

Pode acontecer que você receba alguns erros ao tentar exportar seus arquivos. Existem dois tipos de erros comuns que você mesmo pode resolver.

O erro mais comum é assim:

**Erro LaTeX: Arquivo \<some name\>.sty não encontrado.**

Isto significa simplesmente que um determinado pacote não foi encontrado (eles terminam em `.sty`). No Windows, esses pacotes devem ser instalados automaticamente assim que forem necessários (uma janela poderá aparecer solicitando confirmação); no macOS e Linux basta executar o comando `tlmgr install <some name>`.

**Observação:**

Observe que alguns arquivos `.sty` fazem parte de pacotes maiores. A maneira mais fácil de descobrir o pacote de instalação é ir à [página inicial do CTAN](https://ctan.org/) e procurar pelo nome do pacote (o nome do arquivo sem `.sty`). Você verá então na seção "Contido em" o nome real do pacote que deseja instalar. Exemplo: [O pacote `footnote.sty`](https://ctan.org/pkg/footnote) está contido no pacote `mdwtools`, então em vez de executar `tlmgr install footnote` você deve executar `tlmgr install mdwtools`.

No caso de outros erros, o Zettlr permite copiar e colar o texto da mensagem de erro, pois em quase todos os casos, uma breve pesquisa no Google leva a uma solução. E se isso não acontecer, a comunidade poderá ajudá-lo a perceber melhor o erro que você está recebendo.

## Encontrei um bug!

Isso é uma ótima notícia! Bem, não é ótimo, mas é bom que você tenha encontrado! Nesse caso, acesse o [GitHub](https://github.com/Zettlr/Zettlr/) e abra um problema para que possamos saber o que está acontecendo e podermos trabalhar para resolver o bug.

## Tenho uma solicitação de recurso! / Tenho uma sugestão para tornar um recurso mais eficiente!

É bom ouvir isso! Dependemos sempre da experiência de outras pessoas com o aplicativo para melhorar sua eficiência e usabilidade em diversas situações. Nesse caso, acesse o [GitHub](https://github.com/Zettlr/Zettlr/) e abra um problema para que possamos ir direto ao assunto.

## E quanto à minha privacidade? O Zettlr transferiu algum dado ou não preciso que eu me preocupe?

Zettlr prioriza a privacidade. Ele não envia nenhum dado e é totalmente funcional offline. No entanto, sempre que você abrir o Zettlr ou usar o item de menu correspondente, o Zettlr se conectará à API do Zettlr para recuperar uma lista de todos os lançamentos. Esta lista é então usada para determinar se você está ou não usando a versão mais recente. Durante a conexão, o servidor Zettlr recebe seu endereço IP, essas informações serão armazenadas por no máximo 30 dias (usando logrotação), o que é bastante comum entre servidores. Essas informações nunca sairão do nosso servidor e serão usadas apenas durante incidentes para determinar o que aconteceu. Após os 30 dias, o acesso será removido dos logs do servidor. Somos Open Source, não Facebook.