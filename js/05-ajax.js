'use strict'
window.addEventListener('load', function(){
    $(document).ready(function(){
        /*Load Ajax, permite hacer una peticion ajax por get e incrustar el resultado en 
        cualquier elemento que se tenga en la pagina */
        //$('#datos').load('https://reqres.in/')

        /*Get*/
        $.get('https://reqres.in/api/users', {page: 2}, function(response){
            response.data.forEach(element => {
                $('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>');
            });
        });

        /*Post*/
        $('#formulario').submit(function(){
            //Tomando valores de inputs
            var usuario = {
                name: $('input[name="name"]').val(),
                web: $('input[name="web"]').val()
            };
            //Post
            /*
            $.post($(this).attr("action"), usuario, function(response){
                console.log(response);
            }).done(function(){
                alert('Usuario añadido correctamente!');
            });
            */

            /*Metodo $.ajax nos permite manipular cualquier peticion tipo jax que se necesite hacer */
            $.ajax({
                type: 'POST',
                url: $(this).attr("action"),
                data: usuario,
                beforeSend: function(){
                    console.log('Enviando usuario');
                },
                success: function(response){
                    console.log(response);
                },
                error: function(){
                    console.log('A ocurrido un error');
                },
                timeout: 2000
            });
                return false;
            });

        
        
    });
});