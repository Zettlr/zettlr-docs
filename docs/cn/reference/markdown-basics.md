# Markdown 基础

与许多其他应用程序一样，Zettlr 也使用 **Markdown**，最初由 [John Gruber](https://daringfireball.net/) 发明。随着时间的推移，许多发展扩展了现代 Markdown 应用程序的功能。本文件涵盖以下主题：

- [Markdown 基础](#markdown-基础)
  - [Markdown 简史](#markdown-简史)
  - [Markdown 方言](#markdown-方言)
  - [Zettlr 和 Markdown](#zettlr-和-markdown)
  - [Markdown0到1](#markdown-0到1)
    - [标题](#标题)
    - [行内格式](#行内格式)
    - [块元素](#块元素)
    - [链接和图片](#链接和图片)
    - [脚注](#脚注)
    - [代码块](#代码块)
  - [Zettlr Markdown 扩展](#zettlr-markdown-扩展)
  - [Markdown 资源](#markdown-资源)
***



## Markdown 简史

自从1990年代个人电脑普及以来，存在着两类格式并行：文字处理器文档，如 `.doc` 或 `.odt`，以及代码文档，如 `.js`、`.cpp` 或 `.py`。这两类文档都包含人类可读的文本，但有一个简单而巨大的区别：JavaScript 文件或 C++ 文件只包含纯文本（即打开文件时看到的文本），而文字处理器文档则包含了更多的信息。文字处理器文档总是保存有关页面大小的信息（例如 A4 或信纸）、不同块的格式（例如标题的字体或引用的缩进量）。如果你现在在电脑上打开一个 Word/Office 文档，你会明白我的意思：你可以立即通过字体大小和粗细判断哪些是标题。

很长一段时间，这两类文档的用户各自保持独立。大多数办公室工作人员只会使用 Microsoft Word 或 Excel，或许也会使用 LibreOffice，而来自 STEM 背景的人几乎不会主动使用 Word 或类似软件。这些科学家选择了不同的道路：他们开发了一种叫做 LaTeX 的编程语言，使他们能够从一堆代码生成格式整齐的 PDF 文件——他们的工作流程与艺术和人文学科的研究人员或普通行政人员相同，但使用的是不同的文档。

当 John Gruber 在 2004 年推出 Markdown 时，这基本上就像是在说：“为什么不两者兼而有之？”Markdown 结合了文字处理器文档的清晰阅读体验和代码文档的灵活性和易用性——即使是只会使用 Word 或 Writer 的人也能轻松上手。一个小例子是：在文字处理器中，你会通过输入“某些文本”并从菜单中选择 `Heading 1` 格式来创建标题，而在 Markdown 中，你只需输入 `# 某些文本`，其中井号符号立即告诉你：“这是一个一级标题！”

起初，Markdown 基本上是 John Gruber 为自己编写的小脚本，以获得这些好处，包含了许多不一致之处，并且不支持多种元素。但随着时间的推移，取得了进展。有两个日期值得注意：

- 2004年：[John Gruber](https://daringfireball.net/projects/markdown/) 最初推出 Markdown
- 2012年：一群开发者成立了 [CommonMark](https://spec.commonmark.org/)，旨在将 Markdown 标准化为国际公认的规范。

## Markdown 方言

今天，几种 Markdown 语法的实现共存。其中最值得注意的有：

- **Pandoc Markdown**：提供额外的语法支持，如表格、脚注、元数据等。它是学术写作中最有用的 Markdown 变体。
- **MultiMarkdown**：扩展了初始语法，增加了脚注、表格和一些元数据。
- **Markdown Extra**：对初始语法进行了进一步的补充。
- **GitHub Flavoured Markdown**：由托管平台 GitHub 发明的一种 Markdown 变体（Zettlr 也托管在该平台上），今天是最常见的方言之一。
- **CommonMark**：试图实现所有可能的元素，同时保持明确性。值得注意的是，CommonMark 目前尚未包含脚注的规范。

## Zettlr 和 Markdown

Zettlr 自身实现了不同方言的混合。编辑器主要高亮显示 GitHub Flavoured Markdown（以及一些针对 Zettelkasten 元素和其他便利功能的 Markdown 扩展）。Zettelkasten 元素在相应的 [Zettelkasten 方法章节](../advanced/zkn-method.md) 中有详细描述，其他内容则在下面描述。如果你将文档导出为 HTML 且未安装 Pandoc，Zettlr 将使用 _GitHub Flavoured Markdown 语法_ 转换你的文档。如果可用，Zettlr 会使用 Pandoc 进行导出，Pandoc 将使用其 _Pandoc Markdown 语法_ 读取你的 Markdown 文档。

但 Zettlr 并不限制你只能写 Markdown。如果你愿意，也可以添加 `LaTeX` 命令。在转换为 PDF 时，这些命令会被正确解释。在转换为 DOCX 或 ODT 时则会被省略，而在转换为 HTML 时则会保留。当然，你也可以在任何位置使用纯 HTML 代码。

## Markdown 0到1

尽管 Markdown 可以做很多事情，在这一部分我想向你介绍你最常用、最重要的元素，以及如何在 Zettlr 中使用它们。

### 标题

标题很简单。它们必须单独占一行，并且需要用井号符号表示。你可以使用六个级别的标题：

- `# 标题文本` — 生成一级标题
- `## 标题文本` — 生成二级标题
- `### 标题文本` — 生成三级标题
- `#### 标题文本` — 生成四级标题
- `##### 标题文本` — 生成五级标题
- `###### 标题文本` — 生成六级标题

### 行内格式

当然，就像在文字处理器中一样，你可以使用行内格式，例如 **粗体**、_斜体_ 或 `等宽`（代码）文本。

- `**你的文本**` — 生成粗体文本
- `_你的文本_` — 生成斜体文本
- \`你的文本\` — 生成等宽文本

### 块元素

有时，你可能想强调一整块文本（例如较长的引用），或创建列表。使用 Markdown 这也是非常简单的。

- 通过在每行前面加上 `-`、`*` 或 `+` 字符来创建项目列表。如果愿意，你可以混合这些符号！
- 排序列表需要在前面加上数字，格式为 `1.`。

!!! 注意

    这些数字不必按顺序。每次导出时，转换器会自动正确编号，因此包含数字 1、6、14、2 的列表会被呈现为 1、2、3、4 的列表！

### 链接和图片

链接是行内元素，而图片是块元素，因此它们遵循与上述元素相同的语义。不过它们值得更多关注，因为提供了更多选项。

链接使用以下语法设置：`[此文本将在最终文档中出现](http://this-is-your-actual-link.tld)`。Zettlr 会自动将此语法转换为可点击的链接（通过点击链接目标并按住 `ALT` 或 `Ctrl` 键来访问）以便于访问（并缩短那些较长的链接）。

图片的工作方式与链接完全相同，只是它们以感叹号 (!) 开头。图片当然也需要路径，因为你不会将它们存储在纯文本文件中。因此，你可以使用三种不同的方法在文档中链接图片：

1. 使用绝对的网页 URL，例如 `https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1000px-Markdown-mark.svg.png`。
2. 使用计算机上文件的绝对路径，例如 `C:\Users\user-name\Pictures\my-image.jpg`。
3. 使用计算机上文件的相对路径，例如 `../img/my-image.png`。

!!! 提示

    你可以在偏好设置的“编辑器”选项卡中提供默认的图片路径，Zettlr 在你将图片粘贴到编辑器时会始终使用该路径。

相对路径始终与放置它的文档相关。目录 `..` 告诉 Zettlr 在父目录中查找图片（即向上遍历一个目录）。如果你在云中存储文档并在不同设备上访问它们，使用相对图片路径是很自然的，因为绝对路径肯定会不同（尤其是在使用两个不同操作系统时）。

!!! 提示

    尝试始终使用快捷方式插入图片和链接，链接使用 `Cmd/Ctrl+K`，图片使用 `Cmd/Ctrl+Shift+I`。如果剪贴板中有有效路径，它甚至会自动为你插入，简化你的操作。例如，插入链接的最佳方式是首先将链接复制到剪贴板，然后选择要链接的文本，最后按 `Cmd/Ctrl+K`。这样，选定的文本将成为显示的链接文本，而剪贴板中的链接将用作链接目标。

### 脚注

脚注是大多数艺术和人文学科研究人员所关注的内容。以下是插入脚注的一些一般规则，以及 Zettlr 如何与其互动。根据标准 Markdown 语法，脚注需要两个元素：首先是文本中的引用，格式为 `[^x]`。`x` 代表唯一标识符。基本上，你可以使用任何你想要的标识符，只要它没有被第二个脚注使用。通常，建议使用递增的数字。（此外：这些数字不必按顺序；在导出 Markdown 文档时，Pandoc 会自动正确重新编号脚注。因此，如果你后来决定删除一个脚注，不必担心文档中的编号会不匹配。）

脚注所需的第二个元素是块元素，脚注_引用文本_。其格式始终为 `[^x]: Your reference text.` 如你所见，标识符是文本中出现的引用的复制，只是现在后面加了冒号。通常建议将引用放在文档末尾的列表中。然而，在引用文本和脚注引用之间来回跳跃是很麻烦的，因此 Zettlr 试图简化这一过程。将鼠标移到脚注引用上可以看到脚注文本。按住 `Cmd` 或 `Ctrl` 点击它可以编辑脚注。按 `Shift+Return` 保存更改。

### 代码块

Zettlr 还支持所谓的“代码块”。这是行内代码元素的块版本。要开始代码块，在空行中输入三个反引号 "`"。用三个反引号在空行中关闭代码块。在这两个“边界”之间的所有内容都将以等宽字体呈现，表示这确实是代码。

Zettlr 支持多种脚本和编程语言的语法高亮。你需要通过在引入代码边界后直接添加语言标识符来显式告诉 Zettlr 使用哪种语言。因此，要指导 Zettlr 使用 JavaScript 解释器高亮代码块，你需要以三个反引号开始代码块，后面紧跟“javascript”一词。

当前，以下语言受支持（括号中的名称是你需要指明的语言标识符）：

- C (`c`)
- C# (`c#`; `csharp`; `cs`)
- C++ (`c++`; `cpp`)
- Clojure (`clojure`)
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
- Objective C (`objective-c`; `objectivec`; `objc`)
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

如果你需要特定语言，可以根据请求实现更多语言。如果你需要某种特定语言，请先在线搜索是否有与 CodeMirror 6 兼容的语言模式（无论是来自 CodeMirror 还是第三方），并在 GitHub 上提出问题。许多语言在[legacy包](https://github.com/codemirror/legacy-modes)中可用。不过，我们无法保证最终实现，即使你找到了兼容的语言包。此外，我们无法自己创建语言包。

## Zettlr Markdown 扩展

除了 GitHub 风格的 Markdown 扩展（在 [规范](https://github.github.com/gfm/) 中标记为“(extension)”），Zettlr 还提供以下功能：

!!! 警告

    在 iframe 中的页面可以获得对你的本地文件系统的无限制访问！页面可以使用“框架破坏”技术逃离 iframe，并[直接与 Electron 后端交互](https://www.electronjs.org/docs/tutorial/security#isolation-for-untrusted-content)——你应该假设任何在 iframe 中的页面（或该页面的攻击者）都可以访问你计算机上的所有数据。

- 支持 `<iframe src="https://example.com"></iframe>` 元素

- 通过行内 (`$`) 或有边界 (`$$`) 块渲染 KaTeX 方程： `$x/y$` 或

    $$
    x / y
    $$

- 通过有边界代码块渲染 [mermaid.js](https://mermaid-js.github.io/mermaid/) 图表：

    ```mermaid
    graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
    ```

## Markdown 资源

你想全面了解 Markdown 吗？很不错！一个涵盖所有元素的好资源可以在 [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/) 找到。如果你想熟悉书写干净且不模糊的 Markdown，可以[查看 CommonMark 的规范](https://spec.commonmark.org/current/)。此外，还有一本关于 GitHub 风格 Markdown 语法的“书”。[在这里查看](https://gitbookio.gitbooks.io/markdown/content/)。对于从事学术写作的人来说，[Pandoc 手册中关于其扩展 Markdown 的部分](https://pandoc.org/MANUAL.html#pandocs-markdown) 值得一读。
