const activo = true;
//** retorna Activo si la condicional se cumple, e Inactivo si es lo contrario */
const mesagge = activo ? "Activo" : "Inactivo";
console.log(mesagge);

//**Sirve para cuando queremos solo que regrese algo si se cumple la condición */
//**Si no se cumple retorna false y es más rápido para JavaScript */
const msg = !activo && "Activo";
console.log(msg);
