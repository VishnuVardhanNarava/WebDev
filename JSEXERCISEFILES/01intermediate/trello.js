// const days = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];

// let print = function(day, index){
//     console.log(`Its day ${index} ____ ${day}`);
// }

// days.forEach(print);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// let print = function(day, index){
//     console.log(`It's month ${index} ____ ${day}`);
// }

// months.forEach(print);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ToDo application

// const myTodo = ["wakeup", "take shit", "do some workouts", "take a bath", "eat up your breakfast", "take a nap" ];

// let time = 5;

// let print = function(toDo, index){
//     console.log(`At ${time}:00 am ____ ${toDo}`);
//     time = time+1;
// }

// myTodo.forEach(print);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Again todo application

// const mytodo = [];

// mytodo.unshift("wakeup");
// mytodo.unshift("take shit");
// mytodo.unshift("bath");
// mytodo.unshift("eat");
// mytodo.unshift("sleep");
// mytodo.unshift("repeat");

// for(let index = mytodo.length-1; index >= 0; index--){
//     console.log(`your task no. ${index+1} is : ${mytodo[index]}`);
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Again

const mytodo = [];

mytodo.splice(0, 1, "wakeup");
mytodo.splice(1, 1, "take shit");
mytodo.splice(2, 1, "bath");
mytodo.splice(3, 1, "eat");
mytodo.splice(4, 1, "sleep");
mytodo.splice(5, 1, "repeat");

console.log(mytodo);

for(let index = 0; index < mytodo.length; index++){
    console.log(`your task no. ${index+1} is: ${mytodo[index]}`);
}