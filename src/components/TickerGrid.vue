<script setup lang="ts">
import LineChart from '@/components/LineChart.vue'

import { useRouter } from 'vue-router'

const props = defineProps<{
	coinsList: CoinsList[],
}>()

const router = useRouter()

const getCoinImage = (token: string) => {	
	return `https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/${token.toLowerCase()}_.png`
}
</script>

<template>
	<section class="grid md:grid-cols-2 xl:grid-cols-3 gap-3 py-20 lg:px-14 px-3">
		<div
			class="rounded-md bg-gray-900 cursor-pointer hover:shadow-xl"
			v-for="coin in coinsList"
			:key="coin['s']"
			@click="router.push({name: 'ticker-chart', params: {id: coin.s}})"
		>
			<div
				class="flex p-4 border-solid border-b-2 border-gray-800"
			>
				<img :src="getCoinImage(coin.token)" class="w-16 mr-4" :alt="coin.token">
				<div>
					<p
						class="text-xl pb-1"
						:class="[parseFloat(coin.P) > 0 ? 'text-green-400' : 'text-red-600']"
					>
						<span class="font-bold text-2xl">{{ coin.token }}</span> / {{ coin.asset }}
					</p>
					<p
						class="text-lg"
						:class="[parseFloat(coin.P) > 0 ? 'text-green-400' : 'text-red-600']"
					>
						{{ parseFloat(coin.c) }}
					</p>
				</div>

				<div class="ml-auto flex flex-col justify-around">
					<p
						class="text-lg text-right"
						:class="[parseFloat(coin.P) > 0 ? 'text-green-400' : 'text-red-600']"
					>
						<span class="pr-2">Vol:</span> {{ Math.round(parseFloat(coin.v)) }}
					</p>
					<p
						class="text-lg text-right"
						:class="[parseFloat(coin.P) > 0 ? 'text-green-400' : 'text-red-600']"
					>
						{{ coin.P }}%
					</p>
				</div>
			</div>
			<LineChart
				:data="coin.history"
				:percentage="coin.P"
			/>
		</div>
	</section>
</template>

<style scoped>
.input-form {
	@apply flex-auto block px-3 py-1.5 text-base font-normal rounded-r-none focus:outline-none
	text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition
 	ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600
}
.input-button {
	@apply px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase
	rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg
	focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
	ease-in-out flex items-center
}
</style>
