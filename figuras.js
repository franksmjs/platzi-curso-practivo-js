// Cuadrado
// Perimetro de un cuadrado es la multiplicacion de la medida de una lado por la cantidad de lados
// Area del cuadro es la multiplicacion de un lado por otro lado para que muestre en cm cuadrado L*L

// Triangulo 
// El perimetro sera la suma de cada lado L+L+L
// El area se debe multiplicar la base por el are divido entre 2 (B*a)/2

// Circulo
// Radio es la medida desde el centro del circulo hasta el otro lado 
// Diamtro es la distancia de un lado al otro
// Para medir la circunferencia es Diamreo*PI(π)
// Area Radio al cuadrado * PI(3.1415)

// Codigo del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es:" + areaCuadrado + "cmˆ2");
console.groupEnd();

// Codigo del triangulo

// const ladoTriangulo1= 6;
// const ladoTriangulo2= 6;
// const baseTriangulo= 4;
// console.log(
// "Los lados del triangulo miden:"
// + ladoTriangulo1
// + "cm,"
// + ladoTriangulo2
// + "cm,"
// + baseTriangulo
// + "cm"
//);

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
};
// console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base * altura) / 2;
};
console.log("El area del triangulo es:" + areaTriangulo +"cmˆ2");

console.groupEnd();

// Circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es:" + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es:" + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI; 
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
