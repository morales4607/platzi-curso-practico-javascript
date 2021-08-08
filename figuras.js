// Código del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
}
/* console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm"); */

function areaCuadrado(lado) {
    return lado * lado;
}
/* console.log("El área del cuadrado es: " + areaCuadrado + "cm^2"); */
console.groupEnd();

//Código de triángulo
console.group("Triángulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del trinángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
); */

/* const alturaTriangulo = 5.5;
console.log("La altura del Trinágulo es de: " + alturaTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
/* console.log("El perímetro del Trinágulo es: " + perimetroTriangulo + "cm"); */
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTriangulo (lado, base) {
    const altura_1 = (lado**2) - (base/2)**2;
    const altura = Math.sqrt(altura_1);
    return altura;
}
/* console.log("El área del trinágulo es: " + areaTriangulo + "cm^2"); */

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
/* const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm"); */

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Ciicunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interectuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTriangulo1");
    const inputLado2 = document.getElementById("InputTriangulo2");
    const inputBase = document.getElementById("InputTriangulo3");
    const valueLado1 = Number (inputLado1.value);
    const valueLado2 = Number (inputLado2.value);
    const valueBase = Number (inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTriangulo3");
    const inputAltura = document.getElementById("InputTriangulo4");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularAlturaIsosceles() {
    const inputLado1 = document.getElementById("InputIsosceles1");
    const inputLado2 = document.getElementById("InputIsosceles2");
    const inputBase = document.getElementById("InputIsosceles3");
    const valorLado1 = Number (inputLado1.value);
    const valorLado2 = Number (inputLado2.value);
    const valorBase = Number (inputBase.value);
    
    if (valorLado1 === valorLado2) {
        const altura = alturaTriangulo(valorLado1, valorBase);
        alert (altura);
    } else {
        alert("No es un triángulo isósceles, intente de nuevo.");
    }
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}