


// strat problem 1

// var num = prompt("Enter a number:");
// console.log(num);
// document.write(num)



// end problem 1





// start problem 2


// var num = parseInt(prompt("Enter a number:"));
// if (num % 3 === 0 && num % 4 === 0) {
//     console.log("Yes");
//     document.write("Yes")
// } else {
//     console.log("No");
//     document.write("No")
// }


// end problem 2




// start problem 3


// var a = parseInt(prompt("Enter first number:"));
// var b = parseInt(prompt("Enter second number:"));
// console.log( a > b ? a : b);
// document.write( a > b ? a : b);

// end problem 3




// start problem 4


// var num = parseInt(prompt("Enter a number:"));
// console.log(num < 0 ? "negative" : "positive");
// document.write(num < 0 ? "negative" : "positive");




// end problem 4



// start problem 5



// var a = parseInt(prompt("Enter first number:"));
// var b = parseInt(prompt("Enter second number:"));
// var c = parseInt(prompt("Enter third number:"));

// var max = a;
// if (b > max) max = b;
// if (c > max) max = c;

// var min = a;
// if (b < min) min = b;
// if (c < min) min = c;

// console.log("max element =", max);
// console.log("min element =", min);
// document.write("min element =", min);
// document.write("min element =", min);



// end problem 5





// start problem 6




// var num = parseInt(prompt("Enter a number:"));
// if (num % 2 === 0) {
//     console.log("even");
//     document.write("even");
// } else {
//     console.log("odd");
//     document.write("odd");
// }




// end problem 6




// start problem 8



// var ch = prompt("Enter a character:");
// var c = ch.toLowerCase();

// if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
//     console.log("vowel");
//     document.write("vowel");
// } else {
//     console.log("consonant");
//     document.write("consonant");
// }



// end problem 8



// start problem 9


// var num = parseInt(prompt("Enter a number:"));
// var i = 1;
// while (i <= num) {
//     console.log(i);
//    document.write(i);
//     i++;
// }


// end problem 9



// start problem 10


// var num = parseInt(prompt("Enter a number:"));
// var i = 1;
// while (i <= 12) {
//     console.log(num * i);
//     document.write(num * i);
//     i++;
// }

// end problem 10




// start problem 11

// var num = parseInt(prompt("Enter a number:"));
// var i = 1;
// while (i <= num) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
//     i++;
// }


// end problem 11



// start problem 12

// var base = parseInt(prompt("Enter base:"));
// var exponent = parseInt(prompt("Enter exponent:"));
// var result = 1;
// var i = 0;

// while (i < exponent) {
//     result = result * base;
//     i++;
// }
// console.log(result);
// document.write(result);


// end problem 12









// Start problem 12



// var total = 0;
// var i = 0;

// while (i < 5) {
//     var mark = parseInt(prompt("Enter mark " + (i + 1) + ":"));
//     total += mark;
//     i++;
// }
// var average = total / 5;
// var percentage = average;

// console.log("Total marks =", total);
// console.log("Average marks =", average);
// console.log("Percentage =", percentage);
// document.write


// end problem 12


// start problem 13

// var month = parseInt(prompt("Enter month number (1 to 12):"));

// if (month === 1 || month === 3 || month === 5 || month === 7 ||
//     month === 8 || month === 10 || month === 12) {
//     console.log("Days in Month: 31");
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log("Days in Month: 30");
//     document.write("Days in Month: 30");
// } else if (month === 2) {
//     console.log("Days in Month: 28 or 29");
//     document.write("Days in Month: 28 or 29");
    
// } else {
//     console.log("Invalid month number");
//     document.write("Invalid month number");
// }

// end problem 13




// start problem 14


// var total = 0;
// var i = 0;


//     var mark = parseInt(prompt("Enter marks for  Physics, :"));
//     total += mark;

//      mark = parseInt(prompt("Enter marks for  Chemistry :"));
//     total += mark;

//      mark = parseInt(prompt("Enter marks for  Biology :"));
//     total += mark;

//      mark = parseInt(prompt("Enter marks for  Mathematics :"));
//     total += mark;

//      mark = parseInt(prompt("Enter marks for  Computer :"));
//     total += mark;
    

// var percentage = total / 5;
// var grade = "";

// if (percentage >= 90) grade = "A";
// else if (percentage >= 80) grade = "B";
// else if (percentage >= 70) grade = "C";
// else if (percentage >= 60) grade = "D";
// else if (percentage >= 40) grade = "E";
// else grade = "F";

// console.log("Percentage =", percentage + "%");
// console.log("Grade:", grade);

// document.write("Percentage =", percentage + "%");
// document.write("Grade:", grade);

// end problem 14




// start problem 15

// var month = parseInt(prompt("Enter month number:"));
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Days in Month: 31");
//         document.write("Days in Month: 31");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Days in Month: 30");
//         document.write("Days in Month: 30");
//         break;
//     case 2:
//         console.log("Days in Month: 28 ");
//         document.write("Days in Month: 28 ");
//         break;
//     default:
//         console.log("Invalid month");
//         document.write("Invalid month");
// }


// end problem 15


//start problem 16


// var ch = prompt("Enter a character:");
// var c = ch.toLowerCase();
// switch (c) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log("vowel");
//         document.write("vowel");
//         break;
//     default:
//         console.log("consonant");
//         document.write("consonant");
// }



// end problem 16


// end problem 17

// var a = parseInt(prompt("Enter first number:"));
// var b = parseInt(prompt("Enter second number:"));
// switch (true) {
//     case (a > b):
//         console.log(a);
//         document.write(a);
//         break;
//     case (b > a):
//         console.log(b);
//         document.write(b);
//         break;
//     default:
//         console.log("Both numbers are equal");
//         document.write("Both numbers are equal");
// }

// end problem 17



// start problem 18


// var num = parseInt(prompt("Enter a number:"));
// switch (num % 2) {
//     case 0:
//         console.log("even");
//         document.write("even");
//         break;
//     default:
//         console.log("odd");
//         document.write("odd");
// }


// end problem 18



// start problem 19


// var num = parseInt(prompt("Enter a number:"));
// switch (true) {
//     case (num > 0):
//         console.log("positive");
//         document.write("positive");
//         break;
//     case (num < 0):
//         console.log("negative");
//         document.write("negative");
//         break;
//     default:
//         console.log("zero");
//         document.write("zero");
// }


// end problem 19




// start problem 20


// var a = parseFloat(prompt("Enter first number:"));
// var op = prompt("Enter operator (+, -, *, /):");
// var b = parseFloat(prompt("Enter second number:"));
// var result;

// switch (op) {
//     case '+':
//         result = a + b;
//         break;
//     case '-':
//         result = a - b;
//         break;
//     case '*':
//         result = a * b;
//         break;
//     case '/':
//         if (b !== 0) {
//             result = a / b;
//         } else {
//             result = "Cannot divide by zero";
//         }
//         break;
//     default:
//         result = "Invalid operator";
// }
// console.log("Result:", result);
// document.write("Result:", result);

// end problem 20






