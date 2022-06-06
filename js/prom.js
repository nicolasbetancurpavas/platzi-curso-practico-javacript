function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }

    // metodo reduce recorre todo el arreglo
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    )
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }

  // metodo reduce con funcion en flecha 

/*
  let resultado = sueldos.reduce(
    (sum, item) => {
    return sum + item;
}, 0);
return resultado / sueldos.length;
 */


