
//El método shift () elimina el primer elemento de matriz y "desplaza" todos los demás elementos a un índice inferior.

function miArray2() {//declaro mi funcion miArray1

    let name = String(prompt("What's your name?"));//Consulta de nombre con mi método String(prompt());
    let name_fruit = String(prompt("Enter your favorite fruit"));//Consulta de nombre fruta con mi método String(prompt());

    let fruits = ["Banana", "Orange", "Apple", "Watermelon", "Mango"];//inicio mi array frutas con 0-4 = 5 items
    fruits.push(name_fruit);//agregando nueva fruta a nuestro array (agregar = push() & eliminar = pop())


    document.getElementById("namesFruits").innerHTML =  "Hola, ".concat(name, ". Hoy es: " + Date());//salida de valor mi variable name
    document.getElementById("deleteFirstNameFruit").innerHTML =
            "NOMBRE DE FRUTA ELIMINADA DE ARTAY: " + fruits.shift();//salida de valores de mi array frutas + método join ("-")
    document.getElementById("nuevoArrayNamesFruits").innerHTML = "NUEVA LISTA: " + fruits;//salida de length de mi array
};
