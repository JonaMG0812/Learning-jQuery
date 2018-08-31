'use strict'
window.addEventListener('load', function()
{
    $(document).ready(function(){
        /*Draggable, nos permite mover elementos por la pagina */
        $('.elemento').draggable();

        /*Resizable, redimensionar elementos */
        $('.elemento').resizable();

        /*Selectable, nos permite seleccionar elementos*/
        //$('.lista-seleccionable').selectable();

        /*Sortable, seleccionar y ordenar elementos
        NOTA: no se puede usar sortable sobre un elemento que usa selectable */
        $('.lista-seleccionable').sortable();

        /*Sortable propiedades */
        $('.lista-seleccionable').sortable({
            update: function(event, ui){
                console.log('Ha cambiado la lista');
            }
        });

        /*Droppable*/
        $('#elemento-movido').draggable();
        $('#area').droppable({
            drop: function(){
                console.log('Has soltado algo dentro de el area')
            }
        });

        /* Efectos jQuery UI:
        https://jqueryui.com/effect/
        */
        $('#mostrar').click(function(){
            $('.caja-efectos').toggle('fade', 'slow');
        });
        
        /*Tooltip: http://iamceege.github.io/tooltipster/ */
        $(document).tooltip();

        /*Dialog */
        $('#lanzar-popup').click(function(){
            $('#popup').dialog();
        })

        /*Datepicker */
        $('#calendario').datepicker();

        /*Tab*/
        $('#myTabs').tabs();
        
    });
});