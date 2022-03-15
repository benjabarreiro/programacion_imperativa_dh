let edad = 1; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
if (edad < 0) {
  !(edad % 2 === 0) && console.log("Sabías que tu edad es imapr");
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
  !(edad % 2 === 0) && console.log("Sabías que tu edad es imapr");
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  !(edad % 2 === 0) && console.log("Sabías que tu edad es imapr");
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad === 21) {
  !(edad % 2 === 0) && console.log("Sabías que tu edad es imapr");
  console.log("Felicitaciones por llegar a los 21 años!");
} else {
  !(edad % 2 === 0) && console.log("Sabías que tu edad es imapr");
  console.log("Puede pasar al bar y tomar alcohol.");
}

function totalAPAgar(vehiculo, litrosConsumidos) {
  if (vehiculo === "coche") {
    let cuenta = litrosConsumidos * 86;
    return litrosConsumidos > 25 ? cuenta + 25 : cuenta + 50;
  } else if (vehiculo === "moto") {
    let cuenta = litrosConsumidos * 70;
    return litrosConsumidos > 25 ? cuenta + 25 : cuenta + 50;
  } else if (vehiculo === "autobus") {
    let cuenta = litrosConsumidos * 55;
    return litrosConsumidos > 25 ? cuenta + 25 : cuenta + 50;
  }
}

/* console.log(totalAPAgar("coche", 0)); */

function sandwiches(
  tipo,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) {
  let precio = 0;

  if (tipo === "pollo") {
    precio += 150;
  } else if (tipo === "carne") {
    precio += 200;
  } else if (tipo === "veggie") {
    precio += 100;
  }

  if (pan === "blanco") {
    precio += 50;
  } else if (pan === "negro") {
    precio += 60;
  } else if (pan === "s/gluten") {
    precio += 75;
  }

  queso && (precio += 20);
  tomate && (precio += 15);
  lechuga && (precio += 10);
  cebolla && (precio += 15);
  mayonesa && (precio += 5);
  mostaza && (precio += 5);

  return precio;
}

/* console.log(
  sandwiches("carne", "s/gluten", true, true, true, true, true, true)
); */

/* extras */

function secretNumber(num) {
  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  console.log(randomNumber);
  if (num === randomNumber) {
    console.log("Felicitaciones!");
  } else {
    console.log("Será la próxima");
  }
}

/* console.log(secretNumber(2)) */

function abrirParacaidas(velocidad, altura) {
  if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
    console.log("Abrir paracaidas");
  } else if (altura < 2000) {
    console.log("Ya es muy tarde :(");
  } else {
    console.log("Todavía no");
  }
}

/* console.log(abrirParacaidas(900, 1000)) */

let stringUno = "perro";
let stringDos = "casa";
let stringTres = "pelota";
let stringCuatro = "arbol";
let stringCinco = "genio";

switch (stringDos) {
  case "perro":
    console.log("dog");
    break;
  case "casa":
    console.log("house");
    break;
  case "pelota":
    console.log("ball");
    break;
  case "arbol":
    console.log("tree");
    break;
  case "genio":
    console.log("genius");
    break;

  default:
	  console.log('Nada')
}

let a = "Muy mala";
let b = "Mala";
let c = "Mediocre";
let d = "Buena";
let e = "Muy buena";

function valoracion(value) {
	let review = "Calificaste la película como " + value
	if(value === (a || b || c)) {
		review += '. Lo lamentamos mucho.'
	} else {
		review += '. Nos pone muy contentos!'
	}
	switch (value) {
		case "Muy mala":
		case "Mala":
		case "Mediocre":
		case "Buena":
		case "Muy buena":
		  console.log(review);
		  break;
	  
		default:
			console.log('Ingresaste un valor invalido')
	  }
}

console.log(valoracion(e))