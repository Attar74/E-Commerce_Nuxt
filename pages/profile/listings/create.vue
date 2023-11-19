<template>
    <div>
			<div>
				<h1 class="text-6xl mt-24">
					Create a New Listing
				</h1>
			</div>
			<div class="shadow rounded p-3 flex flex-wrap justify-between">
				<CarAdSelect title="Make *" :options="makes" name="make" @changeInput="onChangeInput"/>
        <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name" :placeholder="input.placeholder"  @changeInput="onChangeInput"/>
        <CarAdTextarea title="Description *" name="description" @changeInput="onChangeInput"/>
        <CarAdImage @changeInput="onChangeInput" class="hover:underline"/>
        <div class="w-full flex">
          <button @click="handleSubmit" :disabled="isBtnDisabled" class="w-1/3 bg-blue-400 text-white rounded py-2 px-7 mx-auto">
            Submit
          </button>
          <p v-if="errorMsg" class="mt-3 text-red-400">
            {{  errorMsg }}
          </p>
        </div>
			</div>
    </div>
</template>

<script setup>
	definePageMeta({
  layout: "custom",
  middleware: ['auth']
})

	const { makes } = useCars()
	const user  = useSupabaseUser()

	const info = useState('adInfo', ()=>{
		return {
			make: '',
			model: '',
			year: '',
			price: '',
			miles: '',
			city: '',
			seats: '',
      features: '',
			description: '',
			image: "image" //null
		}
	})

  let errorMsg = ref('')

	const onChangeInput = (data, name) => {
		info.value[name] = data
	}

  const inputs = [
    {
      id: 1,
      title: 'model *',
      name: 'model',
      placeholder: 'Honda'
    },
    {
      id: 2,
      title: 'Year *',
      name: 'year',
      placeholder: '2019'
    },
    {
      id: 3,
      title: 'Price *',
      name: 'price',
      placeholder: '1000$'
    },
    {
      id: 4,
      title: 'Miles *',
      name: 'miles',
      placeholder: '10000'
    },
    {
      id: 5,
      title: 'City *',
      name: 'city',
      placeholder: 'Austen'
    },
    {
      id: 6,
      title: 'NUmber of Seats *',
      name: 'seats',
      placeholder: '5'
    },
    {
      id: 7,
      title: 'features *',
      name: 'features',
      placeholder: 'Leather Interior, No Accident'
    },
  ]

  const isBtnDisabled = computed(() => {
    for (let key in info.value) {
      if(!info.value[key]) {
        return true
      }
      return false
    }
  })

  const handleSubmit = async () => {
    const body = {
      ...info.value,
      city: info.value.city.toLowerCase(),
      features: info.value.features.split(', '),
      numberOfSeats: +(info.value.seats),
      year: +(info.value.year),
      miles: +(info.value.miles),
      price: +(info.value.price),
      name: `${info.value.make} - ${info.value.model}`,
      listerId: user.value.id,
      image: "image" //temp
    }

    delete body.seats

    try {
      await $fetch("/api/car/listings", {
        method: "post", body
      })
      navigateTo("/profile/listings")
    } catch (error) {
      errorMsg.value = error.statusMessage
    }
  }
</script>