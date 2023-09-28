import chalk from "chalk";
console.log(chalk.bgBlue("question21"));
const bouquet = {
    name: "spring delight",
    price: 200,
    discription: "Beautifull flowers bouquet"
};
// define an Array of object(convert object to array)
let bouquets = [];
// pushing multipel objects
bouquets.push(bouquet);
bouquets.push({ name: "summer bliss", price: 300, discription: "beautifull arrgument of summer floowers " }, { name: "blue flower", price: 345, discription: "beautifull arrgument of blue flowers" });
bouquets.push({ name: "red rose", price: 350, discription: "beautifull arrgument of red rose" });
console.log(bouquets);
//second method
//function display bouquet
function displaybouquet(bouquets) {
    for (let displaybouquet of bouquets) {
        console.log(`name:${displaybouquet.name},
   price:${displaybouquet.price},
   discription:${displaybouquet.discription}`);
    }
}
;
displaybouquet(bouquets);
//therd method
//console.log(`name=${bouquet.name}, price=${bouquet.price}, discription=${bouquet.discription}`);
console.log(chalk.bgBlue("question22"));
// Function to creat a fruit object
function fruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
//creat an array of fruit
const fruits = [
    fruit("apple", "red", "sweet"),
    fruit("banana", "yellow", "sweet"),
    fruit("orange", "orange", "citrusy"),
    fruit("grapes", "purple/green", "sweet"),
    fruit("strawberry", "red", "sweet"),
];
//access an invalid index
const invalidindex = 10;
//there are only 5 element in the array, so this will cause an error
console.log(`fruit at index ${invalidindex};`, fruits[invalidindex]);
//print the fruits
fruits.forEach(fruit => {
    console.log(`name: ${fruit.name}, color:${fruit.color}, taste:${fruit.taste} `);
});
console.log(chalk.bgBlue("question23"));
let car = "cultus";
console.log("car== cultus, i pridict true");
console.log(car == "cultus");
console.log("car== sohrab, i pridict false");
console.log(car == "sohrab");
console.log("car===cultus, i pridict true");
console.log(car === "cultus");
console.log("car==cltus, i pridict false");
console.log(car == "cltus");
console.log("car!==sohrab, i pridict true");
console.log(car !== "sohrab");
console.log("car!==cultus, i pridict false");
console.log(car !== "cultus");
console.log("car!=sohrab, i pridict true");
console.log(car != "sohrab");
console.log("car!=cultus, i pridict false");
console.log(car != "cultus");
console.log(chalk.bgBlue("Qusetion24"));
// Test for equality and inquality with strings
const str1 = "Hello";
const str2 = "heloo";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
//Test using the lowercase function
const text1 = "Hello World";
const text2 = "heloo world";
console.log(text1.toLowerCase() === text2); //true
/*Numercal tests involving equality and inequality, greater than and less than ,greaterthan or equal to
and less than or equal*/
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// Test using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z);
console.log(x < y || y > z);
console.log(x > y && y < z);
console.log(x > y || x > z);
// Test whether an items is in an array
console.log("fruits array");
const fruits1 = ["apple", "banana", "orange", "grapes"];
console.log(fruits1.includes("banana")); //true
console.log(fruits1.includes("kiwi")); //false
// Test whether an items is in array
const color1 = ['red', 'green', 'blue', 'yellow'];
console.log(!color1.includes("purple")); //true
console.log(!color1.includes("green")); //false
console.log(chalk.bgBlue("Question25"));
let aline_color = 'green';
if (aline_color === 'green') {
    console.log("congratulation, You have earned 10 points.");
}
aline_color = 'blue';
if (aline_color === 'green') {
    console.log("congratulation, You have earned 10 points.");
}
console.log(chalk.bgBlue("Question26"));
let alien_color1 = "white";
if (alien_color1 === "white") {
    console.log("congratulation you are win 5 points");
}
else {
    console.log("congratulation you are win 0 point");
}
//second mathoud
let alien_color2 = "black";
if (alien_color2 === "white") {
    console.log("congratulation you are win 5 points");
}
else {
    console.log("congratulation you are win 0 point");
}
console.log(chalk.bgBlue("Question27"));
let alien_color3 = "yellow";
if (alien_color3 === "white") {
    console.log("congratulation you are win 5 points");
}
else if (alien_color3 == "green") {
    console.log("congratulation you are win 10 points");
}
else if (alien_color3 == "yellow") {
    console.log("congratulation you are win 15 points");
}
else {
    console.log("unknown alien color ");
}
console.log(chalk.bgBlue("Question28"));
let age = 70;
if (age < 2) {
    console.log("the person is baby");
}
else if (age < 5) {
    console.log(`age is ${age} he person is toddler`);
}
else if (age < 14) {
    console.log(`age is ${age} the person is kid`);
}
else if (age < 20) {
    console.log(`age is ${age} the person is tenager`);
}
else if (age < 60) {
    console.log(`age is ${age} the person is adult`);
}
else {
    console.log(`age is ${age} the person is elder`);
}
;
console.log(chalk.bgBlue("Question29"));
const favoritefruits = ["apple", "banana", "orange"];
if (favoritefruits.includes("apple")) {
    console.log("i like apple");
}
if (favoritefruits.includes("banana")) {
    console.log("i like banana");
}
if (favoritefruits.includes("orange")) {
    console.log("i like orange");
}
if (favoritefruits.includes("grapes")) {
    console.log("i like grapes");
}
if (favoritefruits.includes("mango")) {
    console.log("i like mango");
}
console.log(chalk.bgBlue("Question30"));
const username = ["Admin", "Ali", "Hassan", "Hussain", "Zain"];
function greetusers() {
    for (const i in username) {
        if (username[i].toLowerCase() === "Admin") {
            console.log(`hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Heloo ${username[i]}, thank you for logging in again.`);
        }
    }
}
greetusers();
console.log(chalk.bgBlue("Question31"));
// empty array list
const emptyusername = [];
// non-empty array list
const usernames = ["admin", "shahan", "kamran", "rizwan", "babar"];
// function case
function greetuser(usernames) {
    if (usernames.length === 0) {
        console.log('we need to find some user!');
        return;
    }
    for (const a in usernames) {
        if (usernames[a].toLowerCase() === "admin") {
            console.log('Heloo admin, would you like to see a status report');
        }
        else {
            console.log(`Heloo ${usernames[a]}, thank you for logging again `);
        }
    }
}
;
console.log(`for non-empty user name:\n`);
greetuser(usernames);
console.log('for empty user');
greetuser(emptyusername);
console.log(chalk.bgBlue("Question32"));
