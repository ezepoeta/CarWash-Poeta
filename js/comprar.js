


function mostrarCarrito () {
    seccionCarrito.innerHTML = ""
    if(carrito.lenght === 0){
        seccionCarrito.innerHTML = 
        `
        <div>
            <h5 >UPS, no hay productos en el carrito</h5>
            <a class="btn" href="/"> Volver al catalogo</a>
        </div>
        `

           } else{
            for(producto of carrito) {
                const { id, nombre, precio, imagen, cantidad} = productos
                const productoHTML =
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
                seccionCarrito.innerHTML += productosHTML
            }
           }
}