// function RestrictSpaceSpecial(e) {  
//     var k;  
//     document.querySelector("#myform") ? k = e.keyCode : k = e.which;  
//     return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));  
// } 

// document.querySelector("#myform").addEventListener("keypress", (e) => {
//     var k;
//     document.all ? k = e.keyCode : k = e.which;
//     return ((k>64 && k< 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
// })


let match1 = /[A-Ba-b]/g;
let match2 = /[0-9]/g;
let var1 = document.querySelector("#myform").addEventListener("change", event => {
    return event.target.value;
});


function validate(){
    if (var1 == var1.match(match1) || var1 == var1.match(match2)){
        alert("You can not enter special characters");
        // let repl = document.querySelector("#myform").value.replace(/@/g, '');
        // document.querySelector("#myform").value = repl;
    }else{
        return true;
    }
}