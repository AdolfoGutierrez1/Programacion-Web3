//Crear una promesa que devuelva un mensaje de éxito después de 3 segundos

const promesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("este es un mensaje de exito despues de 3seg")
    },3000)    
})

promesa.then((exito)=>{
    console.log(exito)
})