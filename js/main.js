
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
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/05/LAVACOCHES-AZUL.jpg',
        nombre: 'Shampoo ph-neutro Siliconado 5lt',
        precio: 1400,
        stock: 5
    },
    {
        tipo: 2,
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/05/bidon-lavacoche-ROJO.jpg',
        nombre: 'Shampoo Siliconado Concentrado 5lt',
        precio: 1200,
        stock: 8
    },
    {
        tipo: 3,
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/04/LIMPIA-INTERIORES-800X800-1.jpg',
        nombre: 'Apc limpiador 650cc',
        precio: 600,
        stock: 16
    },
    {
        tipo: 4,
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/04/FOTO-ESPUMA-ACTIVA-1-LITRO-2019-.jpg',
        nombre: 'Limpiador por Espuma 1lt',
        precio: 1800,
        stock: 9
    },
    {
        tipo: 5,
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/04/LIMP-CARROCERIA-800X800-1.jpg',
        nombre: 'Removedor de insectos 650cc',
        precio: 1000,
        stock: 14
    },
    {
        tipo: 6,
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/04/CERA-AUTOBRILLO-800X800-1.jpg',
        nombre: 'Cera Autobrillo 650cc',
        precio: 1200,
        stock: 20
    },
    {
        tipo: 7,
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/04/CERA-AUTOBRILLO-NEGRO-800X800-1.jpg',
        nombre: 'Cera Autobrillo Negro 650cc',
        precio: 1400,
        stock: 10
    },
    {
        tipo: 8,
        img:'http://www.revigal.com.ar/wp-content/uploads/2015/04/web-REVIVIDOR-1-LITRO-2019-.jpg',
        nombre: 'Revividor de Negros 1lt',
        precio: 1200,
        stock: 24
    },
    {
        tipo: 9,
        img: 'http://www.revigal.com.ar/wp-content/uploads/2015/04/silicona-liquida800X800-31.jpg',
        nombre: 'Silicona 250cc',
        precio: 1800,
        stock: 8
    }
]
console.log(productos)


const carrito = []

function agregarCarrito (id) {
    carrito.push(productos.find(r=>r.tipo == id))
    console.log(carrito)
    Toastify({
                text: "Añadiste al Carrito",  
                duration: 3000  
                }).showToast();
}

const cardContainer = document.querySelector('#cardContainer')

let html = productos.map((producto)=> {
    return(
        `
        <div class="card" style="width: 15%">
          <img src="${producto.img}" class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">${producto.nombre} </h5>
            <p class="card-text">$${producto.precio}</p>
            <button onClick="agregarCarrito(${producto.tipo})" class="cartbtn"> Agregar al Carrito</button>
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

let producto = { id: 1,  nombre: "Shampoo siliconado 5lt", precio: 1200 };
let plantilla = `ID: ${producto.id} Producto: ${producto.nombre} $ ${producto.precio}`

console.log(plantilla);

// eventos

let Contacto1 = document.getElementById("enviar");
Contacto1.addEventListener("click", submitForm);
function submitForm(e){
e.preventDefault ();
Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    title: 'A la brevedad será contactado',
    showConfirmButton: false,
    timer: 2000
  })
}

let Contacto2 = document.getElementById("reset");
Contacto2.addEventListener("click", resetForm);
function resetForm(e){
e.preventDefault ();
Swal.fire({
    title: '¿Seguro desea reestablecer los datos?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Continuar'
  })
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
const almacenados = JSON.parse(localStorage.getItem ("ListaProductos"));

fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Shampoo Siliconado Concentrado 5lt',
            body: 'Shampoo Siliconado Concentrado es un producto diluible en hasta 1000lt de agua, siendo posible utilizarlo en todas sus diluciones en vehiculos con Tratamientos de pintura. ',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Shampoo ph-neutro Siliconado  5lt',
            body: 'Shampoo ph-neutro Siliconado es un producto diluible en hasta 1000lt de agua, siendo posible utilizarlo en todas sus diluciones en vehiculos con Tratamientos de pintura. ',
            userId: 2,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Apc Limpiador 650cc',
            body: 'El Apc Limpiador es compatible para la limpieza de interiores en todas sus texturas, desde telas hasta cueros y plasticos',
            userId: 3,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Limpiador por Espuma 1lt',
            body: 'Es un producto para uso con hidrolavadoras y compatible con Tratamientos de pintura. ',
            userId: 4,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Removedor de Insectos 650cc',
            body: 'Producto para la remocion de insectos ',
            userId: 5,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Cera Autobrillo 650cc ',
            body: 'Producto para potenciar el brillo siendo posible utilizarlo en vehiculos con Tratamientos de pintura. ',
            userId: 6,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Cera Autobrillo Negro 650cc',
            body: 'Producto para potenciar el brillo siendo posible utilizarlo en vehiculos con Tratamientos de pintura.',
            userId: 7,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Revividor de Negros 1lt',
            body: 'Producto para potenciar el brillo de todo lo negro de su vehiculos (Plasticos y cubiertas)',
            userId: 8,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
            title: 'Silicona 250cc',
            body: 'Silicona apta todo tipo de uso, no se va con el agua',
            userId: 9,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))


