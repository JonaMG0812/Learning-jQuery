'use strict'
window.addEventListener('load', function(){
    $('document').ready(function(){
        var mthis = $(this);
        var mostrar = $('#mostrar');
        var ocultar = $('#ocultar');
        var caja = $('#caja');

        mostrar.click(function(){
            //caja.show('normal');
            caja.fadeIn('slow');
            //caja.fadeTo('slow', 1); //Opacidad maxima
        });

        ocultar.click(function(){
            //caja.hide('fast');
            caja.fadeOut('slow');
            //caja.fadeTo('slow', 0); //opacidad minima
        });

        /*Efectos con un solo boton */
        /*$('#todo').click(function(){
            caja.toggle('slow');
        })*/

        /*$('#todo').click(function(){
            caja.fadeToggle('slow');
        })*/

        $('#todo').click(function(){
            caja.slideToggle('slow');
        })

        $('#animar').click(function(){
            caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '111px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '111px'
            }, 'slow');
        });
        
    });
});