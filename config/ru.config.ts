import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig, SiteLocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar on mobile)
const navbar: NavbarOptions = [
  {
    text: "Установка",
    link: "/en/getting-started/setup.md"
  },
  {
    text: "Устранение неполадок",
    link: "/en/getting-started/troubleshooting.md"
  },
  {
    text: "Часто задаваемые вопросы",
    link: "/en/reference/faq.md"
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
    text: "Рекомендации",
    collapsible: true,
    prefix: "/ru/reference/",
    children: [
        "markdown-basics.md"
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

// This is the app's generic locale option. Provide general descriptions here,
// using the same /xx/ prefix that you have provided to the theme config above.
export const localeConfigRU: SiteLocaleConfig = {
  '/ru/': {
    lang: 'ru-RU',
    title: 'Документация Zettlr',
    description: 'Официальная документация для редактора Markdown Zettel. Доступна на многих языках.',
  },
}
