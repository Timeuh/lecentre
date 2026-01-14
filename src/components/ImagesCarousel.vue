<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images: Array<string>
}>()

// current big image to display
const currentImage = ref<string>(props.images[0] ?? '')

/**
 * Handle click on mini image
 *
 * @param index {number} : index of the image to display in big
 */
const handleClick = (index: number) => {
  currentImage.value = props.images[index] ?? ''
}
</script>

<template>
  <section class="w-[40vw] flex flex-col overflow-hidden rounded-lg">
    <img
      class="w-full h-[50vh] border-b-4 border-black object-cover"
      :src="'/images/' + currentImage"
      :alt="currentImage"
    />
    <div class="flex flex-row w-full">
      <img
        v-for="(image, index) in images"
        @click="handleClick(index)"
        class="w-1/3 h-[15vh] object-cover cursor-pointer hover:scale-[0.90] transition-all duration-300 ease-in-out"
        :src="'/images/' + image"
        :alt="image"
      />
    </div>
  </section>
</template>
