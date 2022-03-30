<script setup lang="ts">
    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import router from "@/router";

    const email = ref("johndoe@gmail.com");
    const password = ref("password");
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
                errorMessage.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errorMessage.value = "Incorrect password";
                break;
            default:
                errorMessage.value = "Email or password was incorrect";
                break;
            }
            alert(errorMessage.value);
        }
    };
</script>

<template>
    <section class="wrapper">
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
                <button type="submit" @click="signIn" class="sign-up-button">
                    Sign in
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .input-form {
        @apply appearance-none relative block w-full px-3 py-2 border border-gray-300
        placeholder-gray-900 text-gray-900 rounded-md mb-5 focus:outline-none focus:ring-indigo-500
        focus:border-indigo-500 focus:z-10 sm:text-sm bg-slate-200;
    }
    .sign-up-button {
        @apply relative w-full flex justify-center py-2 px-4 border border-transparent text-sm
        font-medium rounded-md text-slate-200 bg-indigo-600 hover:bg-indigo-700 focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
    }

    .wrapper {
        @apply flex mt-36 items-center justify-center pb-20 px-4 sm:px-6 lg:px-12;
    }
</style>
