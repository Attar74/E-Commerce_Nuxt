<template>
  <!-- cars-filter -->
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Type</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')"> {{ currentCity }} </h3>
      <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input v-model="city" type="text" class="border p-1 rounded">
        <button @click="onChangeLocation" class="bg-blue-400 w-1/2 mt-2 rounded text-white p-1">
          Apply
        </button>
        <button @click="colseModal('location')" class="bg-red-400 w-1/2 mt-2 rounded text-white p-1">
          Cancel
        </button>
      </div>
    </div>
  </div>
  <!-- cars-filter -->
</template>

<script setup>

const route = useRoute()

const city = ref('')

const currentCity = ref(
  route.params.city
)

const modal = ref({
  make: false,
  location: false,
  peice: false,
})

const updateModal = (key) => {
  modal.value[key] = !modal.value[key]
}

const colseModal = (key) => {
  modal.value[key] = false
}

const onChangeLocation = () => {
  if(!city.value) return;
  if(!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid City format"
    })
  }
  colseModal('location')
  navigateTo(`/city/${city.value}/car/${route.params.make}`)
  city.value = ""
  }
</script>