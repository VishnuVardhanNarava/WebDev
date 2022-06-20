let prompt = require("prompt-sync")();

let x = prompt("Enter (---done---) if you want is see ToDo's that are done / Enter (---notDone---) if you want to see ToDo's that are not done yet: ")

const bool = y => {if(x == "done"){
    return true;
}else{
    return false;
}}

let printer = bool(x);

const todos = [
    {
        title: "wakeup",
        isDone: true,
    },{
        title: "take shit",
        isDone: false,
    },{
        title: "bath",
        isDone: true,
    },{
        title: "eat",
        isDone: true,
    },{
        title: "sleep",
        isDone: false,
    },{
        title: "repeat",
        isDone: true,
    }]

const findTitle = todos.filter(todo => todo.isDone === printer);

for(let i = 0; i<= findTitle.length-1; i++){
    console.log(`ToDo's that are done : ${todos[todos.indexOf(findTitle[i])].title}`);
}

console.log(todos[todos.indexOf(findTitle[3])].title);

// for (let i of findTitle){
//     console.log(i.title);
// }

