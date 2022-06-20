let prompt = require("prompt-sync")();

let newTodo = [
    {
        title: "wake up",
        Done: true
    },
    {
        title: "take shit",
        Done: true
    },
    {
        title: "eat",
        Done: false
    },
    {
        title: "sleep",
        Done: false
    },
];

/////////////////////////////////////////////////////////////////////////////////////// ----- finding the index of a given string from an array of objects

// let i = prompt("Enter the string you want to find index for: ")

// const index = newTodo.findIndex(function(todo, index){
//     return todo.title.toLowerCase() === i.toLowerCase()
// })

// console.log(index);


///////////////////////////////"findIndex()"////////////////////////////// ----- finding the object of a given string from an array of objects (method 1)

// const findtodo = function(myTodo, title){
//     const index = myTodo.findIndex(function(todo, index){
//     return todo.title === title
//     })
//     return myTodo[index];
// }

// let i = prompt("Enter string to search: ")

// let printme = findtodo(newTodo, i)

// console.log(printme);

//////////////////////////////"find()"//////////////////////////////////// ------ finding the object of a given string from an array of objects (method 2)

const findtodo = function(myTodo, title){
    const index = myTodo.find(function(todo, index){
    return todo.title === title
    })
    return index;
}

let i = prompt("Enter string to search: ")

let printme = findtodo(newTodo, i)

console.log(printme);