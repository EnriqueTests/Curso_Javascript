/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

class SpaceShuttle {
    constructor(targetPlane) {
        this.targetPlane = targetPlane;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlane);

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name =  name;
        }
    }

    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);