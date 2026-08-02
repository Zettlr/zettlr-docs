import { viteBundler } from "@vuepress/bundler-vite"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"
import { searchPlugin } from "@vuepress/plugin-search"
import { redirectPlugin } from "@vuepress/plugin-redirect"
import configEn from "../../config/en.config"
import configDe from "../../config/de.config"

export default defineUserConfig({
  title: "Zettlr Documentation",
  description: "The official documentation for the Zettlr Markdown editor. Available in multiple languages.",
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/logo.png",
    logoAlt: "Zettlr Logo",
    docsRepo: "Zettlr/zettlr-docs",
    locales: {
      ...configEn,
      ...configDe
    }
  }),
  dest: "./build",
  locales: {
    // NOTE: We need to leave out the "/" language, because otherwise
    // "autoLocale" would not be able to redirect users to their "own" language.
    '/en/': {
      lang: 'en-US',
      title: 'Zettlr Documentation',
      description: 'The official documentation for the Zettlr Markdown editor. Available in multiple languages.',
    },
    '/de/': {
      lang: 'de-DE',
      title: 'Zettlr Handbuch',
      description: 'Die offizielle Dokumentation für den Zettlr Markdown-Editor. Verfügbar in mehreren Sprachen.',
    }
  },
  plugins: [
    searchPlugin(),
    redirectPlugin({
      autoLocale: true,
      defaultLocale: "en-US",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"]
      }
    })
  ]
})
