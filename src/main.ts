import './style.css'

// 1. PUSH, agrega un elemento al final del arreglo
const frutas = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
frutas.push('coco');
console.log(frutas);

// 2. POP, o queta siempre el ultimo elemento que se encuentra a la derecha
const frutas2 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
frutas2.pop();
console.log(frutas2);

// 3. UNSHIFT, se utiliza para agregar un elemento al comienzo del arreglo
const frutas3 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
frutas3.unshift('durazno');
console.log(frutas3);

// 4. SHIFT, se utiliza para quitar el primer elemento del arreglo
const frutas4 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
frutas4.shift();
console.log(frutas4);

// 5  SPLICE, se utliza para hacer un corte desde los indices que le indiquemos ej.(3,6) devolviendo un arreglo sin lo que le quitamos
const frutas5 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
frutas5.splice(1, 8);
console.log(frutas5);

// 6. SPLICE, nos dara un arreglo nuevo desde el indice que le indiquemos sin tomar en cuenta el ultimo indice
const frutas6 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
let newFruit = frutas6.splice(0,5);
console.log(newFruit);
console.log(frutas6);

// 7. CONCAT, nos dara un nuevo arreglo concatenando el primer arreglo con el que trabajemos mas los datos del arreglo que concatenemos
const frutas7 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
const verduras = ['zanahoria', 'cebolla']
let newFruitConcat = frutas7.concat(verduras);
console.log(newFruitConcat);

// 8. INDEXOF, nos dara el indice de el dato que le entreguemos
const frutas8 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
console.log(frutas8.indexOf('sandia'));

// 9. INCLUDES, nos entrega un booleano, si el dato que entregamos existe en el arreglo dara true, sino false
const frutas9 = ['manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
console.log(frutas9.includes('uva'));

// 10. FIND, nos permite encontrar un objeto mediante una condicion, segun el item(id) que le entreguemos
const frutas10 = [
  {name: 'manzanas', cantidad: 4},
  {name: 'peras', cantidad: 30},
  {name: 'uvas', cantidad: 11}
];
let arrayOfObjet = frutas10.find(item => item.name == 'uvas');
console.log(arrayOfObjet);

// 11. FINDINDEX, nos devuelve el indice del objeto mediante una condición, segun el item del objeto que le pasemos
const frutas11 = [
  {name: 'manzanas', cantidad: 4},
  {name: 'peras', cantidad: 30},
  {name: 'uvas', cantidad: 11}
];
let arrayOfObjetiNDEX = frutas11.findIndex(index => index.name == 'uvas');
console.log(arrayOfObjetiNDEX);

// 12. FILTER, nos devuelve la cantidad de objetos correspondiente a la condicion e item que se evalua
const frutas12 = [
  {name: 'manzanas', cantidad: 4},
  {name: 'peras', cantidad: 30},
  {name: 'uvas', cantidad: 11}
];
let arrayOfObjetFilter = frutas12.filter(item => item.cantidad <=10 );
console.log(arrayOfObjetFilter);

// 13. FOREACH, nos permite iterar cada uno de los elementos de un arreglo y hacer una operación con estos
let cantidadFrutas: number[] = [8, 9, 2, 7, 1, 4];
let resultadoForeach: number[] = [];
cantidadFrutas.forEach(item => resultadoForeach.push(item*2));
console.log(resultadoForeach);

// 14. MAP, nos permite transformar cada uno de los elementos del arreglo creando un nuevo arreglo
let cantidadFrutas2: number[] = [8, 9, 2, 7, 1, 4];
let cantidadFrutasMap: number[] = cantidadFrutas2.map(item => item*2)
console.log(cantidadFrutasMap);

// 15. SORT, nos permite ordenar los elementos de un arreglo
let cantidadFrutas3: number[] = [8, 9, 2, 7, 1, 4, 11, 12, 10];
cantidadFrutas3.sort((a,b)=>a-b);
console.log(cantidadFrutas3)

// 16. REVERSE, revierte la dirección del arreglo 
let cantidadFrutas4: number[] = [8, 9, 2, 7, 1, 4, 11, 12, 10];
cantidadFrutas4.reverse();
console.log(cantidadFrutas4);

// 17. SPLIT, nos devuelve en nuevo arreglo con n cantidad segun su evaluación(restricción) 
let exampleString = "Gonzalo";
let result = exampleString.split('o');
console.log(result);

// 18 JOIN, devuelve un string del arreglo concatenado con el string que le entreguemos
const frutas13 = ['','manzana', 'pera', 'naranja', 'platano', 'membrillo', 'uva', 'frutilla', 'melon', 'sandia', 'franbuesa'];
let resultJoin = frutas13.join('COME');
console.log(resultJoin);

// 19 REDUCE, nos permite hacer una operacion para cada uno de los indices del arreglo agregando el numero base que definamos
let cantidadFrutas5: number[] = [8, 9, 2, 7, 1, 4, 11, 12, 10];
let resultReduce = cantidadFrutas5.reduce((sum, index)=>sum+index, 0);
console.log(resultReduce)