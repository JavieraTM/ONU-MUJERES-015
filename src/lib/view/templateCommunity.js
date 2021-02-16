export const community = () => {
  const divCommunity = document.createElement('div');

  const viewCommunity = `
    <div class='community' id='community-screen'>
      <div class='flex-img'>
        <img src='img/logo_home.png' alt=''><img src='img/onu-mujeres-logo.png' alt=''>
      </div>
      <div class='tittle-style'>
          <h2>Comunidad</h2>
      </div>
      <p>¡Selecciona una zona y comunícate con más mujeres como tú!</p>
      <div class='tittle-style'>
          <h2>Zona Norte</h2>
      </div>
      <div class='tittle-style'>
          <h2>Zona centro</h2>
      </div>
      <div class='tittle-style'>
          <h2>Zona sur</h2>
      </div>
    </div>
    <button type="submit" class="submit-btn" id="communityButton">Continuar</button>
    `;
  divCommunity.innerHTML = viewCommunity;
  const communityBtn = divCommunity.querySelector('#communityButton');
  communityBtn.addEventListener('click', () => {
    window.location.hash = '';
  });

  return divCommunity;
};
