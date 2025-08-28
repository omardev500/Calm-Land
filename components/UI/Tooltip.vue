<script setup>
  const props = defineProps({
    text: String,
    pos: String,
    bgColor: String,
    textColor: String
  })
</script>
<template>
  <p class="tooltip-text" :class="bgColor, textColor">
    {{ text }}
  </p>
</template>
