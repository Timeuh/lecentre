<script setup>
import { cars } from '@/data/cars'
import CarPreview from '@/components/CarPreview.vue'
</script>

<template>
  <main
    class="w-full min-h-screen h-fit bg-gray-200 flex flex-col items-center space-y-12 px-[5vw]"
  >
    <h1 class="text-4xl pt-12 text-red-700 font-bold">LeCentre</h1>
    <section class="w-full grid grid-cols-5 gap-12 justify-center">
      <div v-for="car in cars">
        <CarPreview :car="car" />
      </div>
    </section>
  </main>
</template>
