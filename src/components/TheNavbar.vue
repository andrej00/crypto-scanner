<script setup lang="ts">
	import { RouterView } from "vue-router";
	import { onMounted, ref } from 'vue'
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
	import router from "../router";

	const isLoggedIn = ref(false)
	let auth

	onMounted(() => {
		auth = getAuth()
		onAuthStateChanged(auth, (user) => {
			console.log(user)
			if (user) {
				isLoggedIn.value = true
			} else {
				isLoggedIn.value = false
			}
		})
	})

	const handleSignout = async () => {
		await signOut(auth)
		router.push({name: 'home'})
	}
</script>

<template>
	<nav class="p-5 pr-15 absolute right-10 top-2">
		<div class="flex justify-end items-center align-middle">
			<router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
			<router-link :to="{name: 'tickers'}" class="nav-link">Tickers</router-link>
			<div v-if="!isLoggedIn">
				<router-link :to="{name: 'sign-in'}" class="nav-link">Sign in</router-link>
				<router-link :to="{name: 'sign-up'}" class="sign-up-link">Sign up</router-link>
			</div>
			<p v-else @click="handleSignout" class="nav-link cursor-pointer">Sign out</p>

			<div class="ml-4 relative">
				<div>
					<button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
						<span class="sr-only">Open user menu</span>
						<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
					</button>
				</div>

				<!--
				<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
					<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
				</div>
				-->
			</div>
		</div>
	</nav>
</template>

<style>
	@import "@/assets/base.css";
	.nav-link {
		@apply text-lg text-slate-200 ml-6 hover:text-sky-500
	}
	.sign-up-link {
		@apply ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700
	}
</style>
