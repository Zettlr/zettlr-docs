import type { NavbarItem } from '@vuepress/theme-default/client'
import { useNavbarSelectLanguage as _useNavbarSelectLanguage } from '@vuepress/theme-default/client'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

export const useNavbarSelectLanguage = (): ComputedRef<NavbarItem[]> => {
  // We override the navbar language selector, since the default theme has a bug
  // where it will spit out two English languages. Here we simply deduplicate
  // that to ensure that only one English language is retained.
  const navbarSelectLanguage = _useNavbarSelectLanguage()
  const topLevelElement = navbarSelectLanguage.value[0]
  if ("children" in topLevelElement) {
    const deduplicatedChildren: NavbarItem[] = []
    for (const child of topLevelElement.children) {
      const found = deduplicatedChildren.find(c => c.link === child.link)
      if (!found) {
        deduplicatedChildren.push(child)
      }
    }
    topLevelElement.children = deduplicatedChildren
  }

  return computed(() => [ topLevelElement ])
}
