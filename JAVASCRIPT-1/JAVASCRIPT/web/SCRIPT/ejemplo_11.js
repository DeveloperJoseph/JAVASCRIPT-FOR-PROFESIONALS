
//** Finding an object's class **//


//Every value in JavaScript besides 'null' and 'undefined' also has a constructor 
//property storing the function that was used to construct it. This even works with primitives.

function isNumber(value) {//funcion que recibe un parametro
    if (value === null || value === undefined)
        return false;//retornará falso si el valor de 'value' es (null || undefined)
    return value.constructor === Number;//retornar true si el valodr de 'value' es un Number
}

console.log(isNumber(null), isNumber(undefined));// retorna => false , false
console.log(isNumber('abc'), isNumber([]), isNumber(() => 1));// retorna => false , false, false
console.log(isNumber(0),isNumber(Number('10.1')), isNumber(NaN));// retorna => true, true, true