/*Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración*/

const arreglo=["uno", "dos","tres","cuatro","cinco","seis","siete"]
const [,,...resto]=arreglo
console.log(resto);