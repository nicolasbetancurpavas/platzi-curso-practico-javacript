
console.group("Cuadrado");

const perimetroCuadrado = (lado) => "el perimetro de tu cuadrado es: " + lado * 4 + "cm";
const areaCuadrado = (lado) => "el area es de tu cuadrado es:" + lado ** 2 + "cm²";

//codigo triangulo
console.group("triangulo");

function perimetroTriangulo(l1, l2, base) {
  let sumalados = l1 + l2 + base;
  return "el perimetro de tu triangulo mide: " + sumalados + "cm";
}

let areaTriangulo = (base, altura) => "El area de un triangulo es:" + (base * altura) / 2 + "cm²";

console.group("Circulo");

let diametroCirculo = (radio) => "el diametro de tu circulo es: " + radio * 2 + "cm";

//circuferencia

function PERIMETROCIRCULO(radio) {
  const diametro = radio * 2;
  return "el perimetro del circulo es: " + diametro * Math.PI;
}

let AREACIRCULO = (radio) => "el area de tu circulo es: " + radio ** 2 * Math.PI + "cm²";

//traversing

let cuadrado = document.getElementById("cuadrado");
let triangulo = document.getElementById("triangulo");
let circulo = document.getElementById("circulo");

//llamando modulo

let base = document.getElementById("menu");

console.log(base);

cuadrado.addEventListener("click", function (e) {

  // oculto otro resultados
  let resultadoPerimetro = document.getElementById("resultado-perimetro");
  let resultadoArea = document.getElementById("resultado-area");
  let resultadoDiametro = document.getElementById("resultado-diametro");

  resultadoPerimetro.textContent = ""
  resultadoArea.textContent = ""
  resultadoDiametro.textContent = ""

  // oculto diamentro
  let baseResultados = document.getElementById("item_resultado-diametro");
  baseResultados.style.display = "none";

  base.innerHTML = "";

  let formulario = document.createElement("form");
  formulario.classList.add("formulario");
  let label = document.createElement("label");
  label.classList.add("label_text");
  let text = document.createElement("h4");
  text.classList.add("tex");
  text.textContent = "digitar cm lado del cuadrado";
  let divicion = document.createElement("div");
  divicion.classList.add("divicion-input");
  let input = document.createElement("input");
  input.classList.add("input-lado");
  input.type = "number";

  let divicion2 = document.createElement("div");
  divicion2.classList.add("divicion-input");
  let btn = document.createElement("input");
  btn.value = "Calcular";
  btn.classList.add("btn-form");

  label.appendChild(text);
  formulario.appendChild(label);
  formulario.appendChild(divicion);
  divicion.appendChild(input);
  formulario.appendChild(divicion2);
  divicion2.appendChild(btn);
  base.appendChild(formulario);

  btn.addEventListener("click", function (e) {
    let resultadoPerimetro = document.getElementById("resultado-perimetro");
    let resultadoArea = document.getElementById("resultado-area");
    if (input.value > 0) {
      resultadoPerimetro.textContent = perimetroCuadrado(input.value);
      resultadoArea.textContent = areaCuadrado(input.value);
    }
  });

  e.preventDefault();
});

circulo.addEventListener("click", function (e) {

  // borro resultados anteriores
  let resultadoPerimetro = document.getElementById("resultado-perimetro");
  let resultadoArea = document.getElementById("resultado-area");
  let resultadoDiametro = document.getElementById("resultado-diametro");

  resultadoPerimetro.textContent = ""
  resultadoArea.textContent = ""
  resultadoDiametro.textContent = ""

  //mostrar perimetro
  let baseResultados = document.getElementById("item_resultado-diametro");
  baseResultados.style.display = "block";

  base.innerHTML = "";

  let formulario = document.createElement("form");
  formulario.classList.add("formulario");
  let label = document.createElement("label");
  label.classList.add("label_text");
  let text = document.createElement("h4");
  text.classList.add("tex");
  text.textContent = "digitar radio de tu circulo";
  let divicion = document.createElement("div");
  divicion.classList.add("divicion-input");
  let input = document.createElement("input");
  input.classList.add("input-lado");
  input.type = "number";

  let divicion2 = document.createElement("div");
  divicion2.classList.add("divicion-input");
  let btn = document.createElement("input");
  btn.value = "Calcular";
  btn.classList.add("btn-form");

  label.appendChild(text);
  formulario.appendChild(label);
  formulario.appendChild(divicion);
  divicion.appendChild(input);
  formulario.appendChild(divicion2);
  divicion2.appendChild(btn);
  base.appendChild(formulario);

  btn.addEventListener("click", function (e) {
    let resultadoPerimetro = document.getElementById("resultado-perimetro");
    let resultadoArea = document.getElementById("resultado-area");
    let resultadoDiametro = document.getElementById("resultado-diametro");

    if (input.value > 0) {
      resultadoDiametro.textContent = diametroCirculo(input.value);
      resultadoArea.textContent = AREACIRCULO(input.value);
      resultadoPerimetro.textContent = PERIMETROCIRCULO(input.value);
    }

    e.preventDefault();
  });

  e.preventDefault();
});

triangulo.addEventListener("click", function (e) {

  // borro resultados anteriores
  let resultadoPerimetro = document.getElementById("resultado-perimetro");
  let resultadoArea = document.getElementById("resultado-area");
  let resultadoDiametro = document.getElementById("resultado-diametro");

  resultadoPerimetro.textContent = ""
  resultadoArea.textContent = ""
  resultadoDiametro.textContent = ""

  // oculto diamentro

  let baseResultados = document.getElementById("item_resultado-diametro");
  baseResultados.style.display = "none";

  base.innerHTML = "";

  let formulario = document.createElement("form");
  formulario.classList.add("formulario-T");

  let label = document.createElement("label");
  label.classList.add("label_text-T");

  let text = document.createElement("h4");
  text.classList.add("tex-T");
  text.textContent = "digitar Lado A triangulo";

  let input = document.createElement("input");
  input.classList.add("input-lado-T");
  input.type = "number";

  let formulario2 = document.createElement("form");
  formulario2.classList.add("formulario-T");

  let label2 = document.createElement("label");
  label2.classList.add("label_text-T");

  let text2 = document.createElement("h4");
  text2.classList.add("tex-T");
  text2.textContent = "digitar Lado B triangulo";

  let input2 = document.createElement("input");
  input2.classList.add("input-lado-T");
  input2.type = "number";

  let formulario3 = document.createElement("form");
  formulario3.classList.add("formulario-T");

  let label3 = document.createElement("label");
  label3.classList.add("label_text-T");

  let text3 = document.createElement("h4");
  text3.classList.add("tex-T");
  text3.textContent = "digitar Base triangulo";

  let input3 = document.createElement("input");
  input3.classList.add("input-lado-T");
  input3.type = "number";

  let formulario4 = document.createElement("form");
  formulario4.classList.add("formulario-T");

  let label4 = document.createElement("label");
  label4.classList.add("label_text-T");

  let text4 = document.createElement("h4");
  text4.classList.add("tex-T");
  text4.textContent = "digitar Altura triangulo";

  let input4 = document.createElement("input");
  input4.classList.add("input-lado-T");
  input4.type = "number";

  let divicion2 = document.createElement("div");
  divicion2.classList.add("divicion-input-T");
  let btn = document.createElement("input");
  btn.value = "Calcular";
  btn.classList.add("btn-form-T");

  label.appendChild(text)
  formulario.appendChild(label)
  formulario.appendChild(input)
  base.appendChild(formulario)

  label2.appendChild(text2)
  formulario2.appendChild(label2)
  formulario2.appendChild(input2)
  base.appendChild(formulario2)

  label3.appendChild(text3)
  formulario3.appendChild(label3)
  formulario3.appendChild(input3)
  base.appendChild(formulario3)

  label4.appendChild(text4)
  formulario4.appendChild(label4)
  formulario4.appendChild(input4)
  base.appendChild(formulario4)

  divicion2.appendChild(btn)
  base.appendChild(divicion2)

  btn.addEventListener("click", function (e) {
    let resultadoPerimetro = document.getElementById("resultado-perimetro");
    let resultadoArea = document.getElementById("resultado-area");

    if (input.value > 0 && input2.value > 0 && input3.value > 0 && input4.value > 0) {
      resultadoArea.textContent = areaTriangulo(input3.value,input4.value)
      resultadoPerimetro.textContent = perimetroTriangulo(parseInt(input.value),parseInt(input2.value),parseInt(input3.value))
    }

    e.preventDefault();
  });


  e.preventDefault()

})

