import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig, SiteLocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar, using French translations)
const navbar: NavbarOptions = [
  {
    text: "Démarrage",
    link: "/fr/install.md" 
  },
  {
    text: "Dépannage",
    link: "/en/getting-started/troubleshooting.md"
  },
  {
    text: "FAQ",
    link: "/fr/faq.md"
  },
  {
    text: "Zettlr",
    children: [
      {
        text: "À propos de Zettlr",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Télécharger Zettlr",
        link: "https://www.zettlr.com/download"
      },
      {
        text: "GitHub",
        link: "https://github.com/Zettlr/zettr-docs"
      }
    ]
  }
]

// Sidebar (shown to the side, using French translations and corrected relative paths)
const sidebar: SidebarOptions = [
  {
    text: "Démarrage",
    collapsible: true,
    prefix: "/fr/",
    children: [
      "install.md",
      "installing-pandoc.md",
      "installing-latex.md",
      "get-started.md",
      "get-involved.md",
      "faq.md",
    ]
  },
  {
    text: "Concepts",
    collapsible: true,
    prefix: "/fr/concepts/",
    children: [
      "roots.md",
      "context.md",
      "wysiwym.md",
    ]
  },
  {
    text: "Guides",
    collapsible: true,
    prefix: "/fr/guides/",
    children: [
      "guide-notes.md",
      "guide-zettelkasten.md",
      "guide-ide.md",
    ]
  },
  {
    text: "Fonctionnalités de base",
    collapsible: true,
    prefix: "/fr/core/",
    children: [
      "editor.md",
      "tabs.md",
      "file-list.md",
      "autocorrect.md",
      "search.md",
      "import.md",
      "export.md",
      "tables.md",
      "custom-css.md",
      "localisation.md",
      "attachments.md",
      "yaml-frontmatter.md",
      "print-preview.md",
      "math.md",
    ]
  },
  {
    text: "Outils académiques",
    collapsible: true,
    prefix: "/fr/academic/",
    children: [
      "citations.md",
      "projects.md",
      "presentations.md",
      "pomodoro.md",
      "readability.md",
      "zkn-method.md",
      "custom-templates.md",
    ]
  },
  {
    text: "Références",
    collapsible: true,
    prefix: "/fr/reference/",
    children: [
      "keyboard-shortcuts.md",
      "markdown-basics.md",
      "settings.md",
      "spell-checking.md",
      "faq.md"
    ]
  }
]

// This is the theme localization. Provide both a navigation bar and sidebar
// structure as well as localized strings for various GUI elements. Take a look
// at the English config for a mostly comprehensive example, and consult the
// documentation for the LocaleConfig of the VuePress default theme for more
// information:
// https://ecosystem.vuejs.press/themes/default/config.html#locale-config
export const themeConfigFR: LocaleConfig<DefaultThemeLocaleData> = {
  // Updated language root
  '/fr/': {
    ...sharedOptions,
    navbar,
    sidebar,
    // Translated strings
    selectLanguageName: 'Français',
    selectLanguageText: 'Langue',
    selectLanguageAriaLabel: 'Langue',
    // page meta
    editLinkText: 'Modifier sur GitHub',
    lastUpdatedText: 'Dernière mise à jour',
    contributorsText: 'Contributeurs',
    // custom containers
    tip: 'Conseil',
    warning: 'Attention',
    danger: 'Danger',
    // 404 page
    notFound: [
      'Cette page n\'a pas été trouvé.',
    ],
    backToHome: 'Retour à l\'accueil',
    // a11y
    openInNewWindow: 'Ouvrir dans une nouvelle fenêtre',
    toggleColorMode: 'Thème',
    toggleSidebar: 'Barre latérale',
  }
}

// This is the app's generic locale option. Provide general descriptions here,
// using the same /xx/ prefix that you have provided to the theme config above.
export const localeConfigFR: SiteLocaleConfig = {
  '/fr/': {
    lang: 'fr-FR',
    title: 'Documentation Zettlr',
    description: 'La documentation officielle de l\'éditeur Markdown Zettlr. Disponible en plusieurs langues.',
  },
}

