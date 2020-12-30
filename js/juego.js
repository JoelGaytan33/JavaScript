//me aseguro de que ha cargado toda la pagina
var inideceRandom=0;
var opc=[];
var nivel=1;
var puntaje=0;
$(document).ready(function(){
   /* $("#login").animate({
        'top':"10%"
    },300);*/
    ( "#elemento" ).droppable({
        drop: function( event, ui ) {
          $( this ).addClass( "ui-state-highlight" ).find( "h2" ).html( "Dropped!" );
          $(this ).css('background-color','green');
         var i=$(ui.helper[0]).data('numero');
         console.log(i);

        },
        over:function(event, ui){
            $(this ).css('background-color','gray');
        },
        out:function(event, ui){
            $(this ).css('background-color','purple');
        }
      });
    } );
    $.getJSON('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json',
    function(data){
        //console.log(data.elements[0].name);
        var cuantos = data.elements.length;
        inideceRandom=Math.floor(Math.random() * cuantos);
        $("#elemento").find('h2').text( data.elements[random].name);
            for(var i=0;i<3;i++){
                var n=Math.floor(Math.random() * cuantos);
                opc.push(n);
                
            }
           // $("#opciones").find('ul').append('<li><h2>'+ data.elements[n].symbol +'</h2></>');
            opc.push(inideceRandom);
            opc.sort(()=>Math.random() - 0.5);
            opc.forEach(n => {
                $("#opciones").find('ul').append('<li class="drag" data-numero="'+n+'"><h2>'+ data.elements[n].symbol +'</h2></>');
                $( "#draggable" ).draggable();
            });
            $( "#drag" ).draggable({
                revert:"invalid",
                refreshPosition:true,
                drag:function(event, ui){
                    $(this).css('opacity', '0.5');
                },
                stop: function(event,ui){
                    $(this).css('opacity', '1');
                }
            });
        });
        $("txtNombre").on('keyup', function(){
            $("txtNombre").css('border', '1px solid white')
            $(".alerta").fadeIn(400);
        })


    $("#btnIniciar").click(function(){
        if($("txtNombre").val() == ""){
            $("txtNombre").css('border', '1px solid red')
            $(".alerta").fadeIn(400);

            }else{
                $("#login").animate({
                    'left':"-500px"
                },200, function(){
                    
                $("#login").fadeOut(1000);
            });
            }
        
    

});
});