let prompt = require("prompt-sync")();

// let courseInfo = function(name = "noName", courseCount = 0){
//     return "Hello" +" "+ name +" "+ "your course count is " + courseCount; 
// }

// console.log(courseInfo());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let courseInfo = function(name = "noName", courseCount = 0){
//     return "Hello" +" "+ name +" "+ "your course count is " + courseCount; 
// }

// console.log(courseInfo("vasu", 3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let courseInfo = function(name = "noName", courseCount = 0){
    return "Hello" +" "+ name +" "+ "your course count is " + courseCount; 
}

console.log(courseInfo(prompt("Enter your name : "), prompt("Enter number of courses : ")));