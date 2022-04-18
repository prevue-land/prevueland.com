<script setup lang="ts">
import { Demo } from '~/models/demo';

const { getItems } = useDirectusItems();
const { pending, data, error } = await useLazyAsyncData('latestDemos', () =>
  getItems<Demo>({
    collection: 'Demos',
    params: {
      fields: [
        'id',
        'date_published',
        'title',
        'description',
        'cover',
        'preview_link'
      ],
      sort: '-date_published',
      limit: 3
    }
  })
);
</script>

<template>
  <section
    id="the-latest-demos"
    class="flex flex-col items-center space-y-8 p-8 bg-green-600"
  >
    <div class="text-3xl md:text-4xl font-bold">The latest demos</div>
    <UiLoadingSpinner v-if="pending" class="border-white" />
    <template v-else>
      <div v-if="error" class="text-xl text-center">
        Something went wrong while fetching demos
      </div>
      <UiCardGrid v-else>
        <UiCard
          v-for="demo in data"
          :key="demo.id"
          v-bind="{ ...demo, category: 'demo' }"
        />
      </UiCardGrid>
    </template>
  </section>
</template>
