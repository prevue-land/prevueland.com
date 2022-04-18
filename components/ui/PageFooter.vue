<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="w-full py-4 text-center font-bold bg-green text-sky-700">
    &copy; {{ currentYear }} PreVue Land. Powered by Nuxt 3 & Directus
  </div>
</template>
