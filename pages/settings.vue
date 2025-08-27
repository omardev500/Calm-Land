<script setup>
  import Image from './image.jpg';
</script>
<template>
  <main class="bg-blue-50 overflow-x-hidden w-screen min-h-screen flex flex-col sm:pb-4 gap-6 sm:pt-5 lg:pt-2 xl:pt-7 items-center">
    <section class="border border-gray-300 bg-white w-full md:w-160 lg:w-240 shadow-lg p-1 rounded-lg">
      <form class="flex flex-col" method="POST" >
        
        <label for="banner-image" title="Add banner image" class="block text-transparent h-50 sm:h-70 lg:h-80 relative w-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition transition-0.2s ease-in-out">
          <span class="absolute top-0 text-transparent select-none">Add a new banner image</span>
          <!-- Banner image will replace <span> -->
          <img v-if="Image" :src="Image" class="w-full h-full object-cover object-center" />

          <span v-else class="absolute top-1/2 left-1/2 -translate-1/2 text-white border-2 text-lg lg:text-xl rounded-full py-[6px] px-[8px] lg:py-[8px] lg:px-[10px]">
            <i class="fa-solid fa-plus"></i>
          </span>
          
          <input type="file" class="text-transparent absolute top-0 left-0 w-full h-full cursor-pointer" autofocus aria-label="Add a new banner image" title="Add a new banner image" id="banner-image" name="banner-image" /> 
        </label>
        
        <div class="grid sm:grid-cols-[auto_1fr] sm:gap-2 sm:p-2 items-center">
          <label for="profile-image" class="inline-block text-transparent w-18 h-18 cursor-pointer border bg-gray-100 border-gray-300 rounded-full relative overflow-hidden select-none" title="Add profile image" >
            Add a new Profile Image
            <i class="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-4 text-6xl fa-solid fa-user text-gray-500 z-4"></i>
            <i class="absolute top-1/2 left-1/2 -translate-1/2 text-slate-700 fa-solid fa-plus text-2xl"></i>

            <input type="file" name="profile-image" id="profile-image" aria-label="Add a new profile image" class="cursor-pointer text-transparent absolute top-0 left-0 w-full h-full cursor-pointer" />
          </label>
          
          <div aria-labelledby="profile-heading" class="flex items-center justify-between">
            <div>
              <h2 class="lg:text-2xl">Omar Hossam</h2>
              <p>
                <span aria-label="Pronouns: He Him" class="text-sm">He/Him</span>
              </p>
            </div>
            <div class="flex gap-3">
              <span class="bg-slate-700 text-white rounded-md p-2">Friends: 54</span>
              <span class="bg-slate-700 text-white rounded-md p-2">Following: 72</span>
              <span class="bg-slate-700 text-white rounded-md p-2">Posts: 13</span>
            </div>
          </div>
        </div>
        <!-- The Above content will be a component!! -->
        <div class="grid grid-cols-2 p-2 gap-4">
          <input type="password" name="new-password" aria-label="Enter a new password" placeholder="New Password" autocomplete="new-password" class="form__input" /> 
        
          <input type="password" name="confirm-password" aria-label="Confirm your new password" placeholder="Confirm Password" autocomplete="new-password" class="form__input" /> 
        </div>
        <input type="submit" value="Update Changes" class="self-center bg-green-500 text-white font-bold p-3 rounded-lg cursor-pointer md:text-xl hover:opacity-82 active:opacity-75 transition transition-2s ease-out mt-2" />
      </form>
      <div class="p-2">
        <h3 class="pb-[2px] text-xl font-bold text-red-700">Danger Zone <span class="text-sm font-normal">(changes here cannot be restored)</span></h3>
        <div>
          <button class="bg-red-500 text-white font-bold mt-2 p-3 rounded-lg cursor-pointer md:text-xl hover:bg-red-700 active:bg-red-800 transition transition-0.2s ease-out mr-2">Delete Account</button>
        </div>
      </div>
    </section>
  </main>
</template>
