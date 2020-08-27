/*Create a function which:
Takes an array of names
Looks to see if your name is in the array
If it is, return Found me!; if not, return Haven't found me :(*/

let names = [`Mary`, `James`, `Porky`, `Irina`];

let found = names.find(person => {
    if (person === names) {
        console.log(`Found me!`);
    }   console.log(`Haven't found me :-(*`);

});

