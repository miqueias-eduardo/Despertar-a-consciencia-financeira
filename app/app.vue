<script setup>
const route = useRoute()
</script>

<template>
  <SiteNav v-if="!route.meta.hideNav" />

  <NuxtPage
    :transition="{
      name: 'page',
      mode: 'out-in',
    }"
  />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
