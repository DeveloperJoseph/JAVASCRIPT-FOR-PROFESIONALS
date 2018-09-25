/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//ELEMENTOS DE DESPLAZAMIENTO EN JAVASCRIPT 1

/*
 El desplazamiento es equivalente a hacer estallar, trabajando en el primer 
 elemento en lugar del último.
 */

//El método shift () elimina el primer elemento de matriz y "desplaza" todos 
//los demás elementos a un índice inferior.

let names_cars = ["BMV", "TOYOTA", "KIA", "NISSAN", "CHEVROLET"];//declarando mi nuevo array

document.getElementById("namesCars").innerHTML =
        "NOMBRES DE MARCAS DE CARROS: " + names_cars;//salida de mi array declarado

document.getElementById("deleteFirstNameCar").innerHTML = 
        "ITEM DESPLAZADO DE MI LISTA: "+names_cars.shift();//salida del first item que sera delete

document.getElementById("newArrayListCars").innerHTML =
        "LISTA ACTUALIZA: "+names_cars;//salida de new list array 
