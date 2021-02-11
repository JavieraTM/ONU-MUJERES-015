import { welcome } from './lib/view/templateWelcome.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  window.addEventListener('load', changeRoute(window.location.hash));
  document.getElementById('root').appendChild(welcome());
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      // console.log(1, window.location.hash);
      changeRoute(window.location.hash);
    };
  }
};

window.addEventListener('load', init);
