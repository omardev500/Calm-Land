<script setup>
  const props = defineProps({
    custom: String
  })
</script>
<template>
  <h1 class="select-none text-center text-blue-600 font-bold" :class="custom">facebook</h1>
</template>
