/* micro desafío 1 */

// test1 --> 30

/* micro desafío 2 */

//test2 --> 20

/* funciones simples */

const prompt = require("prompt-sync")({ sigint: true });

function pulgadaCentimetro(pulgada) {
	return 2.54 * pulgada
}

/* let pulgada = prompt('Pulgadas a convertir')
console.log(pulgada)
console.log(pulgadaCentimetro(pulgada)) */

/* 

Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.

*/

// 2)
function stringUrl(string) {
	return 'http://www.' + string + '.com'
}
/* let string = prompt()
console.log(string)
console.log(stringUrl(string)) */

// 3)
function admiracion(string) {
	return '¡' + string +  '!'
}
/* let string = prompt()
console.log(string)
console.log(admiracion(string)) */

// 4)

function edadPerro(numero) {
	return numero * 7
}
/* let numero = prompt()
console.log(numero)
console.log(edadPerro(numero)) */


// 5)
function sueldo(sueldo) {
	return sueldo/40
}

/* let ingresarSueldo = prompt()
console.log(ingresarSueldo)
console.log(sueldo(ingresarSueldo)) */

/* 
Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.
*/


// 6)
function IMC(altura, peso) {
	return peso/altura
}

/* let altura = prompt('Ingrese altura: ')
console.log(altura)

let peso = prompt('Ingrese peso: ')
console.log(peso)

console.log(IMC(altura, peso)) */

let calcularIMC = (altura, peso) => peso/altura

/* let altura = prompt('Ingrese altura: ')
console.log(altura)

let peso = prompt('Ingrese peso: ')
console.log(peso)

console.log(calcularIMC(altura, peso)) */


// 9)

/* let radio = prompt("radio circulo") */

let perimetro = radio => console.log(parseInt(radio * 2 * Math.PI) ) 

function perimetro2(radio) {
	return radio * 2 * Math.PI
}

/* console.log(perimetro2(radio)) */


// 7) 

function mayuscula(string) {
	return string.toUpperCase()
}

/* let string = prompt('Ingrese palabra: ')
console.log(string)

console.log(mayuscula(string)) */

function tipoDato(dato) {
 return typeof dato
}

/* let dato = prompt()
console.log(typeof dato) */

/* console.log(tipoDato(dato)) */


// extra

function cuenta(altura) {
	return typeof altura
}

let altura = prompt('Ingrese altura: ')
console.log(altura)

/* let peso = prompt('Ingrese peso: ')
console.log(peso) */

console.log(cuenta(altura))
