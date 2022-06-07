let prompt = require("prompt-sync")();

let userName = 'abc123def'
let password = "1234567"

let i = prompt("Enter your user name: ")

let userCheck = function(uName){
    console.log(uName);
    if((uName.includes(i)) && (uName.length > 6)){
        return true;
    }else{
        return false;
    }
}

console.log(userCheck(userName));

console.log(userName.length);