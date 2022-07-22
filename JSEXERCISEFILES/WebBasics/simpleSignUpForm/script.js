let regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g;

document.getElementById("signupform").addEventListener("input", ()=>{
    let usrname = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirmpassword").value;

    if(!regexp.test(usrname) && regexp.test(password) && password == cpassword){
        document.getElementById("submit").disabled = false;
    }else{
        document.getElementById("submit").disabled = true;
    }
})
document.getElementById("signupform").addEventListener("submit", event => {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let usrname = document.getElementById("username").value;
    let cpassword = document.getElementById("confirmpassword").value;
    console.log(`First Name: ${firstname}`);
    console.log(`Last Name : ${lastname}`);
    console.log(`User Name : ${usrname}`);
    console.log(`Password  : ${cpassword}`);
})

//validation for firstname and lastname to not take any special characters

document.getElementById("namediv").addEventListener("input", () => {
    let fvalue = document.getElementById("firstname").value;
    let lvalue = document.getElementById("lastname").value;
    
    if(regexp.test(fvalue) || regexp.test(lvalue)){
        let val1 = fvalue.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
        let val2 = lvalue.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
        document.getElementById("firstname").value = val1;
        document.getElementById("lastname").value = val2;
    }else{
        return true;
    }
})

//validation for username

document.querySelector("#username").addEventListener("input", event => {
    let usrvalue = event.target.value;
    if(regexp.test(usrvalue)){
        document.getElementById("warn1").style.color = "#EA8024";
    }
    else{
        document.getElementById("warn1").style.color = "rgb(72, 121, 75)";
    }
})

//password validation to check if the both password fields are getting matched with each other

document.getElementById("passdiv").addEventListener("input", () => {
    let pvalue = document.getElementById("password").value;
    let cpvalue = document.getElementById("confirmpassword").value;
    if(cpvalue != pvalue && cpvalue != ""){
        document.getElementById("confirmpassword").style.border = "2px solid red";
    }else{
        document.getElementById("confirmpassword").style.border = "0px solid transparent";
    }
})

//password validation to check wether the password has any special characters in it or not

document.getElementById("password").addEventListener("input", () => {
    let pvalue = document.getElementById("password").value;
    if(!regexp.test(pvalue) && pvalue != ""){
        document.getElementById("warn2").style.color = "#EA8024";
    }else{
        document.getElementById("warn2").style.color = "rgb(72, 121, 75)";
    }
})

