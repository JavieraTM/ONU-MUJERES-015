export const tutorialDA = () => {
  const divTutorialDA = document.createElement('div');

  const viewTutorialDA = `
      <div class='tutorialDA' id='tutorialDA-screen'>
        <div class='flex-img'>
            <img src='img/logo_home.png' alt=''><img src='img/onu-mujeres-logo.png' alt=''>
        </div>
        <p class="tittleDA">¡Descarga un acceso directo de la app “Tu oportunidad” directo a tu pantalla principal!</p>
        <p class="directAccess">1- Selecciona el menú de opciones que aparece en la parte superior de la pantalla</p>
        <img src='img/tutorial1.png' alt='' class="tutorialImg">
        <p class="directAccess">2- Escoje la opción de “Añadir a pantalla de inicio”</p>
        <img src='img/tutorial2.png' alt='' class="tutorialImg">
        <p class="directAccess">3- Añade “TuOportunidadApp” a tu pantalla de inicio.</p>
        <img src='img/tutorial3.png' alt='' class="tutorialImg">
        <button type='submit' class='submit-btn' id='tutorialDAButton'>Continuar</button>
      </div>
          `;
  divTutorialDA.innerHTML = viewTutorialDA;
  const tutorialDABtn = divTutorialDA.querySelector('#tutorialDAButton');
  tutorialDABtn.addEventListener('click', () => {
    window.location.hash = 'tutorial';
  });
  return divTutorialDA;
};
