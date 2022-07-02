let phone = {
    brand: "apple",
    price: 40000,
    have: false
}

let bike = {
    brand: "yamaha",
    price: 115000,
    have: false
}

let ac = {
    brand: "worlpool",
    price: 40000,
    have: false
}

let things = new Map()

things.set("phone", phone);
things.set("bike", bike);
things.set("ac", ac);

// console.log(things.size);
// console.log(things.get("phone"));
// console.log(things.keys());
// console.log(things.values());

for (const key of things.keys()) {
    console.log(key);
}

console.log("//////////////////////////////////////////////////////////////////");

for (const vals of things.values()) {
    console.log(vals.brand);
}

console.log('//////////////////////////////////////////////////////////////////////////////////////');

for ([key, value] of things) {
    console.log(key + "=" + value.brand);
}

console.log('//////////////////////////////////////////////////////////////////////////////////////');

things.forEach((value, key) => console.log(key + "=" + value.brand));

console.log('//////////////////////////////////////////////////////////////////////////////////////');

let arrofarr = [['one', 1],['two', 2],['three', 3],['four', 4]];

let newMap = new Map(arrofarr);

console.log(newMap.keys());