// Funcions (Functions) 
console.log("------------------------------------")

// Siples
function myFunc() {
    console.log("Hola, Funció")
}

for (let i = 0; i < 5; i++) {
    myFunc() // Executa la nostra funció 1 cop mes cada vegada fins arribar a
}

// Per tant, les funcions ens serveixen per tenir el codi mes net i pulit i executar-les/cridar-les quan ho necesitem

// Amb paràmetres
console.log("------------------------------------")

function myFuncWithParams(name) {
   console.log(`Hola, ${name}`)
}

myFuncWithParams("Marcel")
myFuncWithParams("Cayuela")

// Funcions anònimes
console.log("------------------------------------")

const myFunc2 = function(name) {
    console.log(`Hola, ${name}`)
}

myFunc2("LOL")


// Arrow functions
console.log("------------------------------------")

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

myFunc3("LOL")

// Paràmetres
console.log("------------------------------------")

function sum(a, b) {
    console.log(a + b)
}

sum(10, 5)

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum(5)
defaultSum(b = 20)

// Retorn de valors
console.log("------------------------------------")

function mult(a, b) {
    return a * b
}

console.log(mult(1, 2))

// Funcions encaixades (funciones anidadas)
console.log("------------------------------------")

function extern() {
    console.log("Funció externa")
    function intern() {
        console.log("Funció interna")
    }
    intern()
}

extern()
// intern() fora del scope

// Funcions d'ordre superior
console.log("------------------------------------")

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc3, ("Funció d'ordre superior"))

// forEach
console.log("------------------------------------")

myArray = [1, 2, 3, 4]

myArray.forEach(function (value) {
    console.log(value)
});

myArray.forEach((value) => console.log(value)) // lo mateix que l'altra pero en una arrow function