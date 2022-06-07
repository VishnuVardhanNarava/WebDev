let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log("Welcome back user");
}else if(isVerified && isGuest){
    console.log("Allow free previews");
}
else{
    console.log("fuck off");
}
