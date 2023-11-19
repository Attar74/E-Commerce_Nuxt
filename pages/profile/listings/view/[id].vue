<template>
    <div class="rounded shadow mt-20">
        <CarMessageCard :messages="messages"/>
    </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: ['auth']
})

const route = useRoute()
const { data: messages } = useFetch(`/api/car/listings/${route.params.id}/message`)

</script>