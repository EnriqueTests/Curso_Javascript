/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3, 4));