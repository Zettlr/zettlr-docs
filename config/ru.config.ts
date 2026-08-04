import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar on mobile)
const navbar: NavbarOptions = [
  {
    text: "Установка",
    link: "/ru/getting-started/setup.md"
  },
  {
    text: "Устранение неполадок",
    link: "/ru/getting-started/troubleshooting.md"
  },
  {
    text: "Часто задаваемые вопросы",
    link: "/ru/reference/faq.md"
  },
  {
    text: "Zettlr",
    children: [
      {
        text: "О Zettlr",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Загрузить Zettlr",
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
    text: "Начало",
    link: "/ru/index.md"
  },
  {
    text: "Начало работы",
    collapsible: true,
    prefix: "/ru/getting-started/",
    children: [
      "setup.md",
      "migrating.md",
      "installing-latex.md",
      "a-note-on-security.md",
      "get-involved.md",
      "troubleshooting.md"
    ]
  },
  {
    text: "Новым пользователям",
    collapsible: true,
    prefix: "/ru/core/",
    children: [
        "user-interface.md",
        "import.md"
    ]
  },
  {
    text: "Основное использование",
    collapsible: true,
    prefix: "/ru/core",
    children: [
        "workspaces.md",
        "files.md",
        "file-manager.md",
        "split-view.md",
        "sidebar.md",
        "writing-markdown.md",
        "comments.md",
        "style-and-grammar.md",
        "readability.md",
        "statusbar.md",
        "autocorrect.md",
        "citations.md",
        "math.md",
        "snippets.md",
        "search.md",
        "tables.md",
        "print-preview.md",
        "export.md",
        "writing-statistics.md"
    ]
  },
  {
    text: "Расширенное использование",
    collapsible: true,
    prefix: "/ru/advanced/",
    children: [
        "yaml-frontmatter.md",
        "assets-manager.md",
        "defaults-files.md",
        "custom-templates.md",
        "custom-css.md",
        "tag-manager.md",
        "projects.md",
        "pomodoro.md",
        "zkn-method.md",
        "graph.md"
    ]
  },
  {
    text: "Руководства",
    collapsible: true,
    prefix: "/ru/guides/",
    children: [
        "languagetool-local.md",
        "presentations.md",
        "journal-latex-template.md",
        "portable.md"
    ]
  },
  {
    text: "Рекомендации",
    collapsible: true,
    prefix: "/ru/reference/",
    children: [
        "faq.md",
        "keyboard-shortcuts.md",
        "markdown-basics.md",
        "settings.md",
        "spell-checking.md"
    ]
  }
]

// This is the theme localization. Provide both a navigation bar and sidebar
// structure as well as localized strings for various GUI elements. Take a look
// at the English config for a mostly comprehensive example, and consult the
// documentation for the LocaleConfig of the VuePress default theme for more
// information:
// https://ecosystem.vuejs.press/themes/default/config.html#locale-config
export const themeConfigRU: LocaleConfig<DefaultThemeLocaleData> = {
  // This must be the language part of the URL (e.g., /en/). It should be a two-
  // letter language abbreviation surrounded by forward slashes.
  '/ru/': {
    ...sharedOptions,
    // Both navbar and sidebar should show the same contents
    // NOTE: We have to explicitly cast the navigation for the navbar since it
    // contains "collapsible" options, which the navbar type doesn't include,
    // but which the code will just ignore.
    navbar,
    sidebar,
    // Language selector
    selectLanguageName: 'Русский',
    selectLanguageText: 'Язык',
    selectLanguageAriaLabel: 'Язык',
    // page meta
    editLinkText: 'Редактировать на GitHub',
    lastUpdatedText: 'Последнее обновление',
    contributorsText: 'Участники',
    // custom containers
    tip: 'Совет',
    warning: 'Предупреждение',
    danger: 'Опасно',
    // 404 page
    notFound: [
      'Эта страница не найдена.',
    ],
    backToHome: 'На главную',
    // a11y
    openInNewWindow: 'Открыть в новом окне',
    toggleColorMode: 'Тема',
    toggleSidebar: 'Боковая панель',
  }
}
