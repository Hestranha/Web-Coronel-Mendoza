<?php
    // Realizar la conexión a la base de datos
    $enlace = mysqli_connect("localhost", "root", "", "webcoronelm");
    if (!$enlace) {
        die("Error al conectar a la base de datos: " . mysqli_connect_error());
    }

    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $comentario = $_POST['comentario'];

    // Escapar los valores para prevenir inyección de SQL
    $nombre = mysqli_real_escape_string($enlace, $nombre);
    $correo = mysqli_real_escape_string($enlace, $correo);
    $comentario = mysqli_real_escape_string($enlace, $comentario);

    // Crear la consulta SQL e insertar los datos en la tabla
    $sql = "INSERT INTO Usuario (nombre, correo, mensaje, fecha) VALUES ('$nombre', '$correo', '$comentario', NOW())";
    if (mysqli_query($enlace, $sql)) {
        echo "Comentario guardado exitosamente";
    } else {
        echo "Error al guardar el comentario: " . mysqli_error($enlace);
    }

    // Cerrar la conexión a la base de datos
    mysqli_close($enlace);
?>
