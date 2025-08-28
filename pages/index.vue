<script setup>
  import myImage from "./Omar.jpeg"
  import Image from "./image.jpg";
  
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
  <main class="relative flex flex-col align-center pt-4 bg-green-50 w-screen min-h-screen pl-[100px] overflow-x-hidden">
    <Sidebar :profile-image="myImage" />
    <h1 class="text-3xl pl-[60px] text-center">Good {{ timeName }}, Omar!</h1>
    <section aria-label="Your news feed" class="w-screen"> <!-- 100px > half the sidebar width to seem that it's at the center of the screen when the sidebar is there -->
      <Post author-name="Omar Hossam" post-publish-date="25 May" post-content="What a beautiful view in the US! ❤️" :post-image="Image" :author-image="myImage" />
    </section>
  </main>
</template>
