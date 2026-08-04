import { DefaultThemeLocaleData, NavbarOptions, SidebarOptions } from "@vuepress/theme-default"
import { LocaleConfig, SiteLocaleConfig } from "vuepress"
import sharedOptions from "../docs/.vuepress/shared-locale.config"

// Top navbar options (shown above sidebar on mobile)
const navbar: NavbarOptions = [
  {
    text: "インストール",
    link: "/ja/install.md"
  },
  {
    text: "トラブルシューティング",
    link: "/ja/troubleshooting.md"
  },
  {
    text: "よくある質問",
    link: "/ja/faq.md"
  },
  {
    text: "Zettlr",
    children: [
      {
        text: "Zettlrについて",
        link: "https://www.zettlr.com/"
      },
      {
        text: "Zettlrのダウンロード",
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
    text: "ようこそ",
    collapsible: true,
    prefix: "/ja/",
    link: "/ja/index.md"
  },
  {
    text: "最初のステップ",
    collapsible: true,
    prefix: "/ja",
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
    text: "概念",
    prefix: "/ja/concepts/",
    collapsible: true,
    children: [
      "workspaces.md",
      "context.md",
      "wysiwym.md"
    ]
  },
  {
    text: "主要機能",
    prefix: "/ja/core/",
    collapsible: true,
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
    text: "学術ツール",
    collapsible: true,
    prefix: "/ja/academic/",
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
    text: "参考資料",
    collapsible: true,
    prefix: "/ja/reference/",
    children: [
      "keyboard-shortcuts.md",
      "markdown-basics.md",
      "settings.md",
      "spell-checking.md"
    ]
  },
]

// This is the theme localization. Provide both a navigation bar and sidebar
// structure as well as localized strings for various GUI elements. Take a look
// at the English config for a mostly comprehensive example, and consult the
// documentation for the LocaleConfig of the VuePress default theme for more
// information:
// https://ecosystem.vuejs.press/themes/default/config.html#locale-config
export const themeConfigJA: LocaleConfig<DefaultThemeLocaleData> = {
  // This must be the language part of the URL (e.g., /en/). It should be a two-
  // letter language abbreviation surrounded by forward slashes.
  '/ja/': {
    ...sharedOptions,
    // Both navbar and sidebar should show the same contents
    // NOTE: We have to explicitly cast the navigation for the navbar since it
    // contains "collapsible" options, which the navbar type doesn't include,
    // but which the code will just ignore.
    navbar,
    sidebar,
    // Language selector
    selectLanguageName: '日本語',
    selectLanguageText: '言語',
    selectLanguageAriaLabel: '言語',
    // page meta
    editLinkText: 'GitHubで編集する',
    lastUpdatedText: '最終更新日',
    contributorsText: '貢献者',
    // custom containers
    tip: 'ヒント',
    warning: '警告',
    danger: '警告',
    // 404 page
    notFound: [
      'このページは見つかりませんでした',
    ],
    backToHome: 'ホームに戻る',
    // a11y
    openInNewWindow: '新しいウィンドウで開く',
    toggleColorMode: 'テーマ',
    toggleSidebar: 'サイドバー',
  }
}

// This is the app's generic locale option. Provide general descriptions here,
// using the same /xx/ prefix that you have provided to the theme config above.
export const localeConfigJA: SiteLocaleConfig = {
  '/ja/': {
    lang: 'ja-JP',
    title: 'Zettlr のドキュメント',
    description: 'Zettlr Markdown エディタの公式ドキュメントです。複数の言語でご利用いただけます。',
  },
}
