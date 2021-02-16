export const profile = () => {
  const divProfile = document.createElement('div');

  const viewProfile = `
  <div class='perfil' id='perfil-screen'>
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
                        <input type='text' class='input-name' placeholder='Nombre' required>
                        <input type='text' class='input-name' placeholder='Apellido' required>
                    </div>
                    <select name='zona' id='zona'>
                        <option value='zona'>Zona</option>
                        <option value='sur'>Zona Norte</option>
                        <option value='centro'>Zona Centro</option>
                        <option value='sur'>Zona Sur</option>
                    </select>
                    <select name="cityNorth" id="city">
                        <option value="">Ciudad</option>
                        <option value="antofagasta">Antofagasta</option>
                        <option value="calama">Calama</option>
                        <option value="maria elena">Maria Elena</option>
                        <option value="mejillones">Mejillones</option>
                        <option value="ollague">Ollagüe</option>
                        <option value="san pedro">San Pedro de Atacama</option>
                        <option value="sierra gorda">Sierra Gorda</option>
                        <option value="taltal">Taltal</option>
                        <option value="tocopilla">Tocopilla</option>
                    </select>
                    <input type="text" class="input-description" placeholder="¿A qué me dedico?">
                    <button type='submit' class='submit-btn' id='perfilButton'>Guardar cambios</button>
                </form>
            </div>
        </div>
          `;
  divProfile.innerHTML = viewProfile;
  divProfile.innerHTML = viewProfile;
  const tutorialBtn = divProfile.querySelector('#perfilButton');
  tutorialBtn.addEventListener('click', () => {
    window.location.hash = 'tutorialDA';
  });
  return divProfile;
};
