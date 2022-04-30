<script setup lang="ts">
useHead({
  title: 'PreVue Land',
  htmlAttrs: {
    lang: 'en-GB'
  },
  meta: [
    {
      name: 'description',
      content: 'Home to handcrafted Vue.js and Nuxt demos'
    }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }]
});
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <UiMenuBar />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <UiNewsletterSignup />
    <UiPageFooter />
  </div>
</template>
