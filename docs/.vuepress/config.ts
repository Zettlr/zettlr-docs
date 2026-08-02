import { viteBundler } from "@vuepress/bundler-vite"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"
import { searchPlugin } from "@vuepress/plugin-search"
import { redirectPlugin } from "@vuepress/plugin-redirect"
import { GitContributorInfo } from "@vuepress/plugin-git"
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
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
    },
    themePlugins: {
      activeHeaderLinks: true,
      backToTop: true,
      copyCode: {
        showInMobile: true
      },
      git: {
        contributors: {
          avatar: false,
          transform (c) {
            const modifiedContributors: GitContributorInfo[] = []
            for (const contributor of c) {
              if (contributor.name === "nathanlesage") {
                contributor.name = "Hendrik Erz"
              }
              
              const existingContrib = modifiedContributors.find(x => x.name === contributor.name)
              if (existingContrib === undefined) {
                // Do not provide email addresses to the public page
                contributor.email = ""
                modifiedContributors.push(contributor)
              }
            }

            return modifiedContributors
          }
        }
      },
      hint: {
        alert: true,
        hint: true
      },
      linksCheck: true,
      prismjs: {
        whitespace: "leading"
      },
      seo: {
        hostname: "docs.zettlr.com",
        author: {
          name: "Hendrik Erz",
          url: "https://www.zettlr.com/",
          email: "info@zettlr.com"
        },
        autoDescription: true,
        fallBackImage: undefined, // TODO
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zettlr",
          "url": "https://www.zettlr.com",
          "logo": "https://docs.zettlr.com/logo.png",
          "sameAs": [
            "https://www.twitter.com/zettlr",
            "https://facebook.com/zettlrapp",
            "https://www.youtube.com/channel/UCso4Cjcv5gNt9LVBEZWi1cw",
            "https://www.linkedin.com/company/zettlr",
            "https://github.com/Zettlr/"
          ]
        } as any
      },
      sitemap: {
        hostname: "docs.zettlr.com",
        sitemapFilename: "sitemap.xml",
        changefreq: "weekly"
      },
      tab: false
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
    markdownMathPlugin({
      copy: true,
      mhchem: true,
      type: "katex"
    }),
    redirectPlugin({
      autoLocale: true,
      defaultLocale: "en-US",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"]
      }
    })
  ]
})
