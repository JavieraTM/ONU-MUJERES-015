import { welcome } from './view/templateWelcome.js';
import { login } from './view/templateLogin.js';
import { channels } from './view/templateChannels.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  containerRoot.appendChild(welcome());

  switch (hash) {
    case '#login':
      containerRoot.appendChild(login());
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
  return showTemplate(hash);
};
