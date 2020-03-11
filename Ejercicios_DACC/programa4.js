//Darwin Alexis Ciau Cahun

var numeros = [7,20,13,9], aux = numeros[0]
for (let index = 0; index < numeros.length; index++) {
    if(aux < numeros[index]) aux = numeros[index]
}
console.log("El número "+aux+" es el MAYOR")