<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useBinanceStore } from '@/stores/binance_socket'

const route = useRoute()
const binanceStore = useBinanceStore()

const ticker: string = route.params.id as string
const numberOfRows = ref(15)

binanceStore.connectToTickerStream(ticker.toLowerCase())
binanceStore.fetchDepthSnapShot(ticker)

const { getDepthSnapshot } = storeToRefs(binanceStore)

const asks = computed(() => {
	let min = ref(0)
	let max = ref(0)
	let quantity = getDepthSnapshot.value.asks
		?.slice(0, numberOfRows.value)
		.map((q) => q[1])
		.sort((a: string, b: string) => parseFloat(a) - parseFloat(b))
	if (quantity) {
		min.value = parseFloat(quantity[0])
		max.value = parseFloat(quantity[numberOfRows.value - 1])
	}
	getDepthSnapshot.value.asks
		?.slice(0, numberOfRows.value)
		.map((ask: any) => {
			ask[2] = (10 + ((ask[1] - min.value) / (max.value - min.value)) * 90).toString()
		})
	return getDepthSnapshot.value.asks
		?.slice(0, numberOfRows.value)
		.reverse()
})

const bids = computed(() => {
	let min = ref(0)
	let max = ref(0)
	let quantity = getDepthSnapshot.value.bids
		?.slice(0, numberOfRows.value)
		.map((q) => q[1])
		.sort((a: string, b: string) => parseFloat(a) - parseFloat(b))
	if (quantity) {
		min.value = parseFloat(quantity[0])
		max.value = parseFloat(quantity[numberOfRows.value - 1])
	}
	getDepthSnapshot.value.bids
		?.slice(0, numberOfRows.value)
		.map((bid: any) => {
			bid[2] = (10 + ((bid[1] - min.value) / (max.value - min.value)) * 90).toString()
		})
	return getDepthSnapshot.value.bids
		?.slice(0, numberOfRows.value)
		.reverse()
})
</script>

<template>
	<section class="order-book">
		<div class="pr-12 lg:p-0">
			<p
				class="text-green-600 m-0.3 text-right"
				v-for="ask in asks"
				:key="ask[0]"
				:style="`background-image: -webkit-linear-gradient(right, rgb(50, 205, 50, 0.25), rgb(50, 205, 50, 0.25) ${ask[2]}%, transparent ${ask[2]}%)`"
			>
				<span class="text-slate-300">{{ parseFloat(ask[0]) }}</span> | {{ ask[1] }}
			</p>
		</div>
		<hr class="my-2"/>
		<div>
			<p
				class="text-red-500 p-0.3 text-right"
				v-for="bid in bids"
				:key="bid[0]"
				:style="`background-image: -webkit-linear-gradient(right, rgb(255, 69, 0, 0.25), rgb(255, 69, 0, 0.25) ${bid[2]}%, transparent ${bid[2]}%)`"
			>
				<span class="text-slate-300">{{ parseFloat(bid[0]) }}</span> | {{ bid[1] }}
			</p>
		</div>
	</section>
</template>

<style>
#app {
	@apply h-screen
}
.order-book {
	@apply m-auto flex flex-row lg:flex-col w-screen lg:w-1/6 justify-center
}
</style>
