/*1. Print all numbers between -10 and 19
  2. print all even numbers between 10 and 40
  3. print all odd numbers between 300 and 333
  4. print all numbers divisible by 5 And 3 between 5 and 50
*/
console.log("Print all numbers between -10 and 19");

for (var i = -10; i <= 19;  i++) {
    console.log(i);
}
console.log("print all even numbers between 10 and 40");

// for (var even = 10; even <= 40; even+=2){
//     console.log(i);
// }

for (var even = 10; i <= 40; i += 1) {
    if (i % 2 === 0) {
       console.log(i); 
    }
}
console.log("print all odd numbers between 300 and 333");
for (var odd = 300; odd <= 333; odd++ ) {
    if (odd % 2 != 0) console.log(odd);
}

console.log("print all numbers divisible by 5 And 3 between 5 and 50");

for (all = 5; all <= 50; all++) {
    if (((all % 3) === 0 && (all % 5) === 0)) {
        console.log(all);
    }
}