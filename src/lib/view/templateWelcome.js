export const welcome = () => {
  const divWelcome = document.createElement('div');

  const viewWelcome = `
        <div class="welcome" id="welcome-screen">
        <div class="tittle-welcome">
            <h2>Bienvenida</h2>
        </div>
        <div class="welcome-img">
            <img src="img/tu-oportunidad-welcome.png" alt="">
        </div>
        <div class="translate-flex">
            <a>Kreyol</a>
            <a>English</a>
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
