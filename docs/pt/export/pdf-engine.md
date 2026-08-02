# Selecionando o mecanismo PDF

Embora o Zettlr possa exportar para quase qualquer formato usando o Pandoc incorporado binário, as exportações para PDF são muito mais complexas e, como tal, requerem um programa adicional para serem bem sucedidas.

Em toda esta documentação e no aplicativo, sempre sugerimos o LaTeX, porque ainda é a solução mais poderosa e de fácil acesso que existe, embora concorrentes como o Typst estejam rapidamente se tornando fortes concorrentes.

O Zettlr vem com um perfil de exportação por padrão que usa LaTeX — mais especificamente, o binário XeLaTeX — para exportar para PDF. No entanto, dependendo de suas necessidades, você pode alterar o mecanismo de PDF usado.

## O perfil PDF padrão

Primeiro, percorreremos as posições relevantes no perfil de exportação de PDF padrão, o “XeLaTeX PDF”. As configurações relevantes aqui são as seguintes:

```yaml
# Other properties omitted for brevity
reader: markdown
writer: pdf
pdf-engine: xelatex
```

Isso instrui o Pandoc, ao usar este perfil, a converter um documento Markdown em um arquivo PDF usando o compilador XeLaTeX como mecanismo de PDF. Dependendo do valor de `pdf-engine`, Pandoc utilizará diferentes programas para criar o arquivo PDF. Portanto, você pode simplesmente alterar esta propriedade para instruir o Pandoc a usar um mecanismo PDF diferente.

## Alterando o mecanismo PDF

No momento em que este artigo foi escrito (janeiro de 2026), Pandoc suportava os seguintes mecanismos de PDF: `pdflatex`, `lualatex`, `xelatex`, `latexmk`, `tectonic`, `wkhtmltopdf`, `weasyprint`, `pagedjs-cli`, `prince`, `context`, `groff`, `pdfroff` e `typst`.

**Aviso:**

    Como todos esses mecanismos são programas externos, você precisa ter o mecanismo de sua escolha instalado em seu computador. Consulte a documentação correspondente para ver como ficam-los. Se você selecionar um mecanismo que não está instalado, o Zettlr mostrará uma mensagem de erro.

Você pode alterar o mecanismo PDF diretamente no perfil XeLaTeX PDF. No entanto, não recomendamos fazer isso, pois isso causará confusão se o perfil chamado “XeLaTeX PDF” exigido repentinamente, além da instalação do Typst.

Em vez disso, recomendamos que você crie uma cópia deste perfil. Você pode fazer isso rapidamente, renomeando o perfil do acordo. Por exemplo, se desejar usar o Typst, execute as seguintes etapas:

1. No [gerenciador de ativos](./assets-manager.md), navegue até a aba “Exportar” e selecione o perfil “XeLaTeX PDF”.
2. Clique no campo de texto do nome e insira um novo nome para o perfil com base no mecanismo de PDF que deseja usar, por exemplo. “Digite PDF.yaml.”
3. Clique em “Renomear arquivo”.
4. Como o perfil XeLaTeX PDF está protegido, isso não renomeará o arquivo e, em vez disso, criará uma duplicata.
5. Nesta duplicata, altere o valor de `pdf-engine` para `typst` (ou qualquer mecanismo que você queira usar).
6. Ajuste outras configurações conforme desejado.

A partir de agora, você pode exportar usando o mecanismo de PDF selecionado, exportando usando este novo perfil.