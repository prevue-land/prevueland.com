<script setup lang="ts">
import { Article } from '~/models/article';

const route = useRoute();
const { $mdit } = useNuxtApp();
const { getItems } = useDirectusItems();
const { getThumbnail } = useDirectusFiles();
const { updateSocialTags } = useSocialTags();

const slug = route.params.slug as string;

const { pending, data, error } = await useAsyncData(slug, () =>
  getItems<Article>({
    collection: 'articles',
    params: {
      filter: {
        slug: {
          _eq: slug
        }
      },
      fields: [
        'title',
        'slug',
        'date_published',
        'description',
        'cover',
        'content'
      ]
    }
  })
);

const [article] = data.value;
const coverUrl = getThumbnail(article.cover, { format: 'jpg', fit: 'cover' });

const datePublished = new Date(article.date_published);
const displayDatePublished = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(datePublished);

useHead({
  title: `PreVue Land - ${article.title}`,
  meta: [{ name: 'description', content: article.description }]
});

updateSocialTags({
  title: `PreVue Land - ${article.title}`,
  description: article.description,
  img: coverUrl
});

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  datePublished: datePublished.toISOString(),
  image: coverUrl
});
</script>

<template>
  <div>
    <UiLoadingSpinner v-if="pending" class="border-white" />
    <template v-else>
      <div v-if="error" class="text-xl text-center">
        Something went wrong while fetching the article
      </div>
      <div v-else class="w-screen px-3 md:px-0 md:max-w-4xl">
        <div class="text-center">
          <h1>{{ article.title }}</h1>
          <p
            class="tracking-widest text-md title-font font-medium text-green mb-3"
          >
            Published on {{ displayDatePublished }}
          </p>
        </div>
        <div id="content" v-html="$mdit.render(article.content)"></div>
      </div>
    </template>
  </div>
</template>
