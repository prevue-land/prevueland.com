<script setup lang="ts">
import { Demo } from '~/models/demo';

const { getItems } = useDirectusItems();
const { pending, data, error } = await useAsyncData('allDemos', () =>
  getItems<Demo>({
    collection: 'Demos',
    params: {
      fields: [
        'id',
        'date_published',
        'title',
        'slug',
        'description',
        'cover',
        'preview_link'
      ],
      sort: '-date_published'
    }
  })
);
</script>

<template>
  <div class="flex flex-col items-center px-0 pt-20 pb-8 space-y-7 md:px-10">
    <div class="text-center text-4xl font-bold">All demos</div>
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
  </div>
</template>
