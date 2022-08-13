
new Cleave('#tarjeta',{
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
        console.log('Credit card type changed: ', type);
    }
})

new Cleave ('#vencimiento', {
    date: true,
    datePattern: ['m', 'y'],
    delimiter: '/'
});

new Cleave('#codigo',{
    numericOnly: true,
    blocks: [3]
});