<script setup>
  import myImage from "./Omar.jpeg"
  import Image from "./image.jpg";
</script>

<template>
  <main class="relative grid grid-cols-1 justify-center bg-green-50 w-screen min-h-screen pl-[100px] overflow-x-hidden">
    <Sidebar :profile-image="myImage" />
    <section aria-label="Your news feed" class="w-screen"> <!-- 100px > half the sidebar width to seem that it's at the center of the screen when the sidebar is there -->
      <Post author-name="Omar Hossam" post-publish-date="25 May" post-content="What a beautiful view in the US! ❤️" :post-image="Image" :author-image="myImage" />
    </section>
  </main>
</template>
