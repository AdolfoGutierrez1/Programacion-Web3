function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Usuario obtenido");
            resolve({ id: 1, nombre: "Juan" });
        }, 1000);
    });
}

function obtenerPostsDeUsuario(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts del usuario obtenidos");
            resolve(["Post 1", "Post 2"]);
        }, 1000);
    });
}

function obtenerComentariosDePost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Comentarios del ${post} obtenidos`);
            resolve(["Comentario A", "Comentario B"]);
        }, 1000);
    });
}

async function mostrarComentarios() {
    try {
        const usuario = await obtenerUsuario();
        const posts = await obtenerPostsDeUsuario(usuario.id);
        const comentarios = await obtenerComentariosDePost(posts[0]);

        console.log("Comentarios:", comentarios);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

mostrarComentarios();