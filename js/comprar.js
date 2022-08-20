
const nombre = document.getElementById('Nombre') 
const email = document.getElementById('Email')
const telefono = document.getElementById('Telefono')
const tarjeta = document.getElementById('tarjeta')
const vencimiento = document.getElementById('vencimiento')
const codSeg = document.getElementById('codSeg')
const parrafo = document.getElementById('aviso')
let aviso = ''
// let entrar = false
let Contacto1 = document.getElementById("Confirmar");
Contacto1.addEventListener("click", submitForm);
function submitForm(e){
  let entrar = false
e.preventDefault ();
aviso = ""
if(nombre.value.length == 0){
  aviso+=('Ingrese un Nombre <br>')
  entrar = true
}
if(email.value.length == 0){
  aviso+=('Ingrese un Email <br>')
  entrar = true
}
if(telefono.value.length == 0 ){
  aviso+=('Ingrese un Telefono Valido <br>')
  entrar = true
}
if(tarjeta.value.length == 0 || tarjeta.value.length != 16){
  aviso+=('Ingrese una Tarjeta Correcta <br>')
  entrar = true
}
if(vencimiento.value.length == 0 || vencimiento.value.length != 4){
  aviso+=('Ingrese el Vencimiento <br>')
  entrar = true
}
if(codSeg.value.length == 0 || codSeg.value.length != 3){
  aviso+=('Ingrese el Codigo de Seguridad <br>')
  entrar = true
}
if(entrar){
  parrafo.innerHTML = aviso
}
else{
  parrafo.innerHTML = ""
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias por su compra!',
    text:  'A la brevedad le llegara un email con los detalles de la compra y envio',
    showConfirmButton: false,
    timer: 3500
  })
  localStorage.removeItem('carrito')
  setTimeout(()=>{
    window.location.href ="/"
  },3500)}
}

