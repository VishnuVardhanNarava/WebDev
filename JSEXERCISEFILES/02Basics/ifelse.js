const prompt = require ("prompt-sync")();

let whoishere = prompt ("Are you a user or a instructor? : ");

if (whoishere === "user") {
    console.log ("Welcome User");
} else if (whoishere === "instructor") {
    console.log ("Welcome Instructor");
} else {
    console.log("Fuck you");
} 