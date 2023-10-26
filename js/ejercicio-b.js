//EJERCICIO B:
console.log('(EJERCICIO-B)')

var cantidadDeGatitos = prompt('Ingrese un numero para la cantidad de gatitos');
var cantidadDePasitos = prompt('Ingrese un numero para la cantidad de pasitos correspondiente a cada gatito');

console.log('Cantidad de gatitos en total: ' + cantidadDeGatitos);
console.log('Cada gatito dio ' + cantidadDePasitos + ' pasitos');

var gatito = '🐈';
var huellitas = '🐾';

for(var i = 1; i <= cantidadDeGatitos; i++){
    var pasos = '';
    for(var j = 1; j <= cantidadDePasitos; j++){
        pasos += huellitas;
    }
    console.log('Gato #' + i + ':' + gatito + pasos);
} 
