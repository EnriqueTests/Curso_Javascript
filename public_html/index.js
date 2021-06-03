/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function multiplicarTodo(array) {
    var producto = 1;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            producto *= array[i][j];
        }
    }

    return producto;
}

var producto = multiplicarTodo([[1, 2], [3, 4], [5, 6, 7]]);

console.log(producto);