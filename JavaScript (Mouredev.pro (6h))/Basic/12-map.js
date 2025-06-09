// Map 

// Declaració
let myMap = new Map()

console.log(myMap)

console.log("------------------------------------")

// Inicialització
myMap = new Map([
    ["name", "Marcel"],
    ["email", "mcayueladolcet@gmail.com"],
    ["age", 18]
])
console.log(myMap)

console.log("------------------------------------")

// Mètodes i propietats

// set
myMap.set("alias", "mcayuela")

myMap.set("name", "Marcel Cayuela")
console.log(myMap) // com podem veure no crea un element nou sino que modifica el que triem nosaltres amb la clau

console.log("------------------------------------")

// get
console.log(myMap.get("name")) // busquem per clau, ja que es el element únic

console.log("------------------------------------")

// has
console.log(myMap.has("surname")) // busquem si una clau existeix o no
console.log(myMap.has("age"))

console.log("------------------------------------")

// delete
myMap.delete("email") // borrem per clau
console.log(myMap)

console.log("------------------------------------")

// clear
myMap.clear() // borrem tot el mapa
console.log(myMap)

console.log("------------------------------------")

// tornem a crear tot per podercontinuar amb l'explicació
myMap = new Map([
    ["name", "Marcel"],
    ["email", "mcayueladolcet@gmail.com"],
    ["age", 18]
])
console.log(myMap)

console.log("------------------------------------")

// keys
console.log(myMap.keys()) // serveix per a consultar quines claus existeixen en el map

console.log("------------------------------------")

// values
console.log(myMap.values()) // serveix per a consultar quins valors existeixen en el map

console.log("------------------------------------")

// size
console.log(myMap.size)

console.log("------------------------------------")

// entries
console.log(myMap.entries()) // serveix per a consultar quines claus i valors existeixen en el map

console.log("------------------------------------")


/*
TEORIA EXTRA:

    - Aqui els elements no son únics, sino que van en parelles, un es la clau que emagatzema el tipus, i l'altre el valor. (Tant de valor, com de clau, podem emmagatzemar tot tipus de valors)
    - NO PODEN haver elements repetits (com en el cas dels sets) peeero, nomes es unica la clau, el valor pot repetir-se en diferentes claus

*/