<script setup lang='ts'>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import {
// 	getAuth,
// 	createUserWithEmailAndPassword,
// 	GoogleAuthProvider,
// 	signInWithPopup,
// } from "firebase/auth"
import router from '@/router'

const email = ref('johndoe@gmail.com')
const password = ref('password')
const errorMessage = ref()

const signIn = async () => {
	try {
		await signInWithEmailAndPassword(getAuth(), email.value, password.value)
		router.push({ name: 'tickers' })
	} catch (error: any) {
		switch (error.code) {
		case 'auth/invalid-email':
			errorMessage.value = 'Invalid Email'
			break
		case 'auth/user-not-found':
			errorMessage.value = 'No account with that email was found'
			break
		case 'auth/wrong-password':
			errorMessage.value = 'Incorrect password'
			break
		default:
			errorMessage.value = 'Email or password was incorrect'
			break
		}
		alert(errorMessage.value)
	}
}

const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider()
	try {
		await signInWithPopup(getAuth(), provider)
		router.push({ name: "tickers" })
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
    <section class="form-wrapper">
        <div class="max-w-md w-full">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-300">
                	Sign In
                </h2>
            </div>
            <div class="mt-8 space-y-6">
                <div>
					<input
						type="email"
						v-model="email"
						autocomplete="email"
						required
						class="input-form"
						placeholder="Email address"
					/>
                </div>
                <div>
					<input
						type="password"
						v-model="password"
						autocomplete="current-password"
						required
						class="input-form"
						placeholder="Password"
					/>
                </div>
				<div class="flex">
                    <button type="submit" @click="signIn" class="sign-up-button mr-5">
                        Sign in
                    </button>
                    <button @click="signInWithGoogle" class="sign-up-button">
                        Sign in With Google
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
