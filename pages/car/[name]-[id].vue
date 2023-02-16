<template>
  <!-- CAR DETAIL PAGE -->
  <div>
    <CarDetailsHero />
    <CarDetailsAttributes />
    <CarDetailsDescription />
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
  definePageMeta({
    layout: 'custom',
  })
</script>