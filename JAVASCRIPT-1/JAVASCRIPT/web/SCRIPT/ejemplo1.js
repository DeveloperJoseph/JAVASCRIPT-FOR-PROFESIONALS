/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//EJEMPLOS MÉTODOS DE ARREGLO DE JAVASCRIPT 1

//Una matriz es una variable especial, que puede contener más de un valor a la vez.


function miArray1() {//declaro mi funcion miArray1

    let name = String(prompt("What's your name?"));//Consulta de nombre con mi método String(prompt());
    let name_fruit = String(prompt("Enter your favorite fruit"));//Consulta de nombre fruta con mi método String(prompt());

    let fruits = ["Banana", "Orange", "Apple", "Watermelon", "Mango"];//inicio mi array frutas con 0-4 = 5 items
    fruits.push(name_fruit);//agregando nueva fruta a nuestro array (agregar = push() & eliminar = pop())

   
    document.getElementById("salidaNameDate").innerHTML = 
            "Hola, ".concat(name, ". Hoy es: "+Date());//salida de valor mi variable name
    document.getElementById("salidaArray1").innerHTML =
            "FRUTAS EN INGLES: " + fruits.join(" - ");//salida de valores de mi array frutas + método join ("-")
    document.getElementById("lengthArray").innerHTML =
            "NRO. DE LISTA DE FRUTAS: " + fruits.length;//salida de length de mi array
};
