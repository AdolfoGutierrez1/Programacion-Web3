/*Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
resultado en un objeto.
let obj = miFuncion(“euforia”)
console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }
*/
function miFuncion(x){
const contenedor={
    a:0,e:0,i:0,o:0,u:0
}
const vocal='aeiou'
const letra=x.toLowerCase();

    for (let i = 0; i< letra.length;i++) {
        if(vocal.includes(letra[i]))
            contenedor[letra[i]]++
    }
    return contenedor;
}
let Obj= miFuncion("euforia")
console.log(Obj)

