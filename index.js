console.log("hello");
       function actualizarReloj() {
  const ahora = new Date();
  const dia = ahora.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const hora = ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('reloj').textContent = `${dia}, ${hora}`;

       }
setInterval(actualizarReloj, 1000);
actualizarReloj();

const timer = actualizarReloj();
const saveTheDate = document.querySelector(".title");
saveTheDate.innerHTML = timer;