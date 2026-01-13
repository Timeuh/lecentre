<script setup>
import CarPreview from '@/components/CarPreview.vue'
import SearchBar from '@/components/SearchBar.vue'
import { onMounted } from 'vue'
import { useCarStore } from '@/stores/carStore'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'

// get car store
const carStore = useCarStore()
const { carsToDisplay } = storeToRefs(carStore)
const { resetCars } = carStore

// get user store
const userStore = useUserStore()
const { favorites } = storeToRefs(userStore)

// when mounted, init cars to display
onMounted(() => {
  resetCars()
})
</script>

<template>
  <main
    class="w-full min-h-screen h-fit bg-gray-200 flex flex-col items-center space-y-12 px-[5vw] pt-20"
  >
    <SearchBar />
    <section class="w-full grid grid-cols-5 gap-12 justify-center">
      <div v-for="car in carsToDisplay">
        <CarPreview :car="car" :is-favorite="favorites.includes(car.id)" />
      </div>
    </section>
  </main>
</template>
