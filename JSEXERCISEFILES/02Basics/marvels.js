// const superHeroes = ["iron man", "spider man", "thor", "hulk"];

// console.log(superHeroes);


// console.log(superHeroes[0]);

// console.log(superHeroes[1]);

// console.log(superHeroes[2]);

// console.log(superHeroes.length);

// console.log(superHeroes[superHeroes.length-1]);

// console.log(`we have ${superHeroes.length} super heroes`);


// At the beginning
const numbers = ["one", "two", "three", "four", "five", "six"];

numbers.unshift("something");
console.log(numbers);

numbers.shift();
console.log(numbers);

// At the end

numbers.pop();
console.log(numbers);

numbers.push("six");
console.log(numbers);

// middle

numbers.splice(2, 1, "something");
console.log(numbers);