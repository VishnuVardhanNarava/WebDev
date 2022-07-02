const dollarConversion = (dollar) => {
    if(typeof dollar === "number"){
        return dollar*65;
    }else{
        throw Error("Enter a number");
    }
}

try {
    let myValue = dollarConversion("g");
    console.log(myValue);
} catch (error) {
    console.log(error);
}

console.log("fuck you");