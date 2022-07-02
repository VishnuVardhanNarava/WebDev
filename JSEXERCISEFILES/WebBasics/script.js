// // alert("file is attached");

// document.title = "fuck you";

// console.log(document.URL);

// console.log(document.getElementsByTagName("p")[1]);

// console.log(document.getElementById("id1"));
// console.log(document.getElementsByClassName("class1"));

// let one = document.querySelectorAll("p");
// console.log(one[1]);

// let two = document.querySelectorAll("#id1");
// console.log(two);

// let three = document.querySelectorAll(".class1");
// console.log(three);

const elementChange = document.querySelectorAll('h1');
elementChange.forEach(element => element.textContent = "h1 Element is being changed");

const changeP = document.querySelector('p');
changeP.textContent = ' 1st p element is being changed';

const ChangeP = document.querySelectorAll('p');
ChangeP[1].textContent = '2nd p element is also being changed';

const creatE = document.createElement('h3');
creatE.textContent = "This is a new eliment created by JavaScript";
document.querySelector('body').appendChild(creatE);

document.querySelector('button').addEventListener("click", (event) => event.target.textContent = "I'm being clicked");

//track input form

// document.querySelector("#myform").addEventListener("input", (Event) =>{
//     console.log(Event.target.value);
// })
