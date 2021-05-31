/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function comprobarValorEstricto(val) {
    if(val === 12) {
        return "Igual";
    }

    return "No son iguales";
}

// Va a mostrar "No son iguales"
console.log(comprobarValor("12"));