const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})


const input = [];

rl.on('line', function (line) {
  if (line) input.push(line.trim());
  else rl.close();
}).on('close', function () {

  const n = input.shift();
  const a = input[0].trim().split(" ")
  const aSet = new Set(a)
  const b = [...aSet].sort((a, b) => a - b)
  console.log(a.map((x, i, B) => {
    return b.indexOf(x) + 1
  }).join(" "))
  process.exit();
})