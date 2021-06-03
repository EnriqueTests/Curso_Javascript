/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

(function() {
    // Hacemos una copia en arr2
    arr2 = [...arr1];
    
    arr1[0] = 'potato';
})();

console.log(arr2);