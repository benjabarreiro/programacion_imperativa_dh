const prompt = require("prompt-sync")({ sigint: true });

/* function ingreseFrase(x) {
  return x
}
let frase = prompt('ingrese frase:')
console.log(ingreseFrase(frase)) */

/* 
let cargar_frase = () => prompt("Ingrese una frase")

let imprimir_frase = una_frase => console.log(una_frase)

imprimir_frase(cargar_frase())
*/

/* function ingreseNombre(x) {
  return 'Hola ' + x + '!'
}
let frase = prompt('ingrese nombre:')
console.log(ingreseNombre(frase)) */

/* let numero1 = parseInt(prompt())
let numero2 = parseInt(prompt())

function suma(x, y) {
  return x + y
}

console.log(suma(numero1, numero2)) */

/* let añoNacimiento = prompt('Ingrese año nacimiento: ')
function calcularEdad(x) {
	let fechaActual = new Date()
	let añoActual = fechaActual.getFullYear()
	let edad = añoActual - x

	return `Tienes ${edad} años`
}
console.log(calcularEdad(añoNacimiento)) */

/* function guessNumber(x) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber)
  if (x === randomNumber) {
    return `Felicitaciones, ese era!`;
  }
  return "Lo siento, intenta nuevamente";
}

console.log(guessNumber(1)); */

/* function pares(x) {
  for (let i = 0; i <= x; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  return 'Termino'
}

console.log(pares(100)); */

/* const nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];

function iterarArray(x) {
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
}

iterarArray(nombres); */


/* function ingreseNumero(x) {
	if(x > 500) {
		console.log(x/100*18)
  }
}

ingreseNumero(1000) */

/* const arr = [11,22]

function elemento(arr) {
	if(arr.length < 3) {
		return -1
	}
	return arr[2]
}

console.log(elemento(arr)) */


/* let numeroNatural = prompt("Ingrese un numero de hasta 2 cifras:");

function cifras(x) {
  let convertirNumber = Number(x);
  if (x.length === 1) {
    return 10 - convertirNumber;
  } else if (x.length === 2) {
    return 100 - convertirNumber;
  } else {
    return "Debes ingresar un numero de hasta 2 cifras";
  }
}

console.log(cifras(numeroNatural)); */


/* let N = prompt("Definir cantidad de notas a ingresar: ");

function promedio(x) {
  let suma = 0;
  for (let i = 0; i < x; i++) {
    let ingreseNotas = parseInt(prompt("Ingresar notas:"))
    suma += ingreseNotas;
  }
  return suma / x;
}

console.log(promedio(N)); */


/* let N = prompt("Numero natural límite: ")

function sumaNaturales(x) {
	let suma = 0
	for(let i=0; i<=x; i++) {
    suma += i
	}
	return suma
}

console.log(sumaNaturales(N)) */
