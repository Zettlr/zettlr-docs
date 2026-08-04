import {
  type NavbarItem,
  useNavbarSelectLanguage as _useNavbarSelectLanguage,
  useData
} from '@vuepress/theme-default/client'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

export const useNavbarSelectLanguage = (): ComputedRef<NavbarItem[]> => {
  // We override the navbar language selector, since the default theme has a bug
  // where it will spit out two English languages (one for the root path, /, and
  // one for the actual English path, /en/). Here we simply deduplicate that to
  // ensure that only one English language is retained.
  const navbarSelectLanguage = _useNavbarSelectLanguage()

  return computed(() => {
    const topLevelElement = navbarSelectLanguage.value[0]
    if ("children" in topLevelElement) {
      const deduplicatedChildren: NavbarItem[] = []
      for (const child of topLevelElement.children) {
        const found = deduplicatedChildren.find(c => c.link === child.link)
        if (!found && child.link !== "/") {
          deduplicatedChildren.push(child)
        }
      }
      topLevelElement.children = deduplicatedChildren
    }
    return [topLevelElement]
  })
}
