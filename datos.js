const {estudiante, obtenerpromedio} = require ("./calculo");
const fs =require ("fs");
console.log(" el nombre del estudiante es " + estudiante.nombre);
console.log("el promedio del estudiante es " + obtenerpromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));
let { nombre,edad: anos, notas: {matematicas, ingles, programacion}}= estudiante;
console.log("El nombre del estudiante es " + nombre);
console.log("el promedio del estudiante es " + obtenerpromedio(matematicas,ingles, programacion));
console.log("la edad del estudiante es " + anos);
let creararchivo = (estudiante)=>{
	texto = "el nombre del estudiante es "	+ nombre + "\n" +
  			"ha obtenido un promedio de " + obtenerpromedio(matematicas, ingles, programacion);
 	fs.writeFile("promedio.txt", texto, (err)=>{
 		if (err) throw (err);
 		console.log("se ha creado el archivo");
 	});
}
creararchivo(estudiante);