/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// http://localhost:8383/Curso_Javascript/index.html

const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};

/**
 * Otra forma mas ligera
 * const createPerson = (name, age, gender) => ({name, age, gender});
 */

console.log(createPerson("Zodiac Hasbro", 56, "male"));