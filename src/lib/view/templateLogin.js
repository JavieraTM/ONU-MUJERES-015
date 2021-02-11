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
                    <h4>¿Has olvidado tu contraseña?</h4>
                    <button type="submit" class="submit-btn" id="loginButton">Entrar</button>
                    <h5>¿No tienes cuenta? Regístrate</h5>
                </form>
            </div>
        </div>
    `;
  divLogin.innerHTML = viewLogin;

  return divLogin;
};
