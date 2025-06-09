// CADENES DE TEXT 

// Concatenació
let myName = "Marcel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

console.log("------------------------------------")
// Longitud
console.log(greeting.length)

console.log("------------------------------------")
// Accès a caracters
console.log(greeting[0])
console.log(greeting[12])

console.log("------------------------------------")
// Mètodes comuns
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Marcel"))
console.log(greeting.indexOf("mcayuela")) // no el trobara perque no existeix
console.log(greeting.includes("Marcel"))
console.log(greeting.includes("mcayuela"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Marcel", "Mcayuela"))

console.log("------------------------------------")
// Template literals (plantilles literals)

let message = `Hola aquest es el meu
curs de javascript`//si escrivim una cadena de text amb els accents podem fer salts de linia 
console.log(message)

let myMail = "mcayueladolcet@gmail.com"
console.log(`Hola, ${myName}, el teu mail es ${myMail}!`) // Gràcies als template literals podem incloure una variable dins d'una cadena de text