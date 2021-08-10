//Helpers

function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  

//Calculadora de Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
            return mediana
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


//Mediana General
const salarioRd = RD.map(
    function(personita) {
        return personita.salary;
    }
);


 
salariosRdSorted = salariosRd.sort(
    function(salaryA, SalaryB){
        return salaryA - SalaryB;
    }
)

const medianaGeneralRD = medianaSalarios(salariosRdSorted);


// Mediana del top 10%

const spliceStar = (salariosRdSorted.length * (90)/100);
const spliceCount = salariosRdSorted.length - spliceStar;

const salariosRdTop10 = salariosRdSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10RD = medianaSalarios(salariosRdTop10);

console.log({
    medianaGeneralRD,
    medianaTop10RD
}
    
);