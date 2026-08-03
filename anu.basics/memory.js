let name = "Anushka Soni"
let name2= name;

console.log(name2);


name2="Astha Soni"

console.log(name2);
console.log(name);

let user1={
    name:"Priyanshu Yadav",
    age: 22,
    email:"priyanshu@gmail.com",
    city: "Etawah",
    State:"Uttar Pradesh",
}

console.table(user1);

let user2 = user1
user2.email= "priyanshuydv@gmail.com"

console.log(user1.email);
console.log(user2.email);

console.table(user1);
console.table(user2);

// IN heap reference are same if we change one the other will be automatically changed
