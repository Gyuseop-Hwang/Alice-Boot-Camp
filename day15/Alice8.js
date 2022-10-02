const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})



function solution(n, m) {

  const check = Array.from({ length: n + 1 }, () => 0)
  const temp = [];
  function DFS(L) {
    if (L === m) {
      console.log(temp.slice().join(" "))
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = i;
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }


  DFS(0)
  // return answer;
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trim())
  rl.close();

}).on('close', function () {
  const arr = input[0].split(" ").map(Number);
  solution(arr[0], arr[1])
})