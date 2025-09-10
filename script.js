// Data da prova (UTC ajustado para Brasília)
const prova = new Date("2025-10-05T17:00:00Z").getTime(); 
// Obs: 14h de Brasília = 17h UTC

function atualizar() {
  const agora = new Date().getTime();
  const distancia = prova - agora;

  if (distancia < 0) {
    document.querySelector(".timer").innerHTML = "Chegou o grande dia! 🚀";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = dias;
  document.getElementById("hours").textContent = horas;
  document.getElementById("minutes").textContent = minutos;
  document.getElementById("seconds").textContent = segundos;
}

setInterval(atualizar, 1000);
