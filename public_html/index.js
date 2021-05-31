/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function operadorMenorIgualQue(val) {
    if (val <= 12) {
        return "Menor o igual a 12";
    }

    if (val <= 24) {
        return "Menor o igual a 24";
    }

    return "Mas de 24";
}

console.log(operadorMenorIgualQue(10));