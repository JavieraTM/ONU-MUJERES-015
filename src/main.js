import { changeRoute } from './lib/router.js';

const init = () => {
  window.addEventListener('load', changeRoute(window.location.hash));
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      // console.log(1, window.location.hash);
      changeRoute(window.location.hash);
    };
  }
};

window.addEventListener('load', init);
