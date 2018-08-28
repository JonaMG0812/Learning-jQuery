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

});