var x=1;

    document.getElementById("btnCalcular").addEventListener('click',function(){
        var xxxx=document.getElementById(txtNombre);
        if(xxxx.value == ""){
            xxxx.style.background="red";
            xxxx.style.color="white";
        }else{
            xxxx.style.background="green";
            xxxx.style.color="black";
            document.getElementById("mitexto").innerHTML = "Bienvenido" +xxxx.value;
        }
        });

    document.getElementById("txtNombre").addEventListener('keyup', function(){
    var xxxx=document.getElementById("txtNombre");
    document.getElementById("mitexto").innerHTML = "Bienvenido" +xxxx.value;
    });
    function mifuncion(){
     for(var y=0;y<x;y++){
        todo=todo+"<Button>Hola soy el boton"+x+"<button>";
    }
    document.getElementById("mitexto").innerHTML=todo;
    x++;
}

