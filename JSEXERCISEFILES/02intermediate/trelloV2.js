let prompt = require("prompt-sync")();

let i = prompt("Enter total number of meetings you have today: ");
let x = prompt("Enter number meetings already done: ");

let myTodo = {
    Day: "Monday",
    meetings: 0,
    meetingDone: 0
}

let meetAdd = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet;
}

let meetDone = function(todo, done = 0){
    todo.meetingDone = todo.meetingDone + done;
}

let resetday = function(todo){
    todo.meetings = 0;
    todo.meetingDone = 0;
}

let summery = function(todo){
    let meetleft = todo.meetings - todo.meetingDone
    console.log(`The number of meeting still left are: ${meetleft}`);
}

meetAdd(myTodo, i);

meetDone(myTodo, x);

summery(myTodo);

resetday(myTodo);
