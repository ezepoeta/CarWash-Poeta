

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

new Cleave ('#tarjeta', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        console.log('Credit Card type changed: ', type); 
    }
});

new Cleave ('#vencimiento', {
    date:true,
    datePattern: ['m', 'y'],
    delimiter:'/'
});

new Cleave ('#codseg', {
    numericOnly: true,
    blocks:[3]
});