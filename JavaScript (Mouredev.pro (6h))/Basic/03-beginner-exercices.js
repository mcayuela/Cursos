// EXERCICIS

// 1. Escribe un comentario en una lÃ­nea.

    // Comentari

// 2. Escribe un comentario en varias lÃ­neas.

    /*
    Comentari
    en varies
    linies
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.

    let myName = "Marcel"
    let myNumber = 5 //tmb podria ficar decimals
    let myBoolean = true
    let myBigInt3 = 123234532145234523452345n
    let mySymbol2 = Symbol("mySymbol2")
    let myNull = null
    let undefinedValue = undefined

// 4. Imprime por consola el valor de todas las variables.
console.log("------------------------------------")

    console.log(myName)
    console.log(myNumber)
    console.log(myBoolean)
    console.log(myBigInt3)
    console.log(mySymbol2)
    console.log(myNull)
    console.log(undefinedValue)

// 5. Imprime por consola el tipo de todas las variables.
console.log("------------------------------------")

    console.log(typeof myName) 
    console.log(typeof myNumber)
    console.log(typeof myBoolean)
    console.log(typeof myBigInt3)
    console.log(typeof mySymbol2)
    console.log(typeof myNull)
    console.log(typeof undefinedValue)

// 6. A continuaciÃ³n, modifica los valores de las variables por otros del mismo tipo.

    myName = "Cayuela"
    myNumber = 3.6
    myBoolean = false
    myBigInt3 = 33333333333333333333333n
    mySymbol2 = Symbol("mySymbolprova")
    myNull = null
    undefinedValue = undefined

// 7. A continuaciÃ³n, modifica los valores de las variables por otros de distinto tipo.

    myName = 123
    myNumber = "dos coma sis"
    myBoolean = 33333333333n
    myBigInt3 = Symbol("text")
    mySymbol2 = 23
    myNull = 'ja no es null aixo'
    undefinedValue = false

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.

    const myNameConst = "Marcel"
    const myNumberConst = 5 //tmb podria ficar decimals
    const myBooleanConst = true
    const myBigInt3Const = 123234532145234523452345n
    const mySymbol2Const = Symbol("mySymbol2")
    const myNullConst = null
    // const undefinedValue

// 9. A continuaciÃ³n, modifica los valores de las constantes.

    // No es pot, les constants son variables que han de mantenir el mateix valor desde que es creen fins que s'eliminen.

// 10. Comenta las lÃ­neas que produzcan algÃºn tipo de error al ejecutarse.