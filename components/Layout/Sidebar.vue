<script setup>
  const props = defineProps({
    profileImage: String,
  })
</script>
<template>
  <aside class="fixed z-40 top-0 left-0 h-screen w-[200px] animate-[sidebarAnime_0.35s_ease-out] xl:w-[250px] bg-white shadow-md overflow-hidden">
    <ul class="py-2">
      <li>
        <NuxtLink to="/profile" class="rounded-full border-3 border-green-100 mx-auto block w-14 h-14 overflow-hidden relative" aria-label="go to your profile">
          <UserProfileImage :profile-image="profileImage" />
        </NuxtLink>
      </li>
      <hr class="border border-gray-100 rounded-full w-[95%] mx-auto mt-2" />
      <li>
        <NuxtLink to="/" class="text-gray-800 lg:text-lg px-[6px] hover:bg-green-100 rounded-lg transition duration-200 ease-out mt-2 mb-1 mx-auto w-[95%] block py-2"><i class="fa-solid fa-newspaper"></i> Feed</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/friends" class="text-gray-800 lg:text-lg px-[6px] hover:bg-green-100 rounded-lg transition duration-200 ease-out my-1 mx-auto w-[95%] block py-2"><i class="fa-solid fa-users"></i> Friends</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/chat" class="text-gray-800 lg:text-lg px-[6px] hover:bg-green-100 rounded-lg transition duration-200 ease-out my-1 mx-auto w-[95%] block py-2"><i class="fa-solid fa-comment"></i> Chat</NuxtLink>
      </li>
      <li> 
        <NuxtLink to="/notifications" class="relative text-gray-800 lg:text-lg px-[6px] hover:bg-green-100 rounded-lg transition duration-200 ease-out mt-1 mx-auto w-[95%] block py-2"><i class="fa-solid fa-bell"></i><!-- <RedDot /> --> Notifications</NuxtLink>
      </li>
      <li> <!-- This will be a modal in desktop but full screen in mobile-->
        <button class="text-gray-800 text-left cursor-pointer lg:text-lg px-[6px] hover:bg-green-100 rounded-lg transition duration-200 ease-out my-1 mx-auto w-[95%] block py-2"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
      </li>
    </ul>
    
    <div class="absolute md:bottom-4 xl:bottom-8 left-0 w-full">
      <h4 class="font-bold py-2 text-green-700 text-center">Nexus Social</h4>
      <p class="text-sm text-slate-700 font-bold px-1 text-center">This project is under<br />MIT License.</p>
      <a href="https://github.com/omardev500/Nexus-Social" target="_blank" class="block w-1/4 mx-auto rounded-full flex justify-center mt-1">
        <i class="block mx-auto my-2 text-3xl fa-brands fa-github"></i>
      </a>
    </div>
  </aside>
</template>
<style>
  @keyframes sidebarAnime {
    from { width: 0%; }
    to { width: 200px; }
  }
</style>
