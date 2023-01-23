<template>
  <div class="station">
    <div class="station-img">
      <img v-if="station.favicon" :src="station.favicon" :alt="station.name" />
      <IconRadio v-else />
    </div>
    <div class="station-label">
      {{ station.name }}
    </div>
  </div>
</template>

<script setup>
import IconRadio from '@/components/IconRadio.vue'
import { computed } from 'vue'
const props = defineProps({
  station: {
    type: Object,
    required: true
  }
})
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
}
</style>
