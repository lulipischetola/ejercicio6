//EJERCICIO A:
console.log('(EJERCICIO-A)')
//😺 😸 😹 🐈 🐾 ⬛

var cantidadDeGatos = prompt('Ingrese un numero')
console.log(cantidadDeGatos + ' Ciclos en total')

var k = ["😺", "😸", "😹"]
for(var i = 1; i <= cantidadDeGatos; i++){
    var j = (i-1) % k.length;
        console.log('Gato #' + i + ':' + k[j]) 
}if(cantidadDeGatos<1){
    alert('Podes ingresar cualquier numero, OJO! siempre que sea MAYOR A CERO :)')
}



//PRUEBAS
/* for(var i = 1; i <= cantidadDeGatos; i++){
    for(var k = 1 ; i == k%1 == 0; k++){
        console.log('Gato #' + i + ':' + k)
    }
    
} */

//mas o menos funciona hay que ver como hacer empezar otra vez el array
/* for(var i = 1; i <= cantidadDeGatos; i++){
    var k = ["1", "2", "3"]
    for(var j = 0; j <= k.length; j++){
        console.log('Gato #' + i + ':' + k[i-1])
    }
} */

/* for(var i = 1; i <= cantidadDeGatos; i++){
    var k = ["1", "2", "3"]
    var j = ''
    if(j = 0 || j % 3 == 0){
        for(j = k[0]; j <= k.length; j++){
            console.log('Gato #' + i + ':' + j)
        }
    }
    
} */

/* var i = 0
if(i <= cantidadDeGatos){
    for(i = 1; i <= cantidadDeGatos; i++){
        for(var j = [i]; i >= j.length; j++){
            console.log('Gato #' + i + ':' + j)
        }
    }
    
   
} */

/* var cantidadDeGatos = prompt("ingrese la cantidad de gatos")
var cantidadDePasos = prompt("ingrese la cantidad de pasos")
var j = 03

for(var i = 1; i <= cantidadDeGatos; i++){
    if(j <= cantidadDePasos){
        j++
    console.log(j)
 }
 console.log("Gato #" + i +" " + j)
} */