<script setup lang="ts">
  const isLogged = ref(true);
  if (isLogged.value)  navigateTo("/feed")
  else { navigateTo("/login") }
</script>
