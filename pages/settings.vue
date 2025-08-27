<script setup>
  import Image from './image.jpg';
  import myImage from './Omar.jpeg';
  
</script>
<template>
  <main class="bg-blue-50 overflow-x-hidden w-screen min-h-screen flex flex-col sm:pb-4 gap-6 sm:pt-5 lg:pt-2 xl:pt-7 items-center">
    <section class="border border-gray-300 bg-white w-full md:w-160 lg:w-240 shadow-lg p-1 rounded-lg">
      <form class="flex flex-col" method="POST" >
        
        <ProfileHeader 
            :is-editing="Boolean(1)"
            banner-image=""
            profile-image="" 
            profile-name="Omar Hossam"
            profile-gender="male"
            :friends-num="Number(15)"
            :posts-num="Number(16)"
            :followings-num="Number(46)"
        />
        <!-- The Above content will be a component!! -->
        <!-- Education, City/Country, Bio, Languages, Job title, password -->
        <fieldset class="p-2">
          <label for="bio">Bio: </label>
          <textarea id="bio" aria-label="Enter your bio" name="bio" placeholder="Tell people more about yourself.." class="block p-2 mt-2 rounded-md overflow-y-auto w-full outline-2 outline-gray-300 focus:outline-3 focus:outline-blue-500 transition transition-2s ease-out resize-none min-h-30"></textarea>
        </fieldset>
        
        <fieldset class="p-2 grid grid-cols-2 gap-4">
          <legend class="col-span-full">More Info:</legend>
          <input type="text" placeholder="City, Country" name="country-name" autocomplete="country-name" aria-label="Enter your city or country name or both" class="form__input" />
          <input type="url" placeholder="Your Website Link" name="website-link" autocomplete="url" aria-label="Enter your website link" class="form__input" />
        </fieldset>
        
        <fieldset class="grid grid-cols-3 p-2 gap-4"> <!-- Change Password -->
          <legend class="col-span-full">Change Password: </legend>
          <input type="password" name="current-password" aria-label="Enter your password" placeholder="Your Password" autocomplete="current-password" class="form__input" /> 
          <input type="password" name="new-password" aria-label="Enter a new password" placeholder="New Password" autocomplete="new-password" class="form__input" /> 
          <input type="password" name="confirm-password" aria-label="Confirm your new password" placeholder="Confirm Password" autocomplete="new-password" class="form__input" /> 
        </fieldset>
        
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
