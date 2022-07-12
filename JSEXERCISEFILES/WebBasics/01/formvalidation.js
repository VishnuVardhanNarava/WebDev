function myvalidation(){
let match = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g;
let warn = document.querySelector("#warning");
let val = document.querySelector("#myform").value;
if(match.test(val)){
    warn.style.color="#EA8024";
    let valu = val.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
    document.querySelector("#myform").value = valu;
    document.getElementById("id2").textContent = "enter valid input"
}else{
    alert(document.getElementById("myform").value)
}
}

//new form validation

document.querySelector("#newform").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = "";
    event.target.realname.value = "";
})