<script setup>
  const props = defineProps({
    custom: String
  })
</script>
<template>
  <h1 class="select-none text-center text-[#00471A] font-bold" :class="custom">Calm Land <i class="fas fa-leaf"></i></h1>
</template>
<style>
  h1 {
    font-family: "Playfair Display"
  }
</style>
