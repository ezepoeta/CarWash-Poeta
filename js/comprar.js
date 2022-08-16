let Contacto1 = document.getElementById("Confirmar");
Contacto1.addEventListener("click", submitForm);
function submitForm(e){
e.preventDefault ();
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Su Pedido esta siendo procesado!',
    showConfirmButton: false,
    timer: 3500
  })}