<script setup>
  const props = defineProps({
    // Author
    authorImage: String,
    authorName: String,
    authorProfileLink: String, // Add it later on this project
    // Post Content
    postContent: String,
    postImage: String,
    postLikes: String,
    postComments: String,
    postPublishDate: String,
    
    // Current User States (if he liked the video?, commented and so on..)
    isCurrentUserLiked: Boolean,
    isCurrentUserCommented: Boolean,
    currentUserComment: String,
    currentUserId: String
  })
  
  const isContentLong = ref(false)
  const contentExpanded = ref(false)
  
  if (props.postContent.length > 145) isContentLong.value = true
  
</script>
<template>
  <article class="lg:w-[56%] xl:w-[50%] mx-auto bg-white shadow-md p-3 rounded-lg">
    
    <!--------- POST HEADER ------------>
    <header class="pb-3 relative flex gap-3 ">
      <div class="relative w-12 h-12">
        <UserProfileImage :profile-image="authorImage" />
      </div>
      <div>
        <h2 class="font-bold text-slate-800">{{ authorName }}</h2>
        <p class="text-sm text-slate-600">{{ postPublishDate }}</p>
      </div>
      <button class="cursor-pointer absolute top-1 right-2 border-transparent border-2 hover:border-gray-500 rounded-sm transition transition-1s ease-out">
        <i class="fa-solid fa-ellipsis-h"></i>
      </button>
    </header>
    
    <!------------- POST CONTENT -------------->
    <main>
     
      <div v-if="postContent">
        <p v-if="isContentLong && !contentExpanded">
          {{ postContent.slice(0, 145) }} <button class="text-slate-600 cursor-pointer" @click="contentExpanded = true"> ...more</button>
        </p>
        <p v-else-if="isContentLong && contentExpanded">
          {{ postContent }} <br /><button class="text-slate-600 cursor-pointer" @click="contentExpanded = false"> ...less</button>
        </p>
        <p v-else>
          {{ postContent }}
        </p>
      </div>
      
      <img v-if="postImage" :src="postImage" class="w-full lg:h-68 rounded-md object-cover object-center" :class="postContent ? 'mt-3' : ''" />
    </main>
    
    <!----------------- POST FOOTER -------------------->
    <footer class="pt-3 grid grid-cols-4 gap-3">
      
      <button class="flex items-center p-1 rounded-md justify-between border-2 border-[#003E85] bg-blue-50 cursor-pointer rounded-md transition-colors duration-200 hover:bg-[#003E85] hover:text-white " :title="postLikes || 0">
        <p class="text-lg">Like </p>
        <i class="text-lg fa-solid fa-thumbs-up"></i>
      </button>
      
      <button class="flex items-center p-1 rounded-md justify-between border-2 border-[#5700BA] bg-indigo-50 cursor-pointer rounded-md transition-colors duration-200 hover:bg-[#5700BA]  hover:text-white" :title="postComments || 0">
        <p class="text-lg">Comment </p>
        <i class="text-lg fa-solid fa-message"></i>
      </button>
      
      <button class="flex items-center p-1 rounded-md justify-between border-2 border-[#004D1C] bg-green-50 cursor-pointer rounded-md transition-colors duration-200 hover:bg-[#004D1C] hover:text-white">
        <p class="text-lg">Share </p>
        <i class="text-lg fa-solid fa-arrow-up-right-from-square"></i>
      </button>
      
      <button class="flex items-center p-1 rounded-md justify-between border-2 border-[#420000] bg-red-50 cursor-pointer rounded-md transition-colors duration-200 hover:bg-[#420000] hover:text-white ">
        <p class="text-lg">Save </p>
        <i class="text-lg fa-solid fa-bookmark"></i>
      </button>
    </footer>
  </article>
</template>
