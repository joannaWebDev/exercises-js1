/*Create the file exercise-G.js script in the folder week-1/InClass
Using the variables provided in the exercise calculate the percentage of mentors and students in the group (percentages must be a rounded to the nearest integer)
Using online documentation, what other things can you do with the Math library? Pick one thing on your table that you can do other than Math.round and prepare an explanation for the rest of the class*/
const numberOfStudents = 15;
const numberOfMentors = 8;
const percentToGet = 100 ;

const percentageStudents = (percentToGet / 100) * numberOfStudents;
const roughPercStudents =Math.round(percentageStudents);
const percentageMentors = (percentToGet / 100) * numberOfMentors;
const roughPercMentors =Math.round(percentageMentors);

console.log("The percentage of students is: " + roughPercStudents + "%");
console.log("The percentage of mentors is: " + roughPercMentors + "%");
//test2