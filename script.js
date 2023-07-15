//let clima = prompt("Como esta el clima?")
//CONDICIONALES

//CONDICIONAL SIMPLE
/*
if (expresion){
    bloque de codigo a ejecutar en caso de que devuelva V
}
*/ 

/*
if (clima == "lluvioso") {
    console.log("Prepara el paraguas..")
}

console.log("Bye bye")
*/

//CONDICIONAL DOBLE
/*
if (condicion){
    bloque de codigo a ejecutar en caso de que devuelva V
} else {
    bloque de codigo a ejecutar en caso de que devuelva F
}
*/

/*
if (clima == "lluvioso") {
    console.log("Prepara el paraguas..")
} else {
    console.log("Disfruta tu dia..")
}

console.log("Bye bye")
*/


//OPERADOR IF ?
// (expresion) ? en caso V : en caso F

/*
let mensaje = (clima == "lluvioso") ? "Prepara el paraguas.." : "Disfruta tu dia.."

console.log(mensaje)
console.log("Bye bye")
*/

//ANIDAMIENTO
//Tener una estructura dentro de otra

/*
if (clima == "lluvioso") {
    console.log("Prepara el paraguas..")
} else {
    console.log("Que bueno que no esta lloviendo..")
    if (clima == "soleado"){
        console.log("Lleva sombrero")
    } else {
        console.log("Disfruta tu dia..")
    }
}

console.log("Bye bye")
*/
//MULTIPLES CONDICIONES
/*
if (expresion1) {
    bloque de codigo a ejecutar en caso de que expresion1 devuelva V
} else if (expresion2) {
    bloque de codigo a ejecutar en caso de que expresion2 devuelva V
} else if (expresion3) {
    bloque de codigo a ejecutar en caso de que expresion3 devuelva V
} else {
    bloque de codigo a ejecutar en caso de que todas devuelvan F
}
*/

/*
if (clima == "lluvioso") { 
    console.log("Prepara el paraguas..") 
} else if (clima == "soleado"){
    console.log("Lleva sombrero")
} else { // se ejecuta cuando todas las expresiones analizadas devolvieron F
    console.log("Disfruta tu dia..")
}

console.log("Bye bye")

*/

//switch
/*
switch (expresion) {
    case valor1 :
        bloque de codigo a ejecutar en caso de que la expresion tenga como valor valor1
        break
    case valor2 :
        bloque de codigo a ejecutar en caso de que la expresion tenga como valor valor2
        break
    case valor3 :
        bloque de codigo a ejecutar en caso de que la expresion tenga como valor valor3
        break    
    default:
        bloque de codigo a ejecutar en caso de que ninguno de los casos coincida con lo que hay en la expresion
}
*/
/*
switch (clima) {
    case "lluvioso":
        console.log("Prepara el paraguas..")
        break
    case "soleado":
        console.log("Lleva sombrero")
        break
    case "frio":
        console.log("Lleva bufanda")
    case "ventoso":
        console.log("Lleva campera")

}

console.log("bye bye")
*/
/*
let respuesta = prompt("Elija piedra papel o tijera: ")
let intentos = 3

switch (true) {
    case respuesta == "papel" && intentos != 0:
        console.log("elegiste papel, podes seguir jugando")
        break
    case respuesta == "piedra" && intentos != 0:
        console.log("elegiste piedra, podes seguir jugando")
        break
    case respuesta == "tijera" && intentos != 0:
        console.log("elegiste tijera, podes seguir jugando")
        break
    default:
        console.log("ingresaste cualquier cosa")
}
*/

//BUCLES

//WHILE
/*
while (condiciondecorte) {
    bloque de codigo a repetir con la modificacion del resultado de la condicion de corte
}
*/

//DO WHILE
/*
do {
    bloque de codigo a repetir con la modificacion del resultado de la condicion de corte
} while (condiciondecorte) 
*/


//FOR

/*

for ( inicializacion ; condiciondecorte ; incrementodevariablecontadora ) {
    bloque de codigo que queramos repetir
} 
*/

//FOR OF

/*
for(variable of iterable){
    bloque de codigo a repetir
}
*/

//FOR IN

/*
for(propiedad in objeto){
    bloque de codigo a repetir
}
*/
