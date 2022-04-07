<script setup lang="ts">
import LineChart from '@/components/LineChart.vue'
import PageLoader from '@/components/PageLoader.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

import { onUnmounted, ref, computed, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useBinanceStore } from '@/stores/binance_socket'
import { useRouter } from 'vue-router'

const router = useRouter()
const binanceStore = useBinanceStore()
binanceStore.connectToBinanceStream()

const {
	getCoinsList,
	getBinanceStreamLoader,
} = storeToRefs(binanceStore)

let search = ref('')
const favoriteCoinsList = ref(['BTCUSDT', 'ETHUSDT'])

const filteredCoinsList = computed(() => {
	return getCoinsList.value.filter((coin: any) => {
		return coin.s.includes(search.value.toUpperCase())
	})
})
const favoriteCoins = computed(() => {
	return getCoinsList.value.filter((coin: any) => {
		return favoriteCoinsList.value.includes(coin.s)
	})
})
const getCoinImage = (token: string) => {	
	return `https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/${token.toLowerCase()}_.png`
}

onUnmounted(() => {
	binanceStore.disconnectBinanceStream()
})
</script>

<template>
	<PageLoader
		v-if="getBinanceStreamLoader"
	/>
	<section
		v-else
	>
		<div class="flex justify-end lg:mr-7 sm:mr-10">
			<div class="mb-3 xl:w-96">
				<div class="flex flex-wrap items-stretch w-full">
					<input type="search" class="input-form" v-model="search" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
					<button class="input-button" type="button" id="button-addon2">
						<SearchIcon />
					</button>
				</div>
			</div>
		</div>

		<div
			class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 py-20 lg:px-14 px-3"
		>
			<div
				class="rounded-md bg-gray-900 cursor-pointer"
				v-for="coin in favoriteCoins"
				:key="coin['s']"
				@click="router.push({name: 'ticker-chart', params: {id: coin.s}})"
			>
				<div 
					class="flex p-4 border-solid border-b-2 border-gray-800"
				>
					<img :src="getCoinImage(coin.token)" class="w-16 mr-4" alt="">
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

					<div class="ml-auto">
						<p 
							class="text-lg text-right"
							:class="[parseFloat(coin.P) > 0 ? 'text-green-400' : 'text-red-600']"
						>
							{{ Math.round(parseFloat(coin.v)) }}
						</p>
						<p 
							class="text-lg text-right"
							:class="[parseFloat(coin.P) > 0 ? 'text-green-400' : 'text-red-600']"
						>
							{{ coin.P }}%
						</p>
					</div>
				</div>
				<div class="line-chart p-4">
					<LineChart
						:data="coin.history"
						:percentage="coin.P"
					/>
				</div>

				<!-- <button
					class="border-2 text-sm border-indigo-200/60 text-indigo-200/60 flex m-auto my-3 px-2 py-0.5"
					@click="router.push({name: 'ticker-chart', params: {id: coin.s}})"
				>
					CHART
				</button> -->
			</div>
		</div>

		<!-- <hr> -->

		<!-- <div
			class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-20 lg:px-14 sm:px-3"
		>
			<div
				class="rounded-md border-2 y-3"
				:class="[coin['P'] > 0 ? 'border-green-400' : 'border-red-600']"
				v-for="coin in filteredCoinsList"
				:key="coin['s']"
			>
				<span
					class="text-2xl text-center"
					:class="[coin.P > 0 ? 'text-green-400' : 'text-red-600']"
				>
					<p class="py-1">{{ parseFloat(coin.c) }}</p>
					<p class="pb-1">{{ coin.s }}</p>
					<p class="pb-1">{{ Math.round(coin.v) }}</p>
					<p>{{ coin.P }}%</p>
				</span>
				<LineChart
					:data="coin.history"
					:percentage="coin.P"
				/>
				<button
					class="border-2 text-sm border-indigo-200/60 text-indigo-200/60 flex m-auto my-3 px-2 py-0.5"
					@click="router.push({name: 'ticker-chart', params: {id: coin.s}})"
				>
					CHART
				</button>
			</div>
		</div> -->
	</section>
</template>

<style scoped>
.input-form {
	@apply flex-auto block px-3 py-1.5 text-base font-normal
	text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l
	transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600
	focus:outline-none
}
.input-button {
	@apply px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase
	rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg
	focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
	ease-in-out flex items-center
}
</style>