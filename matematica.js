const PlatziMath={}

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}
PlatziMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
    
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = PlatziMath.ordenarListaBidimensional(listaArray, 1)
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0];
    // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
    // console.log('La moda es: ' + listaMaxNumber[0]);
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);
    
    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);  
    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
        function ordenarListaSort(valorAcumulado, nuevoValor) {
      // if (valorAcumulado > nuevoValor) {
      //   return 1;
      // } else if (valorAcumulado == nuevoValor) {
      //   return 0;
      // } else if (valorAcumulado < nuevoValor) {
      //   return -1;
      // }
        
        return valorAcumulado - nuevoValor;
      // return nuevoValor - valorAcumulado;
      // return 5 - 10 -> -5;
      // return 5 - 5 -> 0;
      // return 10 - 5 -> 5;
    }
    
    // const lista = listaDesordenada.sort(ordenarListaSort);
    const lista = listaDesordenada.sort((a,b) => a-b);
    
    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
    }
    
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

// https://platzi.com/clases/3435-javascript-practico-matematicas/51513-metodo-sort/