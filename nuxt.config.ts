import { defineNuxtConfig } from 'nuxt';
import { $fetch } from 'ohmyfetch';
import ViteFonts from 'vite-plugin-fonts';

import { Article } from './models/article';

const currentYear = new Date().getFullYear();

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['highlight.js/styles/night-owl.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt-modules/newsletter',
    'nuxt-jsonld',
    'nuxt-social-tags',
    'nuxt-directus'
    // 'nuxt-feed-module'
  ],
  socialtags: {
    enabled: true,
    opengraph: true,
    twitter: true,
    locale: 'en-GB',
    theme_color: '#42b883',
    title: 'PreVue Land',
    description: 'Home to handcrafted Vue.js and Nuxt demos',
    img: 'https://pbs.twimg.com/profile_banners/1477921329546514434/1650568577/1500x500',
    twitter_user: 'PreVueLand',
    twitter_card: 'summary_large_image'
  },
  newsletter: {
    revue: {
      apiKey: process.env.REVUE_API_KEY,
      component: true
    }
  },
  feed: {
    sources: [
      {
        meta: {
          id: 'rss',
          title: "PreVue Land's RSS feed",
          link: 'https://prevueland.com/articles',
          description: 'RSS feed with the latest PreVue Land articles',
          copyright: `${currentYear} PreVue Land`
        },
        type: 'rss2',
        path: '/rss.xml',
        async create(feed) {
          const { data } = await $fetch<{ data: Article[] }>(
            `${process.env.DIRECTUS_URL}items/articles?fields=date_published,title,slug,description,content,cover&sort=-date_published&limit=3`
          );

          for (const article of data) {
            feed.addItem({
              id: article.slug,
              title: article.title,
              link: `https://prevueland.com/articles/${article.slug}`,
              content: article.content,
              date: new Date(article.date_published)
            });
          }
        }
      }
    ]
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
  }
});
