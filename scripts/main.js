let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/perro.jpg') {
      miImage.setAttribute('src','images/perro1.jpg');
    } else {
      miImage.setAttribute('src', 'images/perro.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){

    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Welcome, '+miNombre+'.';
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Welcome!, ' + nombreAlmacenado+'.';
}

miBoton.onclick = function(){
    estableceNombreUsuario();
}
