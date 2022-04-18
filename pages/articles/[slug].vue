<script setup lang="ts">
import { Article } from '~/models/article';

const route = useRoute();
const { $mdit } = useNuxtApp();
const { getItems } = useDirectusItems();

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
const formattedDatePublished = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date(article.date_published));
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
            {{ formattedDatePublished }}
          </p>
        </div>
        <div id="content" v-html="$mdit.render(article.content)"></div>
      </div>
    </template>
  </div>
</template>
