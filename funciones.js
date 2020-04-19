///////////////////////////////////////
//Funcion de control del menu de la web
///////////////////////////////////////
function menu(op){
	
	switch (op){
		case 1:
			//home
			window.location.href = "index.html";
		break;
		case 2:
			location.href = "opcion1.html";
		break;
		case 3:
			window.location.href = "opcion2.html";
		break;
		case 4:
			window.location.href = "index.html";
		break;
		default:
			//home
			window.location.href = "index.html";
		break;
	}

}

function onlyOne(checkbox) {

    var checkboxes = document.getElementsByName('check')
    
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

}
function validarForm(){

	var resultado_nombre = validarNombre();

	if(resultado_nombre == true){
		document.getElementById('form_usuario').submit();
	}
}


function validarNombre(){
	
	var edad = document.getElementByName('edad');
	var control = true;

	if (edad < 18) {
		control = false;
	}

	return control;

}