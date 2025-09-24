/* Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
e impares:
let obj = miFuncion([1,2,3,4,5])
console.log(obj) // { pares: [2,4], impares: [1,3,5]}
*/

function miFuncion(arreglo){
    const objeto={
        pares:[],impares:[]
    }
    for (let i = 0; i< arreglo.length;i++) {
        if(arreglo[i]%2===0)
            objeto.pares.push(arreglo[i])
        else
            objeto.impares.push(arreglo[i])
    }
    return objeto    
}

let obj = miFuncion([1,2,3,4,5])

console.log(obj)