<script setup lang="ts">
import { useCarStore } from '@/stores/carStore'
import type { Car } from '@/types/app-types'
import { storeToRefs } from 'pinia'
import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'
import ImagesCarousel from '@/components/ImagesCarousel.vue'
import CarDetails from '@/components/CarDetails.vue'

// get car store
const carStore = useCarStore()
const { carsToDisplay } = storeToRefs(carStore)

// get current route
const route = useRoute()

// use route param id to get current car
const currentCar: ComputedRef<Car | undefined> = computed(() => {
  return carsToDisplay.value.find((car: Car) => car.id === Number(route.params.id))
})
</script>

<template>
  <main
    class="w-full min-h-screen h-fit bg-gray-200 flex flex-col items-center justify-center space-y-12 px-[5vw] pt-20"
  >
    <div class="flex flex-row items-center justify-between w-4/5" v-if="currentCar">
      <ImagesCarousel :images="currentCar.pictures" />
      <CarDetails :car="currentCar" />
    </div>
  </main>
</template>
