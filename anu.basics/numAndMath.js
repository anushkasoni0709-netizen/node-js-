const score = 400

const score2 = new Number(200)
console.log(score2);

console.table([score,score2,typeof(score),typeof(score2)]);
console.log(score2.toString());
console.log(score2.toFixed(3));

const score3 = 2234.87545
console.log(score3.toPrecision(3));

const score4= 100000000
console.log(score4.toLocaleString());

console.log(score4.toLocaleString('en-IN'));


//                    Maths                      //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.max(5,99,7,66,56,88));
console.log(Math.min(5,99,7,66,56,88));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max = 30;

console.log(Math.floor(Math.random()*(max-min+1)+ min));


