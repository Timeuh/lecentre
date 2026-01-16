<script setup lang="ts">
import type { Car } from '@/types/app-types'

const props = defineProps<{
  car: Car
}>()
</script>

<template>
  <div>
    <h2>{{ car.brand }}</h2>
    <h2>{{ car.model }}</h2>
    <h2>{{ car.year }}</h2>
    <h2>{{ car.drove_distance }}</h2>
    <h2>{{ car.department }}</h2>
    <h2>{{ car.location }}</h2>
    <h2>{{ car.motor }}</h2>
    <h2>{{ car.transmission }}</h2>
    <h2>{{ car.price }}</h2>
    <h2>{{ car.options }}</h2>
  </div>
</template>
