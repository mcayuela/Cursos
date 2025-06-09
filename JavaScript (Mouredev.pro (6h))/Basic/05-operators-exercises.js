// EXERCICIS D'OPERADORS

// 1. Crea una variable para cada operación aritmética.

let a = 2
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.
console.log("------------------------------------")

a += 2
a -= 2
a *= 2
a /= 2
a %= 2
a **= 2
b += 2
b -= 2
b *= 2
b /= 2
b %= 2
b **= 2

console.log(a)
console.log(b)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.
console.log("------------------------------------")

console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a <= b)
console.log(a == b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.
console.log("------------------------------------")

console.log(5 < 2)
console.log(5 === "5")
console.log(5 != 5)
console.log(10 <= 5)
console.log(5 == 3)

// 5. Utiliza el operador lógico and.
console.log("------------------------------------")

console.log(a < b && b !== a)

// 6. Utiliza el operador lógico or.
console.log("------------------------------------")

console.log(a > b || 5 < 10)

// 7. Combina ambos operadores lógicos.
console.log("------------------------------------")

console.log(a < b && b !== a || 10 == 10)

// 8. Añade alguna negación.
console.log("------------------------------------")

console.log(a < b && b !== a || 10 == 10) // Ja en tenia al punt anterior

// 9. Utiliza el operador ternario.
console.log("------------------------------------")

const myOperadorTerrari = true 
myOperadorTerrari ? console.log("Veus com si") : conseol.log("Pues va a ser que no")

// 10. Combina operadores aritméticos, de comparáción y lógicas.
console.log("------------------------------------")

let total = (5 + 5) / 2 > 15 && (4 * 2) === 5;
console.log(total)
