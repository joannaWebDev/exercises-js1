/*Using the variables provided in the exercise calculate the percentage of mentors and students in the group (percentages must be a rounded to the nearest integer)
Using online documentation, what other things can you do with the Math library? Pick one thing on your table that you can do other than Math.round and prepare an explanation for the rest of the class*/

const numberOfStudents = 15;
const numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;

const percentageStudents = (numberOfStudents * 100) / total;
//math.round returns the value of x rounded to its nearest integer:
//const roughPercStudents =Math.round(percentageStudents);
// math.ceil returns the value of x rounded up to its nearest integer:
const roughPercStudents =Math.ceil(percentageStudents);

const percentageMentors = (numberOfMentors * 100) / total;
//const roughPercMentors =Math.round(percentageMentors);
//math.floor  returns the value of x rounded down to its nearest integer:
const roughPercMentors =Math.floor(percentageMentors);

console.log("The percentage of students is: " + roughPercStudents + "%");
console.log("The percentage of mentors is: " + roughPercMentors + "%");


