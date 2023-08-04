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
        <CarAdImage @changeInput="onChangeInput"/>
			</div>
    </div>
</template>

<script setup>
	definePageMeta({
		layout: "custom"
	})

	const { makes } = useCars()

	const info = useState('adInfo', ()=>{
		return {
			make: '',
			model: '',
			year: '',
			price: '',
			miles: '',
			city: '',
			seats: '',
      feautres: '',
			description: '',
			image: null
		}
	})

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
      title: 'Miles *',
      name: 'miles',
      placeholder: '10000'
    },
    {
      id: 4,
      title: 'City *',
      name: 'city',
      placeholder: 'Austen'
    },
    {
      id: 5,
      title: 'NUmber of Seats *',
      name: 'Seats',
      placeholder: '5'
    },
    {
      id: 6,
      title: 'Feautres *',
      name: 'feautres',
      placeholder: 'Leather Interior, No Accident'
    },
  ]
</script>

<style lang="sass" scoped>

</style>