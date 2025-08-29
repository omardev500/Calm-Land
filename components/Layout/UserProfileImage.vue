<script setup lang="ts">
  interface Props {
    profileImage?: string,
    profileGender?: string,
    iconStyle?: string,
    custom?: string
  }
  
  
  const props = defineProps<Props>()
  const isFemale = ref(false)
  
  if (!props.profileGender) isFemale.value = false
  else if (props.profileGender.toLowerCase() === 'female') isFemale.value = true
</script>
<template>
  <!-- 
    CONTAINER MUST HAS:
    rounded-full overflow-hidden relative
    
    CONTAINER SHOULD HAS:
    border border-gray-300 
    
    ALSO SET THE WIDTH AND HEIGHT OF THE CONTAINER!!
  -->
  
  <img v-if="profileImage" :src="profileImage" class="absolute top-0 left-0 rounded-full w-full h-full object-center object-cover" :class="custom" />
  <i v-else class="absolute bottom-0 left-1/2 -translate-x-1/2 text-6xl fa-solid fa-user z-4" 
  :class="[iconStyle, isFemale ? 'text-pink-400' : 'text-blue-400']"></i>
  
</template>
