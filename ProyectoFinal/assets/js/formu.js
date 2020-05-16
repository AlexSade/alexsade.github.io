var provi = ['Alicante','Valencia','Castellon','Murcia'];
var localAlicate = ['Benidorm','Callosa','La vila'];
var localValencia = ['Gandia','Valencia','Cullera','Alzira'];

function init(){
    var listProvi = document.getElementById('provincia');
    generarLista(provi,listProvi);
    listProvi.addEventListener('change',cambiarLista);
    var listLocal = document.getElementById('localidad');
    var chk = document.getElementById('postal');
    chk.addEventListener('change',activarCambios);

    var selectIndexProvi = listProvi.selectedIndex;
    if(selectIndexProvi == 0){
        generarLista(localAlicate,listLocal);
    }

    var nombre = document.getElementsByName('nombre')[0];
    nombre.addEventListener('blur',validarNombre);
    nombre.addEventListener('keyup',validarNombre);

    var apellido = document.getElementsByName('apellido')[0];
    apellido.addEventListener('blur',validarApellido);
    apellido.addEventListener('keyup',validarApellido);

    var email = document.getElementsByName('email')[0];
    email.addEventListener('blur',validarEmail);
    email.addEventListener('keyup',validarEmail);

    var dir = document.getElementsByName('direccion')[0];
    dir.addEventListener('blur',validarDir);
    dir.addEventListener('keyup',validarDir);


    var submit = document.getElementById('submit');
    submit.addEventListener('click',validar);

    var btnSearch = document.getElementById('searchBtn');
    btnSearch.addEventListener('click',clickSearch);

}
 //Funciones listas
function generarLista(arr,obj){
    obj.innerHTML = '';
    for(var i = 0; i < arr.length; i++){
        var opt = document.createElement('option');
        opt.value = arr[i];
        opt.appendChild(document.createTextNode(arr[i]));
        obj.appendChild(opt);
    }
}

function cambiarLista(){
    var listProvi = document.getElementById('provincia');
    var listLocal = document.getElementById('localidad');
    listLocal.innerHTML = '';
    var selectIndexProvi = listProvi.selectedIndex;
    if(selectIndexProvi == 0){
        generarLista(localAlicate,listLocal);
    }else if(selectIndexProvi == 1){
        generarLista(localValencia,listLocal);
    }
}

//Funcion check para activar o desacctivar campos

function activarCambios(){
    var chk = document.getElementById('postal');
    var dir = document.getElementById('direccion');
    var provin = document.getElementById('provincia');
    var local = document.getElementById('localidad');
    if(chk.checked){
        dir.disabled = false;
        provin.disabled = false;
        local.disabled = false;
    }else {
        dir.disabled = true;
        provin.disabled = true;
        local.disabled = true;        
    }
}

//Funciones validacion individual

function validarNombre(){
    var nombre = document.getElementsByName('nombre')[0];
    var nomErr = document.getElementById('errNom');
    if(nombre.value.length > 0 && !(/^\s+$/.test(nombre.value))){
        nomErr.innerHTML= '';
        nombre.className = '';
        return true;
    }else{
        nomErr.style.color = 'red';
        nomErr.innerHTML= '     El campo no puede estar vacio';
        nombre.className = 'error';
        return false;
    }
}

function validarApellido(){
    var apellido = document.getElementsByName('apellido')[0];
    var apeErr = document.getElementById('errApe');
    if(apellido.value.length > 0 && !(/^\s+$/.test(apellido.value))){
        apeErr.innerHTML= '';
        apellido.className = '';
        return true;
    }else{
        apeErr.style.color = 'red';
        apeErr.innerHTML= '     El campo no puede estar vacio';
        apellido.className = 'error';
        return false;
    }
}

function validarEmail(){
    var email = document.getElementsByName('email')[0];
    var emailErr = document.getElementById('errEmail');
    if(email.value.length > 0 && (/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email.value))){
        emailErr.innerHTML= '';
        email.className = '';
        return true;
    }else{
        emailErr.style.color = 'red';
        emailErr.innerHTML= '     La direccion de email tiene que ser vailida';
        email.className = 'error';
        return false;
    }
}

function validarDir(){
    var dir = document.getElementsByName('direccion')[0];
    var dirErr = document.getElementById('errDir');
    if(dir.value.length > 0 && !(/^\s+$/.test(dir.value))){
        dirErr.innerHTML= '';
        dir.className = '';
        return true;
    }else{
        dirErr.style.color = 'red';
        dirErr.innerHTML= '     La direccion tiene que ser valida';
        dir.className = 'error';
        return false;
    }
}

//Funcion validacion completa

function validar(){
    var chk = document.getElementById('postal');
    if(!validarNombre()){
        return false;    
    }else if(!validarApellido()){
        return false;
    }else if(!validarEmail()){
        return false;
    }else if(chk.checked){
        if(!validarDir()){
            return false;
        }
    }
    return true;
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