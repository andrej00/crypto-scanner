<script setup lang="ts">
import { ref } from "vue"
import {
	getAuth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth"
import router from "@/router"

const email = ref("")
const password = ref("")
const repeatPassword = ref("")

const isPasswordEqual = () => {
	if (password.value === repeatPassword.value) {
		return true
	} else {
		alert("Your passwords do not match")
	}
}

const signUp = async () => {
	if (!isPasswordEqual) {
		return
	}
	try {
		const data = await createUserWithEmailAndPassword(
			getAuth(),
			email.value,
			password.value
		)
		router.push({ name: "tickers" })
	} catch (error: any) {
		alert(error.code)
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
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-300">
                    Register
                </h2>
            </div>
            <div class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
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
                    <div>
                        <input
                            type="password"
                            v-model="repeatPassword"
                            autocomplete="repeat-password"
                            required
                            class="input-form"
                            placeholder="Repeat Password"
                        />
                    </div>
                </div>

                <div class="flex">
                    <button type="submit" @click="signUp" class="sign-up-button mr-5">
                        Sign up
                    </button>
                    <button @click="signInWithGoogle" class="sign-up-button">
                        Sign Up With Google
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

