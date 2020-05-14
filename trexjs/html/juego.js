document.addEventListener('keydown', function (evento) {
  if (evento.keyCode == 32 && trex.saltando == false) {
    console.log('salta');
    saltar();
  }
  if(evento.keyCode == 82 && nivel.muerto == true){
    reinicio();
  }
});
var fps = 60;

function reinicio(){
  nivel.muerto = false;
  nivel.puntuacion = 0;
  cactus.x = ancho + 100;
  nube.x = ancho + 100;
  trex.y = suelo;
  nivel.nivel = 0;
  nivel.velocidad = 7;
}

var imgRex1;
var imgRex2;
var imgRexEstatica;
var imgRex;
var imgCactus;
var imgSuelo;
var imgNube;
var imgPajaro1;
var imgPajaro2;

function cargaImagenes() {
  imgRex1 = new Image();
  imgRex1.src = './png/TRex1.png';

  imgRex2 = new Image();
  imgRex2.src = './png/TRex2.png';

  imgRex = new Image();
  imgRex.src = './png/TRexEstatico.png';

  imgCactus = new Image();
  imgCactus.src = './png/cactusFinal.png';

  imgSuelo = new Image();
  imgSuelo.src = './png/suelo.png';

  imgNube = new Image();
  imgNube.src = './png/nube.png';

  imgPajaro1 = new Image();
  imgPajaro1.src = './png/pajaro.png';

  imgPajaro2 = new Image();
  imgPajaro2.src = './png/pajaro2.png';
}

var ancho = 700;
var alto = 300;

var canvas;
var ctx;

function inicializa() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  cargaImagenes();
}

function borrar() {
  //canvas.width = ancho;
  //canvas.height = alto;
  ctx.clearRect(0, 0, ancho, alto);
}

var suelo = alto - 60;

var trex = {
  y: suelo,
  velY: 0,
  gravedad: 2,
  salto: 28,
  saltando: false,

};

var nivel = {
  nivel: 0,
  velocidad: 7,
  puntuacion: 0,
  muerto: false,
};

var cactus = {
  x: ancho + 100,
  y: suelo - 25,
};

var sueloG = {
  x : 0,
  y : alto - 30,
};

var nube = {
  x : ancho + 100,
  y : 50,
};

var pajaro = {
  x : ancho + 100,
  y : 50
};

//FUNCIONES SUELO
function dibujaSuelo() {
  ctx.drawImage(imgSuelo, 0, 0, 1400, 30, sueloG.x, sueloG.y, 1400, 30);
}
function logicaSuelo(){
  if(sueloG.x <= -700){
    sueloG.x = 0;
  }else{
    sueloG.x -= nivel.velocidad;
  }
}
//FUNCIONES TREX
var andar = false;

function dibujaRex() {
  
  if(trex.saltando == true){
    ctx.drawImage(imgRex, 0, 0, 480, 504, 100, trex.y, 50, 50);
  }else if(andar == true){
    ctx.drawImage(imgRex1, 0, 0, 480, 504, 100, trex.y, 50, 50);
  }else {
    ctx.drawImage(imgRex2, 0, 0, 480, 504, 100, trex.y, 50, 50);
  }


  if (acum == 10){
    if(andar == false){
      andar = true;
    }else {
      andar = false;
    }
    acum = 0;
  }
}

function saltar() {
  trex.saltando = true;
  trex.velY = trex.salto;
}

function gravedad() {
  if (trex.saltando == true) {
    if (trex.y - trex.velY - trex.gravedad > suelo) {
      trex.saltando = false;
      trex.velY = 0;
      trex.y = suelo;
    } else {
      trex.velY -= trex.gravedad;
      trex.y -= trex.velY;
    }
  }
}

//FUNCIONES CACTUS
function dibujarCactus(){
  ctx.drawImage(imgCactus, 0, 0, 169, 276, cactus.x, cactus.y, 38, 75);
}

function logicaCactus(){
  if(cactus.x < -100){
    cactus.x = ancho + 100;
    nivelAument();
  }else{
    cactus.x -= nivel.velocidad;
  }
}

//FUNCIONES NUBES
function dibujaNubes(){
  ctx.drawImage(imgNube, 0, 0, 324, 132, nube.x, nube.y, 108, 44);
}

function logicaNube(){
  if(nube.x < -100){
    nube.x = ancho + 100;
  }else{
    nube.x  -= nivel.velocidad / 3;
  }
}

//FUNCIONES PAJARO
var aleteo = false;
function dibujaPajaro(){
  if(aleteo){
    ctx.drawImage(imgPajaro1, 0, 0, 252, 156, pajaro.x, pajaro.y, 108, 44);
  }else{
    ctx.drawImage(imgPajaro2, 0, 0, 252, 156, pajaro.x, pajaro.y, 108, 44);
  }
  
}

function logicaPajaro(){
  if(pajaro.x < -100){
    pajaro.x = ancho + 100;
  }else{
    pajaro.x  -= nivel.velocidad / 2;
  }
  if(acumPajaro == 20){
    if(aleteo){
      aleteo = false;
    }else{
      aleteo = true;
    }
    acumPajaro = 0;
  }
}

//FUNCION COLISION
function colision(){
  if(cactus.x >= 62 && cactus.x <= 150){
    if(trex.y >= cactus.y - 20){
      nivel.muerto = true;
      trex.saltando = false;
    }
    nivel.puntuacion += 10;
    console.log(nivel.puntuacion);
  }
}

function nivelAument(){
    console.log("subimos nivel");
    nivel.nivel++;
    nivel.velocidad += 0.5;
}

//FUNCION DIBUJAR GAME OVER Y MARCADOR
function imprimir(){
  ctx.font = "30px impact";
  ctx.fillStyle = "#000000";
  ctx.fillText(nivel.puntuacion,600,50);
 
  ctx.font = "30px impact";
  ctx.fillStyle = "#000000";
  ctx.fillText(nivel.nivel,10,50);

  if(nivel.muerto == true){
    ctx.font = "60px impact";
    ctx.fillText("GAME OVER",240,150);
  }
}
//BUCLE PRINCIPAL

var acum = 0;
var acumPajaro = 0;

setInterval(function () {
  if(nivel.muerto == true){ 
  }else{
    principal();
    acum ++;
    acumPajaro ++;
  }

}, 1000/fps);

function principal() {
  borrar();
  logicaNube();
  dibujaNubes();
  logicaPajaro();
  dibujaPajaro();
  logicaSuelo();
  dibujaSuelo();
  logicaCactus();
  dibujarCactus();
  gravedad();
  dibujaRex();
  //colision();
  imprimir();
}
