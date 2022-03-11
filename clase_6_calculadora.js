const prompt = require("prompt-sync")({ sigint: true });

let sumar = (a, b) => a + b;

let restar = (a, b) => a - b;

let multiplicar = (a, b) => a * b;

let dividir = (a, b) => {
	if(b !== 0) {
		return a / b
	}
	return '¡Error! No se puede dividir por cero'
};

console.log('-----------  Separador de codigo  ------------')

let a = prompt()
let b = prompt()
/* let c = prompt() */

//console.log(sumar(Number(a), Number(b)))
//console.log(restar(Number(a), Number(b)))
//console.log(multiplicar(Number(a), Number(b)))
//console.log(dividir(Number(a), Number(b)))


let cuadradoDeUnNumero = a => multiplicar(a, a)

//console.log(cuadradoDeUnNumero(a))

let promedioDeTresNumeros = (a, b, c) => {
	let suma = sumar(Number(a), Number(b))
	let suma2 = sumar(Number(suma), Number(c))
	return dividir(suma2, 3)
}
/* console.log(promedioDeTresNumeros(a, b, c)) */

let calcularPorcentaje = (a, b) => dividir(multiplicar(b, a), 100)
/* console.log(calcularPorcentaje(a, b)) */

let generadorDePorcentaje = (a, b) => multiplicar(dividir(a, b), 100)
/* console.log(generadorDePorcentaje(a, b)) */