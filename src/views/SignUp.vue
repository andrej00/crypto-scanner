<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import router from "@/router";
import HidePasswordIcon from "@/assets/icons/ShowPassword.vue";
import ShowPasswordIcon from "@/assets/icons/HidePassword.vue";

const email = ref("");
const password = ref("");
const repeatPassword = ref("");
const showPassword = ref(true);

const isPasswordEqual = () => {
    if (password.value === repeatPassword.value) {
        return true;
    } else {
        alert("Your passwords do not match");
    }
};

const signUp = async () => {
    if (!isPasswordEqual) {
        return;
    }
    try {
        await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
        router.push({ name: "tickers" });
    } catch (error: any) {
        alert(error.code);
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
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-300">Register</h2>
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
                    <div class="relative">
                        <input
                            :type="showPassword ? 'password' : 'text'"
                            v-model="repeatPassword"
                            autocomplete="repeat-password"
                            required
                            class="input-form"
                            placeholder="Repeat Password"
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
                </div>

                <div class="flex">
                    <button type="submit" @click="signUp" class="sign-up-button mr-5">Sign up</button>
                    <button @click="signInWithGoogle" class="sign-up-button">Sign Up With Google</button>
                </div>
            </div>
        </div>
    </section>
</template>
