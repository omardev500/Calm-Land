<template>
  <span class="relative text-center text-gray-500 before:left-0 before:bg-gray-300 after:left-[57%] after:bg-gray-300 overflow-hidden">or</span>
</template>
<style scoped>
  span::before, span::after {
    position: absolute;
    top: 50%; 
    width: 43%;
    height: 2px;
  }
</style>
