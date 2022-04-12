<script lang="ts">
declare global {
	interface Window {
		TradingView: any
	}
}
</script>
<script setup lang='ts'>
import OrderBook from '@/components/OrderBook.vue'
import { useRoute } from "vue-router"

const route = useRoute()
const ticker = route.params.id
const TRADING_VIEW_ID = 'vue-trading-view'

const options = {
	width: '100%',
	height: '100%',
	symbol: `BINANCE:${ticker}`,
	interval: '15',
	timezone: 'Europe/Belgrade',
	theme: 'dark',
	style: '1',
	locale: 'en',
	toolbar_bg: '#f1f3f6',
	enable_publishing: false,
	hide_side_toolbar: false,
	studies: ['Volume@tv-basicstudies', 'VWAP@tv-basicstudies'],
}

const appendScript = (onload: () => void) => {
	const script = document.createElement('script')
	script.type = 'text/javascript'
	script.async = true
	script.src = 'https://s3.tradingview.com/tv.js'
	script.onload = onload
	document.getElementsByTagName('head')[0].appendChild(script)
}
const initWidget = () => {
	new window.TradingView.widget(
		Object.assign({ container_id: TRADING_VIEW_ID }, options)
	)
}
appendScript(initWidget)
</script>

<template>
	<section class="flex lg:flex-row flex-col">
		<section :id="TRADING_VIEW_ID" class="w-screen h-screen lg:w-5/6 xl:w-11/12"></section>
		<OrderBook />
	</section>
</template>

