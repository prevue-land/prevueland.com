import { defineNuxtConfig } from 'nuxt3';
import ViteFonts from 'vite-plugin-fonts';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['highlight.js/styles/night-owl.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-social-tags', 'nuxt-directus'],
  socialtags: {
    enabled: true,
    opengraph: true,
    twitter: true,
    locale: 'en-GB',
    theme_color: '#42b883',
    img: 'https://pbs.twimg.com/profile_banners/1477921329546514434/1649697065/1500x500',
    twitter_user: 'PreVueLand',
    twitter_card: 'summary_large_image'
  },
  vite: {
    plugins: [
      ViteFonts({
        google: {
          families: [
            {
              name: 'Be Vietnam Pro',
              styles: 'ital,wght@0,400;0,700;1,400'
            }
          ]
        }
      })
    ]
  },
  nitro: {
    preset: 'aws-lambda'
  }
});
