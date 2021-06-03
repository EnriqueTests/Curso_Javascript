/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    }
})();

console.log(increment(5, 2));
console.log(increment(5));