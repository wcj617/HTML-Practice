/*1. Print all numbers between -10 and 19
  2. print all even numbers between 10 and 40
  3. print all odd numbers between 300 and 333
  4. print all numbers divisible by 5 And 3 between 5 and 50
*/
console.log("Print all numbers between -10 and 19");
var number = -10;

while (number < 20) {
    console.log(number);
    number++;
}
console.log("print all even numbers between 10 and 40");
var evenNumber = 10;

// while (evenNumber <= 40) {
//     console.log(evenNumber);
//     evenNumber += 2;
// }

while (evenNumber <= 40) {
    if(evenNumber % 2 === 0) console.log(evenNumber);
    evenNumber ++;
}
console.log("print all even print all odd numbers between 300 and 333");
var oddNumber = 300;

while (oddNumber <= 333) {
    if ((oddNumber % 2) == 1){
        console.log(oddNumber);
    }
    oddNumber++;
}
console.log("print all numbers divisible by 5 And 3 between 5 and 50");
var divisible = 5;

while (divisible <= 50) {
    if (((divisible % 3) == 0 && (divisible % 5) == 0)) {
        console.log(divisible);
    }
    divisible++;
}