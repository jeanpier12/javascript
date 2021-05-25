// document.getElementById('parrafo1').style.color="orange";


function inicializar() {
    document.getElementById('parrafo1').style.color = "red";
}

// luego de cargar la pagina, cargado los archivos relacionados, cargado las imagenes pesadas, hace: inicializar
window.addEventListener('load', inicializar);
// window.onload=inicializar;

window.addEventListener("DOMContentLoaded", inicializarAno);

function inicializarAno() {
    var _ano = new Date().getFullYear();
    document.getElementById("idAno").value = _ano;
}
