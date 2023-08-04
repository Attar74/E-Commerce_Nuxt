<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div class="flex text-lg mt-2" v-for="(feautre,i) in features" :key="i">
      <p class="rounded text-lime-800 mr-3">✔</p>
      <p>{{ feautre }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: Array
})
</script>