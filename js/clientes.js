/*clientes*/
document.addEventListener("DOMContentLoaded", mostrarDatos)
function mostrarDatos() {
    const numeroId = document.querySelector("#informacion-identificacion").value
    const nombre = document.querySelector("#informacion-nombre").value
    const apellidos = document.querySelector("#informacion-apellidos").value
    const fechaDeNacimiento= document.querySelector("#informacion-fecha-nacimiento").value
    const correo = document.querySelector("#informacion-correo").value
    const formulario2 = document.querySelector("#formulario2")
    const contenido = document.querySelector("#contenido");

   
    formulario.addEventListener("submit", (e)=>{
        contenido.innerHTML += `
        <h2>numeroId: ${numeroId}</h2>
        <h2>nombre: ${nombre}</h2>
        <h2>apellidos: ${apellidos}</h2>
        <h2>fechaDeNacimiento: ${fechaDeNacimiento}</h2>
        <h2>correo: ${correo}</h2>

        ${numeroId} -  ${nombre} - ${apellidos} - ${fechaDeNacimiento} -  ${correo} - ${direccion}
        `
    })
}

