export const login = () => {
  const divLogin = document.createElement('div');

  const viewLogin = `
    <div class="login" id="login-screen">
            <div class="flex-img">
                <img src="img/logo_home.png" alt=""><img src="img/onu-mujeres-logo.png" alt="">
            </div>
            <div class="tittle-style">
                <h2>Iniciar sesión</h2>
            </div>
            <div class="form-box">
                <form id="login-after-register" class="input-group">
                    <input type="text" class="input-login" placeholder="E-mail" requiered >
                    <input type="password" class="input-login" placeholder="Contraseña" requiered>
                    <button type="submit" class="submit-btn" id="loginButton">Entrar</button>
                </form>
            </div>
        </div>
    `;
  divLogin.innerHTML = viewLogin;
  const loginBtn = divLogin.querySelector('#loginButton');
  loginBtn.addEventListener('click', () => {
    window.location.hash = 'zona';
  });

  return divLogin;
};
