import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar on mobile)
const navbar: NavbarOptions = [
  {
    text: "Installation",
    link: "/de/install.md"
  },
  {
    text: "Hilfe",
    link: "/en/getting-started/troubleshooting.md"
  },
  {
    text: "FAQ",
    link: "/en/reference/faq.md"
  },
  {
    text: "Zettlr",
    children: [
      {
        text: "Über Zettlr",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Zettlr herunterladen",
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
    text: "Willkommen",
    link: "/de/index.md"
  },
  {
    text: "Start",
    collapsible: true,
    prefix: "/de/",
    children: [
      "install.md",
      "5-minutes.md",
      "get-involved.md",
      "faq.md"
    ]
  },
  {
    text: "Zentrale Komponenten",
    collapsible: true,
    prefix: "/de/core/",
    children: [
      "editor.md",
      "file-list.md",
      "search.md",
      "export.md",
      "tables.md",
      "custom-css.md",
      "localisation.md",
      "attachments.md"
    ]
  },
  {
    text: "Wissenschaftliche Werkzeuge",
    collapsible: true,
    prefix: "/de/academic/",
    children: [
      "citations.md",
      "projects.md",
      "presentations.md",
      "pomodoro.md",
      "readability.md",
      "zkn-method.md",
      "custom-templates.md"
    ]
  },
  {
    text: "Anleitungen",
    collapsible: true,
    prefix: "/de/guides/",
    children: [
      "guide-notes.md",
      "guide-zettelkasten.md",
      "guide-ide.md"
    ]
  },
  {
    text: "Referenz",
    collapsible: true,
    prefix: "/de/reference/",
    children: [
      "shortcuts.md",
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
export const themeConfigDE: LocaleConfig<DefaultThemeLocaleData> = {
  // This must be the language part of the URL (e.g., /en/). It should be a two-
  // letter language abbreviation surrounded by forward slashes.
  '/de/': {
    ...sharedOptions,
    // Both navbar and sidebar should show the same contents
    // NOTE: We have to explicitly cast the navigation for the navbar since it
    // contains "collapsible" options, which the navbar type doesn't include,
    // but which the code will just ignore.
    navbar,
    sidebar,
    // Language selector
    selectLanguageName: 'Deutsch',
    selectLanguageText: 'Sprache',
    selectLanguageAriaLabel: 'Sprache',
    // page meta
    editLinkText: 'Auf GitHub bearbeiten',
    lastUpdatedText: 'Zuletzt bearbeitet',
    contributorsText: 'Mitwirkende',
    // custom containers
    tip: 'Tip',
    warning: 'Warnung',
    danger: 'Achtung',
    // 404 page
    notFound: [
      'Die gewünschte Seite wurde leider nicht gefunden.',
    ],
    backToHome: 'Zur Startseite',
    // a11y
    openInNewWindow: 'In neuem Fenster öffnen',
    toggleColorMode: 'Thema',
    toggleSidebar: 'Seitenleiste',
    prev: "Zurück",
    next: "Weiter"
  }
}
