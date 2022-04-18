<script setup lang="ts">
interface Props {
  category: 'demo' | 'article';
  date_published: Date | string;
  title: string;
  cover: string;
  description: string;
  slug?: string;
  preview_link?: string;
}

const props = defineProps<Props>();

const { getThumbnail } = useDirectusFiles();

const coverAltText = `Cover image for ${props.title}`;

const footerLinkText =
  props.category === 'article' ? 'Read the article' : 'Open live preview';

const footerLinkDestination =
  props.category === 'article' ? `/articles/${props.slug}` : props.preview_link;

const footerLinkTarget = props.category === 'article' ? '_self' : '_blank';

const formattedDatePublished = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date(props.date_published));

const refresh = () => refreshNuxtData('article');
</script>

<template>
  <article class="p-4">
    <div
      class="w-full h-full flex flex-col text-sky-700 bg-white rounded-lg overflow-hidden transition duration-500 shadow-md hover:shadow-2xl hover:scale-105"
    >
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="getThumbnail(props.cover, { format: 'jpg', fit: 'cover' })"
        :alt="coverAltText"
      />
      <div class="h-full p-5 flex flex-col justify-between items-center">
        <div class="text-center">
          <div class="mb-2 title-font text-lg font-medium text-gray-900">
            {{ props.title }}
          </div>
          <div
            class="tracking-widest text-xs title-font font-medium text-gray-400 mb-3"
          >
            {{ formattedDatePublished }}
          </div>
        </div>
        <p class="leading-relaxed m-0 text-sm md:text-base">
          {{ props.description }}
        </p>
        <div class="flex items-center flex-wrap">
          <NuxtLink
            class="mt-4 text-blue-600 text-sm md:text-base md:mb-2 lg:mb-0"
            :to="footerLinkDestination"
            :target="footerLinkTarget"
          >
            {{ footerLinkText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>
