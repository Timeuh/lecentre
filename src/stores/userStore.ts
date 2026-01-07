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
   * @param index {number} : the index of the favorite in the cars array
   */
  function addFavorite(index: number) {
    favorites.value.push(index)
  }

  /**
   * Remove a car listing from the favorites
   *
   * @param favoriteValue {number} : the index of the favorite in the cars array
   */
  function removeFavorite(favoriteValue: number) {
    favorites.value = favorites.value.filter((favorite: number) => favorite !== favoriteValue)
  }

  return { favorites, addFavorite, removeFavorite }
})
