<script setup>
  const isOpen = ref(false)
</script>
<template>
  <main class="flex flex-col gap-2 items-center pt-4 bg-green-50 w-screen min-h-screen overflow-x-hidden overflow-y-auto">
    <section class="border border-gray-300 bg-white w-full md:w-160 lg:w-220 shadow-lg p-1 rounded-lg">
      <ProfileHeader 
            :is-editing="Boolean(0)"
            banner-image=""
            profile-image="" 
            profile-name="Omar Hossam"
            profile-gender="male"
            :friends-num="Number(15)"
            :posts-num="Number(16)"
            :followings-num="Number(46)"
        />
        <button @click="isOpen = true" class="border-2 bg-yellow-200 border-yellow-600 cursor-pointer rounded-lg p-2">More Info <i class="fa-solid fa-arrow-down animate-bounce"></i></button>
        <div v-if="isOpen">
          <h2>HEllo BRO!</h2>
        </div>
    </section>
  </main>
</template>
