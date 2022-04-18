<template>
  <section
    id="hero"
    class="w-screen h-screen flex flex-col justify-center items-center space-y-3 md:space-y-6"
  >
    <span id="hero-logo" class="text-4xl md:text-6xl font-black">
      PreVue Land
    </span>
    <span class="text-base lg:text-2xl">
      Home to handcrafted Vue.js and Nuxt demos
    </span>
    <div
      class="flex flex-col items-center space-y-4 text-sm md:text-lg md:flex-row md:space-x-5 md:space-y-0"
    >
      <NuxtLink to="#about">
        <button
          class="text-sky-700 bg-green hover:text-green hover:bg-sky-800 border-0 py-2 px-6 focus:outline-none rounded text-center duration-300"
        >
          About PreVue Land
        </button>
      </NuxtLink>
      <NuxtLink to="#the-latest-demos">
        <button
          class="text-white bg-sky-600 hover:bg-sky-800 border-0 py-2 px-6 focus:outline-none rounded duration-300"
        >
          The latest demos
        </button>
      </NuxtLink>
      <NuxtLink to="#the-latest-articles">
        <button
          class="text-white bg-sky-600 hover:bg-sky-800 border-0 py-2 px-6 focus:outline-none rounded duration-300"
        >
          The latest articles
        </button>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
#hero-logo {
  background: -webkit-linear-gradient(
    270deg,
    rgba(66, 184, 131, 1) 20%,
    rgb(94, 116, 139)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
