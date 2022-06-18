//PROMEDIO
function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  // metodo reduce recorre todo el arreglo
  const sumaLista = lista.reduce(
    (valorAcumulado, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
  )
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//MEDIA
const Mediana =(lista)=>{
  const esPar = (lista) => lista.length % 2 == 0
  const Mitad = parseInt(lista.length / 2)

  let mediana;
  
  if (esPar(lista)){
    const elemento1 = lista[Mitad-1]
    const elemento2 = lista[Mitad]
    mediana = calcularMediaAritmetica([elemento1,elemento2])
  }
  
  else {
    mediana = lista[Mitad]
  }
  return mediana
}

//MODA

const MODA = (listica) =>{
  const listaCount = {}
  
  //agregamos elementos al objecto donde esta el conteo de cada numero 
  listica.map(
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
  
  let MODADEFINITIVA = "la moda es "+moda[0]+" y se repite "+moda[1]+" veces"
  
  return MODADEFINITIVA
}

//GENERO TRAVERSING 
let botonGo =  document.getElementById("play")
let baseFormulario = document.querySelector(".base-form")
console.log(baseFormulario)
console.log(botonGo)

botonGo.addEventListener("click",function generarFormulario(e){

  let header = document.querySelector(".container__header")
  header.style.margin ="30px"

  baseFormulario.innerHTML= ""

  let title = document.createElement("h2")
  title.classList.add("title-form")
  title.textContent = "hola usuario bienvenido a nuestra app, esta app te permitira calcular la moda y la mediana de cualquier lista de nuemeros"

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

  let btn = document.createElement("input")
  btn.classList.add("btn-form")
  btn.type= "submit"
  console.log(btn) 

  baseFormulario.appendChild(title)
  baseFormulario.appendChild(form)
  form.appendChild(description)
  form.appendChild(input)
  form.appendChild(btn)
 
})

