
import inquirer from "inquirer";
import banner from "node-banner";
import showBanner from "node-banner";
import Choice from "inquirer/lib/objects/choice.js";
import { error } from "console";

type anwerstype={
  num1:number,
  num2:number,
  opertaion:string,
}
inquirer
.prompt([
{name:"num1",
type:"number",
message:"Enter your first number"
},
{
name:"num2",
type:"number",
message:"Enter your second number",
},
{
  name:"operation",
  type:"list",
  choices:["+","-","*","/",],
  message:"Select your operation ",
},
])
.then((answers:anwerstype)=>{
if (answers.opertaion=="+"){
    const result = answers.num1 + answers.num2;
    console.log(`sum=${result}`);
}
else if(answers.opertaion=="-"){
      const result = answers.num1 - answers.num2;
      console.log(`Subtract=${result}`);
}
else if(answers.opertaion=="*"){
      const result = answers.num1 * answers.num2;
      console.log(`multiply="${result}`);
}
else if(answers.opertaion=="/"){
      const result = answers.num1 / answers.num2;
      console.log(`Dvision=${result}`);
};
})
.catch((error)=>{
  if (error.isTtyError){

  }else{};
});

(async ()=>{
  await showBanner('Calculator','This calculator can perform addition,subtraction,multiplication,division','yellow','blue');
})();



