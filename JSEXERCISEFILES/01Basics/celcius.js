const prompt = require('prompt-sync')();
let FH = prompt("Enter Value in FH : ")

//convert to celcius

// formula (T(F) - 32) * 5/9

let celcius = (FH - 32) * 5/9;

console.log(celcius)