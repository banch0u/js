'use strict';

function juicer(app, org) {
  const juice = app + " in the citeeeey " + org;
  return juice;
}

console.log(juicer(5, 6));



// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console


function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const azerbaijan = describeCountry("Azerbaijan", 10_000_000, "Baku");
const finland = describeCountry("Finland", 6_000_000, "Helsinki");
const germany = describeCountry("Germany", 84_000_000, "Berlin");

console.log(azerbaijan);
console.log(finland);
console.log(germany);


// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

function percentageOfWorld1(population) {
  return population * 100 / 7_900_000_000;
}

console.log(percentageOfWorld1(1_441_000_000));
console.log(percentageOfWorld1(10_000_000));
console.log(percentageOfWorld1(6_000_000));

const percentageOfWorld2 = function (population) {
  return population * 100 / 7_900_000_000;
}

console.log(percentageOfWorld2(1_441_000_000));
console.log(percentageOfWorld2(10_000_000));
console.log(percentageOfWorld2(6_000_000));

const percentageOfWorld3 = population => population * 100 / 7_900_000_000;

console.log(percentageOfWorld3(1_441_000_000));



// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} people which is about ${percentage}% of the world`;
}
console.log(describePopulation("Azerbaijan", 10_000_000));
console.log(describePopulation("Finland", 6_000_000));
console.log(describePopulation("China", 1_441_000_000));


// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

//const dolphins = [44, 23, 71];
//const dolphins = [85, 54, 41];
const dolphins = [85, 54, 41];


//const koalas = [65, 54, 49];
//const koalas = [23, 34, 27];
const koalas = [85, 54, 41];



const averageDolphins = calcAverage(dolphins);
const averageKoalas = calcAverage(koalas);

checkWinner(averageDolphins, averageKoalas);

function calcAverage(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return average / array.length;
}

function checkWinner(dolphins, koalas) {
  if (dolphins > koalas * 2) {
    console.log(`Dolphines win (${dolphins} vs. ${koalas})`);
  }
  else if (dolphins * 2 < koalas) {
    console.log(`Koalas win (${dolphins} vs. ${koalas})`);
  }
  else console.log("No Winner");
}

// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'

const neighbours = ["Russia", "Georgia", "Armenia", "Turkey", "Iran"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) console.log("You are in central Europe");
else console.log("You are not in central europe");

neighbours[neighbours.indexOf("Turkey")] = "Turkiye cumhuriyyeti";
console.log(neighbours);

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array);

const bills = [300, 100, 500];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);




function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) tip = bill * 15 / 100;
  else tip = bill * 20 / 100;
  return tip;
}

// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

const myCountry = {
  country: "Azerbaijan",
  capital: "Baku",
  language: "azerbaijani",
  population: 10_000_000,
  neighbours: ["Russia", "Georgia", "Armenia", "Turkey", "Iran"],

  divider: function () {
    this.halfPopulation = this.population / 2;
    return this.halfPopulation;
  }
}
console.log(myCountry["neighbours"]);

console.log(`${myCountry.country} is my country and its capital city is ${myCountry.capital}. People here talk ${myCountry.language} and there is ${myCountry.population} people over here. ${myCountry.country}'s biggest neighbour is ${myCountry.neighbours[0]}`);

console.log(myCountry.divider());

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.



const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}
if (mark.calcBMI() > john.calcBMI()) console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`);
else if (mark.calcBMI() < john.calcBMI()) console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`);
else console.log(`John's BMI (${john.calcBMI()}) is same as Mark's (${mark.calcBMI()})!`);


const countryArray = [
  "Azerbaijan",
  "Baku",
  "azerbaijani",
  10_000_000,
  ["Russia", "Georgia", "Armenia", "Turkey", "Iran"],
]

const typesOfArray = [];

for (let i = 0; i < countryArray.length; i++) {
  console.log(countryArray[i]);
  typesOfArray[i] = typeof countryArray[i];
}

for (let i = 0; i < typesOfArray.length; i++) {
  console.log(typesOfArray[i]);
}
/* didn't work must check again */
for (let i = 0; i < typesOfArray.length; i++) {
  if (typeof typesOfArray[i] !== 'string') continue;

  console.log(typesOfArray[i]);
}

for (let i = 0; i < typesOfArray.length; i++) {
  if (typesOfArray[i] === 'object') break;

  console.log(typesOfArray[i]);
}

console.log("------------------------------");

for (let i = countryArray.length - 1; i >= 0; i--) {
  console.log(countryArray[i]);
}


























