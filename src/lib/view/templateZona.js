export const zona = () => {
  const divZona = document.createElement('div');

  const viewZona = `
    <div class="zona" id="zona-screen">
    <div class="flex-img">
        <img src="img/logo_home.png" alt=""><img src="img/onu-mujeres-logo.png" alt="">
    </div>
    <div class="tittle-style">
        <h2>¿A qué zona perteneces?</h2>
    </div>
    <select name="zona" id="zona" required>
        <option value="">Zona</option>
        <option value="sur">Zona Norte</option>
        <option value="centro">Zona Centro</option>
        <option value="sur">Zona Sur</option>
    </select>
    <button type="submit" value="next" class="submit-btn" id="zonaButton">Continuar</button>
    </div>
</div>
      `;
  divZona.innerHTML = viewZona;
  const zonaBtn = divZona.querySelector('#zonaButton');
  zonaBtn.addEventListener('click', () => {
    window.location.hash = 'tutorialDA';
  });

  return divZona;
};
