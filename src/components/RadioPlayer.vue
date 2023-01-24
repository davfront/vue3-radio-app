<template>
  <div class="player" v-if="stationInPlayer">
    <div class="player-img">
      <img
        v-if="stationInPlayer.favicon"
        :src="stationInPlayer.favicon"
        :alt="stationInPlayer.name"
      />
      <IconRadio v-else />
    </div>
    <div class="player-label">{{ stationInPlayer.name }}</div>
    <div class="player-actions">
      <span class="player-loader" v-if="isLoading">
        <Loader />
      </span>
      <a v-if="!isPlayRequested" class="player-iconLink" @click="playStation">
        <IconPlay />
      </a>
      <a v-else class="player-iconLink" @click="stopStation">
        <IconStop />
      </a>
      <a class="player-iconLink" @click="closePlayer">
        <IconClose />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconRadio from '@/components/IconRadio.vue'
import IconPlay from '@/components/IconPlay.vue'
import IconStop from '@/components/IconStop.vue'
import IconClose from '@/components/IconClose.vue'
import Loader from '@/components/Loader.vue'
import { ref, watch } from 'vue'
import { usePlayerStore } from '@/stores/player'
import { storeToRefs } from 'pinia'

const audioPlayer = new Audio()

const isPlayRequested = ref(false)
const isLoading = ref(false)
const playerStore = usePlayerStore()
const { stationInPlayer } = storeToRefs(playerStore)
const { closePlayer } = playerStore

audioPlayer.addEventListener('canplaythrough', () => {
  audioPlayer.play()
  isLoading.value = false
})

const playStation = () => {
  if (stationInPlayer) {
    audioPlayer.src = stationInPlayer.value.urlResolved
    audioPlayer.load()
    isLoading.value = true
    isPlayRequested.value = true
  }
}

const stopStation = () => {
  audioPlayer.pause()
  audioPlayer.src = null
  isLoading.value = false
  isPlayRequested.value = false
}

watch(stationInPlayer, (newValue) => {
  stopStation()
  if (newValue) {
    playStation()
  }
})
</script>

<style lang="scss" scoped>
.player {
  position: fixed;
  z-index: 1000;
  inset: auto 0 0;
  background: #eee;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &-img {
    flex: 0 0 auto;
    background: #fff;
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    img {
      width: 3rem;
      height: 3rem;
      object-fit: contain;
    }
    svg {
      font-size: 2.5rem;
      opacity: 0.5;
    }
  }

  &-label {
    flex: 1 1 0;
    font-size: 1.125rem;
    font-weight: 600;
  }

  &-actions {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &-iconLink {
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    border-radius: 100%;
    display: grid;
    place-items: center;
    cursor: pointer;
    &:hover {
      background: rgba(#000, 0.1);
    }
    &.is-red {
      color: red;
    }
  }

  &-loader {
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    display: grid;
    place-items: center;
  }
}
</style>
