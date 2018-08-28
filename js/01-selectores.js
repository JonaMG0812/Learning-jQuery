'use strict'
/*Selectores */
window.addEventListener('load', function(){

    /*Comprobando si el documento esta listo */
    $(document).ready(function(){
        console.log('Ready');
    });

    /* Selectro de ID*/
    /* $(aqui va el selectro al que queremos acceder).metodo(parametro, valor);
    Podemos ir encadenando metodos a los cualqes podemos acceder, ya que estamos 
    haciendo referencia al mismo selector, los selectores pueden ser almacenados en variables, ej: */
    var rojo = $("#rojo").css("background", "red")
                        .css("color", "white");

    $("#amarillo").css("background", "yellow")
                .css("color", "green");

    $("#verde").css("background", "green")
                .css("color", "white");
    
    /*Selectores de clase, eligne elementos del DOM en base a clases */
    /*Nota, si varios elementos estan con esa clase, podemos guardar en una variable y visualizarlo 
    como un array, para poder trabajar con cualqueir elemento de ese array ene specifico, ya sea
    con el indice o con .eq, ej:
    
    var mi_clase = $(".zebra");
    console.log(mi_clase[1]); || console.log(mi_clase.eq(1));*/ 
    var mi_clase = $(".zebra").css("padding", "5px");

    $(".sin_borde").click(function(){
        console.log("Click dado! :)");
        $(this).addClass("zebra");
    });

    /*Selectores de etiqueta */
    var parrafos = $("p").css("cursor", "pointer");
    parrafos.click(function(){
        var this2 = $(this); /*Optimizar DOM, para acceder a el solo una vez */ 
        if(!this2.hasClass("grande")){ /*hasClass: si tiene la clase... */
            this2.addClass("grande");/*addClass: agrega clase */
        }else{
            this2.removeClass('grande');/*removeClass: quita una clase */
        } 
    });

    /*Selectores de atributo */
    $('[title = "Google"]').css('background', '#ccc');
    $('[title = "Facebook"]').css('background', 'blue');

    /*Otros:
    -Seleccionando multiples elementos a la vez */
    $('p, a').addClass('margen-superior');

    //- Buscando un elemento, metodo 1
    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda);

    //- Buscando un elemento, metodo 2
    var busqueda2 = $("#caja .resaltado");
    console.log(busqueda2);

});