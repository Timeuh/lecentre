<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images: Array<string>
}>()

const currentImage = ref<string>(props.images[0] ?? '')
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
        v-for="image in images"
        class="w-1/3 h-[15vh] object-cover"
        :src="'/images/' + image"
        :alt="image"
      />
    </div>
  </section>
</template>
