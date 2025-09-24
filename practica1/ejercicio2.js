/*Crear una función que invierta el orden de las palabras en una frase.
let cad = miFuncion(“abcd”)
console.log(obj) // dcba*/

function miFuncion(x){
    let invertido=""
    for (let i = x.length-1;i>=0 ; i--) {
        invertido+=x[i];
    }
    return invertido
}
let cad=miFuncion("abcd")

console.log(cad)