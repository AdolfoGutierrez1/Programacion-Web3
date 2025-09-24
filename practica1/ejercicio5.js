/*Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false*/


function miFuncion(cadena){
    let invertido=""
    let i=cadena.length-1
    while (i>=0) {
        invertido+=cadena[i]
        i--
    }
    return cadena===invertido;
}
let band = miFuncion("oruro")
console.log(band)
let band1 = miFuncion("hola")
console.log(band1)