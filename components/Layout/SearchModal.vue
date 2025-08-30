<template>
  <div class="w-screen h-screen z-50 bg-black/75 fixed top-0 left-0 flex items-center justify-center">
    <div class="bg-white rounded-md p-5 min-h-100 min-w-130">
      <form class="flex">
        <input type="text" style="border-radius: 4px 0 0 4px;" class="form__input p-3 rounded-tl-md rounded-bl-md" placeholder="Search users by name..." aria-label="Search users by name" required aria-required="true" />
        <button class="bg-indigo-800 text-white rounded-tr-md w-2/10 p-3 cursor-pointer rounded-br-md">Search</button>
      </form>
    </div>
  </div>
</template>
