/*Ejercicio 1: Intercambio de valores usando desestructuración. Intercambia los valores de dos variables usando desestructuración.
//en este caso, las variables a y b ya estan creadas, solamente es necesario invertilas.*/
let a = 5,
  b = 10;

[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5




/*Ejercicio 2: Obtener el segundo elemento de un array. Escribe una función que retorne el segundo elemento de un array.2*/

const segundoElemento=([ , segundo]) => {
  return segundo;
};

console.log(segundoElemento([1, 2, 3, 4])); // 


/*Ejercicio 3: Desestructuración de un objeto con valores por defecto. Extrae la propiedad nombre de un objeto. Si no está presente, asigna el valor 'Desconocido'.

const persona = { edad: 25 };
const {nombre = 'desconocido'} = persona;

console.log(nombre); // 'Desconocido'*/


/*Ejercicio 4: Sumar elementos de un array desestructurado. Crea una función que Desestructura un array con al menos 3 elementos y devuelve la suma de los primeros tres.*/

const sumarTres = ([primero, segundo, tercero]) => {
  return primero + segundo + tercero;
};
console.log(sumarTres([4, 5, 6, 7])); // 15

/*Ejercicio 5: Desestructuración con Rest para obtener elementos restantes. Escribe una función que retorne todos los elementos excepto el primero de un array.*/
/*function sinPrimero([, ...resto]) {
  return resto;
};*/

const sinPrimero = ([, ...resto]) => {
  return resto;
};
console.log(sinPrimero([1, 2, 3, 4])); // [2, 3, 4]


/*Ejercicio 6: Desestructurar un objeto anidado. Extrae las propiedades nombre y pais de la variable persona.

const persona = {
  nombre: "Roberto",
  direccion: {
    ciudad: "Quito",
    pais: "Ecuador",
  },
};

const { nombre, direccion: {pais}}= persona;

console.log(nombre); // 'Roberto'
console.log(pais); // 'Ecuador'*/

/*Ejercicio 7: Desestructuración de múltiples objetos. Desestructura dos objetos y combina sus propiedades en uno solo.

const persona = { nombre: "Ana", edad: 28 };
const detalles = { profesion: "Ingeniera", pais: "España" };

const combinarObjetos= (obj1,obj2) => {
  return { ...obj1, ...obj2};
};
console.log(combinarObjetos (persona, detalles));*/

// { nombre: 'Ana', edad: 28, profesion: 'Ingeniera', pais: 'España' }

/*Ejercicio 8: Desestructuración en funciones. Desestructura el objeto config en una función llamada conectar para extraer host y port.*/

const config = { host: "localhost", port: 8080 };
const conectar = ({ host, port}) => {
  return `conectando a ${host} en el purto ${port}`;
};

console.log(conectar(config)); // Conectando a localhost en el puerto 8080

/*Ejercicio 9: Desestructurar un array de objetos. Extrae el nombre del segundo objeto en un array.let*/

const personas = [{ nombre: "Juan" }, { nombre: "Pedro" }];

let[, { nombre }] = personas;

console.log(nombre); // 'Pedro'