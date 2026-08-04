// VuePress dependencies
import { viteBundler } from "@vuepress/bundler-vite"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"
// Plugins
import { searchPlugin } from "@vuepress/plugin-search"
import { redirectPlugin } from "@vuepress/plugin-redirect"
import { GitContributorInfo } from "@vuepress/plugin-git"
import { noticePlugin } from '@vuepress/plugin-notice'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { markdownExtPlugin } from '@vuepress/plugin-markdown-ext'
import { markdownPreviewPlugin } from '@vuepress/plugin-markdown-preview'
import { markdownFileTreePlugin } from "@vuepress/plugin-markdown-file-tree"
// Language configuration
import { localeConfigEN, themeConfigEN } from "../../config/en.config"
import { localeConfigDE, themeConfigDE } from "../../config/de.config"
import { localeConfigES, themeConfigES } from "../../config/es.config"
import { localeConfigFR, themeConfigFR } from "../../config/fr.config"
import { localeConfigIT, themeConfigIT } from "../../config/it.config"
import { localeConfigJA, themeConfigJA } from "../../config/ja.config"
import { localeConfigPT, themeConfigPT } from "../../config/pt.config"
import { localeConfigRU, themeConfigRU } from "../../config/ru.config"
import { path } from "vuepress/utils"

const jsonLD = `{
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
}`

const matomoTag = `var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDomains", ["*.docs.zettlr.com"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://matomo.zettlr.com/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '7']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();`

export default defineUserConfig({
  title: "Zettlr Documentation",
  description: "The official documentation for the Zettlr Markdown editor. Available in multiple languages.",
  bundler: viteBundler(),
  head: [
    [ 'link', { rel: 'icon', type: 'image/png', sizes: '256x256', href: `/favicon.ico` } ],
    [ 'meta', { name: 'application-name', content: 'Zettlr Documentation' } ],
    [ 'meta', { name: 'theme-color', content: '#1cb27e' } ],
    [ 'script', { type: 'application/ld+json' }, jsonLD ],
    [ 'script', { type: 'text/javascript' }, matomoTag ],
  ],
  theme: defaultTheme({
    logo: "/logo.png",
    logoAlt: "Zettlr Logo",
    docsRepo: "Zettlr/zettlr-docs",
    locales: {
      ...themeConfigEN,
      ...themeConfigDE,
      ...themeConfigES,
      ...themeConfigFR,
      ...themeConfigIT,
      ...themeConfigJA,
      ...themeConfigPT,
      ...themeConfigRU
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
        whitespace: "leading",
        // Disable line numbers in code blocks globally. Enable individually
        // with `:line-numbers`
        lineNumbers: false
      },
      seo: {
        hostname: "docs.zettlr.com",
        author: {
          name: "Hendrik Erz",
          url: "https://www.zettlr.com/",
          email: "info@zettlr.com"
        },
        autoDescription: true,
        fallBackImage: undefined // TODO
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
    ...localeConfigEN,
    ...localeConfigES,
    ...localeConfigDE,
    ...localeConfigFR,
    ...localeConfigIT,
    ...localeConfigJA,
    ...localeConfigPT,
    ...localeConfigRU,
  },
  plugins: [
    searchPlugin({ maxSuggestions: 10 }),
    markdownMathPlugin({ copy: true, mhchem: true, type: "katex" }),
    redirectPlugin({
      autoLocale: true,
      defaultLocale: "en",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/de/": ["de-DE", "de-AT", "de-CH", "de"]
      },
      localeFallback: true,
    }),
    markdownExtPlugin({
      gfm: true,
      footnote: true,
      tasklist: true,
      breaks: false,
      linkify: true,
      component: false
    }),
    markdownPreviewPlugin({}),
    // Display a notice on all community translations to inform users that the
    // English one is the reference.
    noticePlugin({
      config: [
        {
          // Matches all paths that don't start with /en/
          match: /^(?!^\/en\/).+/,
          title: 'Community Translation',
          contentType: "markdown",
          content: `This is a **community translation** of the official English documentation.
This means that its contents could be partially translated, or outdated.
If in doubt, consult the official, English documentation, which is being maintained by the development team directly.`,
          confirm: true, // Make them actually click one of the buttons
          fullscreen: true, // Overlay mode
          // The next two settings ensure that this warning will only be shown once.
          key: "community-translation-notice",
          showOnce: true,
          actions: [
            { text: 'Switch to English', link: '/en/', type: 'default', },
            { text: 'Ok', type: "primary" },
          ],
        },
      ]
    }),
    markdownFileTreePlugin()
  ],
  // With the following, we override the original useNavbarSelectLanguage
  // composable from the default theme in order to deduplicate the double
  // English entry in the element.
  alias: {
    '@theme/useNavbarSelectLanguage': path.resolve(
      __dirname,
      './composables/useNavbarSelectLanguage.ts',
    ),
  }
})
