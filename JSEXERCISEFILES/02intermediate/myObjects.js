let prompt = require("prompt-sync")();
let myCourses = {
    title: "JavaScript for web developer",
    lengthOfTheCourse: 12,
    price: "300RS",
    courseDescription: "This is the description of this course JavaScript web developer"
}

// let itsAfunction = function(object){
//     object.title = prompt("Enter Course Title: ");
// }

// itsAfunction(myCourses);
// console.log(myCourses.title);

let changeVideoLength = function(myObject){
    return {
        changeOne: `Length of this video is ${myCourses.lengthOfTheCourse + 2}`,
        changeTwo: `Length of this video is ${myCourses.lengthOfTheCourse + 5}`
    }
}

let change = changeVideoLength(myCourses);
console.log(change.changeOne);