<script setup lang="ts">
import type { Car } from '@/types/app-types'
import Fuel from '@/components/icons/Fuel.vue'
import Route from '@/components/icons/Route.vue'
import Pin from '@/components/icons/Pin.vue'
import Heart from '@/components/icons/Heart.vue'
import Details from '@/components/icons/Details.vue'
import { formatNumber } from '@/functions/format_number'
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'

const props = defineProps<{
  car: Car
  isFavorite: boolean
}>()

// get user favorites store
const userStore = useUserStore()
const { addFavorite, removeFavorite } = userStore

// choose color depending on the price
const priceColor = computed(() => {
  if (props.car.price > 15000) return 'text-red-700'

  if (props.car.price > 10000) return 'text-yellow-700'

  return 'text-green-700'
})

// first car image
const imageSrc = computed(() => {
  return '/images/' + props.car.pictures[0]
})

// add or remove this listing from the favorites
const toggleFavorite = () => {
  if (props.isFavorite) {
    removeFavorite(props.car.id)
    return
  }

  addFavorite(props.car.id)
}
</script>

<template>
  <div
    class="w-full relative rounded-xl bg-gray-300 h-[90%] overflow-hidden space-y-2 shadow-lg shadow-gray-800"
  >
    <div
      class="absolute top-2 right-2 bg-gray-200 rounded-md p-2 hover:cursor-pointer"
      @click="toggleFavorite()"
    >
      <Heart :is-favorite="isFavorite" />
    </div>
    <img :src="imageSrc" :alt="car.model" class="w-full h-1/2 object-cover" />
    <div class="space-y-4 p-2 text-lg">
      <div class="flex flex-row space-x-6 items-center justify-between">
        <h2 class="text-2xl font-bold">{{ car.brand }} {{ car.model }}</h2>
        <RouterLink
          :to="'/car/' + car.id"
          class="p-1 rounded-md bg-gray-200 shadow-xs shadow-gray-700"
          ><Details
        /></RouterLink>
      </div>
      <div class="flex flex-row space-x-6 items-center">
        <div class="flex flex-row items-center space-x-2">
          <Fuel />
          <h3>{{ car.motor }}</h3>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <Route />
          <h3>{{ formatNumber(car.drove_distance) }} km</h3>
        </div>
      </div>
      <div class="flex flex-row space-x-6 items-center">
        <div class="flex flex-row space-x-1 text-2xl">
          <h3 class="font-bold" :class="priceColor">{{ formatNumber(car.price) }}</h3>
          <h3>€</h3>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <Pin />
          <h3>{{ car.department }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
