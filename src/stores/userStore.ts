import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // user favorite listings
  const favorites = ref<Array<number>>([])

  // get previous favorites from local storage
  const stored = localStorage.getItem('favorites')
  if (stored) {
    favorites.value = JSON.parse(stored)
  }

  // when favorites changes, update the local storage
  watch(
    favorites,
    (value) => {
      localStorage.setItem('favorites', JSON.stringify(value))
    },
    { deep: true },
  )

  /**
   * Add a car listing to favorites
   *
   * @param id {number} : the id of the car
   */
  function addFavorite(id: number) {
    favorites.value.push(id)
  }

  /**
   * Remove a car listing from the favorites
   *
   * @param id {number} : the id of the car
   */
  function removeFavorite(id: number) {
    favorites.value = favorites.value.filter((favorite: number) => favorite !== id)
  }

  return { favorites, addFavorite, removeFavorite }
})
