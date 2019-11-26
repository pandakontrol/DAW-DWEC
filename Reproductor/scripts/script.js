/*                     REPRODUCTOR DE VIDEOS                   */


var miVideo;
let bar;

let currTime ;
let duration ;
let porcentaje ;



/*  AL CARGAR LA PAGINA AÑADO EVENTOS A CADA VIDEO  */

window.onload = function() {

  miVideo = document.getElementById('video1');
  document.getElementById('video2').addEventListener('click',cargarVideo);
  document.getElementById('video3').addEventListener('click',cargarVideo);
  document.getElementById('video4').addEventListener('click',cargarVideo);


}


function intervalo(){
bar = document.querySelector('.bar');
actualizarBarra();

}

/* FUNCION QUE CAMBIA EL VIDEO DEL CENTRO POR LOS LATERALES */

function cargarVideo() {

  var aux = this.src;
  this.src = miVideo.src;
  miVideo.src = aux;

  miVideo.currentTime = 0;
  miVideo.play();
  meterPubli();

}

/* FUNCIONES PARA LOS BOTONES DEL REPODUCTOR */

function playPause(){

  if (miVideo.paused) {
    miVideo.play();

    setInterval(intervalo, 10);
  }else {
    miVideo.pause();
  }

}

function skip(){
  miVideo.currentTime += 10;
}

function forward(){

  miVideo.currentTime -= 10;
}

function reboot() {
  miVideo.currentTime = 0;
  miVideo.play();
}

function soundUp(){
  if (miVideo.volume < 1) {
    miVideo.volume += 0.1;
  }

}

function soundDown() {
  if (miVideo.volume > 0.01) {
    miVideo.volume -= 0.1;
  }

}

function soundMuted() {
  if (miVideo.volume != 0) {
    miVideo.volume = 0;
  }else {
    miVideo.volume = 1;
  }

}

/* Funcion para cerrar la publicidad (Si no pasan 10 segundos de video, no deja cerrar la publi) */

function cerrarPubli() {
  console.log('le estas dando1');
  if (miVideo.currentTime >= 10) {
    document.getElementsByClassName('publicidad')[0].classList.replace('publicidad','publicidadCerrada');
  }else {
    console.log('No han pasado 10 segundos aun, sigue esperando!');
  }

}

/* Funcion para que en cada video nuevo aparezca publicidad */

function meterPubli() {
  console.log('le estas dando');
  if (miVideo.currentTime <= 10) {
    document.getElementsByClassName('publicidadCerrada')[0].classList.replace('publicidadCerrada','publicidad');
  }else {
    console.log('No han pasado 10 segundos, sigue esperando!');
  }

}

/* FUNCION DE LA BARRA DE PROGRESO ( CON UNA REGLA DE 3) */

function actualizarBarra() {

 currTime = miVideo.currentTime;
 duration = miVideo.duration;
 porcentaje = (currTime * 100) / duration;
 bar.style.width = porcentaje + '%';

}
