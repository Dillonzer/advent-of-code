import * as fs from "fs";
let finalCount = 0;
let input = fs.readFileSync("input.txt", "utf8").trim();
type Range = { start: number | undefined; end: number | undefined };

let ranges = parseRanges(input.split("\n\n")[0]!.split("\n"));
let ingredients = input.split("\n\n")[1]!.split("\n");

//let validRanges: number[] = [];
// for (let i = 0; i < ingredients.length; i++) {
//   finalCount += checkIngredient(parseInt(ingredients[i]!));
// }

checkRanges();

// console.log(finalCount);

//Part 1
// function checkIngredient(ingredient: number): number {
//   for (let v of ranges) {
//     let min = parseInt(v.split("-")[0]!);
//     let max = parseInt(v.split("-")[1]!);

//     if (ingredient <= max && ingredient >= min) {
//       return 1;
//     }
//   }
//   return 0;
// }

//Part 2

function parseRanges(ranges: string[]): Range[] {
  return ranges.map((range) => {
    let [start, end] = range.split("-").map(Number);
    return { start, end };
  });
}

function checkRanges() {
  let count = 0;
  ranges.sort((a, b) => a.start! - b.start!);

  let combinedRanges: Range[] = [];

  for (let range of ranges) {
    if (combinedRanges.length === 0) {
      combinedRanges.push(range);
      continue;
    }

    if (combinedRanges[combinedRanges.length - 1]!.end! >= range.start!) {
      combinedRanges[combinedRanges.length - 1]!.end = Math.max(
        combinedRanges[combinedRanges.length - 1]!.end!,
        range.end!
      );
    } else {
      combinedRanges.push(range);
    }
  }

  for (let i = 0; i < combinedRanges.length; i++) {
    count += combinedRanges[i]!.end! - combinedRanges[i]!.start! + 1;
  }

  console.log(count);
}
