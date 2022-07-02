let yinYang = document.getElementById("yin-yang")
let baseMain = document.querySelector(".container__main")

const dataBase = [
    { nombre: "Figuras gometricas", imagen:  "../img/figuras.png", referencia:"../figuras.html"},
    { nombre: "Descuentos", imagen: "../img/Descuentos.png", referencia:"../descuentos.html"},
    { nombre: "Mediana,moda", imagen: "../img/salario.png", referencia:"../promedio.html"},
    { nombre: "Salarios", imagen: "../img/mediana.png", referencia: "../salarios.html"} ,
]


    baseMain.innerHTML=""
    dataBase.forEach( recorrer = (elemento) => {

        let div = document.createElement("div")
        div.classList.add("item-flex__main")

        let href = document.createElement("a")
        href.classList.add("link")
        href.href = elemento.referencia
    
        let h3 = document.createElement("h3")
        h3.classList.add("title_item")
        h3.textContent = elemento.nombre

        let img = document.createElement("img")
        img.classList.add("img")
        img.src = elemento.imagen

        baseMain.appendChild(div)
        div.appendChild(href)
        href.appendChild(h3)
        href.appendChild(img)
    }
    )

    e.preventDefault()
