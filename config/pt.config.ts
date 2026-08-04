import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig, SiteLocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar on mobile)
const navbar: NavbarOptions = [
  {
    text: "Configurar",
    link: "/pt/getting-started/setup.md"
  },
  {
    text: "Solução de problemas",
    link: "/pt/getting-started/troubleshooting.md"
  },
  {
    text: "Perguntas Frequentes",
    link: "/pt/reference/faq.md"
  },
  {
    text: "Zettlr",
    children: [
      {
        text: "Sobre Zettlr",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Baixar Zettlr",
        link: "https://www.zettlr.com/download"
      },
      {
        text: "GitHub",
        link: "https://github.com/Zettlr/Zettlr"
      }
    ]
  }
]

// Sidebar (shown to the side; always shows the current page's ToC at the correct place)
const sidebar: SidebarOptions = [
  {
    text: "Início",
    link: "/pt/index.md"
  },
  {
    text: "Começando",
    collapsible: true,
    prefix: "/pt/getting-started/",
    children: [
      "setup.md",
      "migrating.md",
      "installing-latex.md",
      "a-note-on-security.md",
      "get-involved.md",
      "troubleshooting.md",
      "faq.md"
    ]
  },
  {
    text: "Primeiros usuários",
    collapsible: true,
    prefix: "/pt/first-time-users/",
    children: [
      "first-steps.md",
      "workspaces.md",
      "creating-files-and-folders.md",
      "writing-markdown.md",
      "import.md",
      "exporting-files.md",
    ]
  },
  {
    text: "Gerenciador de arquivos",
    collapsible: true,
    prefix: "/pt/file-manager",
    link: "/pt/file-manager/index.md",
    children: [
      "workspaces-root-files.md",
      "choosing-files.md",
      "appearance.md",
      "file-list.md",
      "properties.md",
      "filtering.md",
      "search.md",
      "projects.md"
    ]
  },
  {
    text: "Exibição dividida",
    collapsible: true,
    prefix: "/pt/split-view/",
    link: "/pt/split-view/index.md",
    children: [
      "document-tab-bar.md",
      "markdown-editor.md",
      "code-editor.md",
      "image-viewer.md",
      "pdf-viewer.md"
    ]
  },
  {
    text: "Barra lateral",
    collapsible: true,
    prefix: "/pt/sidebar/",
    link: "/pt/sidebar/index.md",
    children: [
      "table-of-contents.md",
      "bibliography.md",
      "related-files.md",
      "other-files.md"
    ]
  },
  {
    text: "Editor Markdown",
    collapsible: true,
    prefix: "/pt/editor/",
    link: "/pt/editor/index.md",
    children: [
      "markdown-compendium.md",
      "appearance.md",
      "search.md",
      "autocomplete.md",
      "footnotes.md",
      "citations.md",
      "comments.md",
      "statusbar.md",
      "tables.md",
      "text-transforms.md",
      "snippets.md",
      "yaml-frontmatter.md"
    ]
  },
  {
    text: "Idioma e estilo",
    collapsible: true,
    prefix: "/pt/language-style/",
    link: "/pt/language-style/index.md",
    children: [
      "spellchecking.md",
      "languagetool.md",
      "syntax.md",
      "autocorrect.md",
      "radability.md"
    ]
  },
  {
    text: "Exportação",
    collapsible: true,
    prefix: "/pt/export/",
    link: "/pt/export/index.md",
    children: [
      "workflow.md",
      "defaults-files.md",
      "pdf-engine.md",
      "assets-manager.md",
      "custom-templates.md",
      "custom-commands.md",
      "print-preview.md",
      "lua-filters.md"
    ]
  },
  {
    text: "Científico e técnico",
    collapsible: true,
    prefix: "/pt/scientific-technical/",
    link: "/pt/scientific-technical/index.md",
    children: [
      "math.md",
      "code-blocks.md",
      "mermaid.md",
      "pomodoro.md",
      "writing-statistics.md",
    ]
  },
  {
    text: "PKMS/Zettelkasten",
    collapsible: true,
    prefix: "/pt/pkms/",
    link: "/pt/pkms/index.md",
    children: [
      "zkn-method.md",
      "graph.md",
      "tag-manager.md"
    ]
  },
  {
    text: "Guias",
    collapsible: true,
    prefix: "/pt/guides/",
    link: "/pt/guides/index.md",
    children: [
      "custom-css.md",
      "reference-manager-integration.md",
      "languagetool-local.md",
      "presentations.md",
      "journal-latex-template.md",
      "portable.md"
    ]
  },
  {
    text: "Referência",
    collapsible: true,
    prefix: "/pt/reference/",
    link: "/pt/reference/index.md",
    children: [
      "keyboard-shortcuts.md",
      "settings.md"
    ]
  }
]

// This is the theme localization. Provide both a navigation bar and sidebar
// structure as well as localized strings for various GUI elements. Take a look
// at the English config for a mostly comprehensive example, and consult the
// documentation for the LocaleConfig of the VuePress default theme for more
// information:
// https://ecosystem.vuejs.press/themes/default/config.html#locale-config
export const themeConfigPT: LocaleConfig<DefaultThemeLocaleData> = {
  // This must be the language part of the URL (e.g., /en/). It should be a two-
  // letter language abbreviation surrounded by forward slashes.
  '/pt/': {
    ...sharedOptions,
    // Both navbar and sidebar should show the same contents
    // NOTE: We have to explicitly cast the navigation for the navbar since it
    // contains "collapsible" options, which the navbar type doesn't include,
    // but which the code will just ignore.
    navbar,
    sidebar,
    // Language selector
    selectLanguageName: 'Português',
    selectLanguageText: 'Idioma',
    selectLanguageAriaLabel: 'Idioma',
    // page meta
    editLinkText: 'Editar no GitHub',
    lastUpdatedText: 'Última atualização',
    contributorsText: 'Colaboradores',
    // custom containers
    tip: 'Dica',
    warning: 'Aviso',
    danger: 'Perigo',
    // 404 page
    notFound: [
      'Esta página não foi encontrada.',
    ],
    backToHome: 'Voltar para a página inicial',
    // a11y
    openInNewWindow: 'Abrir em nova janela',
    toggleColorMode: 'Tema',
    toggleSidebar: 'Barra lateral',
  }
}

// This is the app's generic locale option. Provide general descriptions here,
// using the same /xx/ prefix that you have provided to the theme config above.
export const localeConfigPT: SiteLocaleConfig = {
  '/pt/': {
    lang: 'pt',
    title: 'Documentação Zettlr',
    description: 'A documentação oficial do editor Markdown Zettl. Disponível em diversos idiomas.',
  },
}
