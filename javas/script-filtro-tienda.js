const productos = [
    {
        "id": "ropa-01",
        "titulo": "Speakers",
        "imagen": "./img/ropa/01.jpg",
        "categoria": {
            "nombre": "Tiendas de Ropa",
            "id": "ropa"
        },
        "descripcion": " De 9:30am a 10:00 pm ",
        "url": "./detalletienda.html"
    },
    {
        "id": "ropa-02",
        "titulo": "Fancy Product",
        "imagen": "./img/ropa/02.jpg",
        "categoria": {
            "nombre": "Tiendas de Ropa",
            "id": "ropa"
        },
        "descripcion": "De 9:30am a 10:00 pm ",
        "url": "tienda2.html"
    },
    {
        "id": "ropa-03",
        "titulo": "H&M",
        "imagen": "./img/ropa/03.jpg",
        "categoria": {
            "nombre": "Tiendas de Ropa",
            "id": "ropa"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "ropa-04",
        "titulo": "Colombia Moda",
        "imagen": "./img/ropa/04.jpg",
        "categoria": {
            "nombre": "Tiendas de Ropa",
            "id": "ropa"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "ropa-05",
        "titulo": "Forever 21",
        "imagen": "./img/ropa/05.jpg",
        "categoria": {
            "nombre": "Tiendas de Ropa",
            "id": "ropa"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-01",
        "titulo": "A-Style",
        "imagen": "./img/accesorios/01.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-02",
        "titulo": "ChicAccs",
        "imagen": "./img/accesorios/02.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-03",
        "titulo": "Accessorize",
        "imagen": "./img/accesorios/03.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-04",
        "titulo": "Luminia",
        "imagen": "./img/accesorios/04.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-05",
        "titulo": "BijouBox",
        "imagen": "./img/accesorios/05.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-06",
        "titulo": "DeliAccs",
        "imagen": "./img/accesorios/06.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-07",
        "titulo": "Joya&Estilo",
        "imagen": "./img/accesorios/07.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "accesorio-08",
        "titulo": "Glamora",
        "imagen": "./img/accesorios/08.jpg",
        "categoria": {
            "nombre": "Tienda de accesorios",
            "id": "accesorios"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "cartera-01",
        "titulo": "TOUS",
        "imagen": "./img/carteras/01.jpg",
        "categoria": {
            "nombre": "Tienda de carteras",
            "id": "carteras"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "cartera-02",
        "titulo": "MICHAEL KORS",
        "imagen": "./img/carteras/02.jpg",
        "categoria": {
            "nombre": "Tienda de carteras",
            "id": "carteras"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "cartera-03",
        "titulo": "REBAG",
        "imagen": "./img/carteras/03.jpg",
        "categoria": {
            "nombre": "Tienda de carteras",
            "id": "carteras"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "cartera-04",
        "titulo": "BolsiCo",
        "imagen": "./img/carteras/04.jpg",
        "categoria": {
            "nombre": "Tienda de carteras",
            "id": "carteras"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    },
    {
        "id": "cartera-05",
        "titulo": "C-Bags",
        "imagen": "./img/carteras/05.jpg",
        "categoria": {
            "nombre": "Tienda de carteras",
            "id": "carteras"
        },
        "descripcion": "De 9:30am a 10:00 pm "
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");



botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

const inputBusqueda = document.querySelector("#search");

function buscarProductos() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.titulo.toLowerCase().includes(textoBusqueda));
    cargarProductos(productosFiltrados);
}

inputBusqueda.addEventListener("input", buscarProductos);



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <button class="producto-vermas" id="${producto.id}">Ver mas </button>
            </div>
        `;

        contenedorProductos.append(div);
        const botonVerMas = div.querySelector(".producto-vermas");
        botonVerMas.addEventListener("click", () => {
            window.location.href = producto.url;
    });
    })

}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos(productos);
});


const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

$(document).ready(function() {
    $(".producto").hover(
      function() {
        $(this).addClass("animated");
      },
      function() {
        $(this).removeClass("animated");
      }
    );
  });
  
