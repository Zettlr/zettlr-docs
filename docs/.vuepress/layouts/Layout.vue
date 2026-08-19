<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import TocSidebar from '../components/TocSidebar.vue'

const year = (new Date()).getFullYear()
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <!-- Show the table of contents on the sidebar -->
      <TocSidebar />
    </template>
    <template #page-bottom>
      <footer>
        &copy; 2017-{{ year }} by Zettlr and Contributors
      </footer>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '@vuepress/theme-default/dist/client/styles/variables' as *;

footer {
  padding: 40px 10px;
  text-align: center;
  color: var(--vp-c-text-mute);
}

.vp-page {
  /* Account for our new sidebar in the page */
  padding-inline-end: var(--sidebar-width-mobile);

  @media (max-width: $MQNarrow) {
    padding-inline-end: initial;
  }
}
</style>
