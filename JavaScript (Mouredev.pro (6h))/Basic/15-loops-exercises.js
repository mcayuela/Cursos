// EXERCICIS BUCLES
console.log("------------------------------------")

// 1. Crea un bucle que imprima los números del 1 al 20.
for (let i = 0; i <= 20; i++) {
    console.log(`Numero ${i}`)
}

console.log("------------------------------------")

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.
let sumaTotal = 0
for (let i = 0; i <= 100; i++) {
    sumaTotal += i;
}
console.log(`Resultat: ${sumaTotal}`)

console.log("------------------------------------")

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.
let i = 0
do {
    console.log(`Numero: ${i}`)
    i += 2
} while (i % 2 === 0 && i < 50)


console.log("------------------------------------")

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
myMap = new Map([
    ["name", "Marcel"],
    ["email", "mcayueladolcet@gmail.com"],
    ["age", 18]
])

for (let valor of myMap) {
    console.log(valor)
}

console.log("------------------------------------")

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.

let vocals = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] // o contemplem aqui les majuscules i minuscules o en l'apartat if de la funcio afegim despres de text[i].toLowerCase()
let text = "Hola, em dic Maaaaarcel"
let totalDeVocals = 0
for (let i = 0; i < text.length; i++) {
    if (vocals.includes(text[i])) {
        totalDeVocals++
    }
}
    
console.log(`Total de vocals: ${totalDeVocals}`)

console.log("------------------------------------")

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.
let arrayDeNumeros = [1, 2, 3, 4, 5]
let total = 1
for (let num of arrayDeNumeros) {
    total *= num
}
console.log(total)

console.log("------------------------------------")

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.
let arrayTaulaDel5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let multiplicats = 5
let multiplicadors = 1
for (let num of arrayTaulaDel5) {
    console.log(`5 x ${multiplicadors} = ${multiplicats}`)
    multiplicats += 5
    multiplicadors++
}

// let arrayTaulaDel5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let num of arrayTaulaDel5) {
//     console.log(`5 x ${num} = ${5 * num}`)
// }

console.log("------------------------------------")

// 8. Usa un bucle para invertir una cadena de texto.
let cadenaDeText = "Marcel Cayuela Dolcet"
let cadenaDeTextInvertida = ""
for (let i = cadenaDeText.length - 1; i >= 0; i--) {
    cadenaDeTextInvertida += cadenaDeText[i]
}
console.log(cadenaDeTextInvertida)

console.log("------------------------------------")

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.
let a = 0
let b = 1
let fibonacci = 0
for (let i = 0; i < 10; i++) {
    console.log(a)
    let temp = a
    a = b
    b = temp + b
}   

console.log("------------------------------------")

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.
let arrayDeNumeros2 = [23, 4, 67, 10, 24, 2, 1, 30]
let trobatMajor = false
for (let x of arrayDeNumeros2) {
    if (x >= 10) {
        console.log(x)
        x++
        trobatMajor = true
    }
}
if (!trobatMajor) {
    console.log("No hi ha numeros majors a 10 en aquest array")
}

console.log("------------------------------------")
