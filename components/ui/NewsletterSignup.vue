<script setup lang="ts">
const route = useRoute();
const subscriptionSuccessful = ref(false);

const displaySuccessMessage = () => {
  subscriptionSuccessful.value = true;
  setTimeout(() => (subscriptionSuccessful.value = false), 5000);
};
</script>

<template>
  <NewsletterForm
    v-if="route.name !== 'contact'"
    header-text="Activate the Release Radar"
    :theme="{
      container: 'flex flex-col items-center space-y-4 p-8 bg-sky-600',
      header: 'text-4xl text-center font-bold mt-0',
      input:
        'rounded-lg px-8 py-3 border-t mr-0 border-b border-l text-center text-gray-800 border-gray-200 bg-white',
      button:
        'rounded-lg p-3 bg-green text-sky-700 font-bold hover:bg-sky-800 hover:text-green duration-300'
    }"
    @subscribed="displaySuccessMessage"
  >
    <template #description>
      <p class="text-lg text-center">
        Get notified about newly released and upcoming PreVues via the
        newsletter
      </p>
    </template>
    <template #bottom>
      <p v-if="subscriptionSuccessful" class="text-center">
        Great work! Now go to your mailbox to confirm the subscription
      </p>
      <p class="text-sm text-center">
        By subscribing you agree with Revue's
        <NuxtLink
          class="text-green"
          to="https://www.getrevue.co/terms"
          target="_blank"
        >
          Terms of Service
        </NuxtLink>
        and
        <NuxtLink
          class="text-green"
          to="https://www.getrevue.co/privacy"
          target="_blank"
        >
          Privacy Policy
        </NuxtLink>
      </p>
    </template>
  </NewsletterForm>
</template>
