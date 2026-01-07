<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="fixed z-10 top-0 flex flex-row items-center justify-between w-full bg-gray-200 p-4 px-6 shadow-lg shadow-gray-700 text-xl"
  >
    <h1 class="text-2xl text-red-700 font-bold">LeCentre</h1>
    <div class="flex flex-row space-x-12 items-center">
      <RouterLink
        to="/"
        class="underline underline-offset-5 transition-all duration-300 ease-in-out decoration-transparent hover:decoration-gray-700"
        >Accueil</RouterLink
      >
      <RouterLink
        to="/favorites"
        class="underline underline-offset-5 transition-all duration-300 ease-in-out decoration-transparent hover:decoration-gray-700"
        >Mes favoris</RouterLink
      >
    </div>
    <div />
  </nav>
</template>
