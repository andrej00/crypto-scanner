<script setup lang="ts">
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from "@/router";
import HidePasswordIcon from "@/assets/icons/ShowPassword.vue";
import ShowPasswordIcon from "@/assets/icons/HidePassword.vue";

const email = ref("johndoe@gmail.com");
const password = ref("password");
const showPassword = ref(true);
const errorMessage = ref();

const signIn = async () => {
    try {
        await signInWithEmailAndPassword(getAuth(), email.value, password.value);
        router.push({ name: "tickers" });
    } catch (error: any) {
        switch (error.code) {
            case "auth/invalid-email":
                errorMessage.value = "Invalid Email";
                break;
            case "auth/user-not-found":
                errorMessage.value = "No account with that email";
                break;
            case "auth/wrong-password":
                errorMessage.value = "Incorrect password";
                break;
            default:
                errorMessage.value = "Incorrect email or password";
                break;
        }
        alert(errorMessage.value);
    }
};

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(getAuth(), provider);
        router.push({ name: "tickers" });
    } catch (error) {
        alert(error);
    }
};
</script>

<template>
    <section class="form-wrapper">
        <div class="max-w-md w-full">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-300">Sign In</h2>
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
                <div class="relative">
                    <input
                        :type="showPassword ? 'password' : 'text'"
                        v-model="password"
                        autocomplete="current-password"
                        required
                        class="input-form"
                        placeholder="Password"
                    />
                    <ShowPasswordIcon
                        v-if="showPassword"
                        class="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                        @click="showPassword = false"
                    />
                    <HidePasswordIcon
                        v-else
                        class="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                        @click="showPassword = true"
                    />
                </div>
                <div class="flex">
                    <button type="submit" @click="signIn" class="sign-up-button mr-5">Sign in</button>
                    <button @click="signInWithGoogle" class="sign-up-button">Sign in With Google</button>
                </div>
            </div>
        </div>
    </section>
</template>
