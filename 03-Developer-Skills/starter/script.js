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
