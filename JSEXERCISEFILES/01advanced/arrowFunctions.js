// let func = function(name){
//     return name;
// }
// console.log(func("shit"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let func = name => `hello ${name} !`;

// console.log(func("shit"));

const todos = [
    {
        title: "wakeup",
        isDone: true,
    },{
        title: "take shit",
        isDone: false,
    },{
        title: "sleep",
        isDone: true,
    }]

    const Done = todos.filter(todo => todo.isDone === false)

    console.log(Done);