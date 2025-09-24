// Realizar un código para ejecutar una función callback después 2 segundos

function ejecutaCall(callback){
    setTimeout(()=>{
        callback()
    },2000)
}

const f=()=>{
    console.log("paso 2 segundos")
}

ejecutaCall(f);