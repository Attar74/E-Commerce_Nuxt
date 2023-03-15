<template>
  <!-- cars-filter -->
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- Location Start-->
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
    <!-- Location End-->
    <!-- Make Start -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('make')">  {{ route.params.make || 'Any' }} </h3>
      <div v-if="modal.make" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex justify-between flex-wrap">
        <h4 v-for="make in makes" :key="make" class="w-1/3" @click="onChangeMake(make)">
          {{ make }}
        </h4>
      </div>
    </div>
    <!-- Make End -->
    <!-- Price Start -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('price')">  {{ priceRangeText }} </h3>
      <div v-if="modal.price" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input class="border p-1 rounded my-1" type="number" placeholder="Min" v-model="priceRange.min" />
        <input class="border p-1 rounded" type="number" placeholder="Max" v-model="priceRange.max" />
        <span class="text-red-400" v-if="!isMaxGreaterThanMin&&isApplyPriceButtonHit"> Max price should be greater than Min</span>
        <button class="bg-blue-400 w-full mt-2 rounded text-white" @click="onChangePrice()"> Apply </button>
      </div>
    </div>
    <!-- Price End -->
  </div>
</template>

<script setup>
const { makes } = useCars()

const route = useRoute()
const router = useRouter()

let isApplyPriceButtonHit = ref(false)
const isMaxGreaterThanMin = computed(() => {
  return priceRange.value.max >= priceRange.value.min
})
const priceRangeText = computed(() => {
  const max = route.query.maxPrice
  const min = route.query.minPrice
  if(!min && !max) return 'Any'
  else if(!min && !max) {
    return `< $${max}`
  }
  else if(min && !max) {
    return `> $${min}`
  } 
  else {
    return `$${min}-$${max}`
  }
})

const city = ref('')
const priceRange = ref({
  min: '',
  max: ''
})

const currentCity = ref(
  route.params.city
)

const modal = ref({
  make: false,
  location: false,
  peice: false,
})

const updateModal = (key) => {
  if(modal.value[key]){
    modal.value[key] = false
    return
  }
  for (const key in modal.value) { //to reset all modals before open one of them
    colseModal(key)
  }
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

const onChangeMake = (make) => {
  colseModal('make')
  navigateTo(`/city/${route.params.city}/car/${make}`)
}

const onChangePrice = () => {
  if(priceRange.value.min <= priceRange.value.max) {
    colseModal('price')
    isApplyPriceButtonHit.value = false
    router.push({
      query: {
        minPrice: priceRange.value.min,
        maxPrice: priceRange.value.max
      }
    })
  } else {
    isApplyPriceButtonHit.value = true
  }
}
</script>