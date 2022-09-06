//** Destructurando objetos */
const person = {
    name : 'Yulianny',
    lastName : 'Betancourt',
    direction: {
        city: 'Medellin',
        zipcode: 50001,
    }
};

console.log(person);

let person2 = {...person};
person2.name = 'Nazaret';

console.log(person2);