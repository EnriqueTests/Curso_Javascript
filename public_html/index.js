/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function usoDeIfElse(val) {
    var resultado = "";

    if (val > 10) {
        resultado = "Mayor de 10";
    } else if(val < 5) {
        resultado = "Menor de 5";
    } else {
        resultado = "Entre 5 y 10";
    }

    return resultado;
}

console.log(usoDeIfElse(7));