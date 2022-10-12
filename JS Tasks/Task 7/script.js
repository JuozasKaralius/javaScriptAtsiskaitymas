/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};
// console.log(audi);

// funkciją "showObjectKeys" kuri grazina objekto key

function showObjectKeys (key) {
  return Object.keys(key)
}

console.log(showObjectKeys(audi));


// ---------------------------