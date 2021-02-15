export const perfil = () => {
  const divProfile = document.createElement('div');

  const viewProfile = `
  <div class='perfil' id='perfil-screen' hidden>
            <div class='flex-img'>
                <img src='img/logo_home.png' alt=''><img src='img/onu-mujeres-logo.png' alt=''>
            </div>
            <div class='tittle-style'>
                <h2>Editar perfil</h2>
            </div>
            <div class='custom-input-file'>
                <input type='file' id='imgFile' class='input-file' value=''>
                +
             </div>
            <div class='form-box'>
                <form id='register' class='input-group'>
                    <div class='name-flex'>
                        <input type='text' class='input-name' placeholder='Nombre' requiered>
                        <input type='text' class='input-name' placeholder='Apellido' requiered>
                    </div>
                    <select name='zona' id='zona'>
                        <option value='zona'>Zona</option>
                        <option value='sur'>Zona Norte</option>
                        <option value='centro'>Zona Centro</option>
                        <option value='sur'>Zona Sur</option>
                    </select>
                    <input type='text' class='input-login' placeholder='E-mail' requiered>
                    <input type='password' class='input-login' placeholder='Contraseña' requiered>
                    <input type='password' class='input-login' placeholder='Repetir contraseña' requiered>
                    <h4>Al clickear “Registrarme” aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</h4>
                    <button type='submit' class='submit-btn' id='registerButton'>Registrarme</button>
                </form>
            </div>
        </div>

          `;
  divProfile.innerHTML = viewProfile;
  divProfile.innerHTML = viewProfile;
  const tutorialBtn = divProfile.querySelector('#');
  tutorialBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
  return divProfile;
};
