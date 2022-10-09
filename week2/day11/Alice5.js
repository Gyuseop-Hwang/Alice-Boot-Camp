const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let answer = 0;
rl.on('line', function (line) {
  input = line.trim();
  rl.close();
}).on('close', function () {
  const strObj = {};
  for (let i = 0; i < input.length; i++) {
    strObj[input[i]] = (strObj[input[i]] || 0) + 1;
  }
  const strArr = Object.values(strObj).sort((a, b) => b - a);
  if (strArr.length === 1) {
    console.log(answer);
  } else {
    while (strArr.length !== 2) {
      answer += strArr.pop();
    }
    console.log(answer);
  }
  process.exit();
});