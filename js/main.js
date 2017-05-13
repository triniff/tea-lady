function mostrarData(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("last-name").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("address").value;
	var telefono = document.getElementById("phone").value;

	var usuario = document.getElementById("clientes");

	usuario.innerHTML = "<h2> Datos usuario </h2>" + "<br>" + "Nombre: " + nombre + " " + apellido + "<br>" + "Email: " + email + "<br>" + "Dirección: " + direccion + "<br>" + "Teléfono: " + telefono;


}