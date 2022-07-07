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


let variable = false

// while (variable == false) {
//     let tipo = prompt('Menú Principal. 1.Servicios 2.Productos')
//     switch (tipo) {
//         case '1':
//             alert(servicios.find((el), el.tipo == 1, 2, 3, 4, 5 )),
//             variable = true
//             break;
//         case '2':
//             alert(productos.find((el), el.tipo == 1, 2, 3, 4, 5, 6 , 7, 8, 9 )),
//             variable = true
//             break;
    
//         default:
//             alert('opcion no valida')
//             break;
//     }
    // if (tipo = 1) {
    //     console.log('El Valor del Lavado seria ' + nuevoPrecio) 

    // } else if (tipo = 2){
    //     console.log('El valor de la Limpieza de Tapizado es ' + nuevoPrecio3)
    // }
// }
// arrays

const servicios = [
    {
        tipo: 1,
        nombre: 'Lavado Auto',
        precio: 900,
    },
    {
        tipo: 2,
        nombre: 'Lavado Camioneta',
        precio: 1000,
    },
    {
        tipo: 3,
        nombre: 'Lavado Detallado',
        precio: 1600,
    }
]

servicios.push({tipo: 4, nombre: 'Limpieza Tapizado Basico', Precio: 3800})
servicios.push({tipo: 5, nombre: 'Limpieza tapizado Completo', Precio: 5500} )

console.log(servicios)

const productos = [
    {
        tipo: 1,
        nombre: 'Shampoo ph-neutro 5lt',
        precio: 1400,
    },
    {
        tipo: 2,
        nombre: 'Shampoo siliconado 5lt',
        precio: 1200,
    },
    {
        tipo: 3,
        nombre: 'Apc limpiador 600cc',
        precio: 600,
    },
    {
        tipo: 4,
        nombre: 'Apc Tapizados 1lt',
        precio: 1800,
    },
    {
        tipo: 5,
        nombre: 'Removedor de insectos 600cc',
        precio: 1000,
    },
    {
        tipo: 6,
        nombre: 'Cera Autobrillo 750cc',
        precio: 1200,
    },
    {
        tipo: 7,
        nombre: 'Cera Autobrillo Negro 750cc',
        precio: 1400,
    },
    {
        tipo: 8,
        nombre: 'Revividor de Negros 1lt',
        precio: 1200,
    },
    {
        tipo: 9,
        nombre: 'Silicona 250cc',
        precio: 1800,
    }
]
console.log(productos)

while (variable == false) {
    let tipo = prompt('Menú Principal. 1.Servicios 2.Productos')
    switch (tipo) {
        case '1':
            alert(servicios.find((el), el.tipo == 1, 2, 3, 4, 5 )),
            variable = true
            break;
        case '2':
            alert(productos.find((el), el.tipo == 1, 2, 3, 4, 5, 6 , 7, 8, 9 )),
            variable = true
            break;
    
        default:
            alert('opcion no valida')
            break;
    }}










