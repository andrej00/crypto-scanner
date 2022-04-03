<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
	<div class="flex mt-64">
		<div class="m-auto">
			<router-link
				:to="{ name: 'tickers' }"
				class="text-5xl m-auto text-green-500"
			>
				TICKERS
			</router-link>
		</div>
	</div>
</template>
