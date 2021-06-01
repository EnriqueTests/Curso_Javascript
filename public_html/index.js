/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function funcionObservar(val) {
    var resultado = "";

    var observar = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago"
    }

    resultado = observar[val];

    return resultado;
}

// Mostrara "Chicago"
console.log(funcionObservar("charlie"));