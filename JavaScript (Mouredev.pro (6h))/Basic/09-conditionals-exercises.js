// EXERCICIS CONDICIONALS

// if/else/else if/ternaria
console.log("------------------------------------")

// 1. Imprime por consola tu nombre si una variable toma su valor.
let elMeuNom = "Marcel"
let marcel = true
if (marcel == true) {
    console.log(elMeuNom)
}

console.log("------------------------------------")

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.
let laMevaPass = "1234"
if (elMeuNom == "Marcel" && laMevaPass == "1234") {
    console.log("T'has Loguejat")
}

console.log("------------------------------------")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
let numero = 0
if (numero > 0) {
    console.log("El numero es positiu")
} else if (numero == 0) {
    console.log("El numero es zero")
} else {
    console.log("El numero es negatiu")
}

console.log("------------------------------------")

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let age = 10
let majoriaDedat = 18
let quantsFaltenPels18 = majoriaDedat - age
if (age < majoriaDedat) {
    console.log(`No pot votar, li falten ${quantsFaltenPels18} anys`)
} else {
    console.log("Pot votar")
}

console.log("------------------------------------")

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let edat = 14
edat >= 18 ? console.log("Adult") : console.log("Menor")

console.log("------------------------------------")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let mes = 7

if (mes == 1 || mes == 2 || mes == 3) {
    console.log("Estació 1")
} else if (mes == 4 || mes == 5 || mes == 6) {
    console.log("Estació 2")
} else {
    console.log("Estació 3")
}

console.log("------------------------------------")

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.


console.log("------------------------------------")

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

// 10. Usa un switch para hacer de nuevo el ejercicio 7.