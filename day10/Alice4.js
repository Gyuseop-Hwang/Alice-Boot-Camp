const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input;
let max = 1;
let maxNumber = 1;
rl.on("line", function (line) {
  input = line.trim();
  rl.close();
}).on("close", function () {
  for (let i = 2; i <= Number(input); i++) {
    let count = 0;
    const sqrtMid = Math.floor(Math.sqrt(i))
    for (let j = 1; j <= sqrtMid; j++) {
      if (i % j === 0) {
        if (j !== sqrtMid) {
          count += 2;
        } else {
          count += 1;
        }
      }
    }
    if (count >= max) {
      max = count;
      maxNumber = i;
    }
  }
  console.log(maxNumber);
  process.exit();
});
