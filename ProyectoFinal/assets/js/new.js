// Recibo array de objetos del almacenamiento local
//Lo convierto de string a objeto
var arrayArticulos = sessionStorage.getItem('articulos');
var articulos = JSON.parse(arrayArticulos);
var editArt;
//Constructor de articulos
function Articulo(titulo,imagen,contenido,date){
    this.titulo = titulo;
    this.imagen = imagen;
    this.contenido = contenido;
    this.date = new Date();
}
//funcion inicializadora
function init(){


    editArt = location.href.split('?')[1];
    var btn = document.getElementById('publicar');
    if(editArt == undefined || editArt > articulos.length - 1){
        btn.addEventListener('click',create);
    }else{
        editPage();
        btn.addEventListener('click',edit);

    }

    var titulo = document.getElementsByName('titulo')[0];
    titulo.addEventListener('keyup',validarTitulo);
    titulo.addEventListener('blur',validarTitulo);

    var imagen = document.getElementsByName('imagen')[0];
    imagen.addEventListener('blur',validarImagen);
    imagen.addEventListener('keyup',validarImagen);

    var content = document.getElementsByName('content')[0];
    content.addEventListener('blur',validarContent);
    content.addEventListener('keyup',validarContent);

}

//Modifica la pagina para la edicion de contenido
function editPage(){
    document.querySelector('#content .subheader').innerText = "Editar artículo";
    var btn = document.getElementById('publicar');
    btn.innerText = "EDITAR";
    document.getElementsByName('titulo')[0].value = articulos[editArt].titulo;
    document.getElementsByName('imagen')[0].value = articulos[editArt].imagen;
    document.getElementsByName('content')[0].value = articulos[editArt].contenido;
}

//Funcion validar
function validate(){
    if(!validarTitulo()){
        return false;    
    }else if(!validarImagen()){
        return false;
    }else if(!validarContent()){
        return false;
    }
    return true;
}

//Validadores individuales
function validarTitulo(){
    var titulo = document.getElementsByName('titulo')[0];
    var lblTit = document.getElementById('errTit');

    if(titulo.value.length > 0 && !(/^\s+$/.test(titulo.value))){
        lblTit.innerHTML= '';
        titulo.className = '';
        return true;
    }else{
        lblTit.style.color = 'red';
        lblTit.innerHTML= '     El campo no puede estar vacio';
        titulo.className = 'error';
        return false;
    }
}

function validarImagen(){
    var imagen = document.getElementsByName('imagen')[0];
    var lblUrl = document.getElementById('errUrl');
    if(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(imagen.value)){
        lblUrl.innerHTML = '';
        imagen.className = '';
        return true;
    }else{
        lblUrl.style.color = 'red';
        lblUrl.innerHTML= '     URL introducida es incorrecta, recuerda que debe de ser una imagen';
        imagen.className = 'error';
        return false;
    }
}

function validarContent(){
    var content = document.getElementsByName('content')[0];
    var lblContent = document.getElementById('errContent');
    if(content.value.length > 100){
        lblContent.innerHTML= '';
        content.className = '';
        return true;
    }else{
        lblContent.style.color = 'red';
        lblContent.innerHTML= '     El campo debe de contener mas de 100 carácteres';
        content.className = 'error';
        return false;
    }
}

//Edito articulo
function edit(){
    if(validate()){
        if(confirm('¿Desea editar el arituclo?')){
            articulos[editArt].titulo = document.getElementsByName('titulo')[0].value;
            articulos[editArt].imagen = document.getElementsByName('imagen')[0].value;
            articulos[editArt].contenido = document.getElementsByName('content')[0].value;

            sessionStorage.articulos = JSON.stringify(articulos);
            window.location.assign('blog.html#article-'+editArt);
        }
    }
}

//Creo articulos
function create(){
    if(validate()){
        var titulo = document.getElementsByName('titulo')[0].value;
        var imagen = document.getElementsByName('imagen')[0].value;
        var content = document.getElementsByName('content')[0].value;
    
        var newArt = new Articulo(titulo,imagen,content);
        articulos.unshift(newArt);
        sessionStorage.articulos = JSON.stringify(articulos);
        alert('Se ha creado un nuevo articulo');
        window.location.assign('blog.html');
    }
}

window.addEventListener('load',init);
