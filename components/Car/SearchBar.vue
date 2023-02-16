<template>
  <!-- Search Bar -->
  <div class="font-serif w-[1000px] text-2xl rounded-[20px] bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
    <input v-model="search" type="text" :class="{'border border-red-500': cityError}" class="py-3 px-5 w-full rounded-[20px] text-2xl focus:outline-none" placeholder="Search by city..." />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch"> Search</button>
  </div>
  <!-- Search Bar -->
</template>
<script setup>
  // const router = useRouter()
  const search = ref("")
  const cityError = ref(false)
  const handleSearch = () => {
    if(!search.value) return cityError.value = true
      navigateTo(`/city/${search.value}/car`) 
    // search.value.length && router.push({path: `city/${search.value}/car`})
  }
</script>