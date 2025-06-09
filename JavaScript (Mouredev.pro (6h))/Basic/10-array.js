// ARRAYS (Estructura de dades que permet emmagatzemar més d'un valor en una sola variable)

// Declaració
let myArray = [] //aquesta es la més utilitzada i recomanable
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

console.log("------------------------------------")

// FEM PROVES D'INICIALITZACIÓ (per veure el comportament dels arrays)

// Inicialització
myArray = [1]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

console.log("------------------------------------")

// Inicialització 2
myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

console.log("------------------------------------")

// Inicialització 3 (Barrejem strings amb numeros (com que JavaScript es un llenguatge de tipat dinàmic podem fer-ho sense problema))
myArray = ["Marcel", "Cayuela", "mcayuela", 18]
myArray2 = new Array("Marcel", "Cayuela", "mcayuela", 18)

console.log(myArray)
console.log(myArray2)

console.log("------------------------------------")

// Inicialització 4 (inicialitzem l'array guardant els espais primer)
myArray2 = new Array(3)
myArray2[0] = "Marcel"
myArray2[1] = "Cayuela"
myArray2[2] = "mcayuela"
myArray2[4] = "1234" // tot i tenir 3 reservats ha creat 1 espai mes, per tant es unamica extrany el seu comportament

console.log(myArray2)

myArray = [] // No hem de dir quants espais necesitarem ja que ha anat guardant espais conforme anavem executant coses (per això es molt mes fàcil d'utilitzar)
myArray[2] = "Marcel"
myArray[1] = "mcayuela"

console.log(myArray)

console.log("------------------------------------")

// Mètodes comuns (aplicats al array 1 (es a dir, al que no hem de dir quants espais volem reservar))
myArray = []

// push i pop
myArray.push("Marcel") // push es la manera correcta de pujar un element al nostre array 
myArray.push("Cayuela")
myArray.push("Dolcet")
myArray.push("18")

console.log(myArray)

myArray.pop() // pop elimina l'ultim element del array
console.log(myArray.pop()) // elimina l'ultim element i el retorna, per tant, podriem consultar quin element ha sigut eliminat

console.log(myArray)

console.log("------------------------------------")

// shift i unshift
myArray.shift() // shift elimina el primer element del array
console.log(myArray.shift()) // elimina el primer element i el retorna, igual que el pop, pero en ordre invers

myArray.unshift("Marcel", "mcayuela") // unshift agrega 1 o més elements al principi de l'array
console.log(myArray)

console.log("------------------------------------")

// length
console.log(myArray.length) // calcula la longitud del nostre array

// clear
// myArray = [] // manera correcta de netejar/borrar el contingut d'un array
myArray.length = 0 // manera alternativa
console.log(myArray)

console.log("------------------------------------")

// slice
myArray.push("Marcel", "Cayuela", "mcayuela", 18)
let myNewArray = myArray.slice(1, 2) // copia seccions concretes d'un array sense modificar l'original
console.log(myArray)
console.log(myNewArray)

console.log("------------------------------------")

// splice
myArray.splice(1, 2)
console.log(myArray)

myArray = ["Marcel", "Cayuela", "mcayuela", 18] // faig això en comptes d'un push per evitar sobreposar elements que ja teniem
myArray.splice(1, 2, "Nova entrada") // va a la posició 1, desde aquesta elimina dos a la dreta i posa la "Nova entrada"
console.log(myArray)

console.log("------------------------------------")