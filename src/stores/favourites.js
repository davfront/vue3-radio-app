import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavouriteStore = defineStore('favourites', () => {
  const favourites = ref([])

  const isFavourite = (station) =>
    favourites.value.some((s) => s.id === station.id)

  const addToFavourites = (station) => {
    if (!isFavourite(station)) {
      favourites.value.push(station)
    }
  }

  const removeFromFavourites = (station) => {
    favourites.value = favourites.value.filter((s) => s.id !== station.id)
  }

  // persist
  const favouritesLocal = localStorage.getItem('RadioYnovStations')
  if (favouritesLocal) {
    favourites.value = JSON.parse(favouritesLocal)
  }

  watch(
    favourites,
    () => {
      localStorage.setItem(
        'RadioYnovStations',
        JSON.stringify(favourites.value)
      )
    },
    { deep: true }
  )

  return { favourites, isFavourite, addToFavourites, removeFromFavourites }
})
