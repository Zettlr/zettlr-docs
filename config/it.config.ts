import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig, SiteLocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar)
const navbar: NavbarOptions = [
  {
    text: "Benvenuti",
    // Note: Using a general link based on the YAML structure
    link: "/it/index.md"
  },
  {
    text: "Installazione",
    link: "/it/install.md"
  },
  {
    text: "FAQ",
    link: "/it/faq.md"
  },
  {
    text: "Zettlr",
    children: [
      {
        text: "Informazioni su Zettlr",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Scarica Zettlr",
        link: "https://www.zettlr.com/download"
      },
      {
        text: "GitHub",
        link: "https://github.com/Zettlr/zettlr-docs"
      }
    ]
  }
]

// Sidebar (shown to the side)
const sidebar: SidebarOptions = [
  {
    text: "Benvenuti",
    collapsible: true,
    children: [
      "install.md",
      "5-minutes.md",
    ]
  },
  {
    text: "Guide",
    collapsible: true,
    prefix: "/it/guides/",
    children: [
      "guide-notes.md",
      "guide-zettelkasten.md",
      "guide-ide.md",
    ]
  },
  {
    text: "Fondamenti",
    collapsible: true,
    prefix: "/it/core/",
    children: [
      "editor.md",
      "file-list.md",
      "search.md",
      "export.md",
      "tables.md",
      "custom-css.md",
      "localisation.md",
      "attachments.md",
    ]
  },
  {
    text: "Riferimenti",
    collapsible: true,
    prefix: "/it/reference/",
    children: [
      "shortcuts.md",
      "markdown-basics.md",
      "settings.md",
      "spell-checking.md",
    ]
  },
  // Top-level entries from YAML
  {
    text: "Partecipare",
    link: "/it/get-involved.md"
  },
  {
    text: "FAQ",
    link: "/it/faq.md"
  }
]

// This is the theme localization. Provide both a navigation bar and sidebar
// structure as well as localized strings for various GUI elements. Take a look
// at the English config for a mostly comprehensive example, and consult the
// documentation for the LocaleConfig of the VuePress default theme for more
// information:
// https://ecosystem.vuejs.press/themes/default/config.html#locale-config
export const themeConfigIT: LocaleConfig<DefaultThemeLocaleData> = {
  // Updated language root
  '/it/': {
    ...sharedOptions,
    navbar,
    sidebar,
    // Translated strings
    selectLanguageName: 'Italiano',
    selectLanguageText: 'Lingua',
    selectLanguageAriaLabel: 'Lingua',
    // page meta
    editLinkText: 'Modifica su GitHub',
    lastUpdatedText: 'Ultimo aggiornamento',
    contributorsText: 'Contributori',
    // custom containers
    tip: 'Suggerimento',
    warning: 'Attenzione',
    danger: 'Pericolo',
    // 404 page
    notFound: [
      'Questa pagina non è stata trovata.',
    ],
    backToHome: 'Torna alla home',
    // a11y
    openInNewWindow: 'Apri in una nuova finestra',
    toggleColorMode: 'Tema',
    toggleSidebar: 'Barra laterale',
  }
}

// This is the app's generic locale option. Provide general descriptions here,
// using the same /xx/ prefix that you have provided to the theme config above.
export const localeConfigIT: SiteLocaleConfig = {
  '/it/': {
    lang: 'it-IT',
    title: 'Documentazione Zettlr',
    description: 'La documentazione ufficiale dell\'editor Markdown Zettlr. Disponibile diverse lingue.',
  },
}
