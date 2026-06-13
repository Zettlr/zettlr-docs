# Zettlr como um aplicativo portátil

Mesmo que a maioria das pessoas simplesmente instale e use o Zettlr como um programa como qualquer outro, alguns de vocês podem querer configurá-lo para ser usado como um aplicativo *portátil*. Aqui descrevemos como isso funciona.

**Observação:**

    Observe que não podemos fornecer suporte para configurações portáteis, pois o aplicativo foi projetado para ser executado em uma configuração normal. Se você encontrar problemas, tente reproduzi-los em uma instalação normal antes de abrir um problema. Fornecemos este guia como cortesia.

## O que é um aplicativo portátil?

Um portátil é basicamente um aplicativo do Windows totalmente independente do computador em que o aplicativo é executado. Além disso, as pessoas usam aplicativos de configuração portátil para armazená-los em chaves USB que podem ser conectados a diferentes computadores.

O principal problema para tornar um aplicativo portátil é que muitas coisas, como configurações, arquivos de dados e outras informações importantes que o aplicativo precisa para executar, são normalmente armazenadas em alguns diretórios padrão, principalmente na conta do usuário da pessoa que está executando o programa no momento. No entanto, estes estão sempre no computador e não na chave USB. A chave para tornar um aplicativo portátil é ensinar a ler e gravar seus dados não no computador, mas na chave USB.

**Observação:**

    Não recomendamos que você instale o Zettlr como um aplicativo portátil, a menos que você saiba que é necessário.

## Como configurar o Zettlr como um aplicativo portátil

Em princípio, um aplicativo portátil se distingue por apenas alguns caracteres de uma instalação normal. O que explicamos aqui basicamente faz uso de uma opção de linha de comando que usamos internamente para limpar o aplicativo, mas funciona perfeitamente para manter uma instalação portátil.

**Observação:**

    Como é uma opção de depuração, não garantimos que funcione. Sua milhagem pode variar.

O primeiro passo é instalar o aplicativo regularmente baixando um dos instaladores do Windows e executando-o. No entanto, ao instalar o aplicativo em um padrão local, você deverá colocá-lo em seu pen drive (ou em qualquer outra pasta – como será um aplicativo portátil, você poderá mover a pasta mais tarde).

**Aviso:**

**Não** instale o aplicativo com privilégios superiores, pois isso criará algumas entradas de registro que serão vinculadas ao seu computador.

Após a execução do instalador, você poderá ver todos os arquivos necessários – `Zettlr.exe`, o arquivo `app.asar` e outros – na pasta que você instruiu o instalador a usar.

Ao lado do aplicativo, você precisa criar um novo diretório. Usaremos o nome "zettlr-config", mas você pode escolher o nome que desejar. Lembre-se de substituir o nome escolhido por “zettlr-config” nas etapas a seguir.

Como o Windows 10 não oferece suporte aos caminhos relacionados aos atalhos, usar um atalho simples não funciona. Então, o que faremos a seguir é criar um arquivo BAT que você possa executar. Portanto, crie um arquivo que termine em `.bat` – por exemplo, `Zettlr.bat` – e adicione o seguinte conteúdo:

```
Zettlr.exe --data-dir="./zettlr-config"
```

Agora, sempre que você iniciar o arquivo em lote, ele deverá abrir o Zettlr e direcioná-lo para usar a pasta `zettlr-config` para armazenar seus dados – exatamente onde seu aplicativo está. Claro, você pode escolher qualquer outro nome de pasta.

**Observação:**

    Certifique-se de que o diretório de dados existe *antes* de iniciar o aplicativo.

## Convertendo uma instalação estática em um aplicativo portátil

Também é possível converter uma instalação estática em um aplicativo portátil. Para fazer isso, primeiro copie **todo** o diretório do aplicativo do Zettlr. Todos os arquivos contidos são necessários. Copie-os para qualquer massa que desejar.

Em seguida, procure o diretório de dados do aplicativo. Deveria ser `C:\Users\<your-user-name>\AppData\Roaming\Zettlr`, mas você pode encontrar o caminho correto nas [instruções de configuração](../getting-started/setup.md). Copie este diretório – também na íntegra – para o diretório do aplicativo copiado. Você provavelmente deseja renomeá-lo para saber o que há nele.

Por último, você também precisa criar um arquivo BAT como acima:

```
Zettlr.exe --data-dir="./zettlr-config"
```

Lembre-se de substituir `zettlr-config` pelo caminho correto.