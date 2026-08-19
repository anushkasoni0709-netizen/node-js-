const user = {} // this is non singleton object
const user2 = new Object() // this is singleton

//console.log([user,user2]);

const regular = {
    email : "anushkaso@123",
    username :{
      fullname : {
        name:"Anushka",
        age:21,
        gender:"female" 
      }
    },
    address: "Greater Noida"
}

//console.log(regular);
//console.log(regular.username.fullname);

const apple = {1:"a",2:"b",3:"c"}
const app = {4:"d",5:"e",6:"f"}

//const app3 = Object.assign({},apple,app).  // used to merge two objects together
//console.log(app3); 

const app4 = {...apple,...app}
console.log(app4);

const hello = [
    {
        id : 1,
        name : "Anu",
        email : "anu@123"
    },
    {
        id : 1,
        name : "Anu",
        email : "anu@123"
    },{
        id : 1,
        name : "Anu",
        email : "anu@123"
    },{
        id : 1,
        name : "Anu",
        email : "anu@123"
    },{
        id : 1,
        name : "Anu",
        email : "anu@123"
    },
]

hello[1].email
console.log(regular);

console.log(Object.keys(regular));
console.log(Object.entries(regular));
