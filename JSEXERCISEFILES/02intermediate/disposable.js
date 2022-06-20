let todo = ["wakeup", "take shit", "brush", "bath", "eat", "sleep"]

let index = todo.findIndex(function(heck){
    return heck === "take shit"
})

console.log(index);

///////////////////////////////////////////////////////////////////////////////////////////////

const findtodo = function(myTodo, title){
    const index = myTodo.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return myTodo[index];
}

let i = prompt("Enter string to search: ")

let printme = findtodo(newTodo, i);

console.log(printme);