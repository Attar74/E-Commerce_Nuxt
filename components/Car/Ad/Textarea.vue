<template>
	<div class="flex flex-col w-[100%] mt-2">
		<label for="" class="text-cyan-500 mb-1 text-sm">
			{{ title }}
		</label>
		<textarea type="text" class="p-2 border w-100 rounded" @input="onChange" v-model="state"></textarea>

	</div>
</template>

<script setup>
const props = defineProps({
	title: String,
	name: String,
})

const emits = defineEmits(['changeInput'])

const state = ref('')

const onChange = () => {
	emits('changeInput', state.value, props.name)
}
</script>

<style lang="sass" scoped>

</style>