//** Infinity and -Infinity **//

//1.-
Math.pow(1918918, 919191);//Infinity
let ejemplo1 = "Math.pow(1918918, 919191); //Nos devuelve un valor infinito";
document.getElementById("demo").innerHTML = "Ejemplo 1: " + ejemplo1;

//2.-
Number.MAX_VALUE * 2;//Infinity
let ejemplo2 = "Number.MAX_VALUE * 2; //Nos retornar un valor Infinity";
document.getElementById("demo1").innerHTML = "Ejemplo 2: " + ejemplo2;

//3.-
let x = 23 / Infinity;//0
let ejemplo3 = "let x = 23 / Infinity; //Nos retorna un valor 0";
document.getElementById("demo2").innerHTML = "Ejemplo 3: " + ejemplo3;

//4.-
-Infinity === Number.NEGATIVE_INFINITY;//true
let ejemplo4 = "-Infinity === Number.NEGATIVE_INFINITY;//Nos retorna true";
document.getElementById("demo3").innerHTML = "Ejemplo 4: " + ejemplo4;


//5.-
1 / -0;//-Infinity
let ejemplo5 = "1 / -0; //Nos retornará un valor -Infinity";
document.getElementById("demo4").innerHTML = "Ejemplo 5: " + ejemplo5;

//6.-
Infinity + Infinity;//Infinity
let ejemplo6 = "Infinity + Infinity; //Nos retornará un valor  Infinity";
document.getElementById("demo5").innerHTML = "Ejemplo 6: " + ejemplo6;


//**  NUMBER CONSTANTS **//
Number.MAX_VALUE;// = 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER;// = 9007199254740991
Number.MIN_VALUE; // 5e-324
Number.MIN_SAFE_INTEGER; // -9007199254740991 Number.EPSILON;
Number.POSITIVE_INFINITY; // Infinity Number.NEGATIVE_INFINITY; // -Infinity
Number.NaN; // NaN


//** Operations that return NaN **//

//Mathematical operations on values other than numbers return NaN:
"a" + 1;//return NaN
"b" * 3;//return NaN 
"cde" - "e";//return NaN
[1, 2, 3] * 2;//return NaN

//An exception: Single-number arrays: 
[2] * [3]; // Returns 6

//Also, remember that the + operator concatenates strings:
"a" + "b"; // Returns "ab"

//Dividing zero by zero returns NaN:
0 / 0;// return NaN , * Note: In mathematics generally (unlike in JavaScript programming),
// dividing by zero is not possible