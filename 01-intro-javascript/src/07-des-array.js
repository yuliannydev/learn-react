const array = [1, 2, 3, 4];

let array2 = [...array, 5];

console.log(array);
console.log(array2);

const log = array.map(numero => {
    return numero * 2;
})
console.log(log);