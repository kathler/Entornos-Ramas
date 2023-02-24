
function validar(){

	var nombreCompleto=document.getElementByID("NombreCompleto");

	if(!isNaN(nombreCompleto) || nombreCompleto.length==0){
		alert("Ha introducido un nombre incorrecto");
		return false;
	}

	var telefono=getElementById("Telefono");

	if(!isNaN(telefono) || telefono.length==0){
		alert("Ha introducido el telefono mal");
		return false;
	}

	var contrasenia=getElementById("Contrasenia");

	if(contrasenia.length<6){
		alert("Ha introducido una contraseña erronea");
		return false;
	}

	var contraseniaRepetida=getElementById("ContraseniaRepetida");

	if(!contraseniaRepetida.equals(contrasenia)){
		alert("Se ha equivocado al repetir la contraseña");
		return false;
	}

	var correo=getElementById("CorreoElectrionico");

	if(!correo.equals(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)){
		alert("El email está mal introducido");
		return false;
	}

	var profesion=getElementById("Profesion");

	if(profesion.value==0){
		alert("No se puede elegir la primera opción, por favor elija una de las restantes");
		return false;
	}

	var genero=getElementById("Genero")

	if(genero.value==0){
		alert("Debe elegir un genero de entre los tres mostrados");
		return false;
	}

};