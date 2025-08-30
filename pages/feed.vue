<script setup>
  import myImage from "~/assets/images/Omar.jpeg"
  import Image from "~/assets/images/image.jpg";
  
  const hour = new Date().getHours()
  
  const timeName = ref("")
  if (hour >= 0 && hour < 12) {
    timeName.value = "Morning";
  } else if (hour >= 12 && hour < 18) {
    timeName.value = "Afternoon";
  } else if (hour >= 18 && hour < 21) {
    timeName.value = "Evening";
  } else { 
    timeName.value = "Night";
  }
  
</script>
<template>
  <main class="relative flex flex-col items-center pt-4 bg-green-50 w-screen min-h-screen pl-[100px] overflow-x-hidden">
    <Sidebar :profile-image="myImage" />
   
    <section class="text-center py-2 flex flex-col gap-3">
      <h1 class="text-3xl">Good {{ timeName }}, Hager!</h1>
    </section>
    <section aria-label="Your news feed" class="w-screen flex flex-col gap-5 py-4"> <!-- 100px > half the sidebar width to seem that it's at the center of the screen when the sidebar is there -->
      <Post author-name="Omar Hossam" post-publish-date="25 May" post-content="What a beautiful view in the US! ❤️" :post-image="Image" :author-image="myImage" post-likes="45" post-comments="78" />
      
      <Post author-name="Hany Mohamed" post-publish-date="Today" post-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit."  post-likes="0" post-comments="2" />
    </section>
  </main>
</template>
