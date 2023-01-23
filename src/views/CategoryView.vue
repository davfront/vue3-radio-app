<template>
  <div v-if="category">
    <h1>
      {{ category.name }}
    </h1>
    <div v-if="isLoading">Loading ...</div>
    <div v-else class="stationList">
      <StationItem
        v-for="station in stations"
        :key="station.id"
        :station="station"
      />
    </div>
  </div>
</template>

<script setup>
import StationItem from '@/components/StationItem.vue'
import { ref, computed } from 'vue'
import { RadioBrowserApi } from 'radio-browser-api'
import categoriesData from '@/categories'

const props = defineProps({
  categoryName: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    default: 20
  }
})

const categories = ref(categoriesData)
const stations = ref([])
const isLoading = ref(false)

const category = computed(() =>
  categories.value.find((c) => c.tag === props.categoryName)
)

const api = new RadioBrowserApi('RadioYnov')

const searchStations = async () => {
  isLoading.value = true
  try {
    stations.value = await api.searchStations({
      tag: category.value.tag,
      countryCode: 'US',
      limit: props.limit,
      offset: 0 // this is the default - can be omited
    })
  } catch {
    alert('An error occured!')
  }
  isLoading.value = false
}

searchStations()
</script>

<style lang="scss" scoped>
.stationList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
