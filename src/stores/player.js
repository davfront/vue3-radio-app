import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  const stationInPlayer = ref(null)

  const isStationInPlayer = (station) => {
    return stationInPlayer.value?.id === station.id
  }

  const addStationToPlayer = (station) => {
    stationInPlayer.value = station
  }

  const closePlayer = () => {
    stationInPlayer.value = null
  }

  return { stationInPlayer, isStationInPlayer, addStationToPlayer, closePlayer }
})
