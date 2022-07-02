let lista1Array = [1,2,3,4,5,6,7,10,20,2,3,4,30]
const Comparation = (list) => list.sort(
    function (a, b){
        return a-b
    }
) 
Comparation(lista1Array)

console.log(lista1Array)

//saber si es par 
// funcion en flecha

const PAR = (lista) => lista.length % 2 === 0  //devuelve booleano
const parsito = (num) => num % 2 === 0
//funcion 

function par (list){
    let result 
    if(list.length % 2 === 0){
    result = console.log("PAR")
    }
    else{
        result = console.log("IMPAR")
    }

    return result // retorna
}

// promedio

function calcularPromedio (lis){

   const SUMA =  lis.reduce(
          (acoumulador,elemento) => {
            return acoumulador + elemento
        } 
    )

    const PROMEDIO = SUMA / lista1Array.length 

    return PROMEDIO
}

console.log(calcularPromedio(lista1Array))
//  promedio con ciclo for 

const PROM = (arreglo) => {
    
    let count = 0
    let prom
    for (let i =0; i < lista1Array.length; i++){
           count = count + lista1Array[i]   
           prom = count / lista1Array.length
    }

    return prom
}

console.log(PROM(lista1Array))
// funcion en flecha para buscar la mitad de un arreglo 
 

function mediana (list) {
    const mitad = parseInt(list.length / 2)
    Comparation(list)
    let prom
    if(PAR(list.length)){
        let elementoUNO = list[mitad-1]
        let elementoDOS = list[mitad]
        prom = elementoUNO + elementoDOS / 2
    }
    else{
        prom = list[mitad]       
    }

    return prom
}

