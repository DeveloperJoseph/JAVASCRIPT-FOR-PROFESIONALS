// undefined and null //

//A variable when it is declared but not assigned a value (i.e. defined)
let foo;
console.log("Is Foo undefined?", foo === undefined);//true

//Accessing the value of a property that doesn't exist
let foo2 = {a:"First Value"};
console.log("Is Foo2 undefined?", foo2.b === undefined);//true

//The return value of a function that doesn't return a value
function foo3() {
    return;
}
console.log("Is Foo3 undefined?", foo3() === undefined);//true

//The value of a function argument that is declared but has been omitted from the function call
function foo4(param){
    console.log("Is Foo4 undefined?", param === undefined);
}
foo4('a');//false
foo4();//true
