/*Crear una función que reciba un arreglo de números y devuelva el número mayor y el
menor, en un objeto.
let obj = miFuncion([3,1,5,4,2])
console.log(obj) // { mayor: 5, menor: 1 }
 */

function miFuncion(arreglo) {
    const objeto={
        mayor:arreglo[0],menor:arreglo[0]
    }
    for (let i = 1; i < arreglo.length; i++) {
        if(objeto.mayor<arreglo[i])
            objeto.mayor=arreglo[i];
        if(objeto.menor>arreglo[i])
            objeto.menor=arreglo[i];
    }
    return objeto
}


let obj=miFuncion([3,1,5,4,2])

console.log(obj)