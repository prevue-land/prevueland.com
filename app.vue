<script setup lang="ts">
const route = useRoute();
const { updateSocialTags } = useSocialTags();

const title = computed(() =>
  route.meta.title ? `PreVue Land - ${route.meta.title}` : 'PreVue Land'
);
const description = computed(
  () => route.meta.description || 'Home to handcrafted Vue.js and Nuxt demos'
);

useHead({
  title,
  htmlAttrs: {
    lang: 'en-GB'
  },
  meta: [{ name: 'description', content: description }],
  link: [{ rel: 'icon', href: '/favicon.ico' }]
});
updateSocialTags({ title: unref(title), description: unref(description) });
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <UiMenuBar />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <UiPageFooter />
  </div>
</template>
