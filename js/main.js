// inicio datos para turno
// let ingreso1 = prompt ('Ingrese su nombre');
// let ingreso2 = prompt ('Ingrese su numero para contacto');
// ingreso2 = parseInt(ingreso2);
// let ingreso3 = prompt('Ingrese su domicilio');

// if (isNaN (ingreso2)){
//     console.log ('El valor ingresado no corresponde a un numero')
// }
// console.log(ingreso1)
// console.log(ingreso2)
// console.log(ingreso3)


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
        stock: 5
    },
    {
        tipo: 2,
        nombre: 'Shampoo siliconado 5lt',
        precio: 1200,
        stock: 8
    },
    {
        tipo: 3,
        nombre: 'Apc limpiador 600cc',
        precio: 600,
        stock: 16
    },
    {
        tipo: 4,
        nombre: 'Apc Tapizados 1lt',
        precio: 1800,
        stock: 9
    },
    {
        tipo: 5,
        nombre: 'Removedor de insectos 600cc',
        precio: 1000,
        stock: 14
    },
    {
        tipo: 6,
        nombre: 'Cera Autobrillo 750cc',
        precio: 1200,
        stock: 20
    },
    {
        tipo: 7,
        nombre: 'Cera Autobrillo Negro 750cc',
        precio: 1400,
        stock: 10
    },
    {
        tipo: 8,
        nombre: 'Revividor de Negros 1lt',
        precio: 1200,
        stock: 24
    },
    {
        tipo: 9,
        nombre: 'Silicona 250cc',
        precio: 1800,
        stock: 8
    }
]
console.log(productos)

// /////////////////////////////////////////////////////////

const carrito = []

function agregarCarrito (id) {
    carrito.push(productos.find(r=>r.tipo == id))
    console.log(carrito)}

const cardContainer = document.querySelector('#cardContainer')

let html = productos.map((producto)=> {
    return(
        `
        <div class="card" style="width: 15%">
          <img src="${producto.img}" class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">${producto.nombre} </h5>
            <p class="card-text">$${producto.precio}</p>
            <button onClick="agregarCarrito(${producto.tipo})"> Agregar al Carrito</button>
         </div>
        </div>
        `
    )
})
cardContainer.innerHTML = html
console.log(carrito);

// Operador AND
carrito.length === 0 && console.log("El Carrito esta Vacio");

productos.forEach((r)=>{
    console.log('Stock de productos \n' + r.nombre + '=' + r.stock);
}) 

// Desestructuracion
const [nombre, precio, stock] = productos
console.log(nombre, precio, stock);

// Spread
console.log(...productos);



const h3 = document.getElementById("turnos")
console.log(h3);

const contenedor = document.getElementById("productos");
const div = document.createElement("div")
div.innerHTML = "<h3> Productos</h3>";
contenedor.appendChild(div)

let producto = { id: 1,  nombre: "Shampoo siliconado 5lt", precio: 1200 };
let plantilla = `ID: ${producto.id} Producto: ${producto.nombre} $ ${producto.precio}`

console.log(plantilla);

// eventos

let Contacto = document.getElementById("form");
Contacto.addEventListener("submit", validarFormulario);
function validarFormulario(e){
e.preventDefault ();
console.log("Formulario Enviado")
}

let input1 = document.getElementById("Nombre");
input1.addEventListener('input',() => {console.log(input1.value)})

let input2 = document.getElementById("Email");
input1.addEventListener('input',() => {console.log(input2.value)})

let input3 = document.getElementById("Telefono");
input1.addEventListener('input',() => {console.log(input3.value)})

let input4 = document.getElementById("Mensaje");
input1.addEventListener('input',() => {console.log(input4.value)})

// storage-json
guardarLocal("Lista de Productos", JSON.stringify(productos))

const almacenados = JSON.parse(localStorage.getItem ("Lista de Productos"));








