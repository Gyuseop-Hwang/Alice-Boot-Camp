const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) return null;
    const current = this.first;
    this.first = this.first.next;
    if (this.length === 1) {
      this.last = null;
    }
    this.length--;
    return current.value;
  }
}


const input = [];
let answer = '';
rl.on('line', function (line) {
  if (line) {
    input.push(line.trim())
  } else rl.close();
}).on('close', function () {
  const queue = new Queue();
  const n = input.shift();
  const arr = input[0].trim().split(' ');
  for (let i = 1; i <= Number(n); i++) {
    queue.enqueue(i)
  }

  for (let x of arr) {
    answer += queue.dequeue() + ' ';
    for (let i = 0; i < Number(x); i++) {
      queue.enqueue(queue.dequeue())
    }
  }
  answer += queue.dequeue() + '';
  console.log(answer)
  process.exit();
});
