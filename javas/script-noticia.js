
function capitalizarTexto(texto) {
    return texto.toLowerCase().replace(/(^|\s)\S/g, function (letra) {
      return letra.toUpperCase();
    });
}
function nComentario() {
    let li = document.createElement("li");

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let comentario = document.getElementById("nuevoComentario").value;

    if (comentario === '') {
        alert("Ingrese un comentario!");
    } else {
        let fechaActual = new Date();
        let hora = fechaActual.getHours().toString().padStart(2, '0'); // Agrega un cero antes de un solo dígito en la hora
        let minutos = fechaActual.getMinutes().toString().padStart(2, '0'); // Agrega un cero antes de un solo dígito en los minutos

        let dia = fechaActual.getDate().toString().padStart(2, '0'); // Agrega un cero antes de un solo dígito en el día
        let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Agrega un cero antes de un solo dígito en el mes
        let año = fechaActual.getFullYear();
        let fechaFormateada = dia + '/' + mes + '/' + año + ' - ' + hora + ':' + minutos;
        
        // Capitalizar la primera letra de cada palabra en el campo "nombre"
    nombre = capitalizarTexto(nombre);

    // Capitalizar solo la primera letra del mensaje
    comentario = comentario.charAt(0).toUpperCase() + comentario.slice(1);
        
        let contenido = document.createElement("p");
        contenido.innerHTML = "<strong>" + nombre + " - " + fechaFormateada + "</strong><br>" + comentario;
        li.appendChild(contenido);

        // Agregar el nuevo comentario al inicio de la lista
        let comentariosContainer = document.getElementById("comentarios");
        comentariosContainer.insertBefore(li, comentariosContainer.firstChild);

        // Desplazarse automáticamente al inicio del contenedor
        //comentariosContainer.scrollTop = 0;
    }

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("nuevoComentario").value = "";
    li.className = "comentario";
    /*
    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
    */
}
