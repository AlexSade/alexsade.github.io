// Recibo array de objetos del almacenamiento local
//Lo convierto de strin a objeto
var arrayArticulos = sessionStorage.getItem('articulos');
var articulos = JSON.parse(arrayArticulos);
//Array que almacena los articulos

//Constructor de articulos
function Articulo(titulo,imagen,contenido,date){
    this.titulo = titulo;
    this.imagen = imagen;
    this.contenido = contenido;
    this.date = new Date();
}
//Si no hay nada en el almacenamiento global lo lleno con articulos por defecto
if(!articulos || articulos.length < 1){
    articulos = new Array();
    articulosDefecto();
    //Guardo el nevo array de articulos en el almacenamiento local
    sessionStorage.articulos = JSON.stringify(articulos);
}
var i = 0;
function init(){

    imprimirArticulos();
    banner(i);
    setInterval(() => {
        i++;
        if(i > 3){
            i = 0;
        }
        banner(i);
    },3000);
}

//Funcion banner

function banner(i){
    var ban = document.getElementById('slider');
    var link = document.querySelector('#slider a');
    var titulo = document.querySelector('#slider h1');
    titulo.innerHTML = '';
    titulo.appendChild(document.createTextNode(articulos[i].titulo));
    ban.style.backgroundImage= "url(" + articulos[i].imagen + ")";
    link.href = 'blog.html#article-' + i;
}

//Imprime articulos en index
function imprimirArticulos(){

    var articles = document.getElementById("articles");
    for(var i = 0; i < articulos.length; i++){
        
        //Crea imagen
        var imagen = document.createElement('img');
        imagen.src = articulos[i].imagen;
        var div = document.createElement('div');
        div.className = 'image-wrap';
        div.appendChild(imagen);
        //Crea H2
        var h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(articulos[i].titulo));
        //Crea time
        var timeTrans = articulos[i].date;
        var time = document.createElement('time');
        time.dateTime = timeTrans;
        time.className = 'date';
        time.appendChild(document.createTextNode(timeTrans));
        //Crea link
        var link = document.createElement('a');
        link.href = 'blog.html#article-'+i;
        link.appendChild(document.createTextNode('Leer Mas'));
        //Crea div clearfix
        var clear = document.createElement('div');
        clear.className = 'clearfix';
        //Creamos la etiqueta final y lo insertamos todo
        var artItem = document.createElement('article');
        artItem.className = 'article-item';
        artItem.appendChild(div);
        artItem.appendChild(h2);
        artItem.appendChild(time);
        artItem.appendChild(link);
        artItem.appendChild(clear);
        //Por ultimo insertamos en el nodo del index
        articles.appendChild(artItem);
    }
}

//Carga articulos por defecto
function articulosDefecto(){

    articulos.push(new Articulo(
        'Ruta por Asia1',
        'https://img2.viajar.elperiodico.com/ff/06/e6/monumento-a-la-independencia-de-turkmenistan.jpg',
        'Placer arcu vulputate pellentesque lectus class tempor parturient pretium volutpat sollicitudin ultrices malesuada accumsan,'+
        ' natoque ridiculus donec taciti massa metus nulla lacinia primis mus nostra. Laoreet diam senectus per etiam tempor dis sagittis suspendisse sociosqu hac,'+
        ' convallis dictum fames consequat aliquet molestie quis ligula ac, dignissim pharetra nibh vivamus lectus enim proin phasellus arcu. Duis dictum sociosqu et magnis purus primis hac tempus tellus donec,' + 
        'venenatis cum luctus eleifend inceptos velit aliquet taciti ornare, vitae feugiat euismod eu molestie tristique fermentum vestibulum conubia.'
    ));
    articulos.push(new Articulo(
        'Ruta por Asia2',
        'https://img2.viajar.elperiodico.com/ff/06/e6/monumento-a-la-independencia-de-turkmenistan.jpg',
        'Placerat arcu vulputate pellentesque lectus class tempor parturient pretium volutpat sollicitudin ultrices malesuada accumsan,'+
        ' natoque ridiculus donec taciti massa metus nulla lacinia primis mus nostra. Laoreet diam senectus per etiam tempor dis sagittis suspendisse sociosqu hac,'+
        ' convallis dictum fames consequat aliquet molestie quis ligula ac, dignissim pharetra nibh vivamus lectus enim proin phasellus arcu. Duis dictum sociosqu et magnis purus primis hac tempus tellus donec,' + 
        'venenatis cum luctus eleifend inceptos velit aliquet taciti ornare, vitae feugiat euismod eu molestie tristique fermentum vestibulum conubia.'
    ));
    articulos.push(new Articulo(
        'Ruta por Asia3',
        'https://img2.viajar.elperiodico.com/ff/06/e6/monumento-a-la-independencia-de-turkmenistan.jpg',
        'Placerat arcu vulputate pellentesque lectus class tempor parturient pretium volutpat sollicitudin ultrices malesuada accumsan,'+
        ' natoque ridiculus donec taciti massa metus nulla lacinia primis mus nostra. Laoreet diam senectus per etiam tempor dis sagittis suspendisse sociosqu hac,'+
        ' convallis dictum fames consequat aliquet molestie quis ligula ac, dignissim pharetra nibh vivamus lectus enim proin phasellus arcu. Duis dictum sociosqu et magnis purus primis hac tempus tellus donec,' + 
        'venenatis cum luctus eleifend inceptos velit aliquet taciti ornare, vitae feugiat euismod eu molestie tristique fermentum vestibulum conubia.'
    ));
    articulos.push(new Articulo(
        'Ruta por Asia4',
        'https://img2.viajar.elperiodico.com/ff/06/e6/monumento-a-la-independencia-de-turkmenistan.jpg',
        'Placerat arcu vulputate pellentesque lectus class tempor parturient pretium volutpat sollicitudin ultrices malesuada accumsan,'+
        ' natoque ridiculus donec taciti massa metus nulla lacinia primis mus nostra. Laoreet diam senectus per etiam tempor dis sagittis suspendisse sociosqu hac,'+
        ' convallis dictum fames consequat aliquet molestie quis ligula ac, dignissim pharetra nibh vivamus lectus enim proin phasellus arcu. Duis dictum sociosqu et magnis purus primis hac tempus tellus donec,' + 
        'venenatis cum luctus eleifend inceptos velit aliquet taciti ornare, vitae feugiat euismod eu molestie tristique fermentum vestibulum conubia.'
    ));
    articulos.push(new Articulo(
        'Ruta por Asia5',
        'https://img2.viajar.elperiodico.com/ff/06/e6/monumento-a-la-independencia-de-turkmenistan.jpg',
        'Placerat arcu vulputate pellentesque lectus class tempor parturient pretium volutpat sollicitudin ultrices malesuada accumsan,'+
        ' natoque ridiculus donec taciti massa metus nulla lacinia primis mus nostra. Laoreet diam senectus per etiam tempor dis sagittis suspendisse sociosqu hac,'+
        ' convallis dictum fames consequat aliquet molestie quis ligula ac, dignissim pharetra nibh vivamus lectus enim proin phasellus arcu. Duis dictum sociosqu et magnis purus primis hac tempus tellus donec,' + 
        'venenatis cum luctus eleifend inceptos velit aliquet taciti ornare, vitae feugiat euismod eu molestie tristique fermentum vestibulum conubia.'
    ));
    articulos.push(new Articulo(
        'Ruta por Asia6',
        'https://img2.viajar.elperiodico.com/ff/06/e6/monumento-a-la-independencia-de-turkmenistan.jpg',
        'Placerat arcu vulputate pellentesque lectus class tempor parturient pretium volutpat sollicitudin ultrices malesuada accumsan,'+
        ' natoque ridiculus donec taciti massa metus nulla lacinia primis mus nostra. Laoreet diam senectus per etiam tempor dis sagittis suspendisse sociosqu hac,'+
        ' convallis dictum fames consequat aliquet molestie quis ligula ac, dignissim pharetra nibh vivamus lectus enim proin phasellus arcu. Duis dictum sociosqu et magnis purus primis hac tempus tellus donec,' + 
        'venenatis cum luctus eleifend inceptos velit aliquet taciti ornare, vitae feugiat euismod eu molestie tristique fermentum vestibulum conubia.'
    ));

}

window.addEventListener('load',init);