// helpers
const ESPAR = (num) => num % 2 === 0
let resultMediana

//nuevo arreglo salarios lo ordenamos
const salarioscol = colombia.map(
    function (persona) {
        return persona.salary
    }
)
//orden en el arreglo de salarios 
const salarioOrden = salarioscol.sort(
    compartion = (a, b) => a - b
)

//  mediana calculador
const MEDIANA = (lista) => {

    let mitad = parseInt(lista.length / 2)

    if (ESPAR(lista.length)) {
        let elementoUNO = lista[mitad - 1]
        let elementoDOS = lista[mitad]
        let mitadPar = elementoUNO + elementoDOS
        resultMediana = mitadPar / 2

    }
    else {
        resultMediana = lista[mitad]
    }

    return resultMediana

}

//Mediana del top 10%
const splicecstart = salarioOrden.length * 90 / 100 // quita el 10% del valor inicial
const spliteCount = salarioOrden.length - splicecstart

const salariosTop10 = salarioOrden.splice(splicecstart, spliteCount)

const medianaTop10 = MEDIANA(salariosTop10)

console.log({
    medianaTop10
})

