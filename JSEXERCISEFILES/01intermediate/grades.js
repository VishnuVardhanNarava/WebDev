const prompt = require("prompt-sync")();

// let totalMarks = 100;
// let getMarks = prompt("Enter your current marks: ");

// let percentage = (getMarks/totalMarks)*100;

// let find = function(){
//     if(percentage <= 100 && percentage > 80){
//         return "You got A";
//     }else if(percentage <=80 && percentage > 50){
//         return "You got B";
//     }else if(percentage <=50 && percentage > 30){
//         return "You got C";
//     }else {
//         return "You got F"
//     }
// }

// console.log(`You got ${percentage}%`);
// console.log(find());

/////////////////////////////////////////////////////////////////////////////////////////////////

let i = prompt("Enter your marks: ");
let x = prompt("Enter the total marks: ");

let getMyGrade = function(currentMarks, totalMarks){

    let percentage = (currentMarks/totalMarks)*100;

    let grade = "";

    if(percentage >= 90){
        grade = "A";
    }else if(percentage >= 70){
        grade = "b";
    }else if(percentage >= 50){
        grade = "c";
    }else {
        grade = "f";
    }

    console.log(`Your grade is ${grade} and percentage is ${percentage}%`);
}

getMyGrade(i, x);