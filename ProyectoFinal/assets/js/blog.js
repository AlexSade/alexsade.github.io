// Recibo array de objetos del almacenamiento local
//Lo convierto de strin a objeto
var arrayArticulos = sessionStorage.getItem('articulos');
var articulos = JSON.parse(arrayArticulos);

function imprimirArticulos(){

    var content = document.getElementById("content");
    for(var i = 0; i < articulos.length; i++){
        
        //Crea imagen
        var imagen = document.createElement('img');
        imagen.src = articulos[i].imagen;
        var div = document.createElement('div');
        div.className = 'image-wrap';
        div.appendChild(imagen);
        //Crea H1
        var h1 = document.createElement('h1');
        h1.className='subheader';
        h1.appendChild(document.createTextNode(articulos[i].titulo));
        //Crea time
        var timeTrans = fecha(articulos[i].date);
        var time = document.createElement('time');
        time.dateTime = timeTrans;
        time.className = 'date';
        time.appendChild(document.createTextNode(timeTrans));
        //Crea link elminar
        var drop = document.createElement('a');
        drop.appendChild(document.createTextNode('Eliminar articulo'));
        drop.id = 'drop-' + i;
        drop.addEventListener('click',deleteArticle);
        //Crea p
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(articulos[i].contenido));
        //Crea div clearfix
        var clear = document.createElement('div');
        clear.className = 'clearfix';
        //Creamos la etiqueta final y lo insertamos todo
        var artItem = document.createElement('article');
        artItem.className = 'article-item article-detail';
        artItem.id = 'article-' + i;
        artItem.appendChild(div);
        artItem.appendChild(h1);
        artItem.appendChild(time);
        artItem.appendChild(drop);
        artItem.appendChild(p);
        artItem.appendChild(clear);
        //Por ultimo insertamos en el nodo del index
        content.appendChild(artItem);
    }
  goArticle();
}

//Funcion que te lleva al articulo selecionado
function goArticle(){
  var article = location.href.split('#')[1];
  if(article != undefined){
    window.location.assign('#'+article);
  }
  
}

//Funciones creacion de fechas
function fecha(fecha){
  var date = fecha.split('T')[0];
  var time = fecha.split('T')[1].split('.')[0];
  return(date + ' ' +time);
}

//Funcion convierte de milisegundos a hora
function miliToSeg(millis) {
    let sec = Math.floor(millis / 1000);
    let hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
  
    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);
  
    if (hrs > 0) {
      min = '' + min;
      min = ('00' + min).substring(min.length);
      return hrs + ":" + min + ":" + sec;
    }
    else {
      return min + ":" + sec;
    }
}

//Funcion elminar
function deleteArticle(){

  if(confirm('¿Desea elemiminar el arituclo?')){
    //Obtenemos el nodo padre(Articulo)
    var nodoArticulo = event.target.parentNode;
    //Obtenemos su id, el numero incluido en su id corres ponde a su posicion en el array
    var articuloId = parseInt((nodoArticulo.id).split('-')[1]);
    //Lo eliminamos del array
    articulos.splice(articuloId,1);
    //Guardamos el array de nuevo
    sessionStorage.articulos = JSON.stringify(articulos);
    //Selecionamos el nodo del DOM de contenido
    var content = document.getElementById('content');
    //Creamos uno nuevo para que este vacio
    contentNew = document.createElement('section');
    contentNew.id  = 'content';
    var center = document.getElementsByClassName('center')[1];
    //Lo sustituimos por el anterior
    center.replaceChild(contentNew,content);
    //Recargamos articulos
    imprimirArticulos();
  }

}

window.addEventListener('load',imprimirArticulos);