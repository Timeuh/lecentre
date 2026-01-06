<script setup>
import { cars } from '@/data/cars'
</script>

<template>
  <main
    class="w-full min-h-screen h-fit bg-gray-200 flex flex-col items-center space-y-12 px-[5vw]"
  >
    <h1 class="text-4xl pt-12 text-red-700 font-bold">LeCentre</h1>
    <section class="w-full grid grid-cols-5 gap-6">
      <div v-for="car in cars">
        <h2>{{ car.brand }} {{ car.model }}</h2>
      </div>
    </section>
  </main>
</template>
