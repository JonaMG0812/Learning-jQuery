'use strict'

window.addEventListener('load', function(){
    /*Textos */
    reloadLinks();

    $('#add_button').click(function(){
        $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
        $("#add_link").val('');
        /*podemos usar append o prepend*/
        reloadLinks();
    });

    function reloadLinks(){
        $('a').each(function(index){
            var mthis = $(this);
            var url = mthis.attr('href');

            /*Añadir un nuevo atributo */
            mthis.attr('target', '_blank');
            /*Eliminar un atributo: .removeAttr('atributo  remover'); */
            mthis.text(url);
        });
    }





});