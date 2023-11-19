<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img :src="listing?.url ?? fallbackImage" alt="" class="w-80 mr-3 h44">
      <div class="p-3">
        <h1 class="text-2xl"> {{ listing.name }}</h1>
        <p class="text-blue-400">$ {{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink class="text-blue-400 mr-4" :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
      <button @click="emits('deleteCLick', listing.id)">
        <p class="text-red-400 cursor-pointer">Delete</p>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  listing: Object,
})

const fallbackImage = 'https://media.istockphoto.com/id/1189903200/photo/red-generic-sedan-car-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=uRu3o_h5FVljLQHS9z0oyz-XjXzzXN_YkyGXwhdMrjs='

const emits = defineEmits(['deleteCLick'])
</script>