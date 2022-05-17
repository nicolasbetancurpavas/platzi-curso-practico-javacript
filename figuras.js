//codigo del cuadrado 
console.group("Cuadrado")
const LADOCUADRADO = 5;

console.log("los lados del cuadrado miden: " + LADOCUADRADO + "cm")

perimetro = LADOCUADRADO * 4;
console.log("el perimetro del cuadrado es : " + perimetro + "cm")

area = LADOCUADRADO * LADOCUADRADO;

console.log("el area del cuadrado es  : " + area + "cm²")
//codigo triangulo
console.group("triangulo")

const LADOTRIAGULO = 6;
const LADOTRIAGULO2 = 6;
const LADOTRIAGULO3 = 4;

console.log("los lados del trinagulo miden: " + LADOTRIAGULO + "cm, "
    + LADOTRIAGULO2 + "cm "
    + LADOTRIAGULO3 + "cm ")

const baseTriangulo = 5.5
const alturaTriangulo = 4.2

perimetroTriangulo = LADOTRIAGULO + LADOTRIAGULO2 + LADOTRIAGULO3
const areaTriangulo = baseTriangulo * alturaTriangulo

console.log("el perimetro del triangulo es : " + perimetroTriangulo + "cm ")

console.log("el area del triangulo es : " + areaTriangulo + "cm²")
console.group("Circulo")

//radio
const radioCirculo = 4
console.log("el radio del circulo es: " + radioCirculo + "cm")
// diametro 

const diametroCirculo = radioCirculo * 2
//pi
console.log("el diametro del circulo es: " + diametroCirculo + "cm")

const PI = Math.PI
console.log("Pi es: " + PI)

//circuferencia

const PERIMETROCIRCULO = diametroCirculo * PI
console.log("el perimetro del circulo es : " + PERIMETROCIRCULO + "cm")

const AREACIRCULO = radioCirculo * radioCirculo * PI

console.log("el area del circulo es: " + AREACIRCULO + "cm²")




