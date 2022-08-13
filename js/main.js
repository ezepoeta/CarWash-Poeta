

async function fetchProductos() {
    const response = await fetch('../json/ListaProductos.json');
    return await response.json();
}
const containerProduct = document.querySelector('#containerProduct')

function mostrarCatalogo() {
    for (producto of catalogo) {
        const {id, nombre, precio, img } = producto
        const productoHTML = `
        <div class="producto ">
        <img src="${img}"></img>
        <h2>${nombre}</h2>
        <p>${precio}</p>
        <button class="cartbtn" onclick="agregarALCarrito(${id})">Agrergar al Carrito</button>
        </div>              
        `
        containerProduct.innerHTML += productoHTML
    }
}

let catalogo = []
fetchProductos().then(productos => {
    catalogo = productos
    mostrarCatalogo()
})

const carrito = JSON.parse(localStorage.getItem('carrito')) || []

function agregarALCarrito(id){
    const producto = catalogo.find(producto => producto.id == id)
    if(carrito.find(producto => producto.id)) {
        const producto = carrito.find(producto =>producto.id == id )
        producto.cantidad++
    }else{
        carrito.push({
            ...producto,
            cantidad: 1
        })
     }
     guardarCarrito()
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}