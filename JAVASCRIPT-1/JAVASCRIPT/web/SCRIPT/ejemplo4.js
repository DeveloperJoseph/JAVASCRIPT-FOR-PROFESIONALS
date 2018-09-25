//Empalme de una matriz:

//El método splice () se puede usar para agregar nuevos elementos a una matriz:

/*
 * 
 El primer parámetro (2) define la posición en la que se deben agregar nuevos elementos (empalmados).
 
 El segundo parámetro (0) define cuántos elementos se deben eliminar .
 
 El resto de los parámetros ("Limón", "Kiwi") definen los nuevos elementos que se agregarán .
 * 
 */
function miArray4() {

    let x = String(prompt("Ingresa nombre fruta 1: "));
    let y = String(prompt("Ingresa nombre fruta 2: "));

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, x, y);

    document.getElementById("salida1").innerHTML =
            "LISTA DE MI NUEVO ARRAY: " + fruits;
}