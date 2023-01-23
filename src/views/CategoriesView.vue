<template>
  <div>
    <h1>Categories</h1>
    <nav>
      <RouterLink
        v-for="category in categories"
        :key="category.id"
        class="nav-item"
        :to="{
          name: 'category',
          params: { tag: category.tag }
        }"
      >
        {{ category.name }}
      </RouterLink>
    </nav>
    <RouterView :key="$router.path" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import categoriesData from '@/categories'
const categories = ref(categoriesData)
</script>

<style lang="scss" scoped></style>
