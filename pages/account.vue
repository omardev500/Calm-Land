<script setup lang="ts">
  import Image from './image.jpg';
  import myImage from './Omar.jpeg';
  import { useFirstLoginStore } from "~/stores/firstLogin";
  const useFirstLogin = useFirstLoginStore()
  
  const isFirstTime = useFirstLoginStore.firstTime 
</script>
<template>
  <main class="relative flex flex-col items-center py-4 bg-green-50 w-screen min-h-screen overflow-x-hidden" :class="!isFirstTime ? 'pl-[150px]' : ''">
    <h1 v-if="isFirstTime" class="text-3xl text-indigo-900 font-bold pb-5 pt-2">Configure Your Nexus Profile</h1>
    <Sidebar v-if="!isFirstTime" :profile-image="myImage" />
    <section class="border border-gray-300 bg-white w-full md:w-130 lg:w-160  xl:w-185 shadow-lg p-2 rounded-lg">
      <form class="flex flex-col" method="POST" >
        
        <ProfileHeader 
            :is-editing="true"
            banner-image=""
            profile-image="" 
            profile-name="Omar Hossam"
            profile-gender="male"
            :followers-num="0"
            :posts-num="0"
            :followings-num="0"
        />
        <!-- The Above content will be a component!! -->
        <!-- Education, City/Country, Bio, Languages, Job title, password -->
        <fieldset class="p-2 pt-0">
          <label for="bio">Bio: </label>
          <textarea id="bio" aria-label="Enter your bio" name="bio" placeholder="Tell people more about yourself.." class="block mt-2 form__input"></textarea>
        </fieldset>
        
        <fieldset class="p-2 grid grid-cols-3 gap-4">
          <legend class="col-span-full">More Info:</legend>
          
          <input type="text" placeholder="City, Country" name="country-name" autocomplete="country-name" aria-label="Enter your city or country name or both" class="form__input" />
          
          <input type="text" placeholder="Job Title or Organization" name="job-title" autocomplete="organization" aria-label="Enter your job title or organization" class="form__input" />
          
          <input type="url" placeholder="Your Website Link" name="website-link" autocomplete="url" aria-label="Enter your website link" class="form__input" />
        </fieldset>
        
        <fieldset class="grid grid-cols-3 p-2 gap-4" v-if="!isFirstTime"> <!-- Change Password -->
          <legend class="col-span-full">Change Password: </legend>
          <input type="password" name="current-password" aria-label="Enter your password" placeholder="Your Password" autocomplete="current-password" class="form__input" /> 
          <input type="password" name="new-password" aria-label="Enter a new password" placeholder="New Password" autocomplete="new-password" class="form__input" /> 
          <input type="password" name="confirm-password" aria-label="Confirm your new password" placeholder="Confirm Password" autocomplete="new-password" class="form__input" /> 
        </fieldset>
        
        <input type="submit" :value="isFirstTime ? 'Continue' : 'Update Changes'" class="self-center bg-green-800 text-white font-bold p-3 rounded-sm cursor-pointer md:text-lg hover:opacity-82 active:opacity-75 transition transition-2s ease-out mt-3 mb-1" />
      </form>
      <div class="p-2" v-if="!isFirstTime">
        <h3 class="pb-[2px] text-xl font-bold text-red-950">Danger Zone <span class="text-sm font-normal">(changes here cannot be undone)</span></h3>
        <div>
          <button class="bg-red-900 text-white font-bold mt-2 p-3 rounded-lg cursor-pointer md:text-xl hover:bg-red-800 active:opacity-89 transition transition-0.2s ease-out mr-2">Delete Account</button>
        </div>
      </div>
    </section>
  </main>
</template>
