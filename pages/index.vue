<script setup>
  
</script>

<template>
  <h1 class="text-red-500">Hello World!</h1>
  <i class="fa-solid fa-plus"></i>
  <div>
    <button 
      hx-get="/api/message" 
      hx-target="#message-container"
      class="bg-blue-500 text-white p-2 rounded cursor-pointer"
    >
      Load Message
    </button>
    
    <div id="message-container"></div>
  </div>
</template>
