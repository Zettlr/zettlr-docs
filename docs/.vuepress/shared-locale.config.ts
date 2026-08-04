import { DefaultThemeLocaleData } from "@vuepress/theme-default"

// These are shared options that must be included in all custom configs, and
// which are shared between all languages because we treat them as language
// agnostic.
export default {
  colorMode: 'auto', // Automatic theme
  // To edit the pages, we work on the master branch and in the docs folder
  docsBranch: 'master',
  docsDir: 'docs',
} satisfies DefaultThemeLocaleData
