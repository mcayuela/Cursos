// OPERADORS

// OPERADORS ARITMÈTICS

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicació
console.log(a / b) // Divisió

console.log(a % b) // Módul (Resta de la divisió)
console.log(a ** b) // Exponent

a++ // Increment
console.log(a)

b-- // Disminució
console.log(b)


// OPERADORS D'ASSIGNACIÓ
console.log("------------------------------------")

let myVariable = 2 // Símbol igual
console.log(myVariable)
myVariable += 2 // Més igual (modifica i enmagatzema en la variable) es el mateix que fer "myVariable = myVariable + 2" pero d'una manera molt mes òptima

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// OPERADORS DE COMPARACIÓ
console.log("------------------------------------")

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualtat per valor
console.log(a == "6") // Igualtat per valor
console.log(a == a)
console.log(a === a) // Igualtat per identitat (per tipus i per valor)
console.log(a === 6)
console.log(a === "6") // ES IGUAL DE VALOR PERO NO DE TIPUS
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false) // el 0 es fals pero els demés no
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(undefined == null) // Tenen el mateix valor
console.log(undefined === null) // Pero no el mateix tipus

// OPERADORS LÒGICS
console.log("------------------------------------")

// and (&&)
    // si tot es vertader, al comput global del and sortira vertader, si tot es fals, fals, i si entre algun vertader i ha ni que sigui 1 fals, el comput global sera fals
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

console.log("------------------------------------")
// or (||)
    // tot el contrari que el and, si algun d'aquestos valors es vertader, el comput global sera vertader
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 && 15 > 20 || 30 < 40) //tot i que lo del operador and sigui fals, com que un dels valors de l'operador or es vertader, el comput global sera vertader

console.log("------------------------------------")
// not (!)
    // X
console.log(!(5 > 10 && 15 > 20)) // Invertim els valors (si abans eren vertaders ara son falsos i al revés)
console.log(!(5 > 10 || 15 > 20)) // Invertim els valors (si abans eren vertaders ara son falsos i al revés)
console.log(!false) // Exemple fàcil
console.log(!true) // Exemple fàcil

// OPERADORS TERNARIS (mes complexos)
console.log("------------------------------------")

const isRaining = false
isRaining ? console.log("Esta plovent") : console.log("No plou") // Si es vertader s'aplicara el que posem despres del signe d'interrogació "?" i si es fals el que posem despres dels dos punts ":"


/*
TEORIA EXTRA:

Truthy values (valors vertaders PQ SI AJAJA):

    Tots els numeros positius i negatius menys el 0
    Totes les cadenes de text plenes
    El boolean true

Falsy values (valors falsos PQ SI TMB AJAJA):

    0
    0n (com a bigint)
    null
    undefined
    NaN
    El boolean false
    Totes les cadenes de text buides
*/