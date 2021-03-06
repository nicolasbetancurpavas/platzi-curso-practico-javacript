//PROMEDIO
function calcularMediaAritmetica(lista) {

  let arreglo = lista.split(",") 

  const sumaLista = arreglo.reduce(
    (valorAcumulado, nuevoElemento) => {
      return Number(valorAcumulado) + Number(nuevoElemento);
                        
    }
  )
  const promedioLista = sumaLista / arreglo.length;

  return (promedioLista);
}

//MEDIA
   
const MEDIANA = (lista) => {
  
  let array = lista.split(",")
  const esPar = (list) => list.length % 2 === 0
    
    //ordenamos la lista 
    array.sort(
      comparation = (a,b) => a-b
    )

    const Mitad = parseInt(array.length / 2)

    let mediana;
    if (esPar(array)){
      const elemento1 = array[Mitad-1]
      const elemento2 = array[Mitad]
     let sum  = Number(elemento1) + Number(elemento2)
       mediana = sum / 2
    }
    
    else {
      mediana = array[Mitad]
    }

    return mediana
}

  
//MODA
const MODA = (listica) =>{
  let array = listica.split(",")
  const listaCount = {}
  
  //agregamos elementos al objecto donde esta el conteo de cada numero 
  array.map(
    function(elemento){
      if(listaCount[elemento]){
        listaCount[elemento] += 1
      }
     else{
      listaCount[elemento] = 1 
     }
    }
  ); 
  //convertimos el objecto en una matriz que contiene mas arreglos y los ordenamos
  const lista1Array = Object.entries(listaCount).sort(
     comparation = (a,b) => a[1]-b[1] 
  )
  
  const moda =lista1Array[lista1Array.length-1]
  
  let MODADEFINITIVA = moda[0]
  
  return MODADEFINITIVA
}

//GENERO TRAVERSING 
let botonGo =  document.getElementById("play")
let baseFormulario = document.querySelector(".base-form")
console.log(baseFormulario)
console.log(botonGo)

botonGo.addEventListener("click",function generarFormulario(e){

  let header = document.querySelector(".container__header")
  let resultadomedian = document.querySelector(".result")

  resultadomedian.style.position ="static"

  header.style.margin ="10px"
  baseFormulario.innerHTML= ""

  let title = document.createElement("h2")
  title.classList.add("title-form")
  title.textContent = "esta app te permite calcular moda,mediana,promedio ,recuerda escribir una , por cada numero.Tener en cuenta que si ingresas una lista desordenada la app internamente la organiza para un mejor calculo "

  let form = document.createElement("form")
  form.classList.add("form")
  
  let description = document.createElement("h4")
  description.classList.add("description")
  description.textContent="ingresar Numeros"

  input = document.createElement("input")
  input.classList.add("input")
  input.placeholder='Ejemplo 1,2,1,2,3,4'
  input.type= "text"
  console.log(input) 

  let div = document.createElement("div")
  div.classList.add("div-btn-reset")
  
  let btn = document.createElement("input")
  btn.classList.add("btn-form")
  btn.type= "buttom"
  btn.value="enviar"
  
  let btnClean = document.createElement("buttom")
  btnClean.classList.add("btn-clean")
  btnClean.type="buttom"
  btnClean.textContent = "Limpiar"


  baseFormulario.appendChild(title)
  baseFormulario.appendChild(form)
  form.appendChild(description)
  form.appendChild(input)
  form.appendChild(div)
  div.appendChild(btn)
  div.appendChild(btnClean)

  btnClean.addEventListener("click", function(){
    let resultadoMODA = document.querySelector(".result-moda")
    let resultadoMEDIANA = document.querySelector(".result-mediana")
    let resultadoPROM = document.querySelector(".result-prom")

    resultadoMEDIANA.textContent =""
    resultadoMODA.textContent =""
    resultadoPROM.textContent=""

    input.value = ""

  })

  btn.addEventListener("click",function(e){
        
    //resultados
    let resultadoMODA = document.querySelector(".result-moda")
    let resultadoMEDIANA = document.querySelector(".result-mediana")
    let resultadoPROM = document.querySelector(".result-prom")

    e.preventDefault()
    resultadoMODA.textContent = MODA(input.value)
    resultadoMEDIANA.textContent = MEDIANA(input.value)
    resultadoPROM.textContent = calcularMediaAritmetica(input.value)

  })  


})




