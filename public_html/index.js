/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

function checkScope() {
    "use strict";
    let i = "function scope";

    if(true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }

    console.log("Function scope i is: ", i);
    return i;
}

checkScope();