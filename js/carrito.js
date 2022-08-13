
const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const carritoRender = document.querySelector('#carritoRender')

function mostrarCarrito() {
    carritoRender.innerHTML = ""
    if (carrito.lenght === 0) {
        carritoRender.innerHTML =
            `
            <div style="text-align: center">
                <h5 >UPS, no hay productos en el carrito</h5>
                <a class="btn" href="/"> Volver al catalogo</a>
            </div>
            `

    } else {
        for (producto of carrito) {
            const { id, nombre, precio, img, cantidad } = productos
            const productoHTML =
                `
            <div class="producto-carrito">
                <img src="${img}"></img>
                <h2>${nombre}</h2>
                <p>${precio}</p>
                <p>Cantidad:${cantidad}</p>
                <button class="cartbtn" onclick="quitarCarrito(${id})">Eliminar del Carrito</button>
            </div>              
        `
            carritoRender.innerHTML += productoHTML
        }
    }
}

mostrarCarrito()


