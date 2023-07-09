<?php
// Realizar la conexión a la base de datos
$enlace = mysqli_connect("localhost", "root", "", "webcoronelm");
if (!$enlace) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

// Obtener los comentarios de la base de datos
$sql = "SELECT nombre, fecha, mensaje FROM Usuario";
$resultado = mysqli_query($enlace, $sql);
$comentarios = array();

while ($fila = mysqli_fetch_assoc($resultado)) {
    $comentarios[] = $fila;
}

// Devolver los comentarios en formato JSON
echo json_encode($comentarios);

// Cerrar la conexión a la base de datos
mysqli_close($enlace);
?>
