'use strict'
window.addEventListener('load', function(){
    $(document).ready(function(){
        console.log('Documento listo!');
    });

    /*MouseOver y MouseOut */ 
    /*var caja = $('#caja2');
    caja.mouseover(function(){
        $(this).css('background', 'red');
    });

    caja.mouseout(function(){
        $(this).css("background", "green");
    });*/

    /*Hover */
    var caja2 = $('#caja2');
    function cambiaRojo(){
        $(this).css('background', 'red');
    }
    function cambiaVerde(){
        $(this).css('background', 'green');
    }
    caja2.hover(cambiaRojo, cambiaVerde);

    /*Click, doble click */
    caja2.click(function(){
        $(this).css('background', 'blue')
                .css('color', 'white');
    });

    caja2.dblclick(function(){
        $(this).css('background', 'pink')
                .css('color', 'purple');
    });

    /*Focus y blur */
    var nombre = $('#nombre');
    var datos = $('#datos');

    nombre.focus(function(){
        $(this).css('border', '1px solid purple');
    });

    nombre.blur(function(){
        $(this).css('border', '1px solid pink');
        datos.text($(this).val()).show(); //Recoger un valor de input al usar blur
    });

    /*Mousedown, Mouseup */
    datos.mousedown(function(){
        $(this).css('border-color', 'gray');
    });

    datos.mouseup(function(){
        $(this).css('border-color', 'blue');
    });

    /*Mousemove: l mover el curso, mostraremos las corrdenadas dle puntero en consola */
    var sigueme = $('#sigueme');
    $(document).mousemove(function(){
        $('body').css('cursor', 'none');
        sigueme.css('left', event.clientX)
                .css('top', event.clientY);
        //console.log('Tus coordenadas actuales son: ' + event.clientX + ',' + event.clientY);
    });
});