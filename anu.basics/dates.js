let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());

console.log(typeof myDate);

let myCalender= new Date(2026,8,29)
console.log(myCalender.toString());

let time = new Date("29-09-2024")
let myTimeStamp = Date.now()
 console.log(myTimeStamp.toLocaleString());
 console.log(time.getTime());
 
 let newDate= new Date()
 console.log(newDate.getDate());
 console.log(newDate.getFullYear());
 

 newDate.toLocaleString('default',{
    weekday:"long"
 })