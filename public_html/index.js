/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

var array = ["Stimpson", "J", "cat"];

// elementoRemovido es igual a "Stimpson"
// y el array equivale a ["J", "cat"]
var elementoRemovido = array.shift();

// Lo agrega al inicio de array
array.unshift("Happy");

var miArray = [["John", 23], ["cat", 2]];
miArray.shift();
miArray.unshift(["Paul", 35]);