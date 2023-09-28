import chalk from "chalk";

console.log(chalk.bgBlue("Question33"));
const numbers:number[]=[1,2,3,4,5,6,7,8,9,];
for (const number of numbers){
    let ordinal:string
    if (number===1){
        ordinal="st";
    }else if (number===2){
        ordinal="nd"
    }else if(number===3){
        ordinal="rd"
    }else{
        ordinal="th"
    }
    console.log(`${number}${ordinal}`)
};

console.log(chalk.bgBlue("Question34"));
// Define the array of favourite pizzas
const fav_pizzas=['pepperoni','margherita','bbq','chicken'];
//print the name of each pizza using a for loop
console.log('My favourite pizza are');
for (let i=0;i<fav_pizzas.length;i++){
    console.log(fav_pizzas[i]);
};
//print a sentence for each pizza
console.log("\n I like these pizzas:");
for (let i=0;i<fav_pizzas.length;i++){
console.log(`I like ${fav_pizzas[i]} pizza`);
};
// Print an additional sentence about how much I like pizza
console.log('\n I realy love pizza');

console.log(chalk.bgBlue("Question35"));
//List of animals with a common characteristic
const animals:string[]=['cat','dog','goat'];
//Printing the names of each animal using a for of loop
console.log('List of animals')
for(const animal of animals){
    console.log(animal);
}
// Print a statement about each animal
console.log("\n Statement about each animal");
for (const animal of animals){
    if (animal==='dog'){
        console.log(`A ${animal} is great pet.`)
    } else if (animal==='cat'){
        console.log(`A ${animal} would be a good companion at home.`)
    } else if (animal==='goat'){
        console.log(`A ${animal} is an adorable pet that also give us milk.`)
    };
};

console.log(chalk.bgBlue("Question36"));
//Define a function that accept a size and the text of message that shuld be printed on the shirt
const make_shirt=(size:string, message:string):void=>{
    console.log(`Size: ${size}, Message: ${message}`);
    //return `Size ${size}, Message ${message}`
};
// calling function
make_shirt("medium","This shirt is my favourit")
// second methoud
let size:string="Large"
let message:string="This is my favourite shirt"
make_shirt(size,message)

console.log(chalk.bgBlue("Question37"));

function makeshirt(size:string="Large",message:string="Beautyfull Shirt"):void{
    return console.log(`size:${size}, message:${message}`)
};
makeshirt();
makeshirt("Medium");
makeshirt("small","Red shirt is beautifull")

console.log(chalk.bgBlue("Question38"))

function discribe_city(city:string,country:string="unknown Country"):void{
    console.log(`${city} is in ${country}`)
}
discribe_city("karachi","Pakistan");
discribe_city("new york");
discribe_city("berlin","Germany");

console.log(chalk.bgBlue("Qustion39"))
const city_country=(city:string,country:string)=>{
    return `${city}, ${country}`
};
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("newyork","USA"));
console.log(city_country("Tokyo","Japan"));

console.log(chalk.bgBlue("Question40"));
function make_album(artist:string, title:string, track?:number): {artist:string; title:string; track?: number}
{
    const album={
        artist,
        title,
        track,
    }
 if (track !== undefined){
    album.track=track
}
return album;
};
const album1=make_album("Farhan","naats")
const album2=make_album("Nadeem","Qasida",1)
const album3=make_album("Irfan","noha",2)
console.log(album1);
console.log(album2);
console.log(album3);

console.group(chalk.bgBlue("Question41"));
//Array of magician's names
let magiciannames:string[] = ["Harry porter", "David copperfield", "Hermione Granger",
    "Professor albu dumbledore", "Ron weasley"];

function show_magician(magiciannames:string[]) {
    for (const magcian of magiciannames) {
        console.log(magcian);
    }
}
;
show_magician(magiciannames);

console.log(chalk.bgBlue("Question42"));
let magicianname = ["Harry porter", "David copperfield", "Hermione Granger",
    "Professor albu dumbledore", "Ron weasley"];
function makegreat(magician:string[]) {
    for (const magician of magicianname)
        console.log(`The Great ${magician}`);
}
// call the function to show the original magician's names
console.log("Orignal Magicians");
makegreat(magicianname);

console.log(chalk.bgBlue("Question43"));

const magiciannamess = ["Harry porter", "David copperfield", "Hermione Granger",
    "Professor albu dumbledore", "Ron weasley"];
function show_magicians(magiciannamess:string[]) {
    for (const magcian of magiciannamess) {
        console.log(magcian);
    }
}
;
//const greatmagicians:string[]=make_great(magiciannamess);
function make_great(magiciannamess:string[]) {
    const greatmagicians = magiciannamess.map(magician => `The Great ${magician}`);
    return greatmagicians;
}
;
console.log("\n Orignal Magician");
show_magician(magiciannamess);
console.log("\n Great Magicians");
make_great(magiciannamess);
//show_magician(greatmagicians);
console.log(chalk.bgBlue("Qusetion44"));
function makeburger(...items:string[]) {
    console.log("Bueger Summary");
    if (items.length === 0) {
        console.log("    - you ordered an empty burger.please add some items");
    }
    else {
        items.forEach((items, i) => {
            console.log(`${i + 1}.${items}`);
        });
    }
    console.log("\n");
}
makeburger("bun", "tomato", "mayonnies", "chicken");
makeburger("peanut butter", "bun", "Egg", "masala");
makeburger("bun", "shami", "cheese");


console.log(chalk.bgBlue("Question45"));

const mycar = creatcar("toyota", "corola",["color","red"],["operational_features","sunroof"],["speed","280 km/hr"]);
function creatcar(manufacture:string, model:string, ...properties:[string,any][]):any {
    const car:any = {
        manufacture,
        model,
    };
    for (const [key, value] of properties) {
     car[key]= value;
    }
    return car;
}
// example usage

console.log(mycar);
