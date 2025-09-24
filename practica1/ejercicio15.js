function sumarConCallback(a, b, callback) {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            callback(new Error("Ambos argumentos deben ser números"));
        } else {
            callback(null, a + b);
        }
    }, 1000);
}

sumarConCallback(3, 4, (err, resultado) => {
    if (err) {
        console.error("Error:", err.message);
    } else {
        console.log("Resultado:", resultado);
    }
});

function sumarPromesa(a, b) {
    return new Promise((resolve, reject) => {
        sumarConCallback(a, b, (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
}
async function ejecutarSuma() {
    try {
        const resultado = await sumarPromesa(5, 7);
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

ejecutarSuma();

