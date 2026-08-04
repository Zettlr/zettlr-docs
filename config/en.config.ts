import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar on mobile)
const navbar: NavbarOptions = [
  {
    text: "Setup",
    link: "/en/getting-started/setup.md"
  },
  {
    text: "Troubleshooting",
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
        text: "About Zettlr",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Download Zettlr",
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
    text: "Welcome",
    link: "/en/index.md"
  },
  {
    text: "Getting started",
    prefix: "/en/getting-started/",
    collapsible: true,
    children: [
        "setup.md",
        "migrating-from-obsidian.md",
        "migrating.md",
        "installing-latex.md",
        "a-note-on-security.md",
        "get-involved.md",
        "troubleshooting.md",
    ]
  },
  {
    text: "First Time Users",
    prefix: "/en/first-time-users/",
    collapsible: true,
    children: [
      "first-steps.md",
      "workspaces.md",
      "creating-files-and-folders",
      "writing-markdown.md",
      "import.md",
      "exporting-files.md"
    ]
  },
  {
    text: "Interface",
    collapsible: true,
    children: [
      {
        text: "File Manager",
        prefix: "/en/file-manager/",
        link: "/en/file-manager/index.md",
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
        text: "Split View",
        prefix: "/en/split-view/",
        link: "/en/split-view/index.md",
        children: [
          "document-tab-bar.md",
          "markdown-editor.md",
          "code-editor.md",
          "image-viewer.md",
          "pdf-viewer.md"
        ]
      },
      {
        text: "Sidebar",
        prefix: "/en/sidebar/",
        link: "/en/sidebar/index.md",
        children: [
          "table-of-contents.md",
          "bibliography.md",
          "related-files.md",
          "other-files.md"
        ]
      },
    ]
  },
  {
    text: "Writing",
    collapsible: true,
    children: [
      {
        text: "Markdown Editor",
        prefix: "/en/editor/",
        link: "/en/editor/index.md",
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
        text: "Language & Style",
        prefix: "/en/language-style/",
        link: "/en/language-style/index.md",
        children: [
          "spellchecking.md",
          "languagetool.md",
          "syntax.md",
          "autocorrect.md",
          "readability.md"
        ]
      },
      {
        text: "Scientific & Technical",
        prefix: "/en/scientific-technical/",
        link: "/en/scientific-technical/index.md",
        children: [
          "math.md",
          "code-blocks.md",
          "mermaid.md",
          "pomodoro.md",
          "writing-statistics.md"
        ]
      },
      {
        text: "Exporting",
        prefix: "/en/export/",
        link: "/en/export/index.md",
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
        text: "PKMS & Zettelkasten",
        prefix: "/en/pkms/",
        link: "/en/pkms/index.md",
        children: [
          "zkn-method.md",
          "graph.md",
          "tag-manager.md"
        ]
      },
    ]
  },
  {
    text: "Guides",
    collapsible: true,
    prefix: "/en/guides/",
    link: "/en/guides/index.md",
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
    text: "Reference",
    collapsible: true,
    prefix: "/en/reference/",
    link: "/en/reference/index.md",
    children: [
      "keyboard-shortcuts.md",
      "settings.md",
      {
        text: "Frequently Asked Questions",
        link: "faq.md"
      }
    ]
  },
]

// This is the theme localization. Provide both a navigation bar and sidebar
// structure as well as localized strings for various GUI elements. Take a look
// at the English config for a mostly comprehensive example, and consult the
// documentation for the LocaleConfig of the VuePress default theme for more
// information:
// https://ecosystem.vuejs.press/themes/default/config.html#locale-config
export const themeConfigEN: LocaleConfig<DefaultThemeLocaleData> = {
  // This must be the language part of the URL (e.g., /en/). It should be a two-
  // letter language abbreviation surrounded by forward slashes.
  '/en/': {
    ...sharedOptions,
    // Both navbar and sidebar should show the same contents
    // NOTE: We have to explicitly cast the navigation for the navbar since it
    // contains "collapsible" options, which the navbar type doesn't include,
    // but which the code will just ignore.
    navbar,
    sidebar,
    // Language selector
    selectLanguageName: 'English',
    selectLanguageText: 'Language',
    selectLanguageAriaLabel: 'Language',
    // page meta
    editLinkText: 'Edit on GitHub',
    lastUpdatedText: 'Last update',
    contributorsText: 'Contributors',
    // custom containers
    tip: 'Tip',
    warning: 'Warning',
    danger: 'Danger',
    // 404 page
    notFound: [
      'This page was not found.',
    ],
    backToHome: 'Back to home',
    // a11y
    openInNewWindow: 'Open in new window',
    toggleColorMode: 'Theme',
    toggleSidebar: 'Sidebar',
  }
}
