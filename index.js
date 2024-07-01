function actualizarContador() {
     const fechaObjetivo = new Date('2024-10-05T00:00:00');
     const ahora = new Date();
     const diferencia = fechaObjetivo - ahora;
 
     const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
     const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
     const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
 
     updateBox('dias', dias);
     updateBox('horas', horas);
     updateBox('minutos', minutos);
     updateBox('segundos', segundos);
 
     if (diferencia < 0) {
         clearInterval(intervalo);
         document.getElementById('contador').textContent = "¡La fecha ha llegado!";
     }
 }
 
 function updateBox(id, value) {
     const box = document.getElementById(id);
     const flipCard = box.querySelector('.flip-card');
     const top = flipCard.querySelector('.top');
     const bottom = flipCard.querySelector('.bottom');
 
     const currentValue = top.textContent;
     const nextValue = value.toString().padStart(2, '0');
 
     if (currentValue !== nextValue) {
         flipCard.classList.add('flip');
         
         setTimeout(() => {
             top.textContent = nextValue;
             bottom.textContent = nextValue;
         }, 250);
 
         setTimeout(() => {
             flipCard.classList.remove('flip');
         }, 200);
     }
 }
 
 function toggleCancion() {
     const sonido = document.getElementById('sonido');
     if (sonido.paused) {
         sonido.play();
     } else {
         sonido.pause();
     }
 }
 
 const intervalo = setInterval(actualizarContador, 1000);
 actualizarContador();