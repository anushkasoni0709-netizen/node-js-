const sports =["Cricket","Tennis","Football","Volleyball","Kabaddi"]

let mySelf={
    name: "Anushka Soni",
    age: 20,
    city: "Noida",
    State:"Uttar Pradesh"
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);
console.log(typeof mySelf);
console.log(typeof sports);

console.table([mySelf]);
console.table([sports]);
console.table([mySelf,sports]);


