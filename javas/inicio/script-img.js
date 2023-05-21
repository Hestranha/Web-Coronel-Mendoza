var main = new Splide('#main-slider', {
    type: 'fade',
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 10000,
    cover: true,
});

var thumbnails = new Splide('#thumbnail-slider', {
    rewind: true,
    fixedWidth: 104,
    fixedHeight: 58,
    isNavigation: true,
    gap: 10,
    focus: 'center',
    pagination: false,
    cover: true,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints: {
        640: {
            fixedWidth: 66,
            fixedHeight: 38,
        },
    },
});


main.sync(thumbnails);
main.mount();
thumbnails.mount();
// CAMBIAR IMAGEN SEGUN EL BOTON
var textDivs = document.querySelectorAll('.texto');
textDivs.forEach(function (div, index) {
    if (index !== 0) {
        div.style.display = 'none';
    }
});
// Evento para mostrar los divs de texto al cambiar la imagen en el main-slider
main.on('moved', function (newIndex) {
    // Ocultar todos los divs de texto
    var textDivs = document.querySelectorAll('.texto');
    textDivs.forEach(function (div) {
        div.style.display = 'none';
    });

    // Mostrar el div de texto correspondiente al índice de la imagen actual
    var currentTextDiv = document.querySelector('#texto_' + (newIndex + 1));
    if (currentTextDiv) {
        currentTextDiv.style.display = 'block';
    }
});
