/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function comprobarValorEstricto(val) {
    if(val !== 99) {
        return "No son iguales";
    }

    return "Son iguales";
}

// Va a mostrar "No son iguales"
console.log(comprobarValor("99"));