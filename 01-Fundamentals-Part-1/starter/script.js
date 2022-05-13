
const country = "Azerbaijan";
const continent = "Europe";
let population = 10_000_000;
const isIsland = false;
let language;
language = "azerbaijani";

halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
let isMoreThanFinland = population > 6_000_000;
console.log(isMoreThanFinland);
let isAveragePopulation = population > 33_000_000;
console.log(isAveragePopulation);
// let description = country + " is in" + continent + ", and its " + population + " million people speak " + language;

if (population > 33_000_000) {
  console.log(`${country} population is above average`);
}
else {
  console.log(`${country}'s population is ${population} below average`);
}

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) console.log("Only 1 border");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else console.log("No borders");


const day = "monday";

if (day === "monday") console.log(1);
else if (day === "tuesday") console.log(2);
else if (day === "wednesday" || day === "thursday") console.log(3, 4);
else if (day === "friday") console.log(5);
else if (day === "saturday" || day === "sunday") console.log(6, 7);
else console.log("not a valid day");

day === "monday" ? console.log("It's Monday bitches!") : console.log("It's not Monday, big Sadge");






// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

let bill = 384;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);




































/*
//const dolphins = [96, 108, 89];
//const dolphins = [97, 112, 101];
const dolphins = [109, 95, 123];
//const koalas = [88, 91, 110];
//const koalas = [109, 95, 123];
const koalas = [109, 95, 106];

const dolphinsAverage = findAverage(dolphins);
const koalasAverage = findAverage(koalas);

console.log(dolphinsAverage, koalasAverage);

let dolphinsMinScore = false;
let koalasMinScore = false;


if (dolphinsAverage >= 100) dolphinsMinScore = true;
if (koalasAverage >= 100) koalasMinScore = true;



if (koalasMinScore === true && dolphinsMinScore === true) {
  if (dolphinsAverage > koalasAverage) console.log("Winner of competition is team Dolphines")
  else if (dolphinsAverage < koalasAverage) console.log("Winner of competition is team Koalas")
  else console.log("Tie");
} else if (koalasMinScore === true && dolphinsMinScore === false) console.log("Winner of competition is team Koalas");
else if (koalasMinScore === false && dolphinsMinScore === true) console.log("Winner of competition is team Dolphines");
else console.log("Tie");




function findAverage(array) {
  let ans = 0;
  for (let i = 0; i < array.length; i++) {
    ans += array[i];
  }
  return ans / array.length;
}
*/

/*
const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
}
else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}

// "Mark's BMI (28.3) is higher than John's (23.9)!"
*/
