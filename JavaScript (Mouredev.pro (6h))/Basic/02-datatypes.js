// TIPUS DE DADES PRIMITIVES


// (String) Cadena de text 
let name = "Marcel Cayuela"
let alias = 'mcayuela'
let email = `mcayueladolcet@gmail.com`

// (Numbers) Numeros
let age = 18 // Enter
let height = 1.66 // Decimal

// (Boolean) Booleans
let isStudent = true
let isTeacher = false

// (Undefined) No definit
let undefinedValue

// (Null) Nul
let nullValue = null

// (Symbol) Simbol --> Els simbols identifiquen propietats de futurs objectes (serveixen per evitar col·lisions entre altres objectes)
let mySymbol = Symbol("mysymbol")

// (BigInt) Gran Enter --> S'utiltza per representar numeros molt grans que no podem representar amb el tipus Number (+ de 64 bits) (es igual si es enter o decimal)
let myBigInt = BigInt(129384723890573109847619034751908347591343408567340953)
let myBigInt2 = 129384723890573109847619034751908347591343408567340953n


// Mostrem els tipus de dades amb TYPEOF
console.log("------------------------------------")

console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)

console.log("------------------------------------")

console.log(typeof age)
console.log(typeof height)

console.log("------------------------------------")

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log("------------------------------------")

console.log(typeof undefinedValue)

console.log("------------------------------------")

console.log(typeof nullValue)

console.log("------------------------------------")

console.log(typeof mySymbol)

console.log("------------------------------------")

console.log(typeof myBigInt)
console.log(typeof myBigInt2)


/*
TEORIA EXTRA:

Diferències entre Undefined i Null:
     En el cas d'undefined la declarem quan encara no sabem quin valor tindrà, i en Null en canvi, sabem que el valor d'aquesta variable sera nul.

*/
