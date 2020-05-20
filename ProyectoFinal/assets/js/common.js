// Recibo array de objetos del almacenamiento local
//Lo convierto de string a objeto
var arrayArticulos = sessionStorage.getItem('articulos');
var articulos = JSON.parse(arrayArticulos);

function init(){

    var btnSearch = document.getElementById('searchBtn');
    btnSearch.addEventListener('click',clickSearch);
    btnSearch.addEventListener('mouseover',toolTip);

    var btnMenu = document.getElementById('imgmenu');
    btnMenu.addEventListener('click',desplegable);

}

//Funcion menudespleg

function desplegable(){
    
    var menu = document.querySelector('#menu ul');
    if(window.getComputedStyle(menu).display == 'none'){
        console.log('hola');
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}

//Funcion tooltip
var acTip = false;
function toolTip(event){
    console.log('tool');
    var coorX = event.clientX;
    var coorY = event.clientY;

    var box = document.createElement('span');
    var txtBox = document.createTextNode('Buscar por título');
    box.appendChild(txtBox);

    box.className = 'tooltip';
    box.style.top = coorY + 'px';
    box.style.left = coorX + 'px';
    if(!acTip){
        document.body.appendChild(box);
        acTip = true;
    }
    
    setTimeout(()=>{
        document.body.removeChild(box);
        acTip = false;
    },1000);

}

//Funcion buscar
function search(article){
    var field = document.getElementById('searchField').value;
    return article.titulo.includes(field);
}

function clickSearch(){
    var findedArt = articulos.findIndex(search);
    location.assign('blog.html#article-' + findedArt);
}


window.addEventListener('load',init);