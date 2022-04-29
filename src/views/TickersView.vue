<script setup lang="ts">
import PageLoader from "@/assets/icons/PageLoader.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import TickerGrid from "@/components/TickerGrid.vue";

import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useBinanceStore } from "@/stores/binanceStore";

const binanceStore = useBinanceStore();

const { getCoinsList, getBinanceStreamLoader } = storeToRefs(binanceStore);

onMounted(async () => {
    if (!getCoinsList.value[0]) {
        await binanceStore.connectToBinanceStream();
    }
});

let search = ref("");
const coinsList = ref(["BTCUSDT", "ETHUSDT", "LTCUSDT", "XRPUSDT"]);

// const filteredCoinsList = computed(() => {
//     return getCoinsList.value.filter((coin) => {
//         return coin.s.includes(search.value.toUpperCase());
//     });
// });
const favoriteCoins = computed(() =>
    getCoinsList.value
        .filter((coin) => coinsList.value.includes(coin.s))
        .filter((filterCoin) => filterCoin.s.includes(search.value.toUpperCase()))
);
</script>

<template>
    <PageLoader v-if="getBinanceStreamLoader" />
    <section v-else>
        <div class="flex justify-end">
            <div class="flex w-screen sm:w-96 mx-4">
                <input type="search" class="input-form" v-model="search" placeholder="Search" />
                <button class="input-button" type="button">
                    <SearchIcon />
                </button>
            </div>
        </div>

        <TickerGrid :coinsList="favoriteCoins" />
    </section>
</template>

<style scoped>
.input-form {
    @apply flex-auto block px-3 py-1.5 text-base font-normal rounded-r-none focus:outline-none
	text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition
 	ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600;
}
.input-button {
    @apply px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase
	rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg
	focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
	ease-in-out flex items-center;
}
</style>
