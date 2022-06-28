// inicio datos para turno

let ingreso1 = prompt ('Ingrese su nombre');

let ingreso2 = prompt ('Ingrese el vehiculo a lavar');

let ingreso3 = prompt ('Ingrese su numero para contacto');
ingreso3 = parseInt(ingreso3);

let ingreso4 = prompt('Ingrese su domicilio');

if (isNaN (ingreso3)){
    console.log ('El valor ingresado no corresponde a un numero')
}
console.log(ingreso1)
console.log(ingreso2)
console.log(ingreso3)
console.log(ingreso4)

// costos servicios

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.21

let Lavado  = 900
let Tapizado = 5000
let descuento = 150
let descuento2 = 500
let nuevoPrecio = resta(suma(Lavado, iva(Lavado)), descuento) 
let nuevoPrecio2 = resta(suma(Tapizado, iva(Tapizado)), descuento2)
console.log('El Valor del Lavado seria ' + nuevoPrecio)
console.log('El valor de la Limpieza de Tapizado es ' + nuevoPrecio2)