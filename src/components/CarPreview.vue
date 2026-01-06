<script setup lang="ts">
import type { Car } from '@/types/app-types'
import Fuel from '@/components/icons/Fuel.vue'
import Route from '@/components/icons/Route.vue'
import Pin from '@/components/icons/Pin.vue'
import { formatNumber } from '@/functions/format_number'
import { computed } from 'vue'

const props = defineProps<{
  car: Car
}>()

// choose color depending on the price
const priceColor = computed(() => {
  if (props.car.price > 15000) return 'text-red-700'

  if (props.car.price > 10000) return 'text-yellow-700'

  return 'text-green-700'
})
</script>

<template>
  <div
    class="w-full rounded-xl bg-gray-300 h-[90%] overflow-hidden space-y-2 shadow-lg shadow-gray-800"
  >
    <img src="/images/car.png" :alt="car.model" class="w-full h-1/2 object-cover" />
    <div class="space-y-4 p-2 text-lg">
      <h2 class="text-2xl font-bold">{{ car.brand }} {{ car.model }}</h2>
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
