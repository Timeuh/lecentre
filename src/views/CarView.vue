<script setup lang="ts">
import { useCarStore } from '@/stores/carStore'
import { storeToRefs } from 'pinia'

// get car store
const carStore = useCarStore()
const { carsToDisplay } = storeToRefs(carStore)
</script>

<template>
  <main
    class="w-full min-h-screen h-fit bg-gray-200 flex flex-col items-center space-y-12 px-[5vw] pt-20"
  >
    <h1>Voiture {{ $route.params.id }}</h1>
  </main>
</template>
