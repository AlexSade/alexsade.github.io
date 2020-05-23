document.addEventListener('keydown', function (evento) {
  if (evento.keyCode == 32 && elements[0].saltando == false) {
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
  elements[1].x = ancho + 100;
  nube.x = ancho + 100;
  elements[0].y = suelo;
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
  
var nivel = {
  nivel: 0,
  velocidad: 7,
  puntuacion: 0,
  muerto: false,
};

var sueloG = {
  x : 0,
  y : alto - 30,
};

  
var nube = {
  x : ancho + 100,
  y : 50,
};

var elements = [
  trex = {
    img: imgRex1,
    x: 100,
    y: suelo,
    velY: 0,
    gravedad: 2,
    salto: 28,
    saltando: false,
    sizeX: 0,
    sizeY: 0
  },

  cactus = {
    x: ancho + 100,
    y: suelo - 25,
    sizeX: 38,
    sizeY: 75
  },
  
  pajaro = {
    img: imgPajaro1,
    x : ancho + 100,
    y : 50,
    sizeX: 0,
    sizeY: 0
  }

];

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
  
  //Elige la imagen a mostrar según la situacion del trex
  //y establece su tamaño impreso
  if(elements[0].saltando == true){
    elements[0].img = imgRex;
    elements[0].sizeX = 50;
    elements[0].sizeY = 50;
  }else if(andar == true){
    elements[0].img = imgRex1;
    elements[0].sizeX = 50;
    elements[0].sizeY = 50;
  }else {
    elements[0].img = imgRex2;
    elements[0].sizeX = 50;
    elements[0].sizeY = 50;
  }

  if (acum == 10){
    if(andar == false){
      andar = true;
    }else {
      andar = false;
    }
    acum = 0;
  }

  //Lo dibuja en el canvas
  ctx.drawImage(elements[0].img, 0, 0, 480, 504, elements[0].x, elements[0].y, elements[0].sizeX, elements[0].sizeY);
}

function saltar() {
  elements[0].saltando = true;
  elements[0].velY = elements[0].salto;
}

function gravedad() {
  if (elements[0].saltando == true) {
    if (elements[0].y - elements[0].velY - elements[0].gravedad > suelo) {
      elements[0].saltando = false;
      elements[0].velY = 0;
      elements[0].y = suelo;
    } else {
      elements[0].velY -= elements[0].gravedad;
      elements[0].y -= elements[0].velY;
    }

  }

}

//FUNCIONES CACTUS
function dibujarCactus(){
  ctx.drawImage(imgCactus, 0, 0, 169, 276, elements[1].x, elements[1].y, elements[1].sizeX, elements[1].sizeY);
}

function logicaCactus(){
  if(elements[1].x < -100){
    elements[1].x = ancho + 100;
    nivelAument();
  }else{
    elements[1].x -= nivel.velocidad;
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
  //Elige imagen a mostrar y establece sus medidas
  if(aleteo){
    elements[2].img = imgPajaro1;
    elements[2].sizeY = 44;
    elements[2].sizeX = 108;
  }else{
    elements[2].img = imgPajaro2;
    elements[2].sizeY = 44;
    elements[2].sizeX = 108;
  }
  //Dibuja el pajaro
  ctx.drawImage(pajaro.img, 0, 0, 252, 156, elements[2].x, elements[2].y, elements[2].sizeX, elements[2].sizeY);
  
}

function logicaPajaro(){
  if(elements[2].x < -100){
    elements[2].x = ancho + 100;
  }else{
    elements[2].x  -= nivel.velocidad / 2;
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

  for(var i = 1; i < elements.length; i++){
    //Comprobamos que coincida en el eje x
    if(elements[i].x <= elements[0].x + elements[0].sizeX &&
        elements[i].x + elements[i].sizeX >= elements[0].x){
      //Comprobamos que coincida en el eje y
      if(elements[i].y <= elements[0].y + elements[0].sizeY &&
          elements[i].y + elements[i].sizeY >= elements[0].y ){
        console.log('colisiona');
        nivel.muerto = true;
        elements[0].saltando = false;
      }else{
        nivel.puntuacion += 10;
      }

    }

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
  colision();
  imprimir();
}
