
//El método unshift () agrega un nuevo elemento a una matriz (al principio) y "desvía" elementos anteriores:

function miArray3() {

    let name_fruit = String(prompt("Ingresa nombre de fruta favorita"));//consultar por name fruit
    let fruits = ["Banana", "Orange", "Apple", "Watermelon", "Mango"];//declaro mi lista de array

    document.getElementById("salidaListFruits").innerHTML =
            "- MI LISTA DE FRUTAS: " + fruits;//salida de nuestro array

    fruits.unshift(name_fruit);//agregando fruta obtenida a nuestro a array

    document.getElementById("newItemListArray").innerHTML =
            "- NUEVA LISTA DE FRUTAS: " + fruits;//salida de nuestra nuevo array
};

