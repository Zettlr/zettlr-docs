<script setup lang="ts">
import { useData } from "@vuepress/theme-default/client"

const data = useData()
</script>

<template>
  <aside id="sidebar-right" vp-outline>
    <p>
      <strong>{{ data.page.value.title }}</strong>
    </p>
    <Toc />
  </aside>
</template>

<style lang="scss">
@use '@vuepress/theme-default/dist/client/styles/variables' as *;

aside#sidebar-right {
  position: fixed;
  inset-inline-end: 0;

  // leave space for navbar
  top: var(--navbar-height);
  bottom: 0;
  z-index: 10;

  overflow-y: auto;

  box-sizing: border-box;
  // width: var(--sidebar-width);
  width: var(--sidebar-width-mobile);
  font-size: 0.9rem;
  margin: 0;

  background-color: var(--vp-sidebar-c-bg);

  transition:
    transform var(--vp-t-transform),
    background-color var(--vp-t-color),
    border-color var(--vp-t-color);

  scrollbar-color: var(--vp-c-accent-bg) var(--vp-c-divider);
  scrollbar-width: thin;

  // wide mobile
  @media (max-width: $MQNarrow) {
    top: 0;

    // leave space for navbar
    padding-top: var(--navbar-height);
    transform: translateX(100%);

    [dir='rtl'] & {
      transform: translateX(-100%);
    }
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--vp-c-divider);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--vp-c-accent-bg);
  }

  // override styles
  // Changes from the default VP Sidebar
  padding: 1.5em 0;

  p {
    padding-inline: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--vp-c-divider);
  }

  nav.vuepress-toc ul {
    list-style-type: none;
    line-height: 2;

    a {
      text-decoration: none;
      font-weight: 400;
      padding-inline: 1.25rem 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
