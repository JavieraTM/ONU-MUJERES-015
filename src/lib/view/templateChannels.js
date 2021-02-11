export const channels = () => {
  const divChannels = document.createElement('div');

  const viewChannels = `
    <div class="login" id="login-screen">
            <div class="flex-img">
                <img src="img/logo_home.png" alt=""><img src="img/onu-mujeres-logo.png" alt="">
            </div>
            <div class="tittle-style">
                <h2>Canales</h2>
            </div>
            <div class="channels-containers">
                
            </div>
        </div>
    `;
  divChannels.innerHTML = viewChannels;

  return divChannels;
};