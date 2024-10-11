# 常见问题

## 我尝试在Windows上安装Zettlr，但是出现安全警告，提示我不应该安装该应用

Zettlr使用的代码签名符合微软和苹果的推荐，以确保您只安装值得信赖的软件。然而，在Windows上，应用程序需要有足够的安装量才能抑制此安全警告。这种“信任”分配给的是代码签名证书，而不是应用本身。由于Zettlr使用私人签发的证书，这些证书的有效期有限。当前证书有效至2025年，过期后Zettlr将使用新的证书进行签名，且必须再次走完整个签名过程。只要您从我们网站或GitHub发布页面下载Zettlr（两者皆可），你可以放心安装本应用并忽略警告。

## 我无法忽略Windows上的安全警告，因而无法安装该应用

In many companies the IT department puts restrictions in place so that you cannot dismiss a security warning on your own and therefore cannot install the app. If you work in such a restricted environment, it may be best to just talk to your IT department and ask them to whitelist Zettlr so that you (or your admins) can install the app. If they have questions regarding the origins and/or trustworthyness, it may be best to point them [to Zettlr's GitHub repository](https://github.com/Zettlr/Zettlr).
许多公司的IT部门设置了限制，您无法自行忽略安全警告，因此无法安装本应用。如果你在这样的受限环境中工作，建议与IT部门沟通，请他们将Zettlr列入白名单，以便你（或你的管理员）能够安装本应用。如果他们对软件的来源和可信性有疑问，最好建议他们[查阅Zettlr的GitHub库](https://github.com/Zettlr/Zettlr)。

## 当我启动Zettlr时，macOS询问我是否要安装“XCode命令行工具”

Zettlr与Git集成，通过检测您系统上的代码仓库并在目录属性中显示相关信息。在启动时，Zettlr会通过简单的检查确认Windows和Linux系统上是否安装了`git`。在macOS上，如果缺少`git`，系统会提示安装“XCode命令行工具”，这其中包含`git`这一工具。遗憾的是，这个提示无法可靠地抑制。用户必须在打开Zettlr时要么反复拒绝该提示，要么选择安装命令行工具。这些工具的安装是安全且无干扰的，并且提供额外的功能。有关命令行工具的更多信息，请参阅[此Apple讨论串](https://developer.apple.com/forums/thread/13781)。更多信息可以在[相关的GitHub问题](https://github.com/Zettlr/Zettlr/issues/4709)中找到。

## 我删掉了教学文档，现在没法找回它了！

当Zettlr检测到它在计算机上首次运行时，它会自动将一些Markdown文件复制到您的文档文件夹中。这些Markdown文件包含有关如何使用Zettlr的基本介绍。然而，这些文件只会复制一次。如果你后来想重新查看教程，可以选择以下两种方法：

* 重命名或删除应用程序数据目录中的`config.json`文件。如果该文件不存在，Zettlr会认为是第一次运行，重新复制教程。
* 直接[从源代码下载文件夹](https://github.com/Zettlr/Zettlr/tree/develop/static/tutorial)（请注意，github上此位置可能会更改）。

## 有将Zettlr移植到Android或iOS设备上的计划吗？

我们收到越来越多对Zettlr移动版本的请求。我们很高兴您喜欢Zettlr并且希望在所有设备上使用它，我们也希望满足你的愿望！然而，我们当前的资源仅够维持桌面版Zettlr的开发，无法开展多端开发。

## 啥是Markdown？

Markdown是一种简单的标记语言，让您可以像使用标准办公软件一样编写复杂文本，但更加简洁。在Markdown中，只需输入`#`即可表示标题，无需手动选择所有格式选项！想了解更多？请查阅[Markdown文档](markdown-basics.md)！

## 我需要编写一个对字词有严格限制的文本，但是Zettlr的字词记数器关了！

在Zettlr中撰写文本时，您实际上是在编写*源代码*，随后会导出为PDF、Word文档或其他所需格式。在导出过程中，文本会被“编译”，这意味着：引用会正确呈现，参考文献列表会添加，项目符号会转换为适当的列表等。Zettlr本身只“看到”源代码，因此统计的是文件中的字符数量，这与导出后的文档不同。

最终导出文件中的实际字数或字符数可能因多种因素而有所不同：

* 你使用的引用格式——有些格式更冗长
* 某些代码可能会被完全移除
* 一些模板可能会生成标题页或目录，增加字数/字符数

Zettlr无法考虑所有这些变量。因此，以下是一些帮助您达到目标的小贴士：

1. 大多数老师不会在合理范围内过多地在意你超出字数或字符限制的情况。
2. 如果你需要提交PDF，没有人会真正逐字逐句地数可见的字符或单词。
3. 如果你出于某种原因无法超过限制，尝试**低于**该限制，并在接近完成时导出以查看实际的字符或字数。经过几次尝试，你将对根据Zettlr的字数/字符数估算导出文档的长度有更好的直觉。

## 如果我不想用Zettlr了，我需要做些什么吗？

只需卸载Zettlr，并开始使用您选择的其他程序即可。Zettlr不会干扰您的文件。如果您使用过项目或修改了目录，某些文件夹中会存在名为`.ztr-directory`的小文件。要移除它们，只需将目录排序重置为默认，并在卸载应用程序之前删除所有项目（或在之后手动删除这些文件）。

## Markdown语法中正确的URL链接格式是……？

默认情况下，Zettlr会把此Markdown格式渲染为可点击的链接，格式为`[您的链接文本](your-link)`（在按住`Cmd`或`Ctrl`时）。Markdown链接可以指向网站或你计算机上的其他文件。你可以省略链接中的很多信息不填，Zettlr会自动确定链接类型，但这可能会与你的上下文语义不符。以下是具体规则：

- 包含所有信息（协议和绝对6路径）的链接不会被更改。例如：`file:///home/foo/documents/test.md`和`http://www.example.com/`。
- 带有`file://`协议的相对链接将被转换为绝对链接。例如：`file://./relative/file.md`将变为`file:///home/foo/documents/relative/file.md`。
- 没有协议的链接会被假定为`https://`。例如：`www.zettlr.com`将变为`https://www.zettlr.com`。
- 绝对文件路径但没有`file://`协议的，将会加上该前缀。例如：`/home/bar/documents/absolute.md`将变为`file:///home/bar/documents/absolute.md`。
- 带有和不带有相对指示符（`./`）的相对文件路径将被转换为绝对文件路径。例如：`./more/relative.md`和`more/relative.md`将变为`file:///home/foo/documents/more/relative.md`。**例外**：如果它们位于同一文件夹，`file.extension`将在这种情况下被视为URL（除了`.md`）。

总之：如果你担心链接的处理方式，请手动加以明确。可以使用两个一般性规则来强制Zettlr将链接视为文件或网页链接：在前面添加`./`以明确请求一个_文件_链接，在后面添加`/`以明确请求一个_网页_链接。

## 内部链接没法打开对应的文件！

如果用于文件间互联的内部链接未按预期工作，请确保您已完成以下步骤：

1. **链接是否被识别？** 这样的链接用`[[`和`]]`包裹。当Zettlr识别内部链接时，会对其着色，并且当您将鼠标悬停在上面时，会出现工具提示，提供文件的初步信息，或者告诉你该文件未找到。
2. **点击链接时是否按住`Cmd`或`Ctrl`键？** 仅用鼠标点击文本意味着您打算编辑文本，因此必须按住相应键来告诉Zettlr你实际上想要跟随该链接。
3. **是否使用了有效的文件名或ID？** Zettlr仅打开_完全_匹配给定ID或文件名（不区分大小写）的文件。如果点击链接时没有反应，这肯定意味着系统中不存在该ID或文件名的文件。请注意，创建链接时必须省略文件扩展名。例如，要链接到`my-file.md`，只需在括号内放入`my-file`。
4. **文件当前是否已加载到Zettlr中？** 只有在Zettlr已读取该文件时，内部链接才有效。

## 我懂LaTeX语法，而且想在我的Markdown文件中使用它，可行吗？

当然可以。只需在需要的地方写入您的`LaTeX`语句即可。在导出为PDF时，Pandoc会处理其余部分，这些语句将由PDF引擎解析。遗憾的是，`LaTeX`语法高亮并不受支持。此外，请注意，Pandoc在导出为非PDF格式时会清除所有`LaTeX`块，这意味着例如`\begin`和`\end`之间的块在最终的Office文件中将完全缺失。在HTML导出时，所有`LaTeX`块将被保留，但不会转换为其他格式。

## 我似乎没法将文本对齐为两端对齐或右对齐！

这不是一个bug，而是一个特性：Markdown没有相应的格式标记，因为文本应该始终左对齐（对于从左到右的语言），因此它不属于Markdown提供的必要块格式集合。不过，您仍然可以使用`LaTeX`命令来实现左对齐或右对齐。只需将您想要右对齐或两端对齐的文本包裹在`\begin{<option>}`和`\end{<option>}`之间，其中`<option>`可以是`flushleft`、`flushright`，或在您希望两端对齐的段落前加上`\justify`。 [了解更多](https://www.sharelatex.com/learn/Text_alignment)。

## 在PDF输出中，我希望某些标题不编号/不在目录中列出

这是Pandoc的一个特殊功能。分别添加特殊类`-`（仅为一个减号）或`.unlisted`。减号会防止编号，而“unlisted”则会阻止该标题出现在目录中。请注意，这仅适用于PDF输出。

示例：

```markdown
# 这个标题将不编号，但会出现在目录中 {-}

# 这个标题将编号，但不会出现在目录中 {.unlisted}

# 这个标题将既不编号，也不会在目录中出现 {- .unlisted}
```

!!! 注意

    请注意，这些括号需要放在行的最后。即使后面有注释也会破坏这种行为。

## 我想使用单行换行，而不是创建新段落。当我只按一次Enter时，它会删除单行换行！

要强制Pandoc将单行换行呈现为单行，请在行末加上反斜杠（`\`）或两个空格。反斜杠和两个空格在导出的文件中不会被呈现。

## Zettlr似乎无法找到LaTeX，但它确实已安装！

如果您的计算机选择在非标准目录中安装软件，可能会发生这种情况。Zettlr会尽力寻找应用程序，但如果它们被放在某个比较深的目录里，可能会失败。确保xelatex二进制文件在您的PATH中。

## 导出PDF时，我不断收到错误消息！

在尝试导出文件时，可能会遇到某些错误。有两种常见类型的错误，您可以自行解决。

最常见的错误如下：

**LaTeX错误：未找到文件\<某个名称\>.sty。**

这意味着找不到某个软件包（以`.sty`结尾）。在Windows上，这些软件包应在需要时自动安装（可能会弹出窗口要求您确认）；在macOS和Linux上，您只需运行命令`tlmgr install <某个名称>`。

!!! 注意

    请注意，有些`.sty`文件是更大软件包的一部分。要找出要安装哪个软件包，最简单的方法是访问[CTAN主页](https://ctan.org/)并搜索软件包名称（不带`.sty`的文件名）。然后，您将在“Contained in”部分看到您必须安装的软件包的实际名称。例如：[`footnote.sty`包](https://ctan.org/pkg/footnote)包含在`mdwtools`包中，因此您必须运行`tlmgr install mdwtools`，而不是`tlmgr install footnote`。

如果出现其他错误，Zettlr允许您复制和粘贴错误消息中的文本，因为在几乎所有情况下，简短的Google搜索都能找到解决方案。如果找不到，社区也能更好地帮助您，前提是他们得看到你遇到的错误。

## 我发现了一个bug！

这是个好消息！虽然不完全是，但你发现了它是件好事！如果是这样，请访问[GitHub](https://github.com/Zettlr/Zettlr/)并开启一个issue，以便我们了解情况并努力解决该bug。

## 我有一个功能请求！/ 我有建议让某个功能更高效！

确实很好！我们始终依赖其他人对应用的经验来提高其效率和适用性。在这种情况下，请访问[GitHub](https://github.com/Zettlr/Zettlr/)并开启一个issue，以便我们能立即着手处理。

## 我的隐私有保证么？Zettlr会传输任何数据吗？还是说我多虑了？

Zettlr以隐私为优先。它不会发送任何数据，并且完全支持离线功能。然而，每当您打开Zettlr或使用相应的菜单项时，Zettlr将连接到Zettlr API以获取所有版本的列表。然后，该列表用于确定您是否在使用最新版本。在连接过程中，Zettlr服务器将接收您的IP地址，并将此信息存储最多30天（使用日志轮换），这在服务器中是非常常见的。此信息不会离开我们的服务器，仅在发生事件时用于确定发生了什么。30天后，访问记录将从服务器日志中删除。我们是开源的，不是Facebook。