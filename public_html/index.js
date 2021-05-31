/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function operadorAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Si";
    }

    return "No";
}

console.log(operadorAnd(10));