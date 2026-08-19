// singleton 

const mysym = Symbol("key1")

const user = {
    name: "Anushka soni",
    roll_no : 42,
    [mysym]: "Hello",
    email : "anushka.24@gmail.com",
    location : "Noida"
}

console.log(user.email);
console.log(user["email"]);
console.log(typeof user["email"]);
console.log(user["roll_no"]);
console.log(user[mysym])
console.log(typeof user[mysym]);

//Object.freeze(user)// this will freeze the object that means nobody can change it further

 
user.greeting =function(){
    console.log("Hello Anushka");
    
}
 
user.greeting2 =function(){
    console.log(`Hello Anushka,${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greeting2());





