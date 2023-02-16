<template>
  <div>    
    <!-- cars-Page -->
    <div class="mt-32 flex">
      <CarSideBar />
      <!-- cars-card -->
      <NuxtPage />
      <!-- cars-card -->
    </div>
    <!-- cars-Page -->
  </div>
</template>
<script setup>
const route = useRoute()
const { toTitleCase } = useUtilities()
  useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
  })
  definePageMeta({
    layout: 'custom',
  })
</script>
