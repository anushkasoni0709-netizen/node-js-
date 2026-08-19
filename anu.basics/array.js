const arr=[1,3,5,77,5,9,0]
const arr2=["Anushka","Astha","Aman"]

console.log(arr[1]);
console.log(arr2[1]);


//.            Array Methods       //

arr.push(8)
arr2.push("Aryan")
arr.push(79)
arr.unshift(8)
arr.shift() // this removes 
console.log(arr);
console.log(arr2);

const arr3 = arr.join()
console.log(arr3);

console.log(arr.includes(77));
console.log(arr.indexOf(8));

console.log("A",arr);

console.log("B",arr);
const arr4 = arr.slice(2,7)
const arr5 = arr.splice(2,7)

console.log("A",arr4);
console.log("B",arr5);

