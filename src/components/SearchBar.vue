<script setup lang="ts">
import { useCarStore } from '@/stores/carStore'
import { storeToRefs } from 'pinia'

// get car store
const carStore = useCarStore()
const { departmentList } = storeToRefs(carStore)
const { filterByDepartment, resetCars, searchCar } = carStore

// handle departement filtering
const handleSelectChange = (event: Event) => {
  const target = event.target as HTMLSelectElement

  if (target.value === 'none') {
    resetCars()
    return
  } else {
    resetCars()
    filterByDepartment(Number(target.value))
  }
}

// handle input search
const handleSearch = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (target.value === '') {
    resetCars()
  }

  searchCar(target.value)
}
</script>

<template>
  <div class="rounded-full border-2 border-gray-700 p-2 w-3/5 mt-8">
    <input
      type="text"
      placeholder="Marque ou modèle"
      class="border-r-2 border-gray-600 w-[70%] ps-2 outline-none"
      @input="handleSearch"
    />
    <select
      name="department"
      id="department"
      class="outline-none w-[30%] px-4"
      @change="handleSelectChange"
    >
      <option value="none">Aucun filtre</option>
      <option v-for="dept in departmentList" :key="dept" :value="dept">
        {{ dept }}
      </option>
    </select>
  </div>
</template>
