/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

// Se puede ver desde cualquier parte
var global = 10;

function funcion() {
    // Se puede ver desde cualquier parte
    globalA = 20;

    // Solo puede ser vista desde dentro de esta funcion
    var globalB = 10;
}