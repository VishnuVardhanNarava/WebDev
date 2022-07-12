function valid(){
    let val = document.getElementById("myform").value;
    if(isNaN(val) || val<1 || val>20){
        alert("fuck you")
    }else{
        alert("haha")
    }
}