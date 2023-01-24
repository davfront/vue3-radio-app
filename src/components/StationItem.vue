<template>
  <div class="station">
    <div class="station-img">
      <img v-if="station.favicon" :src="station.favicon" :alt="station.name" />
      <IconRadio v-else />
    </div>
    <div class="station-label">
      {{ station.name }}
    </div>
    <div class="station-actions">
      <a
        v-if="!isStationInPlayer(station)"
        class="station-iconLink"
        @click="addStationToPlayer(station)"
        title="Play station"
      >
        <IconPlay />
      </a>
      <a
        v-else
        class="station-iconLink"
        @click="closePlayer()"
        title="Close player"
      >
        <IconStop />
      </a>
      <a
        v-if="isFavourite(station)"
        class="station-iconLink is-red"
        @click="removeFromFavourites(station)"
        title="Remove from Favourites"
      >
        <IconHeartFill />
      </a>
      <a
        v-else
        class="station-iconLink"
        @click="addToFavourites(station)"
        title="Add to Favourites"
      >
        <IconHeartOutline />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconRadio from '@/components/IconRadio.vue'
import IconPlay from '@/components/IconPlay.vue'
import IconStop from '@/components/IconStop.vue'
import IconHeartFill from '@/components/IconHeartFill.vue'
import IconHeartOutline from '@/components/IconHeartOutline.vue'
import { computed } from 'vue'
import { useFavouriteStore } from '@/stores/favourites'
import { usePlayerStore } from '@/stores/player'
const props = defineProps({
  station: {
    type: Object,
    required: true
  }
})
const favouriteStore = useFavouriteStore()
const { isFavourite, removeFromFavourites, addToFavourites } = favouriteStore
const playerStore = usePlayerStore()
const { addStationToPlayer, isStationInPlayer, closePlayer } = playerStore
const station = computed(() => props.station)
</script>

<style lang="scss" scoped>
.station {
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
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
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
}
</style>
