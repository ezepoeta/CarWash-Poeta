
const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const carritoRender = document.querySelector('#carritoRender')

function mostrarCarrito() {
    carritoRender.innerHTML = ""
    if (carrito.length === 0) {
        carritoRender.innerHTML =
            `
            <div class="vacio" style="text-align: center">
                <h5 >UPS, no hay productos en el carrito</h5>
                <a class="btn" href="/"> Volver al catalogo</a>
            </div>
            `

    } else {
        for (producto of carrito) {
            const { id, nombre, precio, img, cantidad } = producto
            const productoHTML =
                `
            <div class="producto-carrito">
                <img src="${img}"></img>
                <h4>${nombre}</h4>
                <p>$${precio}</p>
                <p>Cantidad:${cantidad}</p>
                <button class="cartbtn" onclick="quitarCarrito(${id})">Eliminar</button>
            </div>              
        `
            carritoRender.innerHTML += productoHTML
        }
    }
}

mostrarCarrito()

function quitarCarrito(id){
    const producto = carrito.find(producto => producto.id == id)
    if(producto.cantidad === 1) {
       carrito.splice(carrito.findIndex(producto =>producto.id == id ), 1)
       Toastify({
        text: "Eliminaste del Carrito",  
        duration: 3000,  
        style: {
            background: "linear-gradient(to right, #ff0000, #8b0000)",
          },
        }).showToast();
    }else{
        producto.cantidad--
        Toastify({
            text: "Eliminaste del Carrito",  
            duration: 3000,  
            style: {
                background: "linear-gradient(to right, #ff0000, #8b0000)",
              },
            }).showToast();
        }
     
     guardarCarrito()
     mostrarResumen()
     mostrarCarrito()
    }

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const seccionResumen = document.querySelector('#resumen')

function mostrarResumen(){
    seccionResumen.innerHTML = ""
    const total = calcularTotal()
    const resumenHTML = `
    <div class="resumen">
        <h3>Resumen</h3>
        <p>TOTAL: $${total}</p>
        <a class="btnComprar " id="comprar" href="./comprar.html" >Comprar</a>
        <a class="btnVaciar" id="vaciar" href="./carrito.html">Vaciar Carrito</a>
    `
    seccionResumen.innerHTML += resumenHTML
   
}
mostrarResumen()
const btnVaciar = document.getElementById('vaciar')
btnVaciar.addEventListener('click',()=>{
    localStorage.removeItem('carrito')
})


function calcularTotal (){
    let total = 0
    for (producto of carrito){
        total += producto.precio * producto.cantidad
    }
    return total
}
 
