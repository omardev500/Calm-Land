<template>
  <main class="bg-blue-50 w-screen min-h-screen flex flex-col gap-6 justify-center items-center">
    <TextLogo custom="text-5xl" />
    <section class="border border-gray-300 flex flex-col gap-5 bg-white w-full md:w-100 shadow-lg p-5 rounded-lg">
      <form class="flex flex-col gap-5">
        <h2 class="text-xl text-center pb-2 text-slate-900">Log in to Facebook</h2>
        <!-- USERNAME -->
        <input type="text" name="username" required aria-required="true" aria-label="Enter your username" placeholder="Enter your username" autocomplete="username" autofocus class="form__input" />
        <!-- PASSWORD -->
        <input type="password" name="password" required aria-required="true" aria-label="Enter your password" placeholder="Enter your password" autocomplete="current-password" class="form__input" />
        <!-- LOGIN -->
        <input type="submit" value="Log in" class="bg-blue-500 text-white font-bold p-3 rounded-lg cursor-pointer md:text-xl hover:opacity-82 active:opacity-75 transition transition-2s ease-out" />
      </form>
      <FormOr />
      <NuxtLink to="/register" class="text-center self-center bg-lime-600 p-3 rounded-lg text-white font-bold hover:opacity-82 active:opacity-75 transition transition-2s ease-out">Create new account</NuxtLink>
    </section>
  </main>
</template>
