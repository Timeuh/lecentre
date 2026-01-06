<script setup lang="ts">
import type { Car } from '@/types/app-types'

const props = defineProps<{
  car: Car
}>()
</script>

<template>
  <div>
    <img src="/images/car.png" :alt="car.model" class="size-12 object-cover" />
    <h2>{{ car.brand }} {{ car.model }}</h2>
    <h3>{{ car.motor }}</h3>
    <h3>{{ car.year }}</h3>
    <h3>{{ car.price }} €</h3>
  </div>
</template>
