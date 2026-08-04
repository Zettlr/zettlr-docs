<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

const year = (new Date()).getFullYear()
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <footer>
        &copy; 2017-{{ year }} by Zettlr
      </footer>
    </template>
  </ParentLayout>
</template>

<style lang="css">
footer {
  padding: 40px 10px;
  text-align: center;
}
</style>
