import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Car } from '@/types/app-types'
import { cars } from '@/data/cars'

export const useCarStore = defineStore('car', () => {
  // car array for home page
  const carsToDisplay = ref<Array<Car>>([])

  // copy cars into display cars
  function initCars() {
    carsToDisplay.value = cars
  }

  return { carsToDisplay, initCars }
})
