<script setup lang="ts">
import { Article } from '~/models/article';

const { getItems } = useDirectusItems();
const { pending, data, error } = await useAsyncData('allArticles', () =>
  getItems<Article>({
    collection: 'articles',
    params: {
      filter: {
        status: {
          _eq: 'published'
        }
      },
      fields: ['date_published', 'title', 'slug', 'description', 'cover'],
      sort: '-date_published'
    }
  })
);
</script>

<template>
  <div class="space-y-7">
    <div class="text-center text-4xl font-bold">All articles</div>
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
  </div>
</template>
