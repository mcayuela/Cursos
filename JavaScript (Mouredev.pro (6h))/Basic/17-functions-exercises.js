// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.
console.log("------------------------------------")

function nums(a, b) {
    console.log(a + b)
}

nums(2, 3)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
console.log("------------------------------------")

myArray = [1, 2, 3, 4, 7]

function trobaElMajor() {
    let max = myArray[0]
    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] > max) {
            max = myArray[i]
        }
    }
    return max
}

console.log(trobaElMajor())


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
console.log("------------------------------------")

const vocals = ["a", "e", "i", "o", "u"]

function numDeVocals(paraula) {
    let contador = 0
    for (let i = 0; i < paraula.length; i++) {
        if (vocals.includes(paraula[i])) {
            contador++
        }
    }
    return contador
}

console.log(numDeVocals("maarcel"))



// 4. Crea una función que reciba un array de strings. y devuelva un nuevo array con las strings en mayúsculas.
console.log("------------------------------------")



// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.
console.log("------------------------------------")



// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
console.log("------------------------------------")



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
console.log("------------------------------------")



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.
console.log("------------------------------------")



// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
console.log("------------------------------------")



// 10. Crea una función que calcule el factorial de un número dado.
console.log("------------------------------------")


