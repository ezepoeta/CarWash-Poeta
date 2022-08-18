

let Contacto1 = document.getElementById("Confirmar");
Contacto1.addEventListener("click", submitForm);
function submitForm(e){
e.preventDefault ();
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias por su compra!',
    text: 'A la brevedad le llegara un email con los detalles de la compra y envio',
    showConfirmButton: false,
    timer: 3500
  })
  localStorage.removeItem('carrito')
  setTimeout(()=>{
    window.location.href ="/"
  },3000)
}

