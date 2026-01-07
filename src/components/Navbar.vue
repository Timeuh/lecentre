<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="fixed top-0 flex flex-row items-center justify-between w-full bg-gray-200 p-4 px-6 shadow-lg shadow-gray-700 text-xl"
  >
    <h1 class="text-2xl text-red-700 font-bold">LeCentre</h1>
    <div class="flex flex-row space-x-12 items-center">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/favorites">Mes favoris</RouterLink>
    </div>
    <RouterLink to="/account">Mon compte</RouterLink>
  </nav>
</template>
