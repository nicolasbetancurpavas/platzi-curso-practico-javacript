let bdProductos = [
    {
        DESC: "20%",
        nombre: "Duke 200cc 2022",
        descripcion: "Esta luchadora es la única motocicleta naked de 200 cc dotada de un ADN de competición pura.",
        foto: "img/duke200.png",
        precio: 12990000,
        descuento: 20
    },

    {
        DESC: "30%",
        nombre: "Duke 200cc NG 2022",
        descripcion: "Esta guerrera es la única naked de 200 cc con ADN de carreras real. ",
        foto: "img/duke200ng.png",
        precio: 14990000,
        descuento: 30
    },

    {
        DESC: "40%",
        nombre: "Duke 390cc 2022",
        descripcion: "La KTM 390 DUKE es un puro ejemplo del porqué tanta gente se siente atraída por la emoción del motociclismo urbano. ",
        foto: "img/duke390.png",
        precio: 25990000,
        descuento: 40

    },

    {
        DESC: "50%",
        nombre: "Duke 890cc 2022",
        descripcion: "La KTM 890 DUKE redefine la palabra “afilado” subiendo un peldaño extra.",
        foto: "img/890.png",
        precio: 54990000,
        descuento: 50
    },

    {
        DESC: "20%",
        nombre: "Duke 890R 2022",
        descripcion: "La KTM 890 DUKE redefine la palabra “afilado” subiendo un peldaño extra. ",
        foto: "img/890R.png",
        precio: 59990000,
        descuento: 20
    },

    {
        DESC: "10%",
        nombre: "1200cc super Duke 2021",
        descripcion: "THE BEAST no entiende de palabras vacías o de lanzar puñetazos al aire. Contundente,",
        foto: "img/1290.png",
        precio: 99990000,
        descuento: 10
    },
];

// visualizo los productos por medio del traversing
let base = document.getElementById("base-productos")

bdProductos.forEach(function (producto) {


    let contenedor = document.createElement("div")
    contenedor.classList.add("item__producto")

    let title = document.createElement("h2")
    title.classList.add("title__producto")
    title.textContent = producto.nombre

    let img = document.createElement("img")
    img.classList.add("img-producto")
    img.src = producto.foto

    let porcent = document.createElement("h5")
    porcent.textContent = producto.descuento + " % de descuento"
    porcent.classList.add("desc")

    let descripcion = document.createElement("p")
    descripcion.classList.add("descripcion-producto")
    descripcion.textContent = producto.descripcion

    let precio = document.createElement("h5")

    precio.textContent = "Precio antes: " + producto.precio + " $"
    precio.classList.add("price")

    let diviciocheck = document.createElement("div")
    diviciocheck.classList.add("div-check")

    let textcheck = document.createElement("p")
    textcheck.textContent = "Usar cupon 10%"
    textcheck.classList.add("text-check")

    let chekbox = document.createElement("input")
    chekbox.type = "checkbox"
    chekbox.classList.add("checkbox")
    chekbox.setAttribute("id", "checkbox")
    chekbox.name = "micheckbox"

    let div = document.createElement("div")
    div.classList.add("container-btn")

    let boton = document.createElement("button")
    boton.classList.add("btn-car")
    boton.textContent = "Ver Ahorro"


    let resultadoAhorro = document.createElement("h5")
    resultadoAhorro.classList.add("price-new")
    resultadoAhorro.textContent = "nuevo precio"

    contenedor.appendChild(title)
    contenedor.appendChild(img)
    contenedor.appendChild(porcent)
    contenedor.appendChild(descripcion)
    contenedor.appendChild(precio)
    contenedor.appendChild(diviciocheck)
    diviciocheck.appendChild(chekbox)
    diviciocheck.appendChild(textcheck)
    contenedor.appendChild(div)
    div.appendChild(boton)
    div.appendChild(resultadoAhorro)
    base.appendChild(contenedor)
})

// genero el scroll horizontal de los productos
let left = document.querySelector(".movent-left") // manera de nexo del elemento html por su clase
let right = document.querySelector(".movent-right") // manera de nexo del elemento html por su clase
let contendorScroll = document.querySelector(".container__products") // manera de nexo del elemento html por su clase

left.addEventListener('click', (e) => {
    contendorScroll.scrollLeft -= 85

})

right.addEventListener('click', (e) => {
    contendorScroll.scrollLeft += 85
    e.preventDefault()
})

//funcion para el descuento

function sacarDescuento(cantidad, desc) {
    let formula = 100 - desc
    let descuentoAplicado = cantidad * formula / 100
    return descuentoAplicado
}

let itemproducto = document.querySelector(".container__products") // este clase la tienen  todas las card y solo me reconoce la primera cards

//agregando descuentos diferentes a cada moto (producto)
itemproducto.childNodes[1].childNodes[5].childNodes[1].textContent = "descuento 20%"
itemproducto.childNodes[2].childNodes[5].childNodes[1].textContent = "descuento 40%"
itemproducto.childNodes[5].childNodes[5].childNodes[1].textContent = "descuento 20%"


//funciones para operar el descuento

//modal para recodar chequeo de descuento 

console.log(itemproducto.childNodes[1].childNodes[6].childNodes[0])

itemproducto.childNodes[1].childNodes[6].childNodes[0].addEventListener("click", function (e) {


    // condiciono buscando el hijo donde esta el cheked
    if (itemproducto.childNodes[1].childNodes[5].childNodes[0].checked) {
        // llame la funcion dos veces               
        itemproducto.childNodes[1].childNodes[6].childNodes[1].textContent = sacarDescuento(sacarDescuento(bdProductos[0].precio, bdProductos[0].descuento), 20) + " $Ahora"
    }
    else {
        itemproducto.childNodes[1].childNodes[6].childNodes[1].textContent = sacarDescuento(bdProductos[0].precio, bdProductos[0].descuento) + " $Ahora"
    }

})

itemproducto.childNodes[2].childNodes[6].childNodes[0].addEventListener("click", function (e) {

    if (itemproducto.childNodes[2].childNodes[5].childNodes[0].checked) {
        itemproducto.childNodes[2].childNodes[6].childNodes[1].textContent = sacarDescuento(sacarDescuento(bdProductos[1].precio, bdProductos[1].descuento), 40) + " $Ahora"
    }
    else {
        itemproducto.childNodes[2].childNodes[6].childNodes[1].textContent = sacarDescuento(bdProductos[1].precio, bdProductos[1].descuento) + " $Ahora"
    }

})

itemproducto.childNodes[3].childNodes[6].childNodes[0].addEventListener("click", function (e) {
    if (itemproducto.childNodes[3].childNodes[5].childNodes[0].checked) {
        itemproducto.childNodes[3].childNodes[6].childNodes[1].textContent = sacarDescuento(sacarDescuento(bdProductos[2].precio, bdProductos[2].descuento), 10) + " $Ahora"
    }
    else {
        itemproducto.childNodes[3].childNodes[6].childNodes[1].textContent = sacarDescuento(bdProductos[2].precio, bdProductos[2].descuento) + " $Ahora"
    }

})

itemproducto.childNodes[4].childNodes[6].childNodes[0].addEventListener("click", function (e) {
    if (itemproducto.childNodes[4].childNodes[5].childNodes[0].checked) {
        itemproducto.childNodes[4].childNodes[6].childNodes[1].textContent = sacarDescuento(sacarDescuento(bdProductos[3].precio, bdProductos[3].descuento), 10) + " $Ahora"
    }
    else {
        itemproducto.childNodes[4].childNodes[6].childNodes[1].textContent = sacarDescuento(bdProductos[3].precio, bdProductos[3].descuento) + " $Ahora"
    }

})

itemproducto.childNodes[5].childNodes[6].childNodes[0].addEventListener("click", function (e) {
    if (itemproducto.childNodes[5].childNodes[5].childNodes[0].checked) {
        itemproducto.childNodes[5].childNodes[6].childNodes[1].textContent = sacarDescuento(sacarDescuento(bdProductos[4].precio, bdProductos[4].descuento), 20) + " $Ahora"
    }
    else {
        itemproducto.childNodes[5].childNodes[6].childNodes[1].textContent = sacarDescuento(bdProductos[4].precio, bdProductos[4].descuento) + " $Ahora"
    }

})

itemproducto.childNodes[6].childNodes[6].childNodes[0].addEventListener("click", function (e) {
    if (itemproducto.childNodes[6].childNodes[5].childNodes[0].checked) {
        itemproducto.childNodes[6].childNodes[6].childNodes[1].textContent = sacarDescuento(sacarDescuento(bdProductos[5].precio, bdProductos[5].descuento), 10) + " $Ahora"
    }
    else {
        itemproducto.childNodes[6].childNodes[6].childNodes[1].textContent = sacarDescuento(bdProductos[5].precio, bdProductos[5].descuento) + " $Ahora"
    }

})

