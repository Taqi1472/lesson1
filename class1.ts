import chalk from "chalk";

console.log(chalk.bgBlue("question1"));
console.log("npm install typescript");

console.log(chalk.bgBlue("question2"));
let fullname:string= "syed muhammad taqi";
console.log(`hello ${fullname}, would you like to learn some python today?`);

console.log(chalk.bgBlue("question3"));
let lowercase:string=fullname.toLowerCase();
let upercase:string=fullname.toUpperCase();
let titlecase:string[]=fullname.split("")
console.log(upercase);
console.log(lowercase);
console.log(titlecase);

console.log(chalk.bgBlue("question4"));
let quote:string="A persone who never made a mistake never tried anything new."
let author:string="Albert Einstein"
console.log(`${author} once said, ${quote}`);

console.log(chalk.bgBlue("question5"));
let famous_person:string="Albert Einstein";
let messages:string=`Did you know that ${famous_person} was a brilliannt phisicist?`; 
console.log(messages);

console.log(chalk.bgBlue("question6"));
let whitespace:string="\t        Syed Muhammad Taqi          \n";
let strippedname:string=fullname.trim()
console.log(strippedname);
console.log(whitespace);

console.log(chalk.bgBlue("question7"));
let additionresult:number= 5+3;
let subtractionresult:number= 13-5;
let multiplicationresult:number=2*4;
let dividationresult:number=16/2;
console.log("\t   add    \n" , additionresult);
console.log("\t   sub    \n" , subtractionresult);
console.log("\t   mul    \n" , multiplicationresult);
console.log("\t   divi   \n" , dividationresult);

console.log(chalk.bgBlue("question8"));
console.log(8);
console.log(3+5);
console.log(2*4);
console.log(12-4);

console.log(chalk.bgBlue("question9"));
const favoriteNumber:number=7;
const msg:string=`My favorite number is ${favoriteNumber}.`;
console.log(msg);

console.log(chalk.bgBlue("question10"));
console.log('comment')
/*Syed Muhammd taqi 26-08-2023
i am learning some typescript language.*/

console.log(chalk.bgBlue("question11"));
const names:string[]=["Ali" , "Hassan" , "Hussain" , "Zain" , "Baqir"];
console.log(names);
for (const name of names){
console.log(name);
}
//second method
names.forEach(names=>{
    console.log(`immam ${names} (as)`)
})

console.log(chalk.bgBlue("qauestion12"));
const messsageTemplet="hello,";
const message1=messsageTemplet + names;
console.log(message1);
//second method
names.forEach(names=> 
    {console.log(`hello , ${names} `)})
//therd method
    for(const name of names){
    const message1=messsageTemplet + name;
    console.log(message1);
    }
console.log(chalk.bgBlue("question13"));
const bikes:string[]=["Honda Motorcycle","Toyota Truck","BMW bicycle","Tesla car"];
for (const bike of bikes){
    console.log("I would like to own a" + bikes + ".");
    break;
}
//second method
bikes.forEach(bikes=>{
    console.log(`I would like to own a ${bikes}.`)
})
console.log(chalk.bgBlue("question14"));
const guests:string[]=['Albert Einstien' , 'Leonardo' , 'Marie' ];
   
console.log("Dear, " + guests[0]+ ", you are cordially invited to dinner.");
console.log("Dear, " + guests[1]+ ", you are cordially invited to dinner.");
console.log("Dear, " + guests[2]+ ", you are cordially invited to dinner.");
//second method
guests.forEach(guests=>{
    console.log(`Dear, ${guests} , you are cordially invited to dinner.`)
});
// therd method
for(let guest of guests){
    console.log(`Dear, ${guest} , you are cordinaly invited to dinner.`)
};
console.log(chalk.bgBlue("queation15"));
let person : string= "syed fakhar abbas naqvi";
// split command will convert a string into an array
let word:string[] = person.split(",");
// console.log(word);
let titlecaseName : string =""
// for (let i=0; i>word.length; i++){
titlecaseName=word[0].charAt(0).toUpperCase() + word[0].slice(1).toLowerCase();
// }
console.log(titlecaseName);


console.log(chalk.bgBlue("queation16"));
for(let guestslist of guests){
    console.log(`hello, ${guestslist}, we found a bigger dinner table`)
};
console.log(guests);
guests.push("Zakir","Hashim");
console.log(guests);
guests.unshift("Ali","Shabaz");
console.log(guests);
guests.splice(0,2);
console.log(guests);

console.log(chalk.bgBlue("question17"));
console.log(guests);
while(guests.length>2){
    let removeguest=guests.pop()
    console.log(`sorry, ${removeguest}, i cant invite you to dinner`)
};
console.log(guests);
for (let inviteguest of guests){
    console.log(`Heloo, ${inviteguest}, you are still invited to dinner`)
};
guests.pop();
guests.pop();
console.log(`Guest list is empty ${guests}`);

console.log(chalk.bgBlue("question18"));
let TravelDestinaton:string[]=["Madina","JantulBaqi","Najaf","Qarbla","Shaam"];
console.log(TravelDestinaton);
console.log([...TravelDestinaton].sort());
console.log(TravelDestinaton);
console.log([...TravelDestinaton].sort().reverse());
TravelDestinaton.reverse();
console.log(TravelDestinaton);
console.log(TravelDestinaton.reverse());
TravelDestinaton.sort();
console.log(TravelDestinaton);
TravelDestinaton.sort().reverse();
console.log(TravelDestinaton);

console.log(chalk.bgBlue("question19"));
guests.push('Albert Einstien' , 'Leonardo' , 'Marie');
for (let guestslist of guests){
console.log(`We had finally invited ${guestslist}, for dinner.`)
};

console.log(chalk.bgBlue("question20"));
let countries:string[]=["Pakistan","India","Chaina","Japan","USA"];
for (let country of countries){
    console.log(country);
}









