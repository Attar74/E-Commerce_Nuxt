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
const { cars } = useCars()
const car = computed(()=> {
  return cars.find((car) => car.id==parseInt(route.params.id))
})

if(!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID of ${route.params.id} doesn't exist`
  })
}
definePageMeta({
  layout: 'custom',
})
</script>