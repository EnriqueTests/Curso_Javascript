/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function usoDeSwitch(val) {
    var respuesta = "";

    switch(val) {
        case 1:
        case 2:
        case 3:
            respuesta = "alpha";
            break;
        case 4:
        case 5:
        case 6:
            respuesta = "beta";
            break;
        case 7:
        case 8:
        case 9:
            respuesta = "gamma";
            break;
        case 10:
        case 11:
        case 12:
            respuesta = "delta";
            break;
        default:
            respuesta = "Por defecto";
    }

    return respuesta;
}

console.log(UsoDeSwitch(1));