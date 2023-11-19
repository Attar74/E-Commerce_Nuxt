<template>
  <!-- CAR DETAIL PAGE -->
  <div v-if="car">
    <CarDetailsHero :car="car"/>
    <CarDetailsAttributes :features="car.features"/>
    <CarDetailsDescription :description="car.description"/>
    <CarDetailsContact />
  </div>
  <!-- CAR DETAIL PAGE   -->
</template>

<script setup>

const route = useRoute()
const { toTitleCase } = useUtilities()
useHead({
  title: `${toTitleCase(route.params.name)}`
})

const {data: car} = await useFetchCar(route.params.id)


definePageMeta({
  layout: 'custom',
})
</script>