// EXERCICIS ESTRUCTURES
console.log("------------------------------------")

// 1. Crea un array que almacene cinco animales.
let elMeuArray = new Array("Cabra", "Rata", "Paloma", "Vaca", "Porc")
console.log(elMeuArray)

console.log("------------------------------------")

// 2. Añade dos más. Uno al principio y otro al final.
elMeuArray.push("Ultim Animal")
elMeuArray.unshift("Primer Animal")
console.log(elMeuArray)

console.log("------------------------------------")

// 3. Elimina el que se encuentra en tercera posición.
elMeuArray.splice(1, 2)
console.log(elMeuArray)

console.log("------------------------------------")

// 4. Crea un set que almacene cinco libros.
let elMeuSet = new Set()
elMeuSet = new Set(["Llibre1", "Llibre2", "Llibre3", "Llibre4", "Llibre5"])
console.log(elMeuSet)

console.log("------------------------------------")

// 5. Añade dos más. Uno de ellos repetido.
elMeuSet.add("Llibre Nou")
elMeuSet.add("Llibre Nou2")
elMeuSet.add("Llibre Nou2")
elMeuSet.add("Llibre Nou2")
console.log(elMeuSet)

console.log("------------------------------------")

// 6. Elimina uno concreto a tu elección.
elMeuSet.delete("Llibre Nou")
console.log(elMeuSet)

console.log("------------------------------------")

// 7. Crea un mapa que asocie el número del mes a su nombre.
let elMeuMap = new Map()
elMeuMap = new Map([
    [1, "Gener"],
    [2, "Febrer"],
    [3, "Març"],
    [4, "Abril"],
    [5, "Maig"],
    [6, "Juny"],
    [7, "Juliol"],
    [8, "Agost"],
    [9, "Setembre"],
    [10, "Octurbre"],
    [11, "Novembre"],
    [12, "Desembre"]
])
console.log(elMeuMap)

console.log("------------------------------------")

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
console.log(elMeuMap.has(5))

console.log("------------------------------------")

// 9. Añade al mapa una clave con un array que almacene los meses de verano.
elMeuMap.set("mesosEstiu", ["Juny", "Juliol", "Agost"])
console.log(elMeuMap.get("mesosEstiu"))

console.log("------------------------------------")

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.
let ex10Array = ["Lleida", "Barcelona", "Tarragona", "Girona"]
console.log(ex10Array)
let ex10Set = new Set(ex10Array)
console.log(ex10Set)
let ex10Map = new Map()
ex10Map.set("Poblacions", ex10Set)
console.log(ex10Map)
console.log(ex10Map.get("Poblacions"))

console.log("------------------------------------")
