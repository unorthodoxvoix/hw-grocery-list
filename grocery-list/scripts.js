//Task 1: Grocery List Homework

// let groceryItem1 = prompt ('What is your first grocery item?');
// let numOfItem1 = Number(prompt(`How many ${groceryItem1} would you like?`));


// let groceryItem2 = prompt ('What is your second grocery item?');
// let numOfItem2 = Number(prompt(`How many ${groceryItem2} would you like?`));


// let groceryItem3 = prompt ('What is your third gorcery item?');
// let numOfItem3 = Number(prompt(`How many ${groceryItem3} would you like?`));

// let total = parseInt(numOfItem1) + parseInt(numOfItem2) + parseInt(numOfItem3);


// console.log(alert (`Your Grocery List:
// ${groceryItem1} ${numOfItem1}
// ${groceryItem2} ${numOfItem2}
// ${groceryItem3} ${numOfItem3}
// Total number of Items: ${total}
// Stick to your list!`));

//Task 2: String Methods
// .toLowerCase() .toUpperCase() .charAt() .indexOf()

//1. Copy and paste the following code snippet into your JavaScript file.

let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";

let pangram = "The quick brown fox jumps over the lazy dog.";

let anotherPangram = "The five boxing wizards jump quickly.";

//2. Transform the string stored in `tongueTwister` to all lowercase. Store the result in a variable and print to the console.

console.log(tongueTwister.toLowerCase());

//3. Get the index of the first occurrence of "fox" in `panagram` and transform the first letter to uppercase. Print result to the console.
console.log(pangram.indexOf('fox'));

let newPangram = pangram.charAt(16);
console.log(newPangram.toUpperCase());

//4. Return the 11th character in `anotherPangram`. Print result to the console. (Hint: the problem asks for the 11th character not the 11th index).
console.log(anotherPangram.charAt(11));