// ask questions and fetch answers
// questions
// -name
// -listening to
// -food for meal
// -sport
// -skill

//final output:
/*
Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times. 
*/

const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//First tried playing with the example. I didn't like how ugly the nesting looked, so I searched online for other methods
// const name = readlineInterface.question('What is your name?: ', (answer) => {
//   console.log(`Wow! ${answer} is a great name`);
//   const favSound = readlineInterface.question('What do you like to listen to?: ', (answer) => {
//     console.log(`That sounds cool. I'll check that later.`);
//     //readlineInterface.close();
//   });
//   readlineInterface.close();
// });

// const favSound = readlineInterface.question('What do you like to listen to?: ', (answer) => {
//   console.log(`That sounds cool. I'll check that later.`);
//   readlineInterface.close();
// });

//console.log(name, "name saved!");

//following the methodology found here by user3032538 https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js
const askAQuestion = function(questionString) {
  //given a string to prompt as a question, returns a promise
  //What is a promise? I don't really know entirely. It's like a placeholder, knowing that it will be filled in properly later
  //what I do know, is that given a callback, it will return a thing that will arrive later (asynchronously)
  //which is what is roughly happening here
  return new Promise(resolve => readlineInterface.question(questionString, answer => resolve(answer)));
};

//here, I declared this function to be asynchronous.
//that way I can call await, which will block the function from doing anything more until the operation we're awaiting on is actually done
//this is important, otherwise all of the answers to each question would come back undefined, which would be sad.
const survey = async function() {
  const name = await askAQuestion('What is your name?: ');
  const pronoun = await askAQuestion('What pronoun do you use?: ');
  const activity = await askAQuestion("What's an activity you like to do?: ");
  const favSound = await askAQuestion('What do you like to listen to while doing that acitivity?: ');
  const favFood = await askAQuestion("What's your favorite thing to eat?: ");
  const favFoodMeal = await askAQuestion("At what meal do you like to eat your favorite food?: ");
  const favSport = await askAQuestion("What is your favorite sport?: ");
  const quirkySkill = await askAQuestion("What is a quirky skill you have?: ");
  readlineInterface.close();
  console.log('');
  console.log("Here is a profile descriptor I built for you:");
  console.log(`${name} loves to listen to ${favSound} while ${activity}, and devours ${favFood} at ${favFoodMeal}. ${pronoun} also enjoys ${favSport}, and has immense expertise at ${quirkySkill}.`);
};

survey();