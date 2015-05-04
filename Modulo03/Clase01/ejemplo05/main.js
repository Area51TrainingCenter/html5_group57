var nombre1="juan carlos";
var nombre2="diego";
var nombre3="martin";
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

var nombres=["juan carlos" ,"diego","martin"];
console.log(nombres);
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);


var meses=[
	"Enero" ,
	"Febrero",
	"Marzo",
	"Abril",
	"mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Setiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"
	];
var dias=[
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo"
	
		];
console.log(meses);

var fechaActual=new Date();

console.log(fechaActual.getMonth());
console.log("el mes actual es : "+meses[fechaActual.getMonth()]);
console.log(fechaActual.getDay());
console.log("el dia actual es : "+dias[fechaActual.getDay()-1]);


var fechaPartes = [20, 12, 2014]; 
console.log("Inicial", fechaPartes);
console.log("Unida", fechaPartes.join("/") );
console.log("Último elemento borrado", fechaPartes.pop() )
console.log("Con nuevo elemento", fechaPartes.push(2016));
console.log("arreglo modificado", fechaPartes);

console.log("Cantidad de elementos del arreglo", fechaPartes.length );
console.log("Posición del elemento con valor 12", fechaPartes.indexOf(12) );
console.log("Al revés", fechaPartes.reverse() );
console.log("Agregando elementos", fechaPartes.concat(25, 1, 2015,33,45,1098) );


