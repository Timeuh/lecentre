<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images: Array<string>
}>()

const currentImage = ref<string>(props.images[0] ?? '')
</script>

<template>
  <section>
    <img :src="'/images/' + currentImage" :alt="currentImage" />
    <div>
      <img :src="'/images/' + images[0]" :alt="images[0]" />
      <img :src="'/images/' + images[1]" :alt="images[1]" />
      <img :src="'/images/' + images[2]" :alt="images[2]" />
    </div>
  </section>
</template>
