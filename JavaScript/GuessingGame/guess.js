var age = prompt("what is your age ?");
if (age < 0) {alert("print an error message");}
else if (age == 21) {alert("Happy 21st birthday!!");}
else if ((age%2) == 1) {alert("Your age is odd!");}
else if (age % Math.sqrt(age) == 0){ alert("Perfect square");}
else{alert("good")}