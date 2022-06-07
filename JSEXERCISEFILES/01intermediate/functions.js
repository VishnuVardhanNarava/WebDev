// const prompt = require("prompt-sync");


// let sayHello = function(name){
//     console.log("Greeting message to the user");
//     console.log(`hey ${name}`);
// }

// sayHello("john");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const prompt = require("prompt-sync")();


// let sayHello = function(){
//     let name = prompt("Enter your name : ");
//     console.log("Greeting message to the user");
//     console.log(`Hey ${name}`);
// }

// sayHello();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const prompt = require("prompt-sync")();


// let sayHello = function(name){
//     console.log(`Greeting message to ${name}`);
//     console.log(`Hey ${name}`);
// }

// sayHello(prompt("Enter your name : "));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let prompt = require("prompt-sync")()

// let addName = function(firstName, lastName){
//     let add = firstName + " " + lastName;
//     console.log(add);
// }

// addName(prompt("Enter first name :"), prompt("Enter your last name :"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let adder = function(num1, num2){
//     let add = num1+num2;
//     return add;
// }

// let Adder = adder(2, 3);

// console.log(Adder);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myMultiplier = function(num1, num2){
    return num1*num2;
}

console.log(myMultiplier(2, 3));