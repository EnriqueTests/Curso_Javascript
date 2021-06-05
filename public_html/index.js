/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

const stats = {
    max: 56.78,
    standar_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function() {
    return function half({ max, min}) {
        return (max + min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));