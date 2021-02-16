import { welcome } from './view/templateWelcome.js';
import { login } from './view/templateLogin.js';
import { profile } from './view/templateProfile.js';
import { tutorial } from './view/templateTutorial.js';
import { community } from './view/templateCommunity.js';
import { tutorialDA } from './view/templateDirectAccess.js';

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
    case '#profile':
      containerRoot.appendChild(profile());
      break;
    case '#tutorialDA':
      containerRoot.appendChild(tutorialDA());
      break;
    case '#tutorial':
      containerRoot.appendChild(tutorial());
      break;
    case '#community':
      containerRoot.appendChild(community());
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
  if (hash === '#profile') {
    return showTemplate(hash);
  }
  if (hash === '#tutorialDA') {
    return showTemplate(hash);
  }
  if (hash === '#tutorial') {
    return showTemplate(hash);
  }
  if (hash === '#community') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
