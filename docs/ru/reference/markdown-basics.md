# Основы Markdown

Как и многие другие приложения, Zettlr использует `Markdown`, изобретенный [Джоном Грубером](https://daringfireball.net/). Конечно, за столь длительный период времени произошло огромное количество изменений, которые создали возможности для современных приложений Markdown. В этом документе рассматриваются следующие темы:

- [Основы Markdown](#основы-markdown)
  - [Краткая история](#краткая-история)
  - [Диалекты Markdown](#диалекты-markdown)
  - [Zettlr и Markdown](#zettlr-и-markdown)
  - [Markdown 101: Наиболее важные коды](#markdown-101-наиболее-важные-коды)
    - [Заголовки](#заголовки)
    - [Встроенное форматирование](#встроенное-форматирование)
    - [Блочные элементы](#блочные-элементы)
    - [Ссылки и изображения](#ссылки-и-изображения)
    - [Сноски](#сноски)
    - [Обрамленные блоки кода](#обрамленные-блоки-кода)
  - [Дополнения к Zettlr Markdown](#дополнения-к-zettlr-markdown)
  - [Ресурсы по Markdown](#ресурсы-по-markdown)

***

## Краткая история

Since the personal computer became widely available in the 1990s, there were two groups of formats existing side-by-side: word processor documents, such as `.doc`, or `.odt` and code documents, such as `.js`, `.cpp` or `.py`. Both groups of documents contain human readable text, but there was one simple, yet huge difference: While JavaScript files or C++ files contained plain text (i.e., only the text that you would see when you open such a file), word processor documents contained a _lot_ more stuff. Word processor documents always hold information about the page size (e.g., A4 or letter), how different blocks should be formatted (e.g., the font of headings or how much blockquotes are indented). If you open a Word/Office document on your PC right now, you can see what I mean: You immediately see what is a heading based on the font size and font weight of its text.

For a long time, both these groups of documents stayed as distinct as would their users. Most office workers only know how to use Microsoft Word or Excel, maybe also LibreOffice implementations, while close to nobody coming from a STEM background would voluntarily use Word or similar software. Those scientists have chosen a different path: they developed a programming language called LaTeX, which allows them to create neatly formatted PDF files from a bunch of code—they follow the same workflow as researchers from the arts and humanities or regular administrative officers, but use different documents for that.

When Markdown was inaugurated by John Gruber in 2004, it was basically like saying: "Why not both?" Markdown combines both the clear reading experience from word processor documents with the benefits of software code documents, which is both versatile and easy to use—even for people that only know how to operate Word or Writer. One small example: While in word processors you would create a heading by typing "some text" and then selecting the `Heading 1` format from some menu, in Markdown you would simply type `# some text`, where the hashtag-symbol tells you immediately: "This is a first level heading!"

At first, Markdown was basically a small script John Gruber wrote for himself to yield these benefits, and it contained a lot of inconsistencies and didn't support many different elements. But over the years, progress was made. Two dates are notable:

- 2004: [John Gruber](https://daringfireball.net/projects/markdown/) initially launches Markdown
- 2012: A group of developers form [CommonMark](https://spec.commonmark.org/) to standardise Markdown into an internationally accepted norm.

## Диалекты Markdown

Сегодня существует несколько реализаций синтаксиса Markdown. Наиболее примечательными из них являются:

- **Pandoc Markdown**: [Pandoc Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) предоставляет дополнительный синтаксис с поддержкой таблиц, сносок, метаданных и многого другого. Это наиболее полезный вариант Markdown для академического письма.
- **MultiMarkdown**: расширяет исходный синтаксис с помощью сносок, таблиц и некоторых метаданных.
- **Markdown Extra**: снова некоторые дополнения к исходному синтаксису.
- **GitHub Flavoured Markdown**: это разновидность Markdown, изобретенная хостинговой платформой GitHub (на которой также размещен Zettlr!) и являющаяся сегодня одним из наиболее распространенных диалектов.
- **CommonMark**: пытается реализовать все возможные элементы, оставаясь при этом однозначным. Примечательно, что CommonMark еще не включает спецификацию для сносок.

## Zettlr и Markdown

Zettlr сам по себе реализует смесь различных диалектов. Редактор выделяет только Markdown в стиле GitHub (плюс некоторые расширения Markdown для элементов Zettelkasten и других удобств. Элементы Zettelkasten описаны в соответствующей [главе о методе Zettelkasten](../advanced/zkn-method.md), остальные описаны ниже). Если вы экспортируете свои документы в HTML и у вас не установлен Pandoc, Zettlr преобразует ваши документы с использованием _синтаксиса Markdown в стиле GitHub_. При наличии Zettlr использует Pandoc для экспорта, который сам читает ваши документы Markdown с использованием своего _синтаксиса Pandoc Markdown_.

Но Zettlr не ограничивает вас написанием Markdown. При желании вы также можете добавлять команды `LaTeX`. Эти команды правильно интерпретируются при конвертации в PDF. Они опускаются при конвертации в DOCX или ODT. И они сохраняются при конвертации в HTML. Конечно, вы также можете использовать обычный HTML-код в любом месте.

## Markdown 101: наиболее важные коды

Хотя Markdown может делать много вещей, в этом разделе я хочу описать вам самые важные элементы, которые вы будете использовать чаще всего, и как вы можете использовать их в Zettlr.

### Заголовки

Заголовки просты. Они должны быть размещены в отдельной строке и обозначены символом хэштега. В вашем распоряжении шесть уровней заголовков: Хотя Markdown может делать многое, в этом разделе я хочу описать вам наиболее важные элементы, которые вы будете использовать чаще всего, и как вы можете использовать их в Zettlr.

- `# Heading text` — дает заголовок первого уровня
- `## Heading text` — дает заголовок второго уровня
- `### Heading text` — дает заголовок третьего уровня
- `#### Heading text` — дает заголовок четвертого уровня
- `##### Heading text` — дает заголовок пятого уровня
- `###### Heading text` — дает заголовок шестого уровня

### Встроенное форматирование

Конечно, так же как и в текстовых редакторах, вы можете использовать встроенное форматирование, такое как **полужирный** или _курсивный_ текст, или `моноширинный` (код) текст.

- `**your text**` — даёт полужирный текст
- `_your text_` — даёт курсивный текст
- \`your text\` — даёт моноширинный текст

### Блочные элементы

Иногда может потребоваться выделить целый блок текста (например, длинную цитату) или создать списки. С помощью Markdown это тоже возможно и чрезвычайно просто.

- Создавайте списки элементов, добавляя в начало каждой строки символ `-`, `*` или `+`. При желании можно смешивать эти символы!
- Для упорядоченных списков перед элементами необходимо указывать номера в формате `1.`.

!!! note

    Номера не обязательно должны быть в порядке. При каждом экспорте конвертер автоматически правильно пронумерует их по возрастанию, поэтому список, содержащий номера 1, 6, 14, 2, будет отображаться как список с номерами 1, 2, 3, 4!

### Ссылки и изображения

Ссылки являются встроенными элементами, а изображения — блочными, поэтому они следуют той же семантике, что и элементы, описанные выше. Однако они заслуживают немного большего внимания, поскольку предлагают больше возможностей.

Ссылки задаются с помощью следующего синтаксиса: `[Этот текст появится в вашем окончательном документе](http://this-is-your-actual-link.tld)` Zettlr автоматически преобразует этот синтаксис в кликабельную ссылку (перейдите по ссылке, нажав на нее и удерживая клавишу `ALT` или `Ctrl`) для удобства доступа (и для сокращения довольно длинных ссылок).

Изображения работают точно так же, как ссылки, за исключением того, что они начинаются с восклицательного знака (!). Изображения, конечно, также нуждаются в пути, потому что вы не будете хранить их в текстовом документе. Поэтому вы можете использовать три разных подхода для связывания изображений в вашем документе:

1. Используйте абсолютный веб-URL, например https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1000px-Markdown-mark.svg.png
2. Используйте абсолютный путь к файлу на вашем компьютере, например `C:\Users\user-name\Pictures\my-image.jpg`.
3. Используйте относительный путь к файлу на вашем компьютере, например `../img/my-image.png`.

!!! tip

    Вы можете указать путь к изображению по умолчанию на вкладке "Редактор" в настройках, который Zettlr будет всегда использовать при вставке изображения в редактор.

Относительный путь всегда относится к документу, в котором вы его размещаете. Каталог `..` указывает Zettlr искать изображение в родительском каталоге (т. е. переходить на один уровень выше). Если вы храните свои документы в облаке и получаете к ним доступ с разных устройств, вам, естественно, следует использовать относительные пути к изображениям, поскольку абсолютные пути будут отличаться (особенно если вы работаете с двумя разными операционными системами).

!!! tip

    Постарайтесь вставлять изображения и ссылки всегда с помощью горячих клавиш: `Cmd/Ctrl+K` для ссылок и `Cmd/Ctrl+Shift+I` для изображений. Если в буфере обмена есть действительный путь, он будет автоматически вставлен, что значительно упростит вам жизнь. Например, лучший способ вставить ссылку — сначала скопировать ее в буфер обмена, затем выделить текст, который хотите связать ссылкой, и нажать `Cmd/Ctrl+K`. После этого выделенный текст станет текстом ссылки, а ссылка из буфера обмена будет использована в качестве цели ссылки.

### Сноски

Сноски, конечно же, интересуют большинство исследователей в области искусства и гуманитарных наук. Итак, вот несколько общих правил вставки сносок и того, как Zettlr с ними взаимодействует. Согласно стандартному синтаксису Markdown, сноски требуют двух элементов: во-первых, ссылка где-нибудь в тексте в формате `[^x]`. `x` обозначает уникальный идентификатор. В принципе, вы можете использовать что угодно, главное, чтобы этот идентификатор не использовался во второй сноске. Но обычно лучше использовать увеличивающиеся номера. (Кроме того, эти номера не обязательно должны быть в порядке; при экспорте документа Markdown Pandoc автоматически перенумерует сноски правильно. Поэтому, если вы решите удалить сноску позже, не беспокойтесь, что номера в вашем документе больше не будут аккуратно совпадать).

Второй элемент, необходимый для сносок, — это блочный элемент, текст ссылки на сноску. Он всегда имеет следующий формат: `[^x]: Текст вашей ссылки.` Как видите, идентификатор является копией вашей ссылки, которая появляется в тексте, только теперь за ним следует двоеточие. Обычно ссылки помещаются в список в самом конце документа. Однако переход между текстом ссылки и ссылкой в сноске является неудобным, поэтому Zettlr пытается облегчить вам жизнь. Наведите курсор мыши на ссылку в сноске, чтобы увидеть текст сноски. Нажмите на нее, удерживая клавишу `Cmd` или `Ctrl`, чтобы отредактировать сноску. Нажмите `Shift+Return`, чтобы сохранить изменения.

### Обрамлённые блоки кода

Zettlr также поддерживает так называемые "обрамленные блоки кода". Это блочная версия встроенного элемента кода. Чтобы начать блок кода, введите три обратных кавычки "\`" подряд в пустой строке. Закройте блок кода снова тремя обратными кавычками в пустой строке. Все, что находится между этими двумя "ограждениями", будет отображаться с помощью моноширинного шрифта, чтобы показать, что это действительно код.

Zettlr поддерживает подсветку синтаксиса для нескольких скриптовых и программных языков. Вы должны явно указать Zettlr, какой язык использовать, просто добавив его идентификатор _сразу после вводного ограждения кода_. Таким образом, чтобы Zettlr подсвечивал кода, написанный на языке JavaScript, вам нужно начать блок кода с трех обратных кавычек, сразу за которыми следует слово "javascript".

В настоящее время движок поддерживает следующие языки (имена в фигурных скобках — это идентификаторы, которые необходимо указать для обозначения языка):

- C (`c`)
- C# (`c#`; `csharp`; `cs`)
- C++ ( `c++`; `cpp`)
- Clojure ( `clojure` )
- Common Lisp (`clisp`; `commonlisp`)
- CSS (`css`)
- Elm (`elm`)
- F# (`f#`; `fsharp`)
- Go (`go`)
- Haskell (`haskell`; `hs`)
- HTML (`html`)
- Java (`java`)
- JavaScript (`javascript`; `js`; `node`)
- JSON (`json`)
- Julia (`julia`; `jl`)
- Kotlin (`kotlin`; `kt`)
- LESS (`less`)
- Markdown (`markdown`; `md`)
- Objective C (`objective-c`; `objectivec`, `objc`)
- PHP (`php`)
- Python (`python`; `py`)
- R (`r`)
- Ruby (`ruby`; `rb`)
- Rust (`rust`; `rs`)
- Scala (`scala`)
- Scheme (`scheme`)
- Shell (`shell`; `sh`; `bash`)
- SparQL (`sparql`)
- SQL (`sql`)
- Swift (`swift`)
- SystemVerilog (`systemverilog`; `sv`)
- Tcl (`tcl`)
- Turtle (`turtle`; `ttl`)
- TypeScript (`typescript`; `ts`)
- Verilog (`verilog`; `v`)
- VHDL (`vhdl`; `vhd`)
- Visual Basic (`vb.net`; `vb`; `visualbasic`)
- XML (`xml`)
- YAML (`yaml`; `yml`)

По вашему запросу могут быть реализованы дополнительные языки. Если вам нужен конкретный язык, сначала проверьте в Интернете, есть ли доступный режим языка, совместимый с CodeMirror 6 (либо от CodeMirror напрямую, либо от третьей стороны), и откройте заявку на GitHub. Многие из них доступны в [устаревшем пакете](https://github.com/codemirror/legacy-modes). Однако мы не можем обещать, что в конечном итоге реализуем его, даже если вы нашли совместимый языковой пакет. Кроме того, мы не можем создавать языковые пакеты самостоятельно.

## Дополнения к Zettlr Markdown

В дополнение к расширениям GitHub flavored markdown (отмеченным как "(расширение)" в [спецификации](https://github.github.com/gfm/)), Zettlr предоставляет следующее:

!!! warning

    Страницы в iframe могут получить неограниченный доступ к вашей локальной файловой системе! Страницы могут использовать техники "разрушения фреймов" для выхода из iframe и [прямого взаимодействия с бэкэндом Electron](https://www.electronjs.org/docs/tutorial/security#isolation-for-untrusted-content) — вы должны исходить из того, что любые страницы в iframe (или злоумышленник, атакующий эту страницу) имеют доступ ко всем данным на вашем компьютере.

 - Поддержка элементов `<iframe src="https://example.com"></iframe>`

 - Отображение уравнений KaTeX с помощью встроенных (`$`) или огражденных (`$$`) блоков: `$x/y$` или

        $$
        x / y
        $$

 - [mermaid.js](https://mermaid-js.github.io/mermaid/) отображение диаграммы с помощью огражденных блоков кода:

        ```mermaid
        graph TD
            A[Client] --> B[Load Balancer]
            B --> C[Server01]
            B --> D[Server02]
        ```

## Ресурсы по Markdown

Хотите узнать все о Markdown? Отлично! Хороший ресурс, охватывающий все элементы, можно найти на сайте [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/). Если вы хотите научиться писать чистый и однозначный Markdown, [ознакомьтесь со спецификациями CommonMark](https://spec.commonmark.org/current/). Кроме того, есть "книга" о синтаксисе Markdown в стиле GitHub - [просмотрите ее здесь](https://gitbookio.gitbooks.io/markdown/content/).  Тем, кто занимается научным письмом, стоит прочитать [раздел руководства Pandoc, посвященный расширенному Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown).
