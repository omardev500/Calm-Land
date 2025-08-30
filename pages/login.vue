<script setup lang="ts">
  const form = ref({
    username: '',
    password: ''
  })
  
  const errorMessage = ref('')
  const isLoading = ref(false)
  
  const sendLogin = async () => {
    isLoading.value = true;
    try {
      const newLogin = await $fetch("/api/auth/login", {
        method: "POST",
        body: {
          username: form.value.username,
          password: form.value.password
        }
      })
      if (newLogin.success) {
        navigateTo("/")
      } else {
        errorMessage.value = newLogin.message
      }
    } catch (error) {
      errorMessage.value = 'Login failed. Please try again.'
    } finally {
      isLoading.value = false;
    }
  }
  
</script>
<template>
  <main class="bg-gradient-to-b from-green-50 via-cyan-50 to-indigo-50 w-screen min-h-screen flex flex-col gap-12 justify-center items-center">
    <TextLogo custom="text-5xl" />
    <section class="border border-gray-300 flex flex-col gap-2 bg-white w-full md:w-110 shadow-lg p-5 rounded-lg animate-[customAnime1_0.5s_ease-out]">
      <h2 class="text-xl text-center pb-4 text-slate-900">Welcome back in your quiet zone.</h2>
      <form class="flex flex-col gap-5" method="POST" @submit.prevent="sendLogin">
        <!-- USERNAME -->
        <input type="text" name="username" required aria-required="true" aria-label="Enter your username" placeholder="Enter your username" autocomplete="username" autofocus class="form__input" v-model="form.username" />
        <!-- PASSWORD -->
        <input type="password" name="password" required aria-required="true" aria-label="Enter your password" placeholder="Enter your password" autocomplete="current-password" class="form__input" v-model="form.password" />
        <!-- Error Message (if found errors) -->
        <div class="items-center overflow-hidden min-h-8 animate-[customAnime1_0.3s_ease-out]" :class="errorMessage? 'flex': 'hidden'">
          <p class="font-bold text-red-800 underline">{{ errorMessage }}</p>
        </div>
        <!-- LOGIN -->
        <input type="submit" :value="isLoading ? 'Logging in..' : 'Log in'" class="bg-[#220AD6] text-white font-bold p-3 rounded-lg cursor-pointer md:text-xl hover:opacity-82 mb-1 active:opacity-75 transition transition-2s ease-out" />
      </form>
      <FormOr />
      <NuxtLink to="/register" class="text-center mt-1 self-center bg-teal-700 p-3 rounded-sm text-white font-bold hover:opacity-82 active:opacity-75 transition transition-2s ease-out">Create new account</NuxtLink>
    </section>
  </main>
</template>
