// // _--_--_--_ ASSSIGNMENT SOLUTION _--_--_--_ \\


// // ^-^-^-^-^-^ TASK # 01 ^-^-^-^-^-^ \\

// // Install Node.js, TypeScript and VS Code on your computer.

// //done installation


// // ^-^-^-^-^-^ TASK # 02 ^-^-^-^-^-^ \\

// //Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello MUNEEBA", would you like to learn something today?”

let personName = "MUNEEBA";
console.log(`"Hello ${personName}, would you like to learn something today?"`);


// //  ^-^-^-^-^-^ TASK # 03 ^-^-^-^-^-^ \\

let myName : string = "MUNEEBA NOORI";

// // lowercase
console.log("lowercase:" , myName.toLowerCase () );

// // uppercase
console.log("uppercase:" , myName.toUpperCase ());

// // tilttlecase 
console.log("tittlecase:" , myName . replace(/\b\w/g,c=> c.toUpperCase()))

// //  ^-^-^-^-^-^ TASK # 04 ^-^-^-^-^-^ \\

// // newton's LAW once said that : "Every action has reaction"

let quote : string = "Every action has reaction";
let author : string = "Newton"; 

console.log(`${author} once said, "${quote}"`);

// //  ^-^-^-^-^-^ TASK # 05 ^-^-^-^-^-^ \\\

// // famous quote 2: repeat the ex # 4 but this time store the famous person name in a variable then compose yous message 
// //and store it in a new variable which we said nessage and then print the message........ (*.*)

let famous_person : string = "Newton"; 
let message =`${famous_person} once said, ${quote} `;
console.log(message);

// //  ^-^-^-^-^-^ TASK # 06 ^-^-^-^-^-^ \\\

// //Stripping Names: Store a person’s name, and include some whitespace 
// //characters at the beginning and end of the name. Make sure you 
// //use each character combination, "\t" and "\n", at least once.
// //Print the name once, so the whitespace around the name is displayed.
// //Then print the name after striping the white spaces

let PersonName = "\t\n MUNEEBA NOORI \t\n";
console.log("Original:", PersonName);
console.log("Stripped:", PersonName.trim());

// //  ^-^-^-^-^-^ TASK # 07 and 08 ^-^-^-^-^-^ \\\

// //Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(7+0)
console.log(16-56)
console.log(4*4)
console.log(32/2)

// //  ^-^-^-^-^-^ TASK # 09 ^-^-^-^-^-^ \\\

// //Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let FavoriteNumber = 18;
let check = `my favorite number is ${FavoriteNumber}....`;
console.log(check);

// //  ^-^-^-^-^-^ TASK # 10 ^-^-^-^-^-^ \\\

// // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// // comments on task # 02
// //declaration of variable......

let friendName = "hafsa";

// // here I use template literals to print person name with a message....... 

console.log(`"Hello ${PersonName}, would you like to learn some Python today?"`);

// // comments on task # 03
// // this task is basically for printing the person name in three different case
// //for lowercase 

console.log("lowercase:", PersonName.toLowerCase());

// //for uppercase

console.log("uppercase:", PersonName.toUpperCase());

// //for titlecase
// replace = replace any string with regular expression

console.log("titlecase:", PersonName.replace(/\b\w/g,c=>c.toUpperCase()));

// //  ^-^-^-^-^-^ TASK # 11 ^-^-^-^-^-^ \\

// //Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let store = ["sabahat", "taufeeq", "muneeba", "haseeb"];

console.log(store  [0]);
console.log(store  [1]);
console.log(store [2]);
console.log(store  [3]);
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// //  ^-^-^-^-^-^ TASK # 12 ^-^-^-^-^-^ \\

// //Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string [] = ["sabahat", "taufeeq", "muneeba", "haseeb"];
let ask: string = "which is your favorite movie.....?";
console.log(names[0] + "; " + ask);
console.log(names[1] + "; " + ask);
console.log(names[2] + "; " + ask);
console.log(names[3] + "; " + ask);

// //  ^-^-^-^-^-^ TASK # 13 ^-^-^-^-^-^ \\

// //Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.

let transportation = ["honda motorcycle", "audi", "fortuner"];
// //map list mein sab ko call kary ga ek ek kr k.... or is mein values, string, index, number, array or unknown use kr sakty hain.... 
transportation.map((items)=> (console.log(`I would like to own a ${items}`)));

// //  ^-^-^-^-^-^ TASK # 14 ^-^-^-^-^-^ \\

let guestAr : string [] = ["seema", "saba", "sara"];
guestAr.map((items)=> (console.log(`dear ${items}, you are to the dinner`)));

//  ^-^-^-^-^-^ TASK # 15 ^-^-^-^-^-^ \\

let guestArr : string [] = ["seema", "saba", "sara"];
let CanNotAttend : string = "seema";
console.log(CanNotAttend + " can not attend the dinner.");
let NewGuest : string = "saad";
guestArr[guestArr.indexOf(CanNotAttend)] =NewGuest;
console.log(guestArr)
guestArr.map((items) => console.log(`dear ${items}, you are invited to the dinner`));

// ^-^-^-^-^-^ TASK # 16 ^-^-^-^-^-^ \\

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestArr : string [] = ["saad", "saba", "sara"];
let CanNotAttend : string = "saba";
let NewGuest : string = "rayyan";
guestArr[guestArr.indexOf(CanNotAttend)] = NewGuest;
console.log(guestArr);
guestArr.map((items) =>
console.log(`dear ${items} i found a bigger dinner table so i am inviting more people:`)
);
let gueststart : string = "ali";
guestArr.unshift(gueststart);
console.log(guestArr);
let guestmiddle : string = "ayan";
let middleIndex =guestArr.length/2
guestArr.splice(middleIndex,0,guestmiddle);
console.log(guestArr);
guestArr.push("alina");
console.log(guestArr);
guestArr.map((items) =>
console.log(`dear ${items}, you are invited more people list on dinner:`)
);


// TASK # 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guests : string [] = ["saad", "ayesha", "aqsa", "rashid", "muneeba"];
console.log("due to limited space, only two people can be invited for the dinner..");

while (guests.length > 2){
const removedGuest = guests.pop();
console.log(`sorry ${removedGuest}, you are no longer invited to dinner.`);
}

guests.forEach((guest) => {
console.log(`dear ${guest}, you are still invited to dinner`);
});

guests.pop();
guests.pop();

console.log("HERE IS THE FINAL LIST",guests);

// TASK # 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

 // Array of places to visit
let placesToVisit: string[] = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];

// // Print original order
console.log("Original order:");
console.log(placesToVisit);

// // Print alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// // Check original order again
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// // Print reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// // Check original order again
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// // Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// // Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);

// // Sort the array in alphabetical order
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit.sort());

// // Sort the array in reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit.sort().reverse());

// // TASK # 19
//Dinner guests working with one of the program from exercise  14 through 18, print a message indicating the number of people you are inviting to dinner..

let invitation : string[] = ["saad","ayesha"];
let count_invitation : number = invitation.length
console.log(`${count_invitation} people are inivited to the dinner`);

// // TASK # 20
// // Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// // Array of countries
let countries: string[] = ["USA", "Tokyo","Canada", "France", "Japan"];
// // Print the array of countries
console.log("List of countries:");
console.log(countries);

// // TASK # 21
// // They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items

let person : {name: string, fname: string, age: number} = {name: "sabahat", fname: "female" , age: 27 };
console.log(person);

// // TASK # 22
// // Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

const days : string []  = ["sunday","monday","tuesday","wednesady","thursday","friday","saturday"];
// // console.log(days{7});
console.log(days[6]);

// // TASK # 23
// // Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
// .Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.       

let Car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');

console.log("is car != 'honda city'? predict true");
console.log(car != 'honda city');

console.log("is car == 'Subaru'? predict false ");
console.log(car == 'Subaru');

console.log("is car == 'SUBARU'? predict false ");
console.log(car == 'SUBARU');

console.log("is car.length == 6? predict true");
console.log( car.length == 6 )

console.log("is car.length != 10? predict true");
console.log( car.length != 10 )

console.log("is car.length == 10? predict true");
console.log( car.length == 10 )

console.log("is 10 > 45 ? predict ")
console.log(10 > 45);

console.log("is 3 <= 2 ? predict ")
console.log(3 <= 2);

console.log("is car =='subaru' && car.length == 6? predict true ");
console.log( car == 'subaru' && car.length == 6);

// // TASK # 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
 
//Tests for equality and inequality with strings
let string1: string = "sabahat";
let string2: string = "noori";

console.log(string1 === string2); // false
console.log(string1 !== string2); // true

// // Tests using the lower case function
let string3: string = "Hello";
let string4: string = "hello";

console.log(string3.toLowerCase() === string4.toLowerCase()); // true

// // Numerical tests involving equality and inequality, greater than and less than,
// // greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2);false
console.log(num1 !== num2); true
console.log(num1 > num2); true
console.log(num1 < num2);  false
console.log(num1 >= num2);  true
console.log(num1 <= num2);  false

// // Tests using "and" and "or" operators
let bool1: boolean = true;
let bool2: boolean = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

// // Test whether an item is in an array
let array1: number[] = [1, 2, 3, 4, 5];
let item1: number = 3;

// // includes : Determines whether an array includes a certain element, returning true or false as appropriate
console.log(array1.includes(item1)); // true

// // Test whether an item is not in an array
let item2: number = 6;
console.log(!array1.includes(item2)); // true

let item3: number = 6;
console.log(array1.includes(item2)); //false

// // TASK # 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let aliensColor: string = "green";

if (aliensColor === "green") 
     {
    console.log("Congratulations! You just earned 5 points!");
 }

 let aliensColor: string = 'yellow'; // or 'red'

if (aliensColor === 'yellow') {
     console.log("no output");
 }

// // TASK # 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

 let aliensColor: string = "green";

if (aliensColor === "green") 
    {
     console.log("Congratulations! You just earned 5 points for shooting the alien");
 }
 else {
     console.log("you just earned 10 points");
 }

 let aliensColor: string = "red";

 if (aliensColor === "green") 
     {
    console.log("Congratulations! You just earned 5 points for shooting the alien");
 }
 else {
     console.log("you just earned 10 points");
 }

// TASK # 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let aliensColor: string = "red";

if (aliensColor === "green") 
    {
    console.log("5  points");
}
else if(aliensColor === "yellow")
    {
        console.log(" 10  points"); 
    }
else
{
    console.log("15  points")
}

// TASK # 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

let age : number = 90
if (age < 2){
    console.log("you are a baby")
}
 else if (age < 4) {
    console.log("you are a toddler")
 }
 else if (age < 13) {
    console.log("you are a kid")
 }
 else if (age < 20) {
    console.log("you are a teenager")
 }
 else if (age < 65) {
    console.log("you are an adult")
 }
 else  {
    console.log("you are older")
 }

// TASK # 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits : string[] = ["apple", "mango", "banana", "cherry", "peach"]

if (favourite_fruits.includes("apple")) {
    console.log("apple")
}

if (favourite_fruits.includes("mango")) {
    console.log("mango")
}

if (favourite_fruits.includes("banana")) {
    console.log("banana")
}

if (favourite_fruits.includes("cherry")) {
    console.log("you really like kiwi")
}

if (favourite_fruits.includes("peach")) {
    console.log("you really like kiwi")
}

// TASK # 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let users : string[] = ["admin", "saba", "sana", "sara", "saad"];
for(let user of users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`hello ${users}, thank you for logging in again.`)
    }
}

// TASK # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users : string[] = ["admin", "saba", "sana", "sara", "saad"];
if(users.length ===0){
    console.log("we need to find some users!")
}
else{
    for(let user of users){
        if(user === "admin"){     
            console.log("Hello admin, would you like to see a status report?");
        }
        else{
                    console.log(`hello ${users}, thank you for logging in again.`)
                 }
             }

}

//TASK # 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. 

let current_users : string[] = ["admin", "saba", "sana", "sara", "saad"];
let new_users : string[] = ["admin", "sabahat", "muneeba", "taufeeq", "saad"];

let current_users_lower : string[] = current_users.map(user => user.toLowerCase());

for(let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())) {
    console.log(`sorry ${new_user}, that name is taken`)
} else{
    console.log(`yes ${new_user}, this is still available in the list`)
}
}

//TASK # 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers : number [] = [1,2,3,4,5,6,7,8,9]
for(let number of numbers){
   if(number === 1){
        console.log(`${number}st`)
}
else if (number === 2){
    console.log(`${number}nd`)
}
else if (number === 3){
    console.log(`${number}rd`)
}
else {
    console.log(`${number}th`)
}
}

//TASK # 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let favorite_pizza : string[] = ["chicken", "cheese", "vegetable"]
for(let pizza of favorite_pizza){
    console.log(pizza)
}
console.log("\n")

for(let pizza of favorite_pizza){
    console.log(`i really like ${pizza} pizza`)
}
console.log("\n i love pizza");

// TASK # 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals : string[] = ["cow", "dog", "cat"]
for(let animal of animals){
    console.log(animal)
}
console.log("\n")

for(let aniaml of animals){
    console.log(`a ${animals} has a tail`)
}
console.log("\n all of these are great pets! but i love cat more")

// TASK # 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The 
// function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makeShirt(size : string, text : string): void{
    console.log(`you order a ${size} shirt that says ${text}`)
}
makeShirt('large','"i love typescript"')
makeShirt('medium','"i need a big shirt"')

// TASK # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I
// love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function makeShirt(size : string = 'large', text : string = 'i love TypeScript'): void{
    console.log(`you order a ${size} shirt that says ${text}`)
}
makeShirt();
makeShirt('medium')

makeShirt('small','"i need a big shirt to wear"');

// TASK # 38
// / Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//  Call your function for three different cities, at least one of which is not in the default country.


function describe_city(city : string, country : string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`);
}

describe_city('Karachi')
describe_city('France','Europe')
describe_city('Lahore','Punjab')

// TASK # 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function cityCountry(city : string, country : string): void{
    console.log(`${city} is in ${country}`);
}

let c1 = cityCountry('Lahore','Pakistan')
let c2 = cityCountry('Tokyo','Japan')
let c3 = cityCountry('Dheli','India')

console.log(c1)
console.log(c2)
console.log(c3)

// TASK # 40
// / Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the
//   album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//   If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call
//    that includes the number of tracks on an album.



function makeAlbum(artist: string, title: string): {artist: string, title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
 let album = makeAlbum("sabahat","night")
 console.log(album)

 album = makeAlbum("haseeb","sunset")
 console.log(album)

 album = makeAlbum("rashid","full moon")
 console.log(album)

// TASK # 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.


function show_magicians(magicians: string[]): void{
    for (const magician of magicians ) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[]= ["ali","arman","ayan"];
show_magicians(magician)

// TASK # 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
//the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually 
//been modified.


function make_great(magicians: string[]): void{
    for (let i = 0; i < magicians.length; i++ ) {
       magicians[i] =magicians[i] + 'the great'
    }
}

const magicians2: string[]= ["alia","aryan","zayyan"];
make_great(magicians2);
show_magicians(magicians2);

// TASK # 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ 
//names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with 
//each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great2(magicians: string[]): string[] 
{
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++ ) {
       greatMagicians.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}

const magicians3: string[]= ["alia","aryan","zayyan"];
const greatMagicians2: string[] = make_great2(magicians3);

show_magicians(magicians3);
show_magicians(greatMagicians2);

// TASK # 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should 
// have one parameter that collects as many items as the function call provides,and it should print a summary of the 
// sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function Sandwiches(...items : string [ ]) : void {
    console.log("Sandwiches order : ")

    for (let i =  0; i < items.length; i++) {
        console.log(' - $ (items[i])')
    }
}

// console.log( "enjoy your Sandwiches order" )

// task # 45

// Cars: Write a function that stores information about a car in a Object. The function should 
// always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.

 type car = {

    manufacture : string
    model : string
    [key : string] : any;
 }

 function createcar(manufacture : string, model : string, optional : Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional

    }
 }

 const mycar : car = createcar ("toyota","corolla",{color : "silver", year : "2024"})
 console.log (mycar)

















