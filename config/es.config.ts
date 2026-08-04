import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig, SiteLocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar on mobile)
const navbar: NavbarOptions = [
  {
    text: "Instalación",
    link: "/es/install.md"
  },
  {
    text: "Solución de problemas",
    link: "/es/troubleshooting.md"
  },
  {
    text: "Preguntas frecuentes",
    link: "/es/faq.md"
  },
  {
    text: "Zettlr",
    children: [
      {
        text: "Acerca de Zettlr",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Descargar Zettlr",
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
// Note: Assuming the SidebarOptions type structure remains the same.

const sidebar: SidebarOptions = [
  {
    text: "Bienvenida",
    collapsible: false,
    link: "/es/index.md",
  },
  {
    text: "Primeros pasos",
    collapsible: true,
    link: "/es/install.md",
    children: [
      "install.md",
      "portable.md",
      "installing-latex.md",
      "get-started.md",
      "get-involved.md",
      "faq.md",
      "troubleshooting.md"
    ]
  },
  {
    text: "Conceptos",
    collapsible: true,
    prefix: "/es/concepts/",
    children: [
      "workspaces.md",
      "context.md",
      "wysiwym.md"
    ]
  },
  {
    text: "Núcleo",
    collapsible: true,
    prefix: "/es/core/",
    children: [
      "editor.md",
      "tabs.md",
      "file-manager.md",
      "assets-manager.md",
      "defaults-files.md",
      "custom-css.md",
      "snippets.md",
      "autocorrect.md",
      "search.md",
      "import.md",
      "export.md",
      "tables.md",
      "localisation.md",
      "sidebar.md",
      "yaml-frontmatter.md",
      "print-preview.md",
      "math.md"
    ]
  },
  {
    text: "Herramientas académicas",
    collapsible: true,
    prefix: "/es/academic/",
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
    text: "Referencias",
    collapsible: true,
    prefix: "/es/reference",
    children: [
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
export const themeConfigES: LocaleConfig<DefaultThemeLocaleData> = {
  // This must be the language part of the URL (e.g., /en/). It should be a two-
  // letter language abbreviation surrounded by forward slashes.
  '/es/': {
    ...sharedOptions,
    // Both navbar and sidebar should show the some contents
    // NOTE: We have to explicitly cast the navigation forthe navbar since it
    // contains "collapsible" options, which the navbar type doesn's include,
    // but which the code will just ignore
    navbar,
    sidebar,
    // Language selector
    selectLanguageName: 'Español',
    selectLanguageText: 'Idioma',
    selectLanguageAriaLabel: 'Idioma',
    // page meta
    editLinkText: 'Editar en GitHub',
    lastUpdatedText: 'Última actualización',
    contributorsText: 'Colaboradores',
    // custom containers
    tip: 'Consejo',
    warning: 'Advertencia',
    danger: 'Peligro',
    // 404 page
    notFound: [
      'Esta página no fue encontrada.',
    ],
    backToHome: 'Volver al inicio',
    // a11y
    openInNewWindow: 'Abrir en una nueva ventana',
    toggleColorMode: 'Tema',
    toggleSidebar: 'Barra lateral',
  }
}

// This is the app's generic locale option. Provide general descriptions here,
// using the same /xx/ prefix that you have provided to the theme config above.
export const localeConfigES: SiteLocaleConfig = {
  '/es/': {
    lang: 'es-ES',
    title: 'Documentación de Zettlr',
    description: 'La documentación oficial del editor Markdown Zettlr, disponible en múltiples idiomas.'
  },
}
