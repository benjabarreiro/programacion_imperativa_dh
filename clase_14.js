const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let menor18 = [];
let mayorIgual18 = [];
let igual18 = [];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] < 18) {
    menor18.push(edades[i]);
  } else {
    mayorIgual18.push(edades[i]);
    if (edades[i] === 18) {
      igual18.push(edades[i]);
    }
  }
}

/* console.log(menor18)
console.log(mayorIgual18)
console.log(igual18) */

/* let menor = 0;
for (let i = 0; i < edades.length; i++) {
  if (i === 0) {
    menor = edades[i];
  } else if (edades[i] < menor) {
    menor = edades[i];
  }
} */

let menor = Math.min(...edades);
let mayor = Math.max(...edades);

/* console.log(menor);
console.log(mayor); */

let suma = 0;
for (let i = 0; i < edades.length; i++) {
  suma += edades[i];
}

let promedio = suma / edades.length;
/* console.log(promedio) */

for (let i = 0; i < edades.length; i++) {
  edades[i] += 2;
}
//console.log(edades)

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

let menores = []
let mayores = []
let iguales = []
for(let i=0; i<arrayCuentas.length ; i++ ) {
	if(arrayCuentas[i].edadTitular < 30) {
		menores.push(arrayCuentas[i])
	} else {
		mayores.push(arrayCuentas[i])
		if(arrayCuentas[i].edadTitular === 30) {
			iguales.push(arrayCuentas[i])
		}
	}
}

/* console.log(menores)
console.log(mayores) */
console.log(iguales)

let cuentasMenor
for (let i = 0; i< arrayCuentas.length ; i++) {
	if (i === 0) {
		cuentasMenor = arrayCuentas[i];
	  } else if (arrayCuentas[i].edadTitular < cuentasMenor.edadTitular) {
		cuentasMenor = arrayCuentas[i];
	  }
}

console.log(cuentasMenor)