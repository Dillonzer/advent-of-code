import * as fs from "fs";
let finalCount = 0;
let input = fs.readFileSync("input.txt", "utf8").trim();

const lines = input.split("\n");
lines.forEach((bank: string) => {
  finalCount += getPower(bank);
});
console.log(finalCount);

// Part 1
// function getPower(bank: string): number {
//   let num1 = 0;
//   let indexNumber1 = 0;
//   let num2 = 0;
//   let timesGoThrough = 2;
//   let count = 1;

//   for (let i = 0; i < timesGoThrough; i++) {
//     [...bank].forEach((c, j) => {
//       if (i === 0) {
//         if (parseInt(c) > num1) {
//           if (j !== bank.length - 1) {
//             num1 = parseInt(c);
//             indexNumber1 = j;
//           }
//         }
//       } else {
//         if (parseInt(c) > num2 && j > indexNumber1) {
//           num2 = parseInt(c);
//         }
//       }
//     });
//   }

//   return num1 * 10 + num2;
// }

//Part 2
function getPower(bank: string): number {
  let num: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let supplementaryIndex = 0;
  let timesGoThrough = 12;

  for (let i = 0; i < timesGoThrough; i++) {
    [...bank].forEach((c, j) => {
      if (i === 0) {
        if (parseInt(c) > num[0]!) {
          if (bank.length - j > 11) {
            num[0] = parseInt(c);
            supplementaryIndex = j;
          }
        }
      } else {
        if (
          parseInt(c) > num[i]! &&
          j > supplementaryIndex &&
          bank.length - j > 11 - i
        ) {
          num[i] = parseInt(c);
          supplementaryIndex = j;
        }
      }
    });
  }

  return parseInt(num.join(""));
}
