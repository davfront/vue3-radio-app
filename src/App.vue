<template>
  <div class="layout">
    <AppNav />
    <div class="layout-body">
      <RouterView :key="$route.path" />
    </div>
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'
</script>

<style lang="scss" scoped>
.layout {
  &-body {
    margin-top: 3rem;
    padding: 2rem;
  }
}
</style>
