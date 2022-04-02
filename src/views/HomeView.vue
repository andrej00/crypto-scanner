<script setup lang="ts">
	import LineChart from '@/components/LineChart.vue'
	import { ref, reactive } from 'vue'

	let data = ref<number[]>([])

	setInterval(() => {
		data.value.push(Math.round(Math.random() * 100))
		if (data.value.length > 20) {
			data.value = data.value.slice(data.value.length - 20, data.value.length)
		}
		console.log(data.value.length)
	}, 500)
</script>

<template>
	<!-- <div class="flex mt-64"> -->
		<!-- <div class="m-auto"> -->
			<router-link
				:to="{ name: 'tickers' }"
				class="text-5xl m-auto text-green-500"
			>
				TICKERS
			</router-link>
			<LineChart
				:data="data"
			/>
		<!-- </div> -->
	<!-- </div> -->
</template>
