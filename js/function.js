
// Tabla de datos de Pedido Pasteleria

let enviarHTML = '';

function guardarDatos() {

  let miNombre = document.getElementById("nombre").value;
  let miDireccion = document.getElementById("direccion").value;
  let miTelefono = document.getElementById("telefono").value;
  let miCorreo = document.getElementById("correo").value;
  let miEntrega = document.querySelector('input[name="entrega"]:checked').value;
  let miBetun = document.getElementById("betun").value;
  let miDescripcion = document.getElementById("descripcion").value;
  let miTopping = document.querySelectorAll('input[class="topping"]:checked').value;
  
  
  enviarHTML += `<tr><b>Nombre: </b>${ miNombre }</tr><tr><b>Direccion: </b>${ miDireccion }</tr><tr><b>Telefono: </b>${ miTelefono }</tr><tr><b>Correo: </b>${ miCorreo }</tr><tr><b>Tipo de Entrega: </b>${ miEntrega }</tr><tr><b>Betun Elegido: </b>${ miBetun }</tr><tr><b>Topping Elegido: </b>${ miTopping }</tr><tr><b>Descripcion: </b>${ miDescripcion }</tr>`;

  // Enviar al front en Página de Pedidos
  document.getElementById("valores").innerHTML = enviarHTML;
}


// Transicion de Boton Menu para Dispositivos mobiles

const navButton = document.querySelector(".nav_button")
const navUl = document.querySelector(".nav_ul")

navButton.addEventListener("click", () => {
  navUl.classList.toggle("nav_ul_visible");

});