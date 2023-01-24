<template>
  <div class="layout">
    <div class="layout-body">
      <RouterView :key="$route.path" />
    </div>
    <div class="layout-footer">
      <RadioPlayer />
      <AppNav />
    </div>
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'
import RadioPlayer from '@/components/RadioPlayer.vue'
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  &-body {
    flex: 1 1 0;
    overflow: auto;
    max-width: 40rem;
    margin: 3rem auto 0;
    padding: 2rem;
  }
}
</style>
