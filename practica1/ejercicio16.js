function conectarDB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Conectado a la base de datos");
            resolve();
        }, 1000);
    });
}

function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Usuario obtenido");
            resolve({ id: 101, nombre: "Lucía" });
        }, 1000);
    });
}

function obtenerPedidos(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Pedidos del usuario", usuarioId, "obtenidos");
            resolve(["Pedido A", "Pedido B"]);
        }, 1000);
    });
}
async function procesoAsyncAwait() {
    try {
        await conectarDB();
        const usuario = await obtenerUsuario();
        const pedidos = await obtenerPedidos(usuario.id);

        console.log(" Pedidos:", pedidos);
    } catch (error) {
        console.error(" Error:", error.message);
    }
}

procesoAsyncAwait();
