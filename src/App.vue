<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "@/components/TheNavbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
	<TheNavbar v-if="!route.meta.hideNavbar" />
	<RouterView />
</template>
