// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const arr = [10, 2, 3, 4, 34, 23, 4, 2];

const mk = "salan";
// console.log(mk.split(""));
// console.log(arr.toString());
console.log(reverse());

function reverse(reverseItem) {
  if (typeof reverseItem == 'object') {
    return reverseItem.reverse();
  }
  if (typeof reverseItem == "string") {
    let stringArr = reverseItem.split("");
    let rev = stringArr.reverse();
    let str = "";
    for (let i = 0; i < rev.length; i++) {
      str += rev[i];
    }
    return str;
  }
  if (typeof reverseItem == "number") {
    let num = String(reverseItem);
    let stringArr = num.split("");
    let rev = stringArr.reverse();
    let str = "";
    for (let i = 0; i < rev.length; i++) {
      str += rev[i];
    }
    return Number(str);
  }
  if (typeof reverseItem == "boolean") {
    if (reverseItem == true) return false;
    else return true
  }
}



// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

const temp = [12, 5, -5, 0, 4];
printForecast(temp);

function printForecast(temp) {
  for (let i = 0; i < temp.length; i++) {
    console.log(`${temp[i]}ºC in ${i + 1} days`);
  }
}








