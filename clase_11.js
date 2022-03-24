let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

const banco = {
  clientes: arrayCuentas,
  consultarCliente: function(titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular === this.clientes[i].titularCuenta) {
        return this.clientes[i];
      }
    }
  },
  deposito: function(titular, dinero) {
	  this.consultarCliente(titular).saldoEnPesos += dinero
	  return "Depósito realizado, su nuevo saldo es: XXXX"
  },
  extraccion: function(titular, monto) {
	  let resta = this.consultarCliente(titular).saldoEnPesos -= monto
	  if(resta < 0) {
		  return "Fondos insuficientes"
	  }
	  return "Extraccion realizada correctamente, su nuevo saldo es: XXXX"
  }
};

console.log(banco.extraccion("Jacki Shurmer", 1111))