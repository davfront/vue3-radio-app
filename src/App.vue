<template>
  <div class="layout">
    <div class="layout-body">
      <div class="layout-body-container">
        <RouterView :key="$route.path" />
      </div>
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
  min-height: 100vh;
  &-body {
    flex: 1 1 0;
    overflow: auto;
    margin-top: 3rem;
    &-container {
      max-width: 40rem;
      margin: 0 auto;
      padding: 2rem;
    }
  }
}
</style>
