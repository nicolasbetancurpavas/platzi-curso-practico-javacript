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
// metodo reduce con funcion en flecha 

/*
  let resultado = sueldos.reduce((sum, item) => {
    return sum + item;
}, 0);
return resultado / sueldos.length;
 */

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
