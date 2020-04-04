// Zad. 2
// Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.

// "use strict";

// class Palindromic {
//   constructor(word) {
//     this.word = word;
//   }

//   longest() {
//     let result = this.word.substr(0, 1);

//     for (let i = 0; i < this.word.length; i++) {
//       for (let j = i + 1; j <= this.word.length; j++) {
//         let substract = this.word.substr(i, j);

//         if (this.isPalindrom(substract) && substract.length > result.length) {
//           result = substract;
//         }
//       }
//     }

//     return result;
//   }

//   isPalindrom(e) {
//     return (
//       e.toLowerCase() ===
//       e
//         .toLowerCase()
//         .split("")
//         .reverse()
//         .join("")
//     );
//   }
// }

// const arr = ["karakis", "baerren", "kajak", "inni", "sedes"];

// arr.forEach(string => {
//   let myPalindromic = new Palindromic(string);
//   console.log(
//     "From word ---" + string,
//     "--- The longest palindromic is ---" + myPalindromic.longest()
//   );
// });

// Zad. 3
// Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’

// "use strict";

// class Substring {
//   constructor(string1, string2) {
//     this.string1 = string1;
//     this.string2 = string2;
//   }

//   common() {
//     let result = "";

//     for (let i = 0; i < this.string1.length; i++) {
//       for (let j = i + 1; j <= this.string1.length; j++) {
//         let substring = this.string1.substr(i, j);

//         if (
//           substring.length > result.length &&
//           this.string2.includes(substring)
//         ) {
//           result = substring;
//         }
//       }
//     }

//     return result;
//   }
// }

// const word1 = "karol";
// const word2 = "rolki";

// const mySubstring = new Substring(word1, word2);
// const resultFinal = mySubstring.common();

// console.log(
//   "Substring of words " + word1 + " & " + word2 + " is: " + resultFinal
// );

// Zad. 4

// ("use strict");
// let first1 = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// let second1 = [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ];

// class MatrixMultiplier {
//   constructor(first, second) {
//     this.first = first;
//     this.second = second;
//   }
//   multiply() {
//     if (this.first[0].length == this.second.length) {
//       let resultFinal = [];
//       let result = [];
//       let numberResult = 0;
//       let number;
//       for (let i = 0; i < this.first.length; i++) {
//         for (let j = 0; j < this.second[0].length; j++) {
//           for (let k = 0; k < this.second.length; k++) {
//             number = this.first[i][k] * this.second[k][j];
//             numberResult += number;
//           }
//           result.push(numberResult);
//           numberResult = 0;
//         }
//         resultFinal.push(result);
//         result = [];
//       }
//       console.log(resultFinal);
//     } else {
//       console.log("Wrong matric dimention");
//     }
//   }
// }

// const myMatrixMultiplier = new MatrixMultiplier(first1, second1);
// myMatrixMultiplier.multiply();
