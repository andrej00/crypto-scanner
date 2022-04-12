<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { computed } from 'vue'

const props = defineProps(['search'])
</script>

<template>
    <div class="flex justify-end">
        <div class="mb-3 xl:w-96">
            <div class="flex flex-wrap items-stretch w-full">
                <input type="search" class="input-form" v-model="search" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                <button class="input-button" type="button" id="button-addon2">
                    <SearchIcon />
                </button>
            </div>
        </div>
    </div>
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
