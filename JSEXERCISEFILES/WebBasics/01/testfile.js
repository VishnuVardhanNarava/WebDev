let prompt = require("prompt-sync")();
// let res = require("regexp");
// let a = res("[A-B]");
// let b = "A"

let mat = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g;
let a = prompt("Enter only alphanumeric strings: ");
if(mat.test(a)){
    console.log("yes");
}else{
    console.log("nope");
}