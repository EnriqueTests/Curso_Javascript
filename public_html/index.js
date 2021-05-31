/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function usoDeElse(val) {
    var resultado = "";

    if (val > 5) {
        resultado = "Mayor de 5";
    } else {
        resultado = "5 o menor";
    }

    return resultado;
}

console.log(usoDeElse(4));