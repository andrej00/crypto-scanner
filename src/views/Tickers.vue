<script setup lang="ts">
	import PageLoader from '@/components/PageLoader.vue'

	import { onUnmounted } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useBinanceStore } from '@/stores/binance_socket'
	import router from '@/router'

	const binanceStore = useBinanceStore()
	binanceStore.connectToBinanceStream()

	const {
		getCoinsList,
		getBinanceStreamLoader
	} = storeToRefs(binanceStore)

	onUnmounted(() => {
		binanceStore.disconnectBinanceStream()
	})
</script>

<template>
	<PageLoader
		v-if="getBinanceStreamLoader"
	/>

	<section
		class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 py-20 lg:px-14 sm:px-3"
		v-else
	>
		<div
			class="rounded-md border-2 py-3"
			:class="[coin['P'] > 0 ? 'border-green-400' : 'border-red-600']"
			v-for="coin in getCoinsList" 
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
			<button
				class="border-2 text-sm border-indigo-200/60 text-indigo-200/60 flex m-auto my-3 px-2 py-0.5"
				@click="router.push({name: 'ticker-chart', params: {id: coin.s}})"
			>
				CHART
			</button>
		</div>
	</section>
</template>
