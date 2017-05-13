function mostrarData(){
	var nombre = document.getElementById("name").value;			//*Obteniendo los valores
	var apellido = document.getElementById("last-name").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("address").value;
	var telefono = document.getElementById("phone").value;
	var opcion = document.getElementById("option").value;

	var usuario = document.getElementById("clientes"); //* Donde se imprimira

	function MaysPrimera(string){	//* Retornando el nombre y apellido con la primera en mayuscula siempre
  	return string.charAt(0).toUpperCase() + string.slice(1);
	}
	nombre = MaysPrimera(nombre.toLowerCase());
	apellido = MaysPrimera(apellido.toLowerCase());

	
	function compra (){
		var imagen;
		if (opcion == 1) {
			imagen = "<img src='https://static.squarespace.com/static/52536652e4b007332ef4ecf4/52dec946e4b0ca499f87bce7/52dec969e4b0ca499f888738/1379652560071/1000w/09_19_2013_twinings_6.jpg' alt='pack1'>";
		}else if (opcion == 2) {
			imagen = "<img src='https://static.squarespace.com/static/52536652e4b007332ef4ecf4/52dec946e4b0ca499f87bce7/52dec969e4b0ca499f888736/1379652546103/1000w/09_19_2013_twinings_2.jpg' alt='pack2'>";
		}else{
			imagen = "<img src='https://static.squarespace.com/static/52536652e4b007332ef4ecf4/52dec946e4b0ca499f87bce7/52dec95ae4b0ca499f8836b2/1379652538443/1000w/09_19_2013_twinings_1.jpg' alt='pack3'>";
		}
		return imagen;
	}

	if(nombre =="" || apellido == "" || email =="" || direccion=="" || telefono ==""){ //*Validando los campos
		alert("Complete todos los campos");
	}else if(opcion==0){
		alert("Eliga un producto");
	}
	else {
		usuario.innerHTML = "<h2> Datos usuario </h2>" + "<br>" + "Nombre: " + nombre + " " + apellido + "<br>" + "Email: " + email + "<br>" + "Dirección: " + direccion + "<br>" + "Teléfono: " + telefono + "<br>" + compra();
	}

}
