// 1. Subject marks prompt()
let sub1 = parseFloat(prompt("Enter marks for Subject 1:"));
let sub2 = parseFloat(prompt("Enter marks for Subject 2:"));
let sub3 = parseFloat(prompt("Enter marks for Subject 3:"));
let sub4 = parseFloat(prompt("Enter marks for Subject 4:"));
let sub5 = parseFloat(prompt("Enter marks for Subject 5:"));

// 2. total marks
let total = sub1 + sub2 + sub3 + sub4 + sub5;

// 3. average marks
let average = total / 5;

// 4.Grade using if-else conditions
let grade;

if (average >= 90) {
    grade = "A+";
} else if (average >= 80) {
    grade = "A";
} else if (average >= 70) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 50) {
    grade = "D";
} else {
    grade = "F";
}
----*``

// 5. Displaying the result
alert("Total Marks: " + total);
alert("Average Marks: " + average.toFixed(2));
alert("Grade: " + grade);
