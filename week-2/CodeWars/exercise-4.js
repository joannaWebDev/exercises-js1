//Find the smallest integer in the array 
/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

//OPCION 1
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       let min = Infinity;
//       for (let i = 0; i < args.length; i++) {
//           if (args[i] < min) {
//               min = args[i];
//           }         
//       }
//       return min;
//     }
//   }

//   console.log(SmallestIntegerFinder);

//OPCION 2

class SmallestIntegerFinder {
    findSmallestInt(args) { 
        return args.sort((a, b) => a - b)[0];
    }
}


//OPCION 3
// class SmallestIntegerFinder {
//     findSmallestInt(args) { 
//         return Math.min(...args);
//     }
// }
