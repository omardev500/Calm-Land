<script setup>
  const props = defineProps({
    isEditing: Boolean,
    bannerImage: String,
    profileImage: String,
    profileName: String,
    profileGender: String,
    postsNum: Number,
    followingsNum: Number,
    followersNum: Number
  })
</script>
<template>
  <label v-if="isEditing" for="banner-image" title="Add banner image" class="block text-transparent h-50 sm:h-70 lg:h-80 relative w-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition transition-0.2s ease-in-out">
    <span class="absolute top-0 text-transparent select-none">Add a new banner image</span>
    <!-- Banner image will replace <span> -->
    <img v-if="bannerImage" :src="bannerImage" class="absolute top-0 left-0 hover:opacity-60 w-full h-full object-cover object-center" />

    <span v-else class="absolute top-1/2 left-1/2 -translate-1/2 text-white border-2 text-lg lg:text-xl rounded-full py-[6px] px-[8px] lg:py-[8px] lg:px-[10px]">
      <i class="fa-solid fa-plus"></i>
    </span>
    
    <input type="file" class="text-transparent absolute top-0 left-0 w-full h-full cursor-pointer" autofocus aria-label="Add a new banner image" title="Add a new banner image" id="banner-image" name="banner-image" /> 
  </label>
  
  <div v-else class="bg-gray-700 relative h-50 sm:h-70 lg:h-80 w-full">
    <img v-if="bannerImage" :src="bannerImage" alt="banner image" class="w-full h-full object-cover object-center" />
  </div>
  
  <div class="grid sm:grid-cols-[auto_1fr] sm:gap-2 sm:p-2 items-center">
    
    <!-- IF EDIT MODE FOR PROFILE PHOTO -->
    <label v-if="isEditing" for="profile-image" class="block text-transparent w-18 h-18 cursor-pointer border border-gray-300 rounded-full relative overflow-hidden select-none" title="Add profile image" >
      Add a new Profile Image
      
      <UserProfileImage :profile-image="profileImage" :profile-gender="profileGender" />
      <span class="absolute top-0 left-0 block z-4 bg-gray-500/50 w-full h-full flex items-center justify-center hover:bg-gray-400/60">
        <i class="text-white fa-solid fa-plus text-2xl"></i>
      </span>
      
      <input type="file" name="profile-image" id="profile-image" aria-label="Add a new profile image" class="cursor-pointer text-transparent absolute top-0 left-0 w-full h-full cursor-pointer" />
    </label>
    
    <!-- IF IT'S NOT EDIT MODE FOR PROFILE PHOTO -->
    <div v-else class="w-18 h-18 rounded-full border border-gray-300 overflow-hidden bg-gray-100 relative">
      <UserProfileImage :profile-image="profileImage" :profile-gender="profileGender" />
    </div>
    <!-- PROFILE HEADER CONTENT -->
    <div aria-labelledby="profile-heading" class="flex items-center justify-between">
      <div>
        <h2 class="lg:text-2xl">{{ profileName }}</h2>
        <p>
          <span v-if="profileGender.toLowerCase() === 'male'" aria-label="Pronouns: He Him" class="text-sm">He/Him</span>
          <span v-else-if="profileGender.toLowerCase() === 'female'" aria-label="Pronouns: She Her" class="text-sm">She/Her</span>
        </p>
      </div>
      <div class="flex gap-3">
        <span class="bg-indigo-800 text-white rounded-md p-2">Followers: {{ followersNum }}</span>
        <span class="bg-indigo-800 text-white rounded-md p-2">Following: {{ followingsNum }}</span>
        <span class="bg-indigo-800 text-white rounded-md p-2">Posts: {{ postsNum }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
