/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function operadorMayorQue(val) {
    if (val > 100) {
        return "Arriba de 100";
    }

    if (val > 10) {
        return "Arriba de 10";
    }

    return "10 o menor";
}

console.log(operadorMayorQue(10));