//codigo del cuadrado 
console.group("Cuadrado")

//const LADOCUADRADO = 5
//console.log("los lados del cuadrado mide: "+LADOCUADRADO)

ladoscuadrado()

function perimetroCuadrado(lado){
    return "el perimetro de tu cuadrado es: "+lado * 4
}

function areaCuadrado(lado){
    return "el area es de tu cuadrado es:"+lado **2+"cm²"
}

//console.log("el area del cuadrado es  : " + area + "cm²")
//codigo triangulo
console.group("triangulo")

function perimetroTriangulo(l1,l2,base) {
    let sumalados = l1+l2+base
    return "el perimetro de tu triangulo mide: "+sumalados+"cm" 
}

function areaTriangulo(base,altura){
    return "El area de un triangulo es:" +base * altura+"cm²" 
}

console.group("Circulo")

function diametroCirculo(radio){
 return "el diametro de tu circulo es: "+radio * 2 
} 

//circuferencia

function PERIMETROCIRCULO(radio){
 const diametro = radio * 2
 return "el perimetro del circulo es: "+ diametro * Math.PI 
}

console.log("el perimetro del circulo es : " + PERIMETROCIRCULO + "cm")

function AREACIRCULO(radio){
    return "el area de tu circulo es: "+radio **2 * Math.PI +"cm"
} 






