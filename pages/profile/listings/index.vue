<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">
        My Listing
      </h1>
      <NuxtLink to="/profile/listings/create" class="w-9 h-9 bg-blue-400 flex justify-center items-center rounded-full font-bold cursor-pointer text-white">
        +
      </NuxtLink>
    </div>
    <div class="shadow-rounded p-3 mt-5">
      <carListingCard v-for="listing in listings" :ley="listing.id" :listing="listing" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom"
})

const {listings} = useCars()
</script>

<style lang="scss" scoped></style>