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

//Funciones creacion de fechas
function fecha(fecha){
    var date = fecha.split('T')[0];
    var time = fecha.split('T')[1].split('.')[0];
    return(date + ' ' +time);
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
        var timeTrans = fecha(articulos[i].date);
        var time = document.createElement('time');
        time.dateTime = timeTrans.getYear;
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
        'Taj Mahal, India',
        'https://aws.traveler.es/prod/designs/v1/assets/940x627/145044.jpg',
        'La ciudad de Agra, en el estado Uttar Pradesh de India acoge al segundo de los monumentos designado como las 7 maravillas del mundo moderno declarado también como bien Patrimonio de la Humanidad por la Unesco.'+
        ' Se trata del Taj Mahal, una construcción funeraria levantada en el siglo XVII bajo encargo del emperador Shah Jahan en honor a su esposa favorita, Mumtaz Mahal. De hecho,'+
        'la tumba es la pieza central de un complejo de 42 acres que incluye una mezquita y una casa de huéspedes además de los jardines.'
    ));
    articulos.push(new Articulo(
        'Machu Picchu, Perú',
        'https://cdn.getyourguide.com/img/location_img-1570-3285976407-148.jpg',
        'La tercera de la siete maravillas del mundo moderno data del siglo XV. Se trata de la ciudad inca del Machu Picchu, en la región de Cusco, en Perú.'+
        ' Situada en la cresta de una montaña a 2.430 metros sobre el nivel del mar, esta construcción de estilo clásico Inca, que los arqueólogos relacionan con una finca pensada para albergar al emperador inca Pachacuti,'+
        ' cuenta con tres estructuras principales, el Inti Watana, el Templo del Sol y la Sala de las Tres Ventanas, y varios edificios periféricos, de los que gran parte han sido reconstruidos para dar una mejor idea a los turistas de cómo era la ciudadela original.'
    ));
    articulos.push(new Articulo(
        'Chichén Itzá, en México',
        'https://img.static-kl.com/images/media/265EFF4B-A104-4DA9-83F03C998B03B1FE?aspect_ratio=1:1&min_width=912',
        'Chichén Itzá también se cuela entre las 7 nuevas maravillas del Mundo Moderno. Se trata de uno de los principales sitios arqueológicos de la península de Yucatán,'+
        ' en México que originalmente dio forma a una ciudad maya de la época precolombina dominada por el templo de Kukulkán, también conocido como "El Castillo",'+
        ' nombre con el que lo bautizaron los conquistadores españoles. Esta construcción sirvió como templo para el dios Kukulkán y consiste en una pirámide con una serie de terrazas cuadradas con escaleras que suben desde cada uno de los cuatro lados la misma hasta la parte superior.'
    ));
    articulos.push(new Articulo(
        'La Gran Muralla china',
        'https://1.bp.blogspot.com/-h68clbAjvWI/UG3El8ZNkgI/AAAAAAAAG3o/WLGBJ1nX22g/s1600/DSC_0754.JPG',
        'No escapa de la lista la Gran Muralla China. Esta serie de fortificaciones de piedra, ladrillo, madera y tierra apisonada que recorre las fronteras históricas del norte de China construida entre el siglo V a. C y el XVI sirvió como protección para el imperio chino en la histórica frontera del norte del país,'+
        ' en la que fue recurrentemente atacado por nómadas de Mongolia y Manchuria.'
    ));
    articulos.push(new Articulo(
        'Cristo Redentor de Río de Janeiro',
        'https://cdn.civitatis.com/brasil/rio-de-janeiro/tour-cristo-redentor-tren.jpg',
        'Por último, aunque no menos importante en la clasificación, es también una de las 7 nuevas maravillas del Mundo Moderno la escultura del Cristo Redentor de Río de Janeiro, en Brasil.'+
        ' Se trata de una estatua de 30 metros de altura y diseño Art Decó que corona la montaña de Corcovado representando el cuerpo de Jesús de Nazaret.'+
        ' Esta obra, inaugurada en 1931 fue fruto del trabajo de las manos del escultor polaco-fracés Paul Landowski y el ingeniero brasileño Heitor da Silva Costa, quienes también contaron con la colaboración del francés Albert Caquot y del artista rumano Gheorge Leonida, siendo este último responsable de la cara de Cristo.'
    ));
    articulos.push(new Articulo(
        'Petra, Jordania',
        'https://media.wsimag.com/attachments/b3255dedd8c76e7c1ed2a262cca2499e0aefc71d/store/fill/1020/574/03bf65b5d72efcb8b31f1a00c520373eade3d96b463a450e521f1c6399c4/Petra-Jordania.jpg',
        'Petra es la primera de las siete nuevas maravillas del Mundo Moderno. Esta ciudad de Jordania, originalmente conocida como Raqmu,'+
        ' es famosa por su arquitectura excavada en la roca además de por sus avanzado sistema de conductos de agua. '+
        'Petra, constituida posiblemente ya en el 312 a.C como la capital de los nabateos árabes, es un símbolo de Jordania,'+
        ' además de uno de los principales atractivos turísticos del país, más, desde que en 2007 fuese elegida como una de las 7 maravillas del mundo moderno.'
    ));

}

window.addEventListener('load',init);