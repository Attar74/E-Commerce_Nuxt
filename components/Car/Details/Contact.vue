<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
    <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
    <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
    <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />
    </div>
    <div class="flex mt-4 w-[600px]">
    <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message" />
    </div>
    <button :disabled="isDisableBtn" @click="handleSubmit" class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
      Submit
    </button>
    <p v-if="errorMsg" class="mt-3 text-red-400">
      {{  errorMsg }}
    </p>
    <p v-if="successMsg" class="mt-3 text-green-400">
      {{  successMsg }}
    </p>
  </div>
</template>

<script setup>

const message = ref({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const errorMsg = ref("")
const successMsg = ref("")

const isDisableBtn = computed(() => {
  for(let key in message.value) {
    if (!message.value[key].length) {
      return true
    }
  }
  return false
})

const route = useRoute()
const handleSubmit = async () => {
    try {
      await $fetch(`/api/car/listings/${route.params.id}/message`, {
        method: "post", 
        body: message.value
      })
      errorMsg.value = ""
      message.value = {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
      successMsg.value = 'Message Sent!'
    } catch (error) {
      errorMsg.value = error.statusMessage
    }
  }
</script>