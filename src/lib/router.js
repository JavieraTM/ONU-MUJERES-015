import { welcome } from './view/templateWelcome.js';
import { login } from './view/templateLogin.js';
import { zona } from './view/templateZona.js';
import { tutorial } from './view/templateTutorial.js';
import { channels } from './view/templateChannels.js';
import { tutorialDA } from './view/templateDirectAcces.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
      containerRoot.appendChild(welcome());
      break;
    case '#login':
      containerRoot.appendChild(login());
      break;
    case '#zona':
      containerRoot.appendChild(zona());
      break;
    case '#tutorialDA':
      containerRoot.appendChild(tutorialDA());
      break;
    case '#tutorial':
      containerRoot.appendChild(tutorial());
      break;
    case '#channels':
      containerRoot.appendChild(channels());
      break;
    default:
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
  if (hash === '#tutorialDA') {
    return showTemplate(hash);
  }
  if (hash === '#tutorial') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
