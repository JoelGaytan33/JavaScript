//me aseguro de que ha cargado toda la pagina
var inideceRandom=0;
var opc=[];
$(document).ready(function(){
   /* $("#login").animate({
        'top':"10%"
    },300);*/
    $.getJSON('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json',
    function(data){
        //console.log(data.elements[0].name);
        var cuantos = data.elements.length;
        var random=Math.floor(Math.random() * cuantos);
        console.log(random);
        $("#elemento").find('h2').text( data.elements[random].name);

            for(var i=0;i<3;i++){
                var n=Math.floor(Math.random() * cuantos);
                opc.push(n);
                $("#opciones").find('ul').append('<li><h2>'+ data.elements[n].symbol +'</h2></>');
            }
            $("#opciones").find('ul').append('<li><h2>'+ data.elements[n].symbol +'</h2></>');
            opc.push(inideceRandom);
            console.log(opc);
     
        });
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