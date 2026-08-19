const arr = ["apple","Banana",34,"anushka",42]
const arr2= ["hello",23,"astha",29]

//arr.push(arr2)


//console.log(arr);
//console.log(arr2);

const arr3 = arr.concat(arr2)
console.log(arr3);

const arr4 = [...arr,...arr2]
console.log(arr4);

let a1 = 100;
let a2 = 20
let a3 = 22
let a4 = 78

console.log(Array.of(a1,a2,a3,a4));
