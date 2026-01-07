<script setup lang="ts"></script>

<template>
  <div class="rounded-full border-2 border-gray-700 p-2 w-3/5 mt-8">
    <input
      type="text"
      placeholder="Marque ou modèle"
      class="border-r-2 border-gray-600 w-[70%] ps-2 outline-none"
    />
    <select name="department" id="department" class="outline-none w-[30%] px-4">
      <option value="none">Aucun filtre</option>
    </select>
  </div>
</template>
