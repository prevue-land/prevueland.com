import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  linkActiveClass: 'bg-sky-700 text-green',
  async scrollBehavior(to, from, savedPosition) {
    const querySelectorWithDelay = async (
      hash: string,
      x?: number
    ): Promise<HTMLElement | null> => {
      return (
        (document.querySelector(hash) as HTMLElement) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve(null);
          }

          setTimeout(() => {
            resolve(querySelectorWithDelay(hash, ++x || 1));
          }, 100);
        })
      );
    };

    if (savedPosition) {
      return savedPosition;
    } else if (from.name !== to.name || !to.hash) {
      return { x: 0, y: 0 };
    } else {
      const menuBar = document.querySelector('#menubar');
      const scrollTargetElement = await querySelectorWithDelay(to.hash);

      return window.scrollTo(
        0,
        scrollTargetElement.offsetTop - menuBar.clientHeight
      );
    }
  }
};
