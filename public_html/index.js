/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

var objeto = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checarPropiedad(propiedad) {
    if(objeto.hasOwnProperty(propiedad)) {
        return objeto[propiedad];
    } else {
        return "No hallada";
    }
}

console.log(checarPropiedad("gift"));