<script setup lang="ts">
import { formatNumber } from '@/functions/format_number'
import type { Car, CarAspect } from '@/types/app-types'

const props = defineProps<{
  car: Car
}>()

// put each car detail with its label
const detailsName: Array<CarAspect> = [
  { name: 'Marque', value: props.car.brand },
  { name: 'Modèle', value: props.car.model },
  { name: 'Année', value: props.car.year },
  { name: 'Kilomètrage', value: props.car.drove_distance },
  { name: 'Département', value: props.car.department },
  { name: 'Ville', value: props.car.location },
  { name: 'Moteur', value: props.car.motor },
  { name: 'Boîte de vitesse', value: props.car.transmission },
  { name: 'Prix', value: props.car.price },
  { name: 'Options', value: props.car.options },
]
</script>

<template>
  <div class="w-1/3 h-[65vh] shadow-lg shadow-gray-600 rounded-lg space-y-6 p-6">
    <div
      v-for="detail in detailsName"
      class="flex flex-row items-center space-x-6 w-full border-b-2 border-gray-600 text-xl"
    >
      <h2 class="min-w-1/2">{{ detail.name }}</h2>
      <h2 v-if="detail.name === 'Prix'">{{ formatNumber(Number(detail.value)) }} €</h2>
      <h2 v-if="detail.name === 'Kilomètrage'">{{ formatNumber(Number(detail.value)) }} Km</h2>
      <h2
        v-if="detail.name !== 'Options' && detail.name !== 'Prix' && detail.name !== 'Kilomètrage'"
      >
        {{ detail.value }}
      </h2>
      <div v-if="detail.name === 'Options'" class="flex flex-col">
        <h3 v-for="option in detail.value">{{ option }}</h3>
      </div>
    </div>
  </div>
</template>
