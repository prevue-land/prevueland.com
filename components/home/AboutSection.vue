<template>
  <section
    id="about"
    class="flex flex-col items-center space-y-3 p-8 bg-sky-600"
  >
    <div class="text-4xl font-bold">About</div>
    <div class="flex flex-col space-x-0 md:space-x-10 md:flex-row mx-auto">
      <div class="flex justify-center md:items-center">
        <img
          class="rounded-full max-w-[258px] max-h-[258px] w-auto h-auto"
          src="/images/mac.png"
          alt="Picture of Mac"
          loading="lazy"
        />
      </div>
      <div class="max-w-xl leading-9 flex flex-col space-y-6">
        <p>
          Hi! My name is Maciej Pędzich, but you can call me
          <strong>Mac</strong>. I started PreVue Land, because I'd been looking
          for websites showcasing <strong>community</strong> Vue/Nuxt
          components, plugins, modules, etc. <em>in action</em>. Or in other
          words, their potential use-cases in actual applications. But as you've
          probably guessed by now - <strong>I'd failed</strong> to find any
          sites that matched the criteria.
        </p>
        <p>
          PreVue Land aims to fill the void I've just described, but also to go
          an <strong>extra step further</strong>. Each month, one of these demos
          will be <strong>written up</strong> in an article about its
          development process, including a
          <strong>full specification</strong> of every feature as well as a
          <strong>detailed walkthrough</strong> of the implementation.
        </p>
        <p>
          Lastly, each article is <strong>available on Hashnode</strong> too,
          meaning you <strong>don't</strong> have to worry about losing access
          to any article should this website become unavailable for whatever
          reason. So what are you waiting for? <strong>Go ahead</strong> and
          check out some of the latest demos or articles down below!
        </p>
      </div>
    </div>
  </section>
</template>
