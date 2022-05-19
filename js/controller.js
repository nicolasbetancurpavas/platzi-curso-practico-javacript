//codigo del cuadrado 
console.group("Cuadrado")

const perimetroCuadrado = (lado) => "el perimetro de tu cuadrado es: " + lado * 4 + "cm"
const areaCuadrado = (lado) => "el area es de tu cuadrado es:" + lado ** 2 + "cm²"

//codigo triangulo
console.group("triangulo")

function perimetroTriangulo(l1, l2, base) {
   let sumalados = l1 + l2 + base
   return "el perimetro de tu triangulo mide: " + sumalados + "cm"
}

let areaTriangulo = (base, altura) => "El area de un triangulo es:" + base * altura / 2 + "cm²"

console.group("Circulo")

let diametroCirculo = (radio) => "el diametro de tu circulo es: " + radio * 2 + "cm"

//circuferencia

function PERIMETROCIRCULO(radio) {
   const diametro = radio * 2
   return "el perimetro del circulo es: " + diametro * Math.PI
}

let AREACIRCULO = (radio) => "el area de tu circulo es: " + radio ** 2 * Math.PI + "cm²"


//traversing

let cuadrado = document.getElementById("cuadrado")
let triangulo = document.getElementById("triangulo")
let circulo = document.getElementById("circulo")

//llamando modulo


let base = document.getElementById("menu")

console.log(base)

cuadrado.addEventListener("click", function (e) {

   base.innerHTML = ""

   let formulario = document.createElement("form")
   formulario.classList.add("formulario")
   let label = document.createElement("label")
   label.classList.add("label_text")
   let text = document.createElement("h4")
   text.classList.add("tex")
   text.textContent = "digitar cm lado del cuadrado"
   let divicion = document.createElement("div")
   divicion.classList.add("divicion-input")
   let input = document.createElement("input")
   input.classList.add("input-lado")
   input.type = "number"

   let divicion2 = document.createElement("div")
   divicion2.classList.add("divicion-input")
   let btn = document.createElement("input")
   btn.type = "submit"
   btn.textContent = "Calcular"
   btn.classList.add("btn-form")

   label.appendChild(text)
   formulario.appendChild(label)
   formulario.appendChild(divicion)
   divicion.appendChild(input)
   formulario.appendChild(divicion2)
   divicion2.appendChild(btn)
   base.appendChild(formulario)

   btn.addEventListener("click", function (e) {
      console.log(input.value)
      e.preventDefault()
      let resultadoPerimetro = document.getElementById("resultado-perimetro")
      let resultadoArea = document.getElementById("resultado-area")
      console.log(diametroCirculo(input.value))
      if (input.value > 0) {
         resultadoPerimetro.textContent = perimetroCuadrado(input.value)
         resultadoArea.textContent = areaCuadrado(input.value)
      }
   })

   e.preventDefault()
})

