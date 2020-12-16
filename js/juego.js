//me aseguro de que ha cargado toda la pagina
$(document).ready(function(){
    $("#login").animate({
        'top':"10%"
    },200);
    $("#btnIniciar").click(function(){
        if($("txtNombre").val() == ""){
            $("txtNombre").css('border', '1px solid red')

            }else{
                $("#login").animate({
                    'left':"-500px"
                },200, function(){
                    
                $("#login").fadeOut(1000);
            });
            }
        }
    
});
});