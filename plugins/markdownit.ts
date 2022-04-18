import { defineNuxtPlugin } from '#app';

import mdit from 'markdown-it';
import hljs from 'highlight.js';

const markdownit = new mdit({
  html: true,
  xhtmlOut: false,
  breaks: false,
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        );
      } catch (error) {
        console.error(error);
      }
    }

    return (
      '<pre class="hljs"><code>' +
      markdownit.utils.escapeHtml(str) +
      '</code></pre>'
    );
  }
});

markdownit.linkify.set({ fuzzyEmail: false });

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('mdit', markdownit);
});
