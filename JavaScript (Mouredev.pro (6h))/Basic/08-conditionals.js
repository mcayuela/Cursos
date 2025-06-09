// CONDICIONALS

// if (si)
let age = 36

if(age == 37) {
    // Bloc de codi
    console.log("L'edat es 37")
}

console.log("------------------------------------")

// else (si no)
if(age == 37) {
    console.log("L'edat es 37")
} else {
    console.log("l'edat no es 37")
}

console.log("------------------------------------")

// else if (si no, si) Serveix per posar condicions entre un if i un else, i en pic veu que una condició no es compleix ja no revisa mes condicions
if(age == 37) {
    console.log("L'edat es 37")
} else if (age < 18) {
    console.log("Es menor d'edat")
} else {
    console.log("l'edat no es 37 pero tampoc es menor d'edat")
}

console.log("------------------------------------")

// Operador ternari (una altra forma reduida d'utilitzar condicionals)
const message = age == 37 ? "L'edat es 37" : "l'edat no es 37"
console.log(message)

console.log("------------------------------------")

// Switch (es una alternativa d'anidar else-if's)
let day = 0
let dayName

switch (day) {
    case 0:
        dayName = "Dilluns"
        break
    case 1:
        dayName = "Dimarts"
        break
    case 2:
        dayName = "Dimecres"
        break
    case 3:
        dayName = "Dijous"
        break
    case 4:
        dayName = "Divendres"
        break
    case 5:
        dayName = "Dissabte"
        break
    case 6:
        dayName = "Diumenge"
        break
    default:
        dayName = "Numero de dia de la setmana incorrecte"
}

console.log(dayName)

console.log("------------------------------------")