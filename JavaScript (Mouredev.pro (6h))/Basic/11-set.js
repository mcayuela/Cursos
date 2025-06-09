// SET (Estructura de dades que NO permet DUPLICAR les dades, nomes pots emmagatzemar valors ÚNICS)

// Declaració
let mySet = new Set() // En cas dels sets SI que hem de declarar-los aixi, no podem triar com en el cas dels arrays
let mySet2 = {} // AIXÒ NO ÉS UN SET, OBLIDE-M'HO DE MOMENT

console.log(mySet)
console.log(mySet2)

console.log("------------------------------------")

// Inicialització
mySet = new Set(["Marcel", "Cayuela", "mcayuela", 18]) // al posar elements han d'anar entre claudators, perque si no nomes llegeix el primer element i el separa per cada lletra

console.log(mySet)

console.log("------------------------------------")

// MÈTODES COMUNS

// add i delete
mySet.add("mcayuela.dev") // afegeix elements al final
console.log(mySet)

mySet.delete("Cayuela") // elimina elements només si li poses el valor de l'element que volem borrar
console.log(mySet)

console.log(mySet.delete("Marcel")) // elimina l'element i em torna un boolea que m'indica si l'element s'ha borrat correctament o no
console.log(mySet)

console.log("------------------------------------")


// has
console.log(mySet.has("mcayuela.dev")) // ens serveix per saber si un element està o no al nostre set
console.log(mySet.has("Marcel"))

console.log("------------------------------------")

// size (es el mateix que el length dels arrays)
console.log(mySet.size) // (es el mateix que el length dels arrays)

console.log("------------------------------------")

// convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

console.log("------------------------------------")

// convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

console.log("------------------------------------")

// Demostració de la diferència entre array i set
console.log(mySet)
mySet.add("Marcel")
console.log(mySet)
mySet.add("Marcel")
mySet.add("Marcel")
mySet.add("Marcel") // per molt que vulgui afegir el mateix valor al set no em deixara, ja que no permet duplicats, nomes valors, ÚNICS
mySet.add("MarCeL") // pero perque això apliqui, ha de ser EXACTAMENT el mateix element, nomes que canvii un bit d'informació al valor, ens deixara afegir-lo

console.log("------------------------------------")



/*
TEORIA EXTRA:

    - Els sets no segueixen un ordre dins de la llista (com si que ho fan els arrays), l'ordre existeix, pero no el segueixen, els sets segueixen hashes, es a dir, el valor/contingut de l'element ÚNIC

*/