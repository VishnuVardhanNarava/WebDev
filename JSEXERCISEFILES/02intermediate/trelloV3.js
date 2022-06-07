let prompt = require("prompt-sync")();

let i = prompt("Enter total number of meetings you have today: ");
let x = prompt("Enter number meetings already done: ");

let myTodo = {
    Day: "Monday",
    meetings: 0,
    meetingDone: 0,

    addMeet: function(meet = 0){
        this.meetings = this.meetings + meet;
    },

    meetDone: function(done = 0){
        this.meetingDone = this.meetingDone + done;
    },

    resetday: function(){
        this.meetings = 0;
        this.meetingDone = 0;
    },
    
    summery: function(){
        let meetleft = this.meetings - this.meetingDone
        console.log(`The still have ${meetleft} meetings left today`);
    }

}

myTodo.addMeet(i);

myTodo.meetDone(x);

myTodo.summery();

myTodo.resetday();