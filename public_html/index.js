/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function siguienteEnLinea(arreglo, item) {
    // Agrega el elemento al final
    arreglo.push(item);

    // Elimina el primer elemento y lo retorna
    return arreglo.shift();
}

var probarArray = [1,2,3,4,5];

console.log("Antes: " + JSON.stringify(probarArray));
console.log(siguienteEnLinea(arreglo, 6));
console.log("Despues: " + JSON.stringify(probarArray));