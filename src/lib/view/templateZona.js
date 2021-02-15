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
    <select>
      <option value="region">Región</option>
      <option value="arica">Región de Arica y Parinacota</option>
      <option value="tarapaca">Región de Tarapacá</option>
      <option value="antofagasta">Región de Antofagasta</option>
      <option value="atacama">Región de Atacama</option>
      <option value="coquimbo">Región de Coquimbo</option>
      <option value="valparaiso">Región de Valparaíso</option>
      <option value="santiago">Región Metropolitana de Santiago</option>
      <option value="ohigins">Región del Libertador General Bernardo O’Higgins</option>
      <option value="maule">Región del Maule</option>
      <option value="ñuble">Región del Ñuble</option>
      <option value="biobio">Región del Biobío</option>
      <option value="araucania">Región de La Araucanía</option>
      <option value="rios">Región de Los Ríos</option>
      <option value="lagos">Región de Los Lagos</option>
      <option value="aysen">Región de Aysén del General Carlos Ibáñez del Campo</option>
      <option value="antártica">Región de Magallanes y la Antártica Chilena</option>
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
