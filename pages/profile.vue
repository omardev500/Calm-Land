<script setup lang="ts">
  import myImage from "~/assets/images/Omar.jpeg" 
  import Image from "~/assets/images/image.jpg";
  
  const userName = ref(formatUserName("OMArDev500"))
  console.log("Username: ", userName.value)
</script>
<template>
  <main class="relative flex flex-col items-center py-4 bg-green-50 w-screen min-h-screen pl-[150px] overflow-x-hidden">
    <Sidebar :profile-image="myImage" />
    <section class="border border-gray-300 bg-white w-full md:w-130 lg:w-160  xl:w-185 shadow-lg p-1 rounded-lg">
      <ProfileHeader 
            :is-editing="Boolean(0)"
            :banner-image="Image"
            :profile-image="myImage" 
            profile-name="Omar Hossam"
            profile-gender="male"
            :followers-num="Number(15)"
            :posts-num="Number(16)"
            :followings-num="Number(46)"
        />
        <div aria-label="personal info" class="px-3 py-3 grid grid-cols-3 gap-3">
          
          <div class="shadow-xl p-1 bg-gray-100 rounded-lg cursor-default  hover:shadow-blue-800/50 border-2 border-blue-800/50 hover:scale-110 transition transition-2s ease-out xl:p-2 xl:text-lg xl:border-3">
            <p class="text-blue-800"><i class="fa-solid fa-graduation-cap"></i> Harvard University</p>
          </div>
          
          <div class="shadow-xl p-1 bg-gray-100 rounded-lg cursor-default hover:shadow-green-800/50 border-2 border-green-800/50 hover:scale-110 transition transition-2s ease-out xl:p-2 xl:text-lg xl:border-3">
            <p class="text-green-800"><i class="fa-solid fa-briefcase"></i> Microsoft Corporate</p>
          </div>
          
          <div class="shadow-xl p-1 bg-gray-100 rounded-lg cursor-default  hover:shadow-indigo-800/50 border-2 border-indigo-800/50 hover:scale-110 transition transition-2s ease-out xl:p-2 xl:text-lg xl:border-3">
            <p class="text-indigo-800"><i class="fa-solid fa-globe"></i> Alexandria/Egypt</p>
          </div>
          
        </div>
        
        <div aria-label="profile's bio" class="px-3 pt-1 pb-2">
          <h2 class="text-2xl mb-1">Bio:</h2>
          <p class="p-2 xl:px-3 text-md/10 border w-full border-slate-300 rounded-lg bg-slate-50 text-black xl:text-lg">I'm a Full Stack Web Developer | Specialist in Nuxt.js & Nitro 🚀 <br /> I'm a Linux User and can type 90 WPM on Keyboard ⭐
          </p>
        </div>
        
        <div aria-label="profile's official website" class="px-3 pt-1 pb-3">
          <h3 class="text-2xl mb-1">Official Website:</h3>
          <div class="p-2 xl:p-3 block text-md/10 border border-slate-300 rounded-lg bg-slate-50 text-black">
            <a href="https://github.com/omardev500" target="_blank" class="text-indigo-600 xl:text-lg hover:text-indigo-800 transition transition-1s ease-out">https://www.github.com/omardev500</a>
          </div>
        </div>
        
    </section>
  </main>
</template>
