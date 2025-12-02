import * as fs from "fs";

const max = 100;
let lock: number = 50;
let numberOfZeroes: number = 0;
let input = fs.readFileSync("input.txt", "utf8");
const lines = input.split("\n");
lines.forEach((move: string) => {
  lock = moveLock(move);
});
console.log(numberOfZeroes);

function moveLock(move: string): number {
  let direction: string = move.charAt(0);
  let amount: number = parseInt(move.slice(1), 10);
  while (amount >= max) {
    numberOfZeroes++;
    amount -= max;
  }

  let newPosition = lock;

  switch (direction) {
    case "L": {
      newPosition = lock - amount;
      if (newPosition < 0 && lock > 0) {
        numberOfZeroes++;
      }

      if (newPosition < 0) {
        newPosition += max;
      } else {
        newPosition %= max;
      }
      break;
    }
    case "R": {
      newPosition = lock + amount;
      if (newPosition >= max) {
        if (newPosition != max) {
          numberOfZeroes++;
        }
        newPosition %= max;
      }
      break;
    }
  }

  if (newPosition === 0) {
    numberOfZeroes++;
  }

  console.log(numberOfZeroes, move, newPosition);

  return newPosition < 0 ? newPosition * -1 : newPosition;
}
