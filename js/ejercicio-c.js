//EJERCICIO C:
console.log('(EJERCICIO-C)')

var cantidadDeGatitos = prompt('Ingrese un numero para la cantidad de gatitos');
var cantidadDePasitos = prompt('Ingrese un numero para la cantidad de pasitos correspondiente a cada gatito');

console.log('Cantidad de gatitos en total: ' + cantidadDeGatitos);
console.log('Cada gatito dio ' + cantidadDePasitos + ' pasitos');

var gatito = '🐈';
var huellitas = '🐾';
if(cantidadDeGatitos <= 0 || cantidadDePasitos <= 0){
    alert('Podes ingresar cualquier numero, OJO! siempre que ambos sean MAYORES A CERO :)');
}else{
        for(var i = 1; i <= cantidadDeGatitos; i++){
            var pasos = '';
            for(var j = 1; j <= cantidadDePasitos; j++){
                pasos += huellitas;
            }if (i % 2 === 0){
                console.log('Gato #' + i + ': ' + gatito + ' ' + '⬛' + ' ' + pasos);
            } else {
                console.log('Gato #' + i + ': ' + gatito + ' ' + pasos);
            }
        }
    
    }