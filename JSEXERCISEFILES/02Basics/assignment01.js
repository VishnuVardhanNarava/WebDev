const prompt = require("prompt-sync")();

let grade = prompt("Enter your grade : ");

if(grade >= 8){
    console.log("You did very well");
}else if(grade < 8 && grade >= 5){
    console.log("Try a little harder next time");
}else{
    console.log("You got room for improvement");
}