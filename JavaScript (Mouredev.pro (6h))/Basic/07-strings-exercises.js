// EXERCICIS STRINGS

// 1. Concatena dos cadenas de texto.
let elMeuNom = "Marcel"
let saludo = "Hola, " + elMeuNom
console.log(saludo)

console.log("------------------------------------")

// 2. Muestra la longitud de una cadena de texto.
console.log(saludo.length)

console.log("------------------------------------")

// 3. Muestra el primer y último carácter de un string.
console.log(saludo[0])
console.log(saludo[saludo.length - 1])

console.log("------------------------------------")

// 4. Convierte a mayúsculas y minúsculas un string.
console.log(saludo.toUpperCase)
console.log(saludo.toLowerCase)

console.log("------------------------------------")

// 5. Crea una cadena de texto en varias líneas.

let stringAmbVariesLinies = `Hola,
aquesta es una cadena de text escrita
en varies linies` 
console.log(stringAmbVariesLinies)

console.log("------------------------------------")

// 6. Interpola el valor de una variable en un string.
console.log(`Hola, em dic ${elMeuNom}`)

console.log("------------------------------------")

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let stringAmbEspais = "El meu nom es Marcel"
let stringSenseEspais = stringAmbEspais.replace(/ /g, "-")
console.log(stringSenseEspais)

console.log("------------------------------------")

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(stringSenseEspais.includes("marcel"))

console.log("------------------------------------")

// 9. Comprueba si dos strings son iguales.
console.log(saludo === stringAmbEspais)

console.log("------------------------------------")

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(saludo.length === stringAmbEspais.length)