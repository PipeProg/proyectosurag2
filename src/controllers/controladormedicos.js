//Etiquetas de control
let etiquetaNombre = document.getElementById("nombres");
let etiquetaBoton = document.getElementById("botonenviar");
let etiquetaDocumento = document.getElementById("documento");
//evento detectar con click
etiquetaBoton.addEventListener("click",function(evento){
    
    evento.preventDefault()
    // Swal.fire(
    //     'Exito!',
    //     'El especialista ha sido registrado',
    //     'success'
    //   )
   
    //recibiendo datos del formulario
    let nombresMedico = etiquetaNombre.value
    let documentoMedico = etiquetaDocumento.value
    console.log(nombresMedico)
    console.log(documentoMedico)

})

