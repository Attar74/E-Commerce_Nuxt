<template>
  <CarCard v-for="car in cars" :key="car.id" :car="car"/>
</template>

<script setup>
  const { cars } = useCars()
</script>