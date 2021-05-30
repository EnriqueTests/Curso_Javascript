/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function construirFrase(sujeto, adjetivo, verbo, adverbio) {
    var resultado = "";
    
    resultado += "El " + sujeto + " " + adjetivo + " " + verbo + " " + adverbio + " a la tienda.";
    
    return resultado;
}

console.log(construirFrase("perri", "grande", "corrio", "rapidamente"));