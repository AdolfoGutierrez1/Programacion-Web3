function iniciarSesion() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sesión iniciada");
            resolve("token123");
        }, 1000);
    });
}

function obtenerDatosUsuario(token) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Datos del usuario obtenidos con token:", token);
            resolve({ id: 42, nombre: "Ana" });
        }, 1000);
    });
}

function obtenerHistorial(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Historial del usuario obtenido:", usuarioId);
            resolve(["Actividad 1", "Actividad 2"]);
        }, 1000);
    });
}
async function flujoDeTrabajo() {
    try {
        const token = await iniciarSesion();
        const usuario = await obtenerDatosUsuario(token);
        const historial = await obtenerHistorial(usuario.id);

        console.log("Historial:", historial);
    } catch (error) {
        console.error("Error en el flujo:", error);
    }
}

flujoDeTrabajo();