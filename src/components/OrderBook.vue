<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useBinanceStore } from '@/stores/binance_socket'

    const route = useRoute()
	const binanceStore = useBinanceStore()

    const ticker = route.params.id

	binanceStore.connectToTickerStream(ticker.toLowerCase())
    binanceStore.fetchDepthSnapShot(ticker)

    const { getDepthSnapshot } = storeToRefs(binanceStore)

    let min = ref(0)
    let max = ref(0)
    const numberOfRows = 15

    const asks = computed(() => {
        let quantity = getDepthSnapshot.value.asks?.slice(0, numberOfRows).map(q => q[1]).sort((a, b) => a - b)
        if (quantity) {
            min = quantity[0];
            max = quantity[numberOfRows - 1];
        }
        getDepthSnapshot.value.asks?.slice(0, numberOfRows).map(price => {
            price[2] = 10 + (price[1] - min) / (max - min) * 90
        })
        return getDepthSnapshot.value.asks?.slice(0, numberOfRows).reverse()
    })

    const bids = computed(() => {
        let quantity = getDepthSnapshot.value.bids?.slice(0, numberOfRows).map(q => q[1]).sort((a, b) => a - b)
        if (quantity) {
            min = quantity[0];
            max = quantity[numberOfRows - 1];
        }
        getDepthSnapshot.value.bids?.slice(0, numberOfRows).map(price => {
            price[2] = 10 + (price[1] - min) / (max - min) * 90
        })
        return getDepthSnapshot.value.bids?.slice(0, numberOfRows)
    })
</script>

<template>
    <section class="flex">
        <div class="order-book overflow-auto">
            <div>
                <p
                    class="text-green-600 m-0.3 text-right"
                    v-for="ask in asks"
                    :key="ask[0]"
                    :style="`background-image: -webkit-linear-gradient(right, rgb(50, 205, 50, 0.2), rgb(50, 205, 50, 0.2) ${ask[2]}%, transparent ${ask[2]}%)`"
                >
                    <span class="text-slate-300">{{ parseFloat(ask[0]) }}</span> | {{ ask[1] }}
                </p>

                <hr class="my-2">

                <p
                    class="text-red-500 p-0.3 text-right"
                    v-for="bid in bids"
                    :key="bid[0]"
                    :style="`background-image: -webkit-linear-gradient(right, rgb(255, 69, 0, 0.18), rgb(255, 69, 0, 0.18) ${bid[2]}%, transparent ${bid[2]}%)`"
                >
                    <span class="text-slate-300">{{parseFloat(bid[0]) }}</span> | {{ bid[1] }}
                </p>
            </div>
        </div>
    </section>
</template>

<style>
    #app {
        @apply h-screen
    }

    .order-book {
        width: 220px;
    }
</style>
