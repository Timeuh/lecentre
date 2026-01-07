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

  /**
   * Filter cars listings by their department
   *
   * @param department {number} : departement number
   */
  function filterByDepartment(department: number) {
    carsToDisplay.value = carsToDisplay.value.filter((car: Car) => {
      return car.department === department
    })
  }

  /**
   * Search a car by its model or brand
   *
   * @param search {string} : the search
   */
  function searchCar(search: string) {
    carsToDisplay.value = carsToDisplay.value.filter((car: Car) => {
      const carName = car.brand.toLowerCase() + car.model.toLowerCase()
      return carName.includes(search.toLowerCase())
    })
  }

  return { carsToDisplay, resetCars, departmentList, filterByDepartment, searchCar }
})
