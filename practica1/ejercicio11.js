function primerpaso(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("paso uno finalizado")
            resolve("restultado 1")
        },2000)
    })
}

function segundopaso(pasoanterior){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("paso 2 completado, se recibe:",pasoanterior)
            resolve("resultado 2")
        },2000)
        
    })
}
primerpaso().then((resultado1)=>{
    return segundopaso(resultado1)
}).then((resultadofinal)=>{
    console.log("se muestra:",resultadofinal)
})
