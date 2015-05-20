var usuario =prompt("ingresa tu nombre de usuario");
//if(usuario=="userA51")
//{
//	document.write("Bievenido UserA51");
//}
//else
//{
//	document.write("Nombre de usuario no valido");
//}

var intentos=1;

while(usuario!="userA51")
{
	if(intentos>3)	
	{
		break;
	}
	else{
		var usuario =prompt("ingresa tu nombre de usuario");
		 intentos++;		
	}



}




if(intentos>3)
{
	document.write("Superaste el numero de intentos permitidos");
}

else{
	document.write("Bievenido UserA51");
}



