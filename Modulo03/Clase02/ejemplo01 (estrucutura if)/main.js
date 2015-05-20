console.log("Bienvenido a la segunda clase de JS")
var numero1=parseInt(prompt("Ingrese un primer numero"));
var numero2=parseInt(prompt("Ingrese un segundo numero"));
//estrcutura if
if(numero1>numero2) // condicion
{
	console.log("a es el numero mayor");
	document.write("<h1>el primero numero es el numero mayor</h1>")
} //esto ejecutara si la condicion es verdadera
else
{
	console.log("b es el numero mayor");
	document.write("<h1>el seguundo numero es el numero mayor</h1>")
}//esto ejecutara si la condicion NO es verdadera

// solucion 1
var num1=16;

if(num1==15)
{
	document.write("<h1>eres un niño</h1>")
}// esto se ejecuta si la respuesta es verdaro
else
{

	if(num1>25)
	{	document.write("<h1>eres un joven</h1>")}
	else
	{	document.write("<h1>eres un adulto</h1>")}

} // esto se ejecuta si la respuesta es falsa


// solucion 2
var num1=16;

if(num1<15)
{
	document.write("<h1>eres un niño</h1>")
}// esto se ejecuta si la respuesta es verdaro
else if(num1<25)
{
document.write("<h1>eres un joven</h1>")
} // esto se ejecuta si la respuesta es falsa
else
{
	document.write("<h1>eres un adulto</h1>")
}



// solucion 2
var num1=16;

if(num1>0)
{
		if(num1<15)
		{
			document.write("<h1>eres un niño</h1>")
		}// esto se ejecuta si la respuesta es verdaro
		else if(num1<25)
		{
		document.write("<h1>eres un joven</h1>")
		} // esto se ejecuta si la respuesta es falsa
		else
		{
			document.write("<h1>eres un adulto</h1>")
		}	
}
else
{
			document.write("<h1>Ingresa un numero valido</h1>")
}


