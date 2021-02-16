export const tutorial = () => {
  const divTutorial = document.createElement('div');

  const viewTutorial = `
    <div class="tutorial" id="tutorial-screen">
    <div class="flex-img">
        <img src="img/logo_home.png" alt=""><img src="img/onu-mujeres-logo.png" alt="">
    </div>
    <div class="tittle-style">
        <h2>Aprende a utilizar</h2>
        <h2>Tu Oportunidad</h2>
    </div>
    <img src="img/tutorial.png" alt="">
    <button type="submit" class="submit-btn" id="tutorialButton">Continuar</button>
</div>
        `;
  divTutorial.innerHTML = viewTutorial;
  divTutorial.innerHTML = viewTutorial;
  const tutorialBtn = divTutorial.querySelector('#tutorialButton');
  tutorialBtn.addEventListener('click', () => {
    window.location.hash = 'community';
  });
  return divTutorial;
};
