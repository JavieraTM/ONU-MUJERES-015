import { welcome } from './view/templateWelcome.js';
import { login } from './view/templateLogin.js';
import { zona } from './view/templateZona.js';
import { tutorial } from './view/templateTutorial.js';
import { channels } from './view/templateChannels.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  containerRoot.appendChild(welcome());

  switch (hash) {
    case '#login':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(login());
      break;
    case '#zona':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(zona());
      break;
    case '#tutorial':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(tutorial());
      break;
    case '#channels':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(channels());
      break;
    default:
      containerRoot.innerHTML = '';
      containerRoot.innerHTML = `
      <h2>No existe :(</h2>
          `;
  }
};

export const changeRoute = (hash) => {
  if (hash === '') {
    return showTemplate(hash);
  }
  if (hash === '#login') {
    return showTemplate(hash);
  }
  if (hash === '#zona') {
    return showTemplate(hash);
  }
  if (hash === '#tutorial') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
