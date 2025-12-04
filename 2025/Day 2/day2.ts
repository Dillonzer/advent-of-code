import * as fs from "fs";
let finalCount = 0;
let input = fs.readFileSync("input.txt", "utf8").trim();
const lines = input.split(",");

const splitInput = lines.map((line) => {
  return line.split("-");
});

splitInput.forEach((i) => {
  finalCount += calculateIds(parseInt(i[0]!), parseInt(i[1]!));
});

console.log(finalCount);

// Part 1
// function calculateIds(start: number, end: number): number {
//   let count = 0;
//   for (let i = start; i < end; i++) {
//     if (i.toString().length % 2 !== 0) {
//       continue;
//     }
//     const mid = i.toString().length / 2;

//     const firstHalf = i.toString().substring(0, mid);
//     const secondHalf = i.toString().substring(mid);

//     if (firstHalf === secondHalf) {
//       count += i;
//     }
//   }

//   return count;
// }

// Part 2
function calculateIds(start: number, end: number): number {
  let count = 0;
  for (let i = start; i < end; i++) {
    const regex = /^(.+)\1+$/;

    if (regex.test(i.toString())) {
      count += i;
    }
  }

  return count;
}
