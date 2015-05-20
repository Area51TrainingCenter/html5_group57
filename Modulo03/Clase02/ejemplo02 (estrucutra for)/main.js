var num=10;

for(var i=1;i<=6;i++)
{
	document.write("<h"+i+">Este es un for etiquetas H1 </h"+i+">")
//document.write("<h1>Hola</h1>");
}

document.write("<select>")
for(var i=1;i<=30;i++)
{
	document.write("<option>Dia - "+i+"</option>")
}
document.write("</select><br>")


for(var i=1;i<=5;i++)
{
	document.write("Nombre de Alumno "+i+" <input type='text'><br>");
}


//var //tabla=prompt("ingresa la tabla que desea visualizar");

//for(var i=0;i<=100;i++)
//{	
	//document.write("<span>"+tabla+" * "+i+" = "+tabla*i+"</span><br>");
//}

var arreglo = [
	"enero",
	"febrero",
	"marzo",
	"abril",
	"mayo",
	"junio",
	"julio",
	"agosto",
	"setiembre",
	"octubre",
	"nomviembre",
	"diciembre"
	]

document.write("<h2>Meses del Año</h2>")

for(var i=0;i<arreglo.length;i++)
{
document.write("<span>Mes : " + arreglo[i]+ "</span><br>")

}
/*
document.write("<span>Mes : " + arreglo[0]+ "</span>")
document.write("<span>Mes : " + arreglo[1]+ "</span>")
document.write("<span>Mes : " + arreglo[2]+ "</span>")
document.write("<span>Mes : " + arreglo[3]+ "</span>")
document.write("<span>Mes : " + arreglo[4]+ "</span>")
document.write("<span>Mes : " + arreglo[5]+ "</span>")
document.write("<span>Mes : " + arreglo[6]+ "</span>")
document.write("<span>Mes : " + arreglo[7]+ "</span>")
document.write("<span>Mes : " + arreglo[8]+ "</span>")
document.write("<span>Mes : " + arreglo[9]+ "</span>")
document.write("<span>Mes : " + arreglo[10]+ "</span>")
document.write("<span>Mes : " + arreglo[11]+ "</span>")
document.write("<span>Mes : " + arreglo[12]+ "</span>")

/*for(var i=1;i<=6;i++)
{
	document.write("<h"+i+">Este es un for etiquetas H1 </h"+i+">")
//document.write("<h1>Hola</h1>");
}*/