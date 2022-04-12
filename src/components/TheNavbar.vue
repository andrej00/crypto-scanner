<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "vue-router"

const router = useRouter()

const isLoggedIn = ref(false)
let auth: any

onMounted(() => {
	auth = getAuth()
	console.log(auth)
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true
		} else {
			isLoggedIn.value = false
		}
	})
})

const handleSignout = async () => {
	await signOut(auth)
	router.push({ name: "home" })
}
</script>

<template>
	<nav>
		<div class="flex justify-end items-center align-middle mr-4 my-7">
			<router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
			<div v-if="!isLoggedIn">
				<router-link :to="{ name: 'sign-in' }" class="nav-link">
					Sign in
				</router-link>
				<router-link :to="{ name: 'sign-up' }" class="sign-up-link">
					Sign up
				</router-link>
			</div>
			<div v-else>
				<router-link :to="{ name: 'tickers' }" class="nav-link">
					Tickers
				</router-link>
				<span @click="handleSignout" class="nav-link cursor-pointer">
					Sign out
				</span>
			</div>
		</div>
	</nav>
</template>

<style>
.nav-link {
	@apply text-lg text-slate-300 ml-6 hover:text-sky-500
}
.sign-up-link {
	@apply ml-4 whitespace-nowrap inline-flex items-center justify-center px-3 py-1 border
	border-transparent rounded-md shadow-sm text-base font-medium text-slate-200 bg-indigo-600
	hover:bg-indigo-700
}
</style>
