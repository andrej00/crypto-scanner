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

    const asks = computed(() => {
        let quantity = getDepthSnapshot.value.asks?.slice(0, 15).map(q => q[1]).sort((a, b) => a - b)
        if (quantity) {
            min = quantity[0];
            max = quantity[14];
        }
        getDepthSnapshot.value.asks?.slice(0, 15).map(price => {
            price[2] = 10 + (price[1] - min) / (max - min) * 90
        })
        return getDepthSnapshot.value.asks?.slice(0, 15).reverse()
    })

    const bids = computed(() => {
        let quantity = getDepthSnapshot.value.bids?.slice(0, 15).map(q => q[1]).sort((a, b) => a - b)
        if (quantity) {
            min = quantity[0];
            max = quantity[14];
        }
        getDepthSnapshot.value.bids?.slice(0, 15).map(price => {
            price[2] = 10 + (price[1] - min) / (max - min) * 90
        })
        return getDepthSnapshot.value.bids?.slice(0, 15)
    })

</script>

<template>
    <div class="flex">
        <section class="nesto-drugo">
            <div class="mb-20">
                <p
                    class="text-green-600 m-0.3 text-right"
                    v-for="ask in asks"
                    :key="ask[0]"
                    :style="`background-image: -webkit-linear-gradient(right, rgb(0, 255, 0, 0.2), rgb(0, 255, 0, 0.2) ${ask[2]}%, transparent ${ask[2]}%)`"
                >
                    <span class="text-slate-300">{{ ask[0] }}</span> | {{ ask[1] }}
                </p>

                <hr class="my-2">

                <p
                    class="text-red-600 p-0.3 text-right"
                    v-for="bid in bids"
                    :key="bid[0]"
                    :style="`background-image: -webkit-linear-gradient(right, rgb(255, 0, 0, 0.4), rgb(255, 0, 0, 0.4) ${bid[2]}%, transparent ${bid[2]}%)`"
                >
                    <span class="text-slate-300">{{ bid[0] }}</span> | {{ bid[1] }}
                </p>
            </div>
        </section>
    </div>
</template>

<style>
	a {
		color: #42b983;
	}

	label {
		margin: 0 0.5em;
		font-weight: bold;
	}

	code {
		background-color: #eee;
		padding: 2px 4px;
		border-radius: 4px;
		color: #304455;
	}

    #app {
        height: 100vh !important
    }

    .nesto-drugo {
        width: 200px;
    }
</style>
