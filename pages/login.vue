<script setup>

</script>
<template>
  <main class="bg-blue-50 w-screen min-h-screen flex flex-col gap-6 justify-center items-center">
    <h1 class="text-5xl select-none text-center text-blue-600 font-bold">facebook</h1>
    <section class="border border-gray-300 flex flex-col gap-5 bg-white w-full md:w-100 shadow-lg p-5 rounded-lg">
      <form class="flex flex-col gap-5">
        <h2 class="text-xl text-center pb-2 text-slate-900">Log in to Facebook</h2>
        <input type="text" name="username" required aria-required="true" aria-label="Enter your username" placeholder="Enter your username" autocomplete="current-password" class="p-3 w-full rounded-sm outline-2 outline-gray-300 focus:outline-3 focus:outline-blue-500 transition transition-2s ease-out" />
        <input type="password" name="password" required aria-required="true" aria-label="Enter your password" placeholder="Enter your password" autocomplete="username" class="p-3 w-full rounded-sm outline-2 outline-gray-300 focus:outline-3 focus:outline-blue-500 transition transition-2s ease-out" />
        <input type="submit" value="Log in" class="bg-blue-500 text-white font-bold p-3 rounded-lg cursor-pointer md:text-xl hover:opacity-82 active:opacity-75 transition transition-2s ease-out" />
      </form>
      <span class="relative text-center text-gray-500 before:absolute before:top-1/2 before:left-0 before:w-[41%] before:h-[2px] before:bg-gray-300 before:-translate-y-1/2">or</span>
      <a href="#" class="text-center self-center bg-lime-600 p-3 rounded-lg text-white font-bold hover:opacity-82 active:opacity-75 transition transition-2s ease-out">Create new account</a>
    </section>
  </main>
</template>
<style scoped>

</style>
