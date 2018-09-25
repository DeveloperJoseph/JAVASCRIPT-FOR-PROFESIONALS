//Usando empalme () para eliminar elementos:

//Con la configuración de parámetros inteligente, puede utilizar empalme ()
// para eliminar elementos sin dejar "agujeros" en la matriz:

let namesAnimals = ["Cat", "Lion", "Rabbit", "Dog"];
document.getElementById("salidaArray").innerHTML =
        "MI LISTA DE ANIMALES: " + namesAnimals;

function miArray5(){
    namesAnimals.splice(0,1);//eliminado el primer item de mi array = CAT
    document.getElementById("newSalidaArray").innerHTML  =
            "MI NUEVA LISTA DE ANIMALES: "+namesAnimals;
}
