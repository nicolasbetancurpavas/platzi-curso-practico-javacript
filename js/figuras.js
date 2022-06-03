export function formulas (){

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
}