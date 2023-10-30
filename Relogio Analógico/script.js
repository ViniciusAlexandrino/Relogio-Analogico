const updateRelogio = () => {
  const now = new Date();
  const hora = now.getHours();  
  const minuto = now.getMinutes(); 
  const segundo = now.getSeconds(); 

  const elementoHora = document.querySelector('.hora');
  const elementoMinuto = document.querySelector('.minuto');
  const elementoSegundo = document.querySelector('.segundo');

  const horaDeg = (hora % 12) * 30 + minuto / 2;
  const minutoDeg = minuto * 6 + segundo / 10;
  const segundoDeg = segundo * 6;

  elementoHora.style.transform = `rotate(${horaDeg}deg)`;
  elementoMinuto.style.transform = `rotate(${minutoDeg}deg)`;
  elementoSegundo.style.transform = `rotate(${segundoDeg}deg)`;
};

setInterval(updateRelogio, 1000);
