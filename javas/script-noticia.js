function capitalizarTexto(texto) {
    return texto.toLowerCase().replace(/(^|\s)\S/g, function (letra) {
        return letra.toUpperCase();
    });
}

function mostrarComentarios() {
    let comentariosContainer = document.getElementById("comentarios");
    comentariosContainer.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "databases/obtener_comentarios.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let comentarios = JSON.parse(xhr.responseText);

            // Iterar sobre los comentarios en orden inverso
            for (let i = 0; i < comentarios.length; i++) {
                let comentario = comentarios[i];
                let li = document.createElement("li");
                let contenido = document.createElement("p");

                contenido.innerHTML = "<strong>" + comentario.nombre + " | " + comentario.fecha + "</strong><br>" + comentario.mensaje;
                li.className = "comentario";
                li.appendChild(contenido);
                // Agregar el nuevo comentario al inicio de la lista
                comentariosContainer.insertBefore(li, comentariosContainer.firstChild);
            }
        }
    };
    xhr.send();
}

function nComentario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let comentario = document.getElementById("nuevoComentario").value;
    var nombreRegex = /^[a-zA-Z\s]*$/;
    var correoRegex = /^\S+@\S+\.\S+$/;
    if (comentario === "" || nombre === "" || correo === "") {
        Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "Rellene los campos antes de enviar un comentario.",
        });
        return;
    }
    if (!nombreRegex.test(nombre)) {
        mensaje =
            "El campo Nombre solo debe contener letras y espacios.";
        mensaje_Adv(mensaje);
        return;
    }
    if (!correoRegex.test(correo)) {
        mensaje = "Ingrese un Correo electrónico válido.";
        mensaje_Adv(mensaje);
        return;
    }
    if (comentario === "") {
        mensaje =
            "El campo Mensaje debe tener contenido.";
        mensaje_Adv(mensaje);
        return;
    }
    if (comentario === "" || nombre === "" || correo === "") {
        alert("Complete los campos");
    } else {
        let fechaActual = new Date();
        let hora = fechaActual.getHours().toString().padStart(2, "0");
        let minutos = fechaActual.getMinutes().toString().padStart(2, "0");
        let dia = fechaActual.getDate().toString().padStart(2, "0");
        let mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
        let año = fechaActual.getFullYear();
        let fechaFormateada =
            año + "-" + mes + "-" + dia;
        // dia + "/" + mes + "/" + año + " - " + hora + ":" + minutos;

        nombre = capitalizarTexto(nombre);
        comentario = comentario.charAt(0).toUpperCase() + comentario.slice(1);

        var datos = new FormData();
        datos.append("nombre", nombre);
        datos.append("correo", correo);
        datos.append("comentario", comentario);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "databases/guardar_comentario.php", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Mostrar el nuevo comentario primero
                let comentariosContainer = document.getElementById("comentarios");
                let li = document.createElement("li");
                let contenido = document.createElement("p");

                contenido.innerHTML =
                    "<strong>" + nombre + " | " + fechaFormateada + "</strong><br>" + comentario;
                li.className = "comentario";
                li.appendChild(contenido);
                comentariosContainer.insertBefore(li, comentariosContainer.firstChild);

                limpiar();
                //alert(xhr.responseText);
            }
        };
        xhr.send(datos);
        Swal.fire({
            icon: "success",
            title: "Comentario enviado",
            text: "Su comentario se envio exitosamente.",
        });
    }
}


function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("nuevoComentario").value = "";
}

function mensaje_Adv(mensaje_dv) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: mensaje_dv,
    });
}

mostrarComentarios();
