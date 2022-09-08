import React from 'react'

//** Si no se está cambiando este valor, ni tiene relación con un hook */
//** no es recomendado que este adentro del functional component */
// const name = 'Yulianny';

//** Se recomienda tener las otras funciones afuera para que react no las renderice con el functional component principal*/
//**Si la funcion no tiene ninguna dependencia de algo que este adentro del component principal, esto se puede hacer */
//**A menos que sea el cambio de un estado 'tiene dependencia de algo de adentro del componente' */
const getData = () => {
    const data = [{
        name: 'Yulianny',
        date: 17,
    },
    {
        name: 'Nazaret',
        date: 17,
    },
    {
        name: 'Betancourt',
        date: 17,
    }];
return (
    <span>{data.map(item => item.name + ' ')}</span>
)
}

export const App = () => {

    return (
        <h1>Holi {getData()} :3</h1>
)}
