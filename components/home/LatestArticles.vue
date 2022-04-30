<script setup lang="ts">
import { Article } from '~/models/article';

const { getItems } = useDirectusItems();
const { pending, data, error } = await useLazyAsyncData('latestArticles', () =>
  getItems<Article>({
    collection: 'articles',
    params: {
      filter: {
        status: {
          _eq: 'published'
        }
      },
      fields: ['date_published', 'title', 'slug', 'description', 'cover'],
      sort: '-date_published',
      limit: 3
    }
  })
);
</script>

<template>
  <section
    id="the-latest-articles"
    class="flex flex-col items-center space-y-8 p-8 bg-sky-800"
  >
    <div class="text-3xl md:text-4xl font-bold">The latest articles</div>
    <UiLoadingSpinner v-if="pending" class="border-white" />
    <template v-else>
      <div v-if="error" class="text-xl text-center">
        Something went wrong while fetching articles
      </div>
      <UiCardGrid v-else>
        <UiCard
          v-for="article in data"
          :key="article.slug"
          v-bind="{ ...article, category: 'article' }"
        />
      </UiCardGrid>
    </template>
  </section>
</template>
