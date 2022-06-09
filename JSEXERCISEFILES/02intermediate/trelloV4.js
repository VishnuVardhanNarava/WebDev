let myTodo = [
    {
        title: 'wakeup',
        done: false
    },
    {
        title: 'brush',
        done: false
    },
    {
        title: 'take shit',
        done: true
    }
]

let findTitle = myTodo.findIndex(function(todo, index){
    todo.title === 'wakeup'
    
})