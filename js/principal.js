let yinYang = document.getElementById("yin-yang")
let baseMain = document.querySelector(".container__main")

const dataBase = [
    { nombre: "Figuras gometricas", imagen:  "https://cdn-icons-png.flaticon.com/128/3873/3873967.png", referencia:"https://nicolasbetancurpavas.github.io/platzi-curso-practico-javacript/figuras.html"},
    { nombre: "Descuentos", imagen: "http://ratecnologia.com.mx/wp-content/uploads/2021/10/Descuentos.png", referencia:"https://nicolasbetancurpavas.github.io/platzi-curso-practico-javacript/descuentos.html"},
    { nombre: "Mediana,moda", imagen: "https://cdn-icons-png.flaticon.com/128/1191/1191678.png", referencia:"https://nicolasbetancurpavas.github.io/platzi-curso-practico-javacript/promedio.html"},
    { nombre: "Salarios", imagen: "https://cdn-icons-png.flaticon.com/128/6043/6043066.png", referencia: "../salarios.html"} ,
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
