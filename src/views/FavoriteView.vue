<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { useCarStore } from '@/stores/carStore'
import { storeToRefs } from 'pinia'
import SearchBar from '@/components/SearchBar.vue'
import CarPreview from '@/components/CarPreview.vue'
import type { Car } from '@/types/app-types'

// get car store
const carStore = useCarStore()
const { carsToDisplay } = storeToRefs(carStore)

// get user store
const userStore = useUserStore()
const { favorites } = storeToRefs(userStore)

const favoriteCars: Array<Car> = carsToDisplay.value.filter((car: Car) => {
  return favorites.value.includes(car.id)
})
</script>

<template>
  <main
    class="w-full min-h-screen h-fit bg-gray-200 flex flex-col items-center space-y-12 px-[5vw] pt-20"
  >
    <SearchBar />
    <section class="w-full grid grid-cols-5 gap-12 justify-center">
      <div v-for="car in favoriteCars">
        <CarPreview :car="car" :is-favorite="favorites.includes(car.id)" />
      </div>
    </section>
  </main>
</template>
