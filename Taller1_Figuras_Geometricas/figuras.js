//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
  return lado * lado;
}
areaCuadrado();
console.groupEnd("");

// //Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

//Se hace parentesis porque es la primera operacion que se realiza
//test

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;

//Diametro

function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log(`PI es ${PI}`);
//Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
console.groupEnd();

// Aqui empieza la interaccion con el HTML

function calcularPerimetroCuadrado(params) {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(params) {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
