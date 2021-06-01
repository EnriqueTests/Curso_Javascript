/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

var almacen = {
    "car": {
        "inside": {
            "glove box": "map",
            "passanger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var globeBoxContents = almacen.car.inside["glove box"];

console.log(globeBoxContents);