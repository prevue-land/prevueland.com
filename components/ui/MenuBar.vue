<script setup lang="ts">
interface MenuItem {
  title: string;
  link: string;
  target?: '_blank';
}

const mobileMenuHidden = ref(true);
const menuItems = ref<MenuItem[]>([
  {
    title: 'Demos',
    link: '/demos'
  },
  {
    title: 'Articles',
    link: '/articles'
  },
  {
    title: 'Contact',
    link: '/contact'
  },
  {
    title: 'Github',
    link: 'https://github.com/prevue-land',
    target: '_blank'
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/PreVueLand',
    target: '_blank'
  },
  {
    title: 'Hashnode',
    link: 'https://prevueland.hashnode.dev',
    target: '_blank'
  },
  {
    title: 'RSS',
    link: '/rss.xml',
    target: '_blank'
  }
]);
</script>

<template>
  <nav
    id="menubar"
    class="fixed w-full z-50 bg-green text-sky-700 border-gray-200 p-2 sm:px-4"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <NuxtLink
        to="/"
        class="bg-transparent text-sky-700 hover:no-underline"
        active-class="bg-transparent text-sky-700 hover:no-underline"
      >
        <span
          class="self-center text-xl ml-3 md:ml-0 font-black whitespace-nowrap"
          @click="mobileMenuHidden = true"
        >
          PreVue Land
        </span>
      </NuxtLink>
      <button
        id="mobile-menu-toggle"
        type="button"
        aria-controls="mobile-menu"
        class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-sky-700"
        :aria-expanded="!mobileMenuHidden"
        :class="[mobileMenuHidden ? 'text-sky-700' : 'bg-sky-700 text-green']"
        @click="mobileMenuHidden = !mobileMenuHidden"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          ></path>
        </svg>
      </button>
      <div
        id="mobile-menu"
        class="w-full transition origin-top duration-500 md:block md:w-auto md:transition-none"
        :class="{ hidden: mobileMenuHidden }"
      >
        <ul
          class="list-none flex flex-col mt-5 ml-0 space-y-4 text-center md:flex-row md:space-x-5 md:space-y-0 md:mt-0 md:text-sm md:font-medium"
        >
          <li
            v-for="item in menuItems"
            :key="item.title"
            class="leading-loose"
            @click="mobileMenuHidden = true"
          >
            <NuxtLink
              :to="item.link"
              :target="item.target"
              class="block text-sky-700 px-2 py-1 lg:hover:text-green lg:hover:bg-sky-700 hover:no-underline bg-transparent duration-300"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
