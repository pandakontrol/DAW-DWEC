function cargar() {
    document.getElementById("azul").addEventListener("dragover", allowDrop);
    document.getElementById("rojo").addEventListener("dragover", allowDrop);
    document.getElementById("drag1").addEventListener("dragstart", drag);
    document.getElementById("drag2").addEventListener("dragstart", drag);
    document.getElementById("drag3").addEventListener("dragstart", drag);
    document.getElementById("drag4").addEventListener("dragstart", drag);
    document.getElementById("drag5").addEventListener("dragstart", drag);
    document.getElementById("drag6").addEventListener("dragstart", drag);
    document.getElementById("drag7").addEventListener("dragstart", drag);
    document.getElementById("drag8").addEventListener("dragstart", drag);
    document.getElementById("rojo").addEventListener("drop", drop);
    document.getElementById("azul").addEventListener("drop", drop);
    document.getElementById("verde").addEventListener("drop", drop);
    document.getElementById("verde").addEventListener("dragover", allowDrop);

}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
    ev.preventDefault();

}

function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("identificador", ev.target.id);

}

function drop(ev) {

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("identificador");


    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    if (!ev.target.draggable) {
        ev.target.appendChild(document.getElementById(data));

    } else {
        alert("Apunta bien mongolo");
    }


}
window.addEventListener("load", cargar);