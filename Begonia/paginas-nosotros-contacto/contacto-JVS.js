
function send(){
    var correoElectronico = document.getElementById("gmail").value;
    var nombreUsuario = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje").value;


    if(correoElectronico=="" || nombreUsuario=="" || mensaje==""){
        alert("Porfavor, ingrese los datos necesarios")
    } else{
        alert("Gracias "+ nombreUsuario +" su mensaje fue enviado correctamente, le responderemos lo más pronto posible :)")
    }
}