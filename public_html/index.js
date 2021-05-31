/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function operadorOr(val) {
    if (val < 10 || val > 20) {
        return "Fuera del rango";
    }

    return "Dentro del rango";
}

console.log(operadorOr(15));