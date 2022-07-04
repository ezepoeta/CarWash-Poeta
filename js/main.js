// inicio datos para turno

let ingreso1 = prompt ('Ingrese su nombre');

let ingreso2 = prompt ('Ingrese su numero para contacto');
ingreso2 = parseInt(ingreso2);

let ingreso3 = prompt('Ingrese su domicilio');

if (isNaN (ingreso2)){
    console.log ('El valor ingresado no corresponde a un numero')
}
console.log(ingreso1)
console.log(ingreso2)
console.log(ingreso3)


// costos servicios

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.21

let Lavadoauto  = 900
let Lavadocamioneta = 1000
let Tapizado = 5000
let descuento = 150
let descuento2 = 500
let nuevoPrecio = resta(suma(Lavadoauto, iva(Lavadoauto)), descuento)
let nuevoPrecio2 = resta(suma(Lavadocamioneta, iva(Lavadocamioneta)), descuento) 
let nuevoPrecio3 = resta(suma(Tapizado, iva(Tapizado)), descuento2)
// console.log('El Valor del Lavado seria ' + nuevoPrecio)
// console.log('El valor de la Limpieza de Tapizado es ' + nuevoPrecio3)

let variable = false

while (variable == false) {
    let tipo = prompt('Que tipo de lavado desea? 1. Lavado Premium 2.Limpieza de Tapizados')
    switch (tipo) {
        case '1':
            alert('Usted ha seleccionado Lavado Premium')
            variable = true
            break;
        case '2':
            alert('Usted ha seleccionado Limpieza de Tapizados')
            variable = true
            break;
    
        default:
            alert('opcion no valida')
            break;
    }
    if (tipo = 1) {
        console.log('El Valor del Lavado seria ' + nuevoPrecio) 

    } else if (tipo = 2){
        console.log('El valor de la Limpieza de Tapizado es ' + nuevoPrecio3)
    }
}
// arrays
const servicios = [];
servicios.push('tipo:1', 'Nombre: Lavado Auto', 'Precio: 900', 'Descuento 100' )
servicios.push('tipo :2', 'Nombre Lavado Camioneta', 'Precio 1000', 'Descuento 150' )
servicios.push('tipo 3', 'Nombre Limpieza Tapizado Basico', 'Precio 3800', 'Descuento 300')
servicios.push('tipo 4', 'Nombre Limpieza tapizado Completo', 'Precio 5500', 'Descuento 300' )

console.log(servicios)

















