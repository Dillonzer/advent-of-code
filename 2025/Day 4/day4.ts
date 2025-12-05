import * as fs from "fs";
let finalCount = 0;
let input = fs.readFileSync("input.txt", "utf8").trim();

let data: string[][] = [];
let removedRoll = false;

input.split("\n").forEach((v, i) => {
  data[i] = [];
  v.split("").forEach((v2, i2) => {
    data[i]![i2] = v2;
  });
});

let minIndex = 0;
let maxRowIndex = data.length;
let maxColIndex = data[0]!.length;

countRolls();

function countRolls() {
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[0]!.length; col++) {
      if (data[row]![col] !== ".") {
        if (checkAdjacentSlots(row, col)) {
          finalCount++;
          data[row]![col] = ".";
          row = 0;
          col = 0;
        }
      }
    }
  }
  console.log(finalCount);
}

// [row-1, col-1][row-1,col][row-1,col+1]
// [row, col-1][CURRENT][row,col+1]
// [row+1, col-1][row+1,col][row+1,col+1]

function checkAdjacentSlots(row: number, col: number): boolean {
  let count = 0;

  if (row - 1 >= minIndex) {
    if (data[row - 1]![col] === "@") {
      count++;
    }
    if (col - 1 >= minIndex) {
      if (data[row - 1]![col - 1] === "@") {
        count++;
      }
    }
    if (col + 1 < maxColIndex) {
      if (data[row - 1]![col + 1] === "@") {
        count++;
      }
    }
  }
  if (col - 1 >= minIndex) {
    if (data[row]![col - 1] === "@") {
      count++;
    }
  }
  if (col + 1 < maxColIndex) {
    if (data[row]![col + 1] === "@") {
      count++;
    }
  }
  if (row + 1 < maxRowIndex) {
    if (data[row + 1]![col] === "@") {
      count++;
    }
    if (col - 1 >= minIndex) {
      if (data[row + 1]![col - 1] === "@") {
        count++;
      }
    }
    if (col + 1 < maxColIndex) {
      if (data[row + 1]![col + 1] === "@") {
        count++;
      }
    }
  }

  return count < 4 ? true : false;
}
