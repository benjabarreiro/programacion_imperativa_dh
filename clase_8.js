function diezSiguientes(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + i);
  }
}
/* diezSiguientes(10) */

function entreCincoVeinte() {
  for (let i = 5; i <= 20; i = i + 3) {
    console.log(i);
  }
}

/* entreCincoVeinte() */

function ceroCien() {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}

/* ceroCien() */

function factorial(n) {
  let cuenta;
  for (let i = 1; i < n; i++) {
    if (i === 1) {
      cuenta = n * i;
    }
    cuenta = cuenta * i;
  }
  console.log(cuenta);
}

/* factorial(5) */

function fibonacci(n) {
  let numeros = [0, 1];
  for (let i = 2; i < n; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  console.log(numeros);
}

fibonacci(5);
