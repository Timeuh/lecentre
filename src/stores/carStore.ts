import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Car } from '@/types/app-types'
import { cars } from '@/data/cars'

export const useCarStore = defineStore('car', () => {
  // car array for home page
  const carsToDisplay = ref<Array<Car>>([])

  // array of all the car departments
  const departmentList = computed(() => {
    return [...new Set(cars.map((car: Car) => car.department))].sort(
      (a: number, b: number) => a - b,
    )
  })

  // copy cars into display cars
  function resetCars() {
    carsToDisplay.value = cars
  }

  return { carsToDisplay, resetCars, departmentList }
})
