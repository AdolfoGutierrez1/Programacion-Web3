function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve({ id: 1, nombre: "Carlos" });
            } else {
                reject(new Error("No se pudo obtener el usuario"));
            }
        }, 1000);
    });
}
function obtenerUsuarioConCallback(callback) {
    obtenerUsuario()
        .then((usuario) => {
            callback(null, usuario); // primer parámetro es el error (null si no hay error)
        })
        .catch((error) => {
            callback(error); // error como primer argumento
        });
}

obtenerUsuarioConCallback((error, usuario) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Usuario:", usuario);
    }
});
