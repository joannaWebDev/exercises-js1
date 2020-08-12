const numberOfStudents = 15;
const numberOfMentors = 8;

const percentageStudents = numberOfStudents % numberOfMentors;
const roughPercStudents =Math.round(percentageStudents);
const percentageMentors = numberOfMentors / 100;
const roughPercMentors =Math.round(percentageMentors);

console.log("The percentage of students is: " + roughPercStudents);
console.log("The percentage of mentors is: " + roughPercMentors);
//test