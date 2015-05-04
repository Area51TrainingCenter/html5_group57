var persona=
		{
	nombre:"juan carlos",
	edad:22,
	correo:"jtorriccelli",
	telefono:"11111111",
	dni:"17869458"
		};


var arreglo=["valor1","valor2","valor3"]

console.log(arreglo);
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.dni);
persona.nombre="luis";
persona.edad=27;

persona.genero="masculino";



console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["dni"]);
console.log(persona["genero"]);


var persona2={nombre:"juan",edad:27}
var arreglo=[
				 {nombre:"juan",edad:27},
				 {nombre:"juan",edad:27},
				 {nombre:"juan",edad:27},
				 {nombre:"juan",edad:27}
			]