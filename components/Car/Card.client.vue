<template>
  <div class="w-full">
    <!-- car-card -->
      <div class="relative shadow border w-full overflos-hidden mb-5 cursor-pointer h-[200px]">
        <img class="absolute w-7 right-5 top-2 z-20" :src="favored ? heartFilled : heartOutline" @click="emit('favor', car.id)" alt="here"/>
        <div class="flex h-full" @click="goToDetails(car)">
          <NuxtImg class="w-[350px] h-full" type="image" :src="car.url" alt="" />
          <div class="p-4 flex flex-col">
            <div>
              <h1 class="text-2xl text-blue-700"> {{car.name}} </h1>
              <p class="text-gray-700">
                {{ car.description }}
              </p>
            </div>
            <h1 class="mt-auto text-xl">{{car.price}}</h1>
          </div>
        </div>
      </div>
    <!-- car-card -->
  </div>
</template>

<script setup>
import heartOutline from "@/assets/heartOutline.png"
import heartFilled from "@/assets/heartFilled.png"

  const props = defineProps({
    car: Object,
    favored: Boolean
  })
  const goToDetails = (car)=> {
    return navigateTo(`/car/${car.name}-${car.id}`)
  }
  const emit = defineEmits(['favor'])
</script>