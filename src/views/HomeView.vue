<template>
  <div>
    <h1>Home</h1>
    <CategoryView categoryName="classic" :limit="5" />
    <CategoryView categoryName="rock" :limit="5" />
    <CategoryView categoryName="jazz" :limit="5" />
  </div>
</template>

<script setup>
import CategoryView from './CategoryView.vue'
</script>

<style lang="scss" scoped></style>
