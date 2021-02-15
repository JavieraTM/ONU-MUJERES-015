export const welcome = () => {
  const divWelcome = document.createElement('div');

  const viewWelcome = `
        <div class="welcome" id="welcome-screen">
          <div class="tittle-welcome">
              <h1>Bienvenida</h1>
          </div>
          <div class="welcome-img">
              <img src="img/tu-oportunidad-welcome.png" alt="">
          </div>
          <button type="button" class="submit-btn" id="startButton">Entrar</button>
        </div>
    `;
  divWelcome.innerHTML = viewWelcome;
  const enterBtn = divWelcome.querySelector('#startButton');
  enterBtn.addEventListener('click', () => {
    window.location.hash = 'login';
  });
  return divWelcome;
};
