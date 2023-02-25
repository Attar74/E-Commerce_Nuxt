<template>
  <div class="w-full" @click="goToDetails(car)">
    <!-- car-card -->
      <div class="shadow border w-full overflos-hidden mb-5 cursor-pointer h-[200px]">
        <div class="flex h-full">
          <img class="w-[350px] h-full" type="image" :src="car.url" alt="">
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
  const props = defineProps({
    car: Object,
  })
  const goToDetails = (car)=> {
    return navigateTo(`/car/${car.name}-${car.id}`)
  }
</script>