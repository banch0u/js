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



















