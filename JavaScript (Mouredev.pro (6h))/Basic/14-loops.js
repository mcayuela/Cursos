// (LOOPS) BUCLES (Els bucles ens permeten ejecutar un bloc de codi repetidament)
console.log("------------------------------------")

// for

for (let i = 0; i < 5; i++) { // el primer valor es on iniciara la variable, el segon quina condició ha de complir la variable per a ejecutar el contingut del for, i el tercer es que pasarà despres de cada execució del for.
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < 7; i++) { // si posem això, el numero 6 i 7 ens sortira undefined ja que no troba quin es el valor de l'element
    console.log(`Element: ${numbers[i]}`)
}

console.log("------------------------------------")
// per solucionar això, podem utilitzar la propietat .length

const nombres = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) { // si posem això, el numero 6 i 7 ens sortira undefined ja que no troba quin es el valor de l'element
    console.log(`Element: ${numbers[i]}`)
}

console.log("------------------------------------")

// while

let i = 0
while (i < 5) { // similar al for pero sense marcar el valor de la variable ni la condició dins del while (ja que al while es fa a fora)
    console.log(`Hola ${i}`)
    i++
}

// Bucle Infinit
// while (true) {

// }

console.log("------------------------------------")

// do while

i = 6
do {
    console.log(`Hola ${i}`) // lo que esta dins el do s'executa de primeres, i despres al while comproba si compleix amb lo requerit, i si no compleix, finalitza
    i++
} while (i < 5)

console.log("------------------------------------")

// for of

myArray = [1, 2, 3, 4]

mySet = new Set(["Marcel", "Cayuela", "mcayuela", 18])

myMap = new Map([
    ["name", "Marcel"],
    ["email", "mcayueladolcet@gmail.com"],
    ["age", 18]
])

myString = "Hola, JavaScript!"

for (let valor of myArray) {
    console.log(valor)
}

console.log("-----------------")

for (let valor of mySet) {
    console.log(valor)
}

console.log("-----------------")

for (let valor of myMap) {
    console.log(valor)
}

console.log("-----------------")

for (let valor of myString) {
    console.log(valor)
}


console.log("------------------------------------")

// Bones pràctiques

// Evitar bucles infinits amb les paraules reservades continue i break
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
    console.log(`Hola ${i}`)
}

console.log("------------------------------------")
