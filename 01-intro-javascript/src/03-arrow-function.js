function Saludar (name) {
    return `Hola ${name}`;
}

const saludar2 = function (name) {
    return `Hola ${name}`;
}

const saludar3 = () => `holi`

const saludar4 = () => {
    return 'Holi 2'
}

console.log(Saludar('Yulianny'));
console.log(saludar2('Nazaret'));
console.log(saludar3());
console.log(saludar4());

//** return implicito */

const users = () => ({
    name: 'Yulianny',
    lastName: 'Betancourt',
})

console.log(users());