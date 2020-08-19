/*Write a function which takes your students array as an input. In the function, use a for loop to iterate over the array and print the name of each student to the console./
/*> const daysOfWeek = [
...   "Monday",
...   "Tuesday",
...   "Wednesday",
...   "Thursday",
...   "Friday",
...   "Saturday",
...   "Sunday",
... ];
undefined
> for (let i = 0; i < daysOfWeek.length; i++) {
...   const dayMessage = "day is: " + daysOfWeek[i];
...   const indexMessage = "index is: " + i;
...   console.log(indexMessage, dayMessage);
... }
index is: 0 day is: Monday
index is: 1 day is: Tuesday
index is: 2 day is: Wednesday
index is: 3 day is: Thursday
index is: 4 day is: Friday
index is: 5 day is: Saturday
index is: 6 day is: Sunday
undefined
>*/

const students = [
    "George",
    "Navid",
    "Daniela",
    "Toni",
    "Alicia",
];

for (let i = 0; i < students.length; i++) {
    const studentsMessage = `The name is: ${students[i]} `;
    console.log(studentsMessage);
}