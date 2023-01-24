<template>
  <div>
    <h1>Favourites</h1>
    <div class="stationList">
      <StationItem
        v-for="station in favourites"
        :key="station.id"
        :station="station"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import StationItem from '@/components/StationItem.vue'
import { useFavouriteStore } from '@/stores/favourites'
const favouriteStore = useFavouriteStore()
const { favourites } = storeToRefs(favouriteStore)
</script>

<style lang="scss" scoped>
.stationList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
