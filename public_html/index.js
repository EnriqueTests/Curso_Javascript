/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow : tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));