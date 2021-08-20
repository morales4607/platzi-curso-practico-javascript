function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/* const lista1 = [
    100,
    200,
    500,
    400000000,
]; */

function calcularMediana() {
    const inputMediana = document.getElementById("InputMediana");
    const valueMediana = Number (inputMediana.value);

    var listaOrdenada = valueMediana;
    listaOrdenada.sort(function(a, b) {
        return a - b;
    });   

    const media = calcularMediaAritmetica (listaOrdenada);
    alert(media);
}

let listaOrdenada;

const mitadLista1 = parseInt(listaOrdenada.length / 2);

function esPAr(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPAr(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista1 -1];
    const elemento2 = listaOrdenada[mitadLista1];

    const  proemdioElemento1y2 = calcularMediaAritmetica ([
        elemento1,
        elemento2,
    ]);

    mediana = proemdioElemento1y2;
} else {
    mediana = listaOrdenada[mitadLista1];
}